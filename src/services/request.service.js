const request = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return { success: true, data: json };
  } catch (e) {
    return { success: false, error: e.message };
  }
};

export { request };
