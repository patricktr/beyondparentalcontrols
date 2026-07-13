// Privacy-first analytics for the PARENT site only (the kid site loads nothing).
//
// What we collect: anonymous $pageview + $pageleave events (the pair lets us measure
// time-on-page) with browser + coarse geo. That's it.
// What we deliberately DON'T do:
//   - persistence: 'memory'  -> no cookies, no localStorage (cookieless). Trade-off:
//     no cross-visit id, so unique-visitor counts run a little high.
//   - autocapture: false     -> never captures clicks or form inputs, so the kid's
//     name typed into the configurator is never touched.
//   - person_profiles:'never'-> events only; no person profiles are ever created.
//   - before_send strips the URL query string from $current_url/$referrer, so the
//     name/choices in /plan.html?child=... are NEVER transmitted — only the path.
//   - session recording + surveys off; respects Do-Not-Track.
// IP: PostHog needs the IP momentarily at ingestion to derive geo, then discards it
// IF "Discard client IP data" is enabled in project settings (a manual toggle —
// see the project's Settings → Product analytics). We never send an $ip ourselves.
!(function (t, e) {
  var o, n, p, r;
  e.__SV || ((window.posthog = e), (e._i = []), (e.init = function (i, s, a) {
    function g(t, e) { var o = e.split("."); 2 == o.length && ((t = t[o[0]]), (e = o[1])), (t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }); }
    (p = t.createElement("script")).type = "text/javascript", p.crossOrigin = "anonymous", p.async = !0, p.src = s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js", (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
    var u = e;
    for (void 0 !== a ? (u = e[a] = []) : (a = "posthog"), u.people = u.people || [], u.toString = function (t) { var e = "posthog"; return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e; }, u.people.toString = function () { return u.toString(1) + ".people (stub)"; }, o = "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "), n = 0; n < o.length; n++) g(u, o[n]);
    e._i.push([i, s, a]);
  }), (e.__SV = 1));
})(document, window.posthog || []);

posthog.init("phc_rkicGKj4tXJhH29d3FtCe2nu7CkRhcWfXGaLLMc6y77o", {
  api_host: "https://us.i.posthog.com",
  ui_host: "https://us.posthog.com",
  persistence: "memory",
  autocapture: false,
  capture_pageview: true,
  capture_pageleave: true, // paired with $pageview to measure time-on-page; same before_send scrubbing applies
  disable_session_recording: true,
  disable_surveys: true,
  person_profiles: "never",
  respect_dnt: true,
  before_send: function (event) {
    if (!event) return event;
    var props = event.properties || {};
    var stripQuery = function (u) {
      if (typeof u !== "string") return u;
      try { var x = new URL(u); return x.origin + x.pathname; } catch (e) { return u.split("?")[0]; }
    };
    // Strip the query string (child name + all choices) from EVERY url/referrer property —
    // PostHog attaches several ($current_url, $session_entry_url, $referrer, ...), not just one.
    Object.keys(props).forEach(function (k) {
      if (/url|referrer/i.test(k) && typeof props[k] === "string") props[k] = stripQuery(props[k]);
    });
    // The <title> on /plan.html is "<kid name>'s plan …" — drop it so the name can't ride along.
    delete props.title;
    // Belt-and-suspenders: never emit a client-set IP.
    delete props.$ip;
    return event;
  },
});
