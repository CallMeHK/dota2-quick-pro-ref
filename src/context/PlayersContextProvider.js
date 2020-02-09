import * as React from "react";

const PlayersContext = React.createContext({});

const PlayersContextProvider = ({ children }) => {
  const [players, setPlayers] = React.useState([]);

  const addPlayer = React.useCallback(newPlayer => {
    setPlayers([...players, newPlayer]);
  },
  [players, setPlayers]);
  return (
    <PlayersContext.Provider value={{ players, setPlayers, addPlayer }}>
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersContext };

export default PlayersContextProvider;
