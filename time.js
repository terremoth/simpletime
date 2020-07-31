const Time = {};

Time.s1 = 1000;
Time.i1 = Time.s1 * 60;
Time.i5 = Time.i1 * 5;
Time.h1 = Time.i1 * 60;
Time.d1 = Time.h1 * 24;
Time.w1 = Time.d1 * 7;
Time.m1 = Time.d1 * 30;
Time.m6 = Time.m1 * 6;
Time.y1 = Time.d1 * 365;

Time.microtime = function() {
   var s, now = (Date.now ? Date.now() : new Date().getTime()) / 1000;
    s = now | 0;
    return (Math.round((now - s) * 1000) / 1000) + ' ' + s;
};

Time.dateDiffInDays = function(firstDateObj, lastDateObj) {
  var msPerDay = Time.d1;
  var firstUtcDate = Date.UTC(firstDateObj.getFullYear(), firstDateObj.getMonth(), firstDateObj.getDate());
  var lastUtcDate  = Date.UTC(lastDateObj.getFullYear(),  lastDateObj.getMonth(),   lastDateObj.getDate());

  return Math.floor((lastUtcDate - firstUtcDate) / msPerDay);
};
