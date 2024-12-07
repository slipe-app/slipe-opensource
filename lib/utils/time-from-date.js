export default function TimePassedFromDate(time) {
    const units = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "week", seconds: 604800 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
    ];
  
    const elapsedSeconds = Math.floor((Date.now() - new Date(time)) / 1000);
  
    for (const { label, seconds } of units) {
        const value = Math.floor(elapsedSeconds / seconds);
        if (value > 0) {
            return `${value} ${label}${value > 1 ? "s" : ""} ago`;
        }
    }
    return "Just now";
  }