import { useState, useEffect, useCallback } from "react";
import * as LocalStorageService from "../services/local-storage.service";
import * as DotaService from "../services/dota-api.service";

const usePlayersOrCache = () => {
  const [topPlayers, setTopPlayers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localValue = LocalStorageService.get("topPlayersCache");
    if (localValue.success) {
      setTopPlayers(localValue.data);
      setIsLoading(false);
      return;
    }

    getTopPlayers();
  }, []);

  const getTopPlayers = useCallback(async () => {
    const dotaApiResponse = await DotaService.getAllProPlayers();
    if (!dotaApiResponse.success) {
      console.error(dotaApiResponse.error);
      setIsLoading(false);
      return;
    }

    const topPlayerResponse = dotaApiResponse.data;
    const filteredPlayers = topPlayerResponse.map(elt => ({
      id: elt.account_id,
      name: elt.name,
      personaName: elt.personaname
    }));

    setTopPlayers(filteredPlayers);
    LocalStorageService.set("topPlayersCache", filteredPlayers);
    setIsLoading(false);
  }, [setTopPlayers, setIsLoading]);

  return [isLoading, topPlayers];
};

export default usePlayersOrCache;
