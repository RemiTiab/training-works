export const launchTarteaucitron = (_) => {
  tarteaucitron.init({
    privacyUrl: '/cookiespolicy' /* Privacy policy url */,

    hashtag: '#tarteaucitron' /* Open the panel with this hashtag */,
    cookieName: 'tarteaucitron' /* Cookie name */,

    orientation: 'middle' /* Banner position (top - bottom) */,
    showAlertSmall: true /* Show the small banner on bottom right */,
    cookieslist: true /* Show the cookie list */,

    adblocker: false /* Show a Warning if an adblocker is detected */,
    AcceptAllCta: true /* Show the accept all button when highPrivacy on */,
    highPrivacy: true /* Disable auto consent */,
    handleBrowserDNTRequest: false /* If Do Not Track == 1, disallow all */,

    removeCredit: false /* Remove credit link */,
    moreInfoLink: true /* Show more info link */,
    useExternalCss: false /* If false, the tarteaucitron.css file will be loaded */,

    //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */

    readmoreLink: '/cookiespolicy' /* Change the default readmore link */,
  });

  tarteaucitron.user.gajsUa = 'UA-XXXXXXXX-X';
  tarteaucitron.user.gajsMore = function () {
    /* add here your optionnal _ga.push() */
  };
  (tarteaucitron.job = tarteaucitron.job || []).push('gajs');

  var buttonAccept = document.querySelector('.cookies');

  if (localStorage.getItem('cookies')) {
    buttonAccept.style.display = 'none';
  } else {
    buttonAccept.addEventListener('click', function () {
      localStorage.setItem('cookies', 'accepted');
      buttonAccept.style.display = 'none';
    });
  }
};
