/* Version=4.10.0,Timestamp=2025-05-28T14:04:17.316Z */

!function(){function e(){document.querySelectorAll(".container-spotlight").forEach(((e,t)=>{const n=e.dataset.fromTime,o=e.dataset.endTime,a=(new Date).valueOf(),d=a>=n&&a<=o;e.style.display=d?"block":"none"}))}"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();