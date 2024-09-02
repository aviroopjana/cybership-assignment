export const fetchSummaryData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/summary");
    if (!response.ok) {
      throw new Error("Failed to fetch summary data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching summary data:", error);
    throw error;
  }
};
