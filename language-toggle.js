/**
 * Language Toggle Script for Neosantara
 *
 * Enables smart navigation when switching between English and Indonesian docs.
 * Redirects to the equivalent page in the target language instead of the default landing page.
 */

(function () {
  "use strict";

  const EN_PREFIX = "/en";
  const ID_PREFIX = "/id";

  let previousUrl = null;

  function getLanguage(path) {
    if (path.startsWith("/en/") || path === "/en") return "en";
    if (path.startsWith("/id/") || path === "/id") return "id";
    return null;
  }

  function getEquivalentPath(sourcePath, targetLang) {
    const sourceLang = getLanguage(sourcePath);
    if (!sourceLang || sourceLang === targetLang) return null;

    const sourcePrefix = sourceLang === "en" ? EN_PREFIX : ID_PREFIX;
    const targetPrefix = targetLang === "en" ? EN_PREFIX : ID_PREFIX;

    // Strip the prefix and prepend the new one
    let relativePath = sourcePath.substring(sourcePrefix.length);
    
    // Handle cases where we switch from /en/page to /id (home)
    if (relativePath === "" || relativePath === "/") {
        return null; // Already at home
    }

    return targetPrefix + relativePath;
  }

  function updateTracker() {
    const lang = getLanguage(location.pathname);
    if (lang) {
      previousUrl = location.pathname + location.hash;
    }
  }

  function performSmartRedirect() {
    const currentPath = location.pathname;
    const currentLang = getLanguage(currentPath);
    
    if (!currentLang || !previousUrl) {
      updateTracker();
      return;
    }

    const [prevPath, prevHash = ""] = previousUrl.split("#");
    const prevLang = getLanguage(prevPath);

    // If language has changed AND we are currently at the landing page of the new language
    // but we came from a specific sub-page in another language.
    if (prevLang && currentLang && prevLang !== currentLang) {
      if (currentPath === EN_PREFIX || currentPath === EN_PREFIX + "/" || 
          currentPath === ID_PREFIX || currentPath === ID_PREFIX + "/") {
        
        const equivalentPath = getEquivalentPath(prevPath, currentLang);
        if (equivalentPath && equivalentPath !== currentPath) {
          const target = equivalentPath + (prevHash ? "#" + prevHash : "");
          previousUrl = null;
          location.replace(target);
          return;
        }
      }
    }

    updateTracker();
  }

  // Listen for clicks on anything that looks like a language switcher
  document.addEventListener("click", function (e) {
    const isLanguageButton = e.target.closest("button") || e.target.closest("a");
    if (isLanguageButton) {
      updateTracker();
    }
  }, true);

  // Monitor URL changes
  let lastPath = location.pathname;
  function checkChange() {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      performSmartRedirect();
    }
  }

  window.addEventListener("popstate", checkChange);
  
  // Intercept history changes
  const originalPushState = history.pushState;
  history.pushState = function () {
    originalPushState.apply(this, arguments);
    checkChange();
  };

  // Initial check
  performSmartRedirect();
})();