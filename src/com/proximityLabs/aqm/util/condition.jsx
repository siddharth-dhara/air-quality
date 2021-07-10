const getCondition = (aqi) => {
  let classObj = {
      color: null,
      level: null,
      healthImplication: null,
      precaution: null
  };
  if (aqi >= 0 && aqi <= 50) {
      return {
        color: "#009966",
        level: "Good",
        healthImplication: "Air quality is considered satisfactory, and air pollution poses little or no risk",
        precaution: "Avoid pollution & maintain this air quality."
      }
  } else if (aqi > 50 && aqi < 100) {
      return {
        color: "#FFDE33",
        level: "Satisfactory",
        healthImplication: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
        precaution: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
      }
  } else if (aqi > 100 && aqi <= 200) {
      return {
        color: "#FF9933",
        level: "Moderate",
        healthImplication: "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
        precaution: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
      }
  }
  else if (aqi > 150 && aqi <= 200) {
      return {
        color: "#CC0033",
        level: "Poor/Unhealthy",
        healthImplication: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects",
        precaution: "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion"
      }
  } else if (aqi > 200 && aqi <= 300) {
      return {
        color: "#660099",
        level: "Very Unhealthy",
        healthImplication: "Health warnings of emergency conditions. The entire population is more likely to be affected.",
        precaution: "Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion."
      }
  } else if (aqi > 300) {
      return {
        color: "#7E0023",
        level: "Sever & Hazardous",
        healthImplication: "Health alert: everyone may experience more serious health effects",
        precaution: "Everyone should avoid all outdoor exertion"
      }
  }
  return classObj;
};

export {
  getCondition,
};
