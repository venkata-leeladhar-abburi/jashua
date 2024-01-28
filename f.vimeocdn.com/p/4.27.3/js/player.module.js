/* VimeoPlayer - v4.27.3 - 2024-01-24 - https://player.vimeo.com/NOTICE.txt */
import {
    _ as e,
    d as t,
    a as n,
    i,
    s as o,
    C as r,
    c as a,
    b as s,
    e as l,
    L as c,
    g as d,
    f as u,
    x as p,
    r as _,
    m as v,
    p as m,
    P as f,
    V as h,
    T as g,
    h as b,
    j as y,
    k as E,
    l as C,
    n as T,
    o as w,
    q as L,
    F as S,
    t as A,
    Q as k,
    S as P,
    u as I,
    v as O,
    H as R,
    E as N,
    w as M,
    M as D,
    y as x,
    B,
    z as V,
    A as U,
    D as F,
    G as H,
    I as q,
    J as W,
    K as $,
    N as Y,
    O as G,
    R as z,
    U as j,
    W as K,
    X,
    Y as Z,
    Z as J,
    $ as Q,
    a0 as ee,
    a1 as te,
    a2 as ne,
    a3 as ie,
    a4 as oe,
    a5 as re,
    a6 as ae,
    a7 as se,
    a8 as le,
    a9 as ce,
    aa as de,
    ab as ue,
    ac as pe,
    ad as _e,
    ae as ve,
    af as me,
    ag as fe,
    ah as he,
    ai as ge,
    aj as be,
    ak as ye,
    al as Ee,
    am as Ce,
    an as Te,
    ao as we,
    ap as Le,
    aq as Se,
    ar as Ae,
    as as ke,
    at as Pe,
    au as Ie,
    av as Oe,
    aw as Re,
    ax as Ne,
    ay as Me,
    az as De,
    aA as xe,
    aB as Be,
    aC as Ve,
    aD as Ue,
    aE as Fe,
    aF as He,
    aG as qe,
    aH as We,
    aI as $e,
    aJ as Ye,
    aK as Ge,
    aL as ze,
    aM as je,
    aN as Ke,
    aO as Xe,
    aP as Ze
} from "./vendor.module.js";
export {
    a0 as BigScreen, aP as requestModule
}
from "./vendor.module.js";
"classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
    get: function() {
        var e = this;
        return {
            contains: function(t) {
                return -1 !== e.className.baseVal.split(" ").indexOf(t)
            },
            add: function(t) {
                var n = (e.getAttribute("class") + " " + t).trim();
                return e.setAttribute("class", n)
            },
            remove: function(t) {
                var n = e.getAttribute("class") || "",
                    i = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
                n = n.replace(i, "").trim(), e.setAttribute("class", n)
            },
            toggle: function(e) {
                this.contains(e) ? this.remove(e) : this.add(e)
            }
        }
    }
});
let Je = {};

function Qe(e = "", t = {}) {
    var n;
    if ((null == (n = Je.en) ? void 0 : n[e]) && (e = Je.en[e]), Object.keys(t).forEach(n => {
            e = e.replace(new RegExp(`{${n}}`, "g"), t[n])
        }), e.match(/\{\w+}/)) throw new Error("Missing token definition.");
    return e
}

function et(e) {
    return e = parseFloat(e), isNaN(e) || e < 0 ? "0" : e < 1e3 ? e.toString() : e >= 1e3 && e < 1e6 ? Math.floor(e / 1e3) + "." + Math.round(e % 1e3 / 100) + "K" : Math.floor(e / 1e6) + "." + Math.round(e % 1e6 / 1e5) + "M"
}

function tt(e) {
    return !isNaN(e) && parseInt(Number(e), 10) == e && !isNaN(parseInt(e, 10))
}
const nt = function(t, ...n) {
        const i = n => n.length >= t.length ? t.apply(this, n) : (...t) => i([].concat(e(n), t));
        return i([])
    }((e, t) => Object.keys(e).every(n => e[n] === t[n])),
    it = (e = []) => ({
        get: t => t ? e.find(nt(t)) : e,
        insert: t => (e = e.concat(t)).slice(-1).pop(),
        getOrInsert(e) {
            return this.get(e) || this.insert(e)
        },
        remove: t => e.splice(e.findIndex(nt(t)), 1).pop()
    });

function ot(e, t, n = document.styleSheets[0]) {
    try {
        n.insertRule ? n.insertRule(e + "{" + t + "}", (n.cssRules || n.rules).length) : n.addRule(e, t)
    } catch (ke) {}
}

function rt(e = document.activeElement, t = null) {
    try {
        e.blur()
    } catch (ke) {
        t && t(ke)
    }
}

function at(e = document.activeElement, t = null) {
    try {
        e.focus()
    } catch (ke) {
        t && t(ke)
    }
}

function st(e) {
    let t = e.getBoundingClientRect();
    return document.msFullscreenElement && window.parent !== window && e.offsetWidth < e.clientWidth && (t = {
        bottom: 100 * t.bottom,
        left: 100 * t.left,
        top: 100 * t.top,
        right: 100 * t.right,
        width: 100 * t.width,
        height: 100 * t.height
    }), t
}

function lt(e) {
    try {
        return new URL(e).origin
    } catch (ke) {}
    const t = document.createElement("a");
    return t.href = e, t.origin ? t.origin : `${t.protocol.replace(":","")}://${t.host}`
}

function ct({
    width: e,
    height: t,
    elementWidth: n,
    elementHeight: i,
    threshold: o = 10
}) {
    let r = 1;
    const a = e / t,
        s = n - i * a,
        l = i - n / a;
    if (s > 0 && s < o || l > 0 && l < o) {
        const e = n / (n - s),
            t = i / (i - l);
        r = mt(Math.max(e, t), 3)
    }
    return {
        extraWidth: s,
        extraHeight: l,
        scaleFactor: r
    }
}

function dt(e, t, n) {
    return e > n ? n : t > e ? t : e
}

function ut(e, t, {
    width: n,
    height: i,
    scrollbars: o = "yes",
    resizable: r = "yes",
    toolbar: a = "no"
}) {
    let s = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - i / 2,
        l = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - n / 2;
    window.chrome && -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac os x") && (i += 27), window.safari && (i += 47);
    let c = `scrollbars=${o},resizable=${r},toolbar=${a}`;
    return window.open(e, t, `width=${n},height=${i},left=${l},top=${s},${c}`)
}

function pt(e) {
    return function(e) {
        return /^(https?:)?\/\/(.+)\.(((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work))|(videoji|videoshipinurl)\.hk)(?=$|\/)/.test(e)
    }(e) ? lt(e) : ""
}

function _t(e, i, o) {
    if (function(e) {
            return /^(https?:)?\/\/(.+)\.((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work)|(videoji|videoshipinurl)\.hk)\/video\/\d+\/config(?=$|\?)/.test(e)
        }(i)) return i;
    const r = function(e) {
            if (tt(e)) return parseInt(e, 10);
            const t = e.match(/(video|\.com|\.dev)\/(\d+)/);
            if (!t || t.length < 3) throw new Error("Please provide a Vimeo URL with a valid clip id.");
            return parseInt(t[2], 10)
        }(i),
        a = t(window.location.search),
        s = t(`${i}`.split("?")[1]),
        l = Object.assign(a, s, o);
    return n(`${e}/video/${r}/config`, l)
}

function vt(e) {
    for (var t, n, i = (e || document).querySelectorAll("[tabindex]"), o = [], r = 0, a = 0, s = i.length; a < s; a++) t = i[a], n = window.getComputedStyle(t, ""), t.tabIndex > 0 && "none" !== n.display && n.opacity > 0 && "hidden" !== n.visibility && (o[r++] = t);
    var l = o.shift();
    l && (l.focus(), l.blur())
}

function mt(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function ft() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ 16 * Math.random() >> e / 4).toString(16))
}

function ht(e, t) {
    return -1 !== Array.from(t).indexOf(e)
}

function gt(e, t, n) {
    if (void 0 !== n) e.style[t] = n;
    else if (i(t)) e.setAttribute("style", t);
    else
        for (const i in t) gt(e, i, t[i])
}

function bt(e, t, n) {
    n.forEach(n => {
        e(n, (...e) => {
            t.apply(void 0, [n].concat(e))
        })
    })
}

function yt(e) {
    for (var t = Object.keys(e), n = t.length, i = [], o = 0; o < n;) i[o] = e[t[o]], o += 1;
    return i
}

function Et(e, t) {
    return t && 0 === t.indexOf(e)
}! function(...e) {
    e.reduce((e, t) => (...n) => e(t.apply(void 0, n)))
}((function(e) {
    return e ? Array.from(e.parentNode.children).indexOf(e) : -1
}), (function(e, t) {
    for (;
        (null == (n = e) ? void 0 : n.parentElement) && !ht(e, t);) {
        var n;
        e = e.parentElement
    }
    return ht(e, t) ? e : null
}));
let Ct = 0;

function Tt(e = "p") {
    return `${e}${++Ct}`
}
const wt = {
        _badPlayback: Tt(),
        _bufferStarted: Tt(),
        _spatialUnsupported: Tt(),
        _spatialFailure: Tt()
    },
    Lt = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    St = {
        _seek: Tt(),
        _changeVolume: Tt(),
        _changeMuted: Tt(),
        _hideOverlay: Tt(),
        _showOverlay: Tt(),
        _updateOverlay: Tt(),
        _setActivePage: Tt(),
        _updateEmailCapture: Tt(),
        _updateWebinarStartTime: Tt(),
        _openPopup: Tt(),
        _reset: Tt(),
        _changeLoop: Tt(),
        _changeQuality: Tt(),
        _openVimeo: Tt(),
        _changeColor: Tt(),
        _disableVolume: Tt(),
        _enableVolume: Tt(),
        _disableCaptions: Tt(),
        _enableCaptions: Tt(),
        _forceFullscreen: Tt(),
        _turnCaptionsOn: Tt(),
        _turnCaptionsOff: Tt(),
        _changeCaptionsStyles: Tt(),
        _resetCaptionsStyles: Tt(),
        _toggleNativeControls: Tt(),
        _showOutro: Tt(),
        _hideOutro: Tt(),
        _setControlsVisibility: Tt(),
        _overrideControlbarBehavior: Tt(),
        _activatePictureInPicture: Tt(),
        _deactivatePictureInPicture: Tt(),
        _attachSpatialPlaybackEvents: Tt(),
        _toggleSpatialPlayback: Tt(),
        _revealSpatialControls: Tt(),
        _setTime: Tt(),
        _addCard: Tt(),
        _removeCard: Tt(),
        _changePlaybackRate: Tt(),
        _destroy: Tt(),
        _changeAudioTrack: Tt()
    },
    At = {
        will: "willLikeVideo",
        did: "didLikeVideo"
    },
    kt = {
        will: "willUnlikeVideo",
        did: "didUnlikeVideo"
    },
    Pt = {
        will: "willAddToWatchLater",
        did: "didAddToWatchLater"
    },
    It = {
        will: "willRemoveFromWatchLater",
        did: "didRemoveFromWatchLater"
    },
    Ot = {
        will: "willOpenVodPurchaseForm",
        did: "didOpenVodPurchaseForm"
    },
    Rt = {
        will: "willOpenShareOverlay",
        did: "didOpenShareOverlay"
    },
    Nt = {
        will: "willOpenLoginForm",
        did: "didOpenLoginForm"
    },
    Mt = {
        will: "willOpenCollectionsOverlay",
        did: "didOpenCollectionsOverlay"
    },
    Dt = {
        will: "willShowOutro",
        did: "didShowOutro"
    },
    xt = {
        will: "willSendPlayLog",
        did: "didSendPlayLog"
    },
    Bt = {
        _apiError: Tt(),
        _error: Tt(),
        _playRejected: Tt(),
        _playResolved: Tt(),
        _paused: Tt(),
        _pausedForAd: Tt(),
        _resumedAfterAd: Tt(),
        _ended: Tt(),
        _volumeChanged: Tt(),
        _mutedChanged: Tt(),
        _qualityChanged: Tt(),
        _targetTimeReached: Tt(),
        _cuepoint: Tt(),
        _firstTimeUpdate: Tt(),
        _playbackRateChanged: Tt(),
        _nudgeAttempted: Tt(),
        _showNudgeNotification: Tt(),
        _nudgeEnded: Tt(),
        _fragmentChanged: Tt(),
        _fullscreenButtonPressed: Tt(),
        _pauseButtonPressed: Tt(),
        _playButtonPressed: Tt(),
        _prefsButtonPressed: Tt(),
        _ccButtonPressed: Tt(),
        _chapterSeekAttempted: Tt(),
        _chapterSeek: Tt(),
        _chapterHoverStateOn: Tt(),
        _chapterHoverStateOff: Tt(),
        _chapterChanged: Tt(),
        _scrubbingStarted: Tt(),
        _scrubbingEnded: Tt(),
        _volumeScrubbingStarted: Tt(),
        _volumeScrubbingEnded: Tt(),
        _controlBarVisibilityChanged: Tt(),
        _sidedockVisibilityChanged: Tt(),
        _menuVisibilityChanged: Tt(),
        _captionsChanged: Tt(),
        _cuePointAdded: Tt(),
        _cuePointRemoved: Tt(),
        _stereoscopicButtonPressed: Tt(),
        _menuPanelOpened: Tt(),
        _menuPanelClosed: Tt(),
        _menuCentered: Tt(),
        _badgePressed: Tt(),
        _muteAutoplayed: Tt(),
        _willEnterFullscreen: Tt(),
        _didEnterFullscreen: Tt(),
        _willExitFullscreen: Tt(),
        _didExitFullscreen: Tt(),
        _likeButtonPressed: Tt(),
        _watchLaterButtonPressed: Tt(),
        _shareButtonPressed: Tt(),
        _embedButtonPressed: Tt(),
        _vodButtonPressed: Tt(),
        _collectionsButtonPressed: Tt(),
        _followButtonPressed: Tt(),
        _overlayOpened: Tt(),
        _overlayClosed: Tt(),
        _overlayCleared: Tt(),
        _overlayCloseButtonPressed: Tt(),
        _facebookButtonPressed: Tt(),
        _twitterButtonPressed: Tt(),
        _tumblrButtonPressed: Tt(),
        _emailButtonPressed: Tt(),
        _embedCodeCopied: Tt(),
        _popupOpened: Tt(),
        _debugButtonPressed: Tt(),
        _emailCaptureSubmitted: Tt(),
        _popupClosed: Tt(),
        _shareViewShown: Tt(),
        _embedViewShown: Tt(),
        _shareViewEnd: Tt(),
        _embedViewEnd: Tt(),
        _showAndroidVRDeepLink: Tt(),
        _showEmailCaptureForm: Tt(),
        _debugDataChange: Tt(),
        _debugPayloadCopied: Tt(),
        _mousedOut: Tt(),
        _mousedOver: Tt(),
        _mouseTimeout: Tt(),
        _liked: Tt(),
        _unliked: Tt(),
        _addedToWatchLater: Tt(),
        _removedFromWatchLater: Tt(),
        _userLogIn: Tt(),
        _userLoggedIn: Tt(),
        _userLoggedOut: Tt(),
        _loginFailure: Tt(),
        _colorChanged: Tt(),
        _configChanged: Tt(),
        _liveEventSettingsChanged: Tt(),
        _passwordUnlocked: Tt(),
        _privateUnlocked: Tt(),
        _enteredTinyMode: Tt(),
        _enteredMiniMode: Tt(),
        _enteredNormalMode: Tt(),
        _requestConfigReloaded: Tt(),
        _embedSettingChanged: Tt(),
        _ottMetadataSet: Tt(),
        _outroDisplayed: Tt(),
        _outroHidden: Tt(),
        _outroVideoPressed: Tt(),
        _becameActive: Tt(),
        _becameInactive: Tt(),
        _tipped: Tt(),
        _emailCaptureSuccess: Tt(),
        _emailCaptureFailure: Tt(),
        _webinarFormSuccess: Tt(),
        _loadVideo: Tt(),
        _swapVideo: Tt(),
        _outroLinkPressed: Tt(),
        _followed: Tt(),
        _unfollowed: Tt(),
        _outroImagePressed: Tt(),
        _outroCtaPressed: Tt(),
        _cardDisplayed: Tt(),
        _cardPressed: Tt(),
        _spaceChanged: Tt(),
        _emailCaptureEnd: Tt(),
        _displayContextChanged: Tt(),
        _titleModuleReady: Tt(),
        _sidedockModuleReady: Tt(),
        _controlBarModuleReady: Tt(),
        _videoModuleReady: Tt(),
        _overlayModuleReady: Tt(),
        _notificationModuleReady: Tt(),
        _statsModuleReady: Tt(),
        _apiModuleReady: Tt(),
        _ready: Tt(),
        _notificationHidden: Tt(),
        _alertVisibilityChanged: Tt(),
        _airPlayAvailable: Tt(),
        _airPlayNotAvailable: Tt(),
        _airPlayActivated: Tt(),
        _airPlayDeactivated: Tt(),
        _airPlayButtonPressed: Tt(),
        _adBuffering: Tt(),
        _adComplete: Tt(),
        _adClicked: Tt(),
        _adError: Tt(),
        _adPaused: Tt(),
        _adResumed: Tt(),
        _adStarted: Tt(),
        _adSkipped: Tt(),
        _allAdsCompleted: Tt(),
        _logMetric: Tt(),
        _webinarRegistrantBlocked: Tt(),
        _webinarRegistrantUnblocked: Tt(),
        _interactiveReady: Tt(),
        _interactiveHotspotClicked: Tt(),
        _interactiveOverlayPanelClicked: Tt(),
        _interactiveMarkerClicked: Tt(),
        _interactiveSeekCall: Tt(),
        _transcriptChanged: Tt(),
        _rightContentAreaVisibilityChange: Tt(),
        _rightContentAreaEnabled: Tt(),
        _rightContentAreaDisabled: Tt(),
        _transcriptNavActive: Tt(),
        _transcriptSessionStarted: Tt(),
        _transcriptKeyPressed: Tt(),
        _qoeSurveyPresented: Tt(),
        _parentUrlAvailable: Tt(),
        _liveEventSafeToPlay: Tt()
    },
    Vt = {
        _seek: Tt(),
        _play: Tt(),
        _pause: Tt(),
        _playbackRateChange: Tt()
    },
    Ut = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    Ft = {
        main: 1,
        privateLocked: 2,
        privateUnlocked: 3,
        privatePassword: 4,
        error: 7,
        contentRating: 9,
        webinarBlocked: 10,
        webinarLocked: 11,
        webinarUnlocked: 12,
        webinarFull: 13
    },
    Ht = {
        AD_STARTED: "adstarted",
        AD_COMPLETED: "adcompleted",
        AD_ERROR: "aderror",
        AD_SKIPPED: "adskipped",
        AD_ALL_COMPLETED: "adallcompleted",
        AD_CLICKED: "adclicked",
        BUFFER_END: "bufferend",
        BUFFER_START: "bufferstart",
        CHAPTER_CHANGE: "chapterchange",
        CHROMECAST_CONNECTED: "chromecastconnected",
        CONTROL_BAR_VISIBILITY_CHANGED: "controlbarvisibilitychanged",
        CUE_CHANGE: "cuechange",
        CUEPOINT: "cuepoint",
        DURATION_CHANGE: "durationchange",
        EMAIL_CAPTURE_FAILED: "emailcapturefailed",
        EMAIL_CAPTURE: "emailcapture",
        ENDED: "ended",
        ERROR: "error",
        FULLSCREENCHANGE: "fullscreenchange",
        INTERACTIVE_HOTSPOT_CLICKED: "interactivehotspotclicked",
        INTERACTIVE_OVERLAY_PANEL_CLICKED: "interactiveoverlaypanelclicked",
        LIVE_EVENT_ENDED: "liveeventended",
        LIVE_EVENT_STARTED: "liveeventstarted",
        LIVE_STREAM_OFFLINE: "livestreamoffline",
        LIVE_STREAM_ONLINE: "livestreamonline",
        LOADED_DATA: "loadeddata",
        LOAD_START: "loadstart",
        LOADED_METADATA: "loadedmetadata",
        LOADED: "loaded",
        MOTION_END: "motionend",
        MOTION_START: "motionstart",
        CAMERA_CHANGE: "camerachange",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        ENTER_WEBVR: "enterwebvr",
        EXIT_WEBVR: "exitwebvr",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PLAYBACK_RATE_CHANGE: "playbackratechange",
        RATE_CHANGE: "ratechange",
        PROGRESS: "progress",
        QUALITY_CHANGE: "qualitychange",
        READY: "ready",
        REMOTE_PLAYBACK_AVAILABILITY_CHANGE: "remoteplaybackavailabilitychange",
        REMOTE_PLAYBACK_CONNECTING: "remoteplaybackconnecting",
        REMOTE_PLAYBACK_CONNECT: "remoteplaybackconnect",
        REMOTE_PLAYBACK_DISCONNECT: "remoteplaybackdisconnect",
        RESIZE: "resize",
        SEEKING: "seeking",
        SEEKED: "seeked",
        SPACE_CHANGE: "spacechange",
        TEXT_TRACK_CHANGE: "texttrackchange",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting"
    },
    qt = {
        playProgress: "timeupdate",
        loadProgress: "progress",
        finish: "ended",
        seek: "seeked"
    },
    Wt = !0 === o.iOS,
    $t = {
        NOTHING: "nothing",
        BEGINNING: "beginning",
        EMAIL: "email",
        VOD: "vod",
        VIDEOS: "videos",
        LINK: "link",
        THREEVIDEOS: "threevideos",
        PROMOTED: "promoted",
        SHARE: "share"
    },
    Yt = "one",
    Gt = "two",
    zt = "three",
    jt = "four",
    Kt = {
        [Yt]: "000000",
        [Gt]: "00adef",
        [zt]: "ffffff",
        [jt]: "000000"
    },
    Xt = {
        [Yt]: "color_one",
        [Gt]: "color_two",
        [zt]: "color_three",
        [jt]: "color_four"
    },
    Zt = {
        [Yt]: "colorOne",
        [Gt]: "colorTwo",
        [zt]: "colorThree",
        [jt]: "colorFour"
    };
var Jt;
! function(e) {
    e.POPUP = "popup", e.ON_SITE = "onsite"
}(Jt || (Jt = {}));
var Qt = Jt;
const en = [151656996, 85979044, 135306151, 84839100, 156281671, 71236980, 110717144],
    tn = () => ({
        id: "error",
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        modal: !0,
        final: !0
    });
var nn = Object.freeze({
    __proto__: null,
    BrowserNotSupported: () => ({
        id: "not-supported",
        title: "Unsupported viewing environment",
        message: 'Your system is having trouble playing this video. For more information, see our <a href="https://help.vimeo.com/hc/en-us/articles/115015677227-Troubleshoot-player-error-messages" target="_blank" rel="noopener" aria-describedby="new-window">Help Center</a>.',
        deferred: !0,
        final: !0
    }),
    DRMFailure: () => ({
        id: "drm-failure",
        title: "Rights issue",
        message: "We’re having trouble authorizing playback for this video. ",
        final: !0
    }),
    FilesNotPlayable: () => ({
        id: "not-supported",
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        deferred: !0,
        final: !0
    }),
    MediaSrcNotSupportedError: () => ({
        id: "not-supported",
        final: !1
    }),
    MediaDecodeError: () => ({
        id: "decode",
        final: !1
    }),
    MediaNetworkError: () => ({
        id: "network",
        title: "Network error",
        message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    MediaUnknownError: () => ({
        id: "unknown",
        title: "Browser error",
        message: 'We’re having trouble playing this video file. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    FileError: () => ({
        id: "telecine-file-error",
        final: !1
    }),
    DownloadError: () => ({
        id: "telecine-download-error",
        final: !1
    }),
    MediaUrlExpired: () => ({
        id: "media-url-expired",
        title: "Playback error",
        message: 'We’re having trouble playing this video. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !1
    }),
    ScannerError: () => ({
        id: "scanner-error",
        final: !1
    }),
    PlayerError: tn
});
const on = e => ({
        onClick: e,
        onKeyDown: t => {
            "Enter" === t.key && e(t)
        }
    }),
    rn = e => {
        const t = document.createElement("textarea");
        t.value = e, document.body.appendChild(t), t.select();
        const n = document.execCommand("copy");
        return document.body.removeChild(t), n
    },
    an = (e, t, n) => {
        var i;
        return null !== (i = t[n]) && void 0 !== i ? i : e[n]
    };

function sn(e, t) {
    return !e || 0 === e.length || -1 !== e.indexOf(t)
}
const ln = e => [Ft.main, Ft.privateUnlocked, Ft.webinarUnlocked].includes(e),
    cn = (e, t) => e && (e.contains(t.target) || e === t.target),
    dn = (...e) => e.reduce((e, t) => t ? e ? `${e} ${t}` : t : e, ""),
    un = {
        16: "shift",
        27: "esc",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    },
    pn = (e = [], t) => e.map(e => (e.active = `${e.id}` === t, e)),
    _n = e => {
        let t = 0,
            n = 0;
        if (e) {
            const {
                left: i,
                right: o
            } = st(e), {
                borderLeftWidth: r,
                borderRightWidth: a
            } = window.getComputedStyle(e, "");
            t = i + parseInt(r, 10), n = o - parseInt(a, 10)
        }
        return {
            leftOffsetValue: t,
            rightOffsetValue: n
        }
    },
    vn = e => {
        let {
            clientX: t
        } = e;
        return e.targetTouches && e.targetTouches.length > 0 && (t = e.targetTouches[0].clientX, e.preventDefault()), t
    },
    mn = (e, t) => e - t.startTime,
    fn = (e, t) => {
        const {
            startTime: n,
            endTime: i,
            duration: o
        } = t;
        return e < n ? 0 : e > i ? 1 : mn(e, t) / o
    },
    hn = (e, t) => {
        const {
            startTime: n,
            endTime: i
        } = t;
        return e < n ? 0 : e > i ? 1 : (e - n) / (i - n)
    },
    gn = (e, t = !0) => {
        const n = 100 * (t ? mt(e, 2) : e);
        return `${Math.min(n,100)}%`
    },
    bn = (e, t) => {
        const {
            startTime: n,
            duration: i
        } = t;
        return n + i * e
    },
    yn = (e, t) => {
        const {
            duration: n
        } = t;
        return n * e || 0
    },
    En = (e, t, n) => (n - t) * e + t,
    Cn = (e, t, n) => (e - t) / (n - t),
    Tn = (e, t) => e.filter(e => {
        const n = e.startTime >= t.startTime && e.startTime <= t.endTime,
            i = e.endTime >= t.startTime && e.endTime <= t.endTime,
            o = e.startTime < t.startTime && e.endTime >= t.endTime;
        return n || i || o
    });
let wn, Ln, Sn, An, kn, Pn, In;
! function(e) {
    e.VP_PLAYER_UI_OVERLAYS = "vp-player-ui-overlays", e.VP_PLAYER_UI_CONTAINER = "vp-player-ui-container", e.VP_VIDEO_WRAPPER = "vp-video-wrapper", e.VP_OVERLAY_WRAPPER = "vp-overlay-wrapper", e.VP_OVERLAY_LABELLEDBY = "vp-overlay-labelledby", e.VP_CONTROLS = "vp-controls", e.VP_CHAPTER_BUTTON = "vp-chapter-button", e.VP_CAST_BUTTON = "vp-cast-button", e.VP_PREFS = "vp-prefs", e.VP_MENU_INFO = "vp-menu-info", e.VP_INTERACTIVE_MARKER = "vp-interactive-marker", e.VP_PROGRESS = "vp-progress", e.VP_LIVE_STATUS = "vp-live-status", e.VP_LIVE_STATUS_CIRCLE = "vp-live-status-circle", e.VP_LIVE_VIEWER_COUNT = "vp-live-viewer-count", e.VP_PIP_OVERLAY = "vp-pip-overlay", e.VP_CAPTIONS = "vp-captions", e.VP_MENU = "vp-menu", e.VP_SPIN = "vp-spin", e.VP_TOOLTIP = "vp-tooltip", e.VP_SIDEDOCK = "vp-sidedock", e.VP_BADGE = "vp-badge", e.VP_TITLE = "vp-title", e.VP_UNMUTE = "vp-unmute", e.VP_CAPTIONS_LINE = "vp-captions-line", e.STEREOSCOPIC = "stereoscopic", e.VOD_BUTTON = "vod-button", e.VOD_ICON = "vod-icon", e.CC = "cc", e.AIRPLAY = "airplay", e.ON = "on", e.PIP = "pip", e.VOLUME = "volume", e.CUSTOM_LOGO = "custom-logo", e.FULLSCREEN = "fullscreen", e.LOGO = "logo", e.CUEPOINT = "cuepoint", e.THUMB_PREVIEW = "thumb-preview", e.THUMB = "thumb", e.COLLECTIONS_BUTTON = "collections-button", e.COLLECTIONS_ICON = "collections-icon", e.LIKE_BUTTON = "like-button", e.LIKE_ICON = "like-icon", e.WATCH_LATER_BUTTON = "watch-later-button", e.WATCH_LATER_ICON = "watch-later-icon", e.FILL = "fill", e.PIP_ICON = "pip-icon"
}(wn || (wn = {})),
function(e) {
    e.EXCLUDE_GLOBAL_BUTTON_STYLES = "exclude-global-button-styles", e.ENTER_FULLSCREEN_ICON = "enter-fullscreen-icon", e.EXIT_FULLSCREEN_ICON = "exit-fullscreen-icon", e.TITLE_TAG = "titleTag", e.BYLINE_TAG = "bylineTag", e.LONER_TAG = "lonerTag", e.CONTENT_AREA_BACKGROUND_CONTAINER = "vp-content-area-background"
}(Ln || (Ln = {})),
function(e) {
    e.RIGHT_CONTENT_AREA = "right-content-area"
}(Sn || (Sn = {})),
function(e) {
    e.TRANSCRIPT_LIST = "transcript-list", e.TRANSCRIPT_CUE_PREFIX = "transcript-cue", e.TRANSCRIPT_MENU = "transcript-menu", e.TRANSCRIPT_VIEWER = "transcript-viewer", e.TRANSCRIPT_CONTROL_BAR_BUTTON = "transcript-control-bar-button"
}(An || (An = {})),
function(e) {
    e.QOE_SURVEY_TEXT = "qoe-survey-text", e.REPLAY = "replay"
}(kn || (kn = {})),
function(e) {
    e.TEXT_TRACK_ID_PREFIX = "telecine-track-"
}(Pn || (Pn = {})),
function(e) {
    e.EMPTY = "empty", e.SHARE = "share", e.HELP = "help", e.ERROR = "error", e.APP_REDIRECT = "app-redirect", e.PRIVATE_LOCKED = "private-locked", e.WEBINAR_BLOCKED = "webinar-blocked", e.WEBINAR_CONFIRMATION = "webinar-confirmation", e.EMAIL_CAPTURE = "email-capture", e.NOT_SUPPORTED = "not-supported", e.INTERACTIVE = "interactive"
}(In || (In = {}));
const On = [In.HELP],
    Rn = `.${wn.VP_OVERLAY_WRAPPER}`,
    Nn = e => e.querySelector(Rn),
    Mn = e => {
        if (e) {
            const t = Nn(e);
            if (t && !t.classList.contains("hidden") && !t.classList.contains("out")) return !0
        }
        return !1
    },
    Dn = e => {
        const t = Nn(e);
        return t && Mn(e) ? t.getAttribute("name") : In.EMPTY
    },
    xn = e => On.includes(e),
    Bn = e => (e => void 0 !== e.settings)(e) ? !e.settings.background && 0 !== e.settings.controls : !e.background && e.controls,
    Vn = e => (Date.now() - e) / 1e3;

function Un() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function Fn(e) {
    return Hn() - e
}

function Hn() {
    return parseInt(Un() / 1e3, 10)
}

function qn(e) {
    return parseInt(Date.now() / 1e3, 10) - e
}

function Wn(e, t) {
    const n = Math.ceil(e) < 0;
    e = Math.abs(e);
    var i = Math.floor(e / 3600 % 60),
        o = Math.floor(e / 60 % 60);
    if (e = Math.floor(e % 60), t) {
        var r = e + " second" + (1 === e ? "" : "s");
        return o > 0 && (r = o + " minute" + (1 === o ? "" : "s") + ", " + r), i > 0 && (r = i + " hour" + (1 === i ? "" : "s") + ", " + r), r
    }
    return (n ? "-" : "") + (i > 0 ? i + ":" : "") + $n(o, 2) + ":" + $n(e, 2)
}

function $n(e, t, n) {
    return e = String(e), new Array(t - e.length + 1).join(n || "0") + e
}

function Yn(e, t) {
    const n = new Intl.DateTimeFormat(t, {
        dateStyle: "full",
        timeStyle: "short"
    }).format(e);
    return n.charAt(0).toUpperCase() + n.slice(1)
}
const Gn = e => {
    if (!e) return !1;
    const t = Date.now();
    return Date.parse(e) - t <= 0
};
let zn, jn, Kn, Xn, Zn, Jn, Qn, ei, ti, ni, ii, oi;

function ri(e) {
    var t, n;
    const i = null == (t = e.embed) || null == (n = t.interactive) ? void 0 : n.demo_end,
        o = Gn(i);
    return i && !o
}

function ai(e) {
    return ri(e)
}! function(e) {
    e.XXS = "xxs", e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e.XXL = "xxl"
}(zn || (zn = {})),
function(e) {
    e.MD = "md", e.SM = "sm", e.XS = "xs", e.CUSTOM = "custom"
}(jn || (jn = {})),
function(e) {
    e.PRIMARY = "primary", e.ALTERNATIVE = "alternative", e.CUSTOM = "custom"
}(Kn || (Kn = {})),
function(e) {
    e.LEFT = "left", e.RIGHT = "right"
}(Xn || (Xn = {})),
function(e) {
    e.RESET = "reset", e.BUTTON = "button", e.SUBMIT = "submit"
}(Zn || (Zn = {})),
function(e) {
    e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl"
}(Jn || (Jn = {})),
function(e) {
    e.NORMAL = "normal", e.BOLD = "bold", e[e.NUM_500 = 500] = "NUM_500"
}(Qn || (Qn = {})),
function(e) {
    e.SM = "sm", e.LG = "lg"
}(ei || (ei = {})),
function(e) {
    e.SM = "sm", e.LG = "lg"
}(ti || (ti = {})),
function(e) {
    e.ONE = "--color-one", e.TWO = "--color-two", e.THREE = "--color-three", e.FOUR = "--color-four", e.ONE_MONOCHROME = "--color-one-monochrome", e.TWO_MONOCHROME = "--color-two-monochrome", e.ONE_OPACITY_NINETY = "--color-one-opacity-ninety", e.THREE_OPACITY_TWENTY = "--color-three-opacity-twenty", e.ONE_MONOCHROME_OPACITY_TWENTY = "--color-one-monochrome-opacity-twenty", e.TWO_MONOCHROME_OPACITY_TWENTY = "--color-two-monochrome-opacity-twenty", e.ONE_MONOCHROME_OPACITY_SIXTY = "--color-one-monochrome-opacity-sixty", e.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-one-monochrome-opacity-twenty-eighty", e.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-two-monochrome-opacity-twenty-eighty"
}(ni || (ni = {})),
function(e) {
    e[e.ZERO = 0] = "ZERO", e[e.TWENTY = .2] = "TWENTY", e[e.TWENTY_FIVE = .25] = "TWENTY_FIVE", e[e.FIFTY = .5] = "FIFTY", e[e.SIXTY = .6] = "SIXTY", e[e.SEVENTY_FIVE = .75] = "SEVENTY_FIVE", e[e.EIGHTY = .8] = "EIGHTY", e[e.NINETY = .9] = "NINETY", e[e.ONE_HUNDRED = 1] = "ONE_HUNDRED"
}(ii || (ii = {})),
function(e) {
    e.LIGHT = "light", e.DARK = "dark"
}(oi || (oi = {}));
const si = (e = "") => 4 === (e = e.replace("#", "")).length || 8 === e.length,
    li = (e, t, n, i) => {
        let o;
        try {
            o = new r(e)
        } catch (l) {
            return ""
        }
        const s = (e => r.white.contrast(e).ratio >= 4.5 ? oi.DARK : oi.LIGHT)(o);
        return n && (o = a(s === oi.DARK ? r.white : r.black)), null == t || i && si(e) ? si(e) ? o.hexWithAlpha : o.hex : ("object" == typeof t && (t = t[s]), o.alpha = t, o.hexWithAlpha)
    },
    ci = e => e.map(([e, t]) => ((e, t) => e + ":" + t + ";")(e, t)).join("\n"),
    di = () => {};

function ui(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function pi(e, t) {
    try {
        var n = e()
    } catch (ke) {
        return t(ke)
    }
    return n && n.then ? n.then(void 0, t) : n
}
const _i = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (ke) {
                return Promise.reject(ke)
            }
        }
    }((function(e) {
        return pi(e, (function(e) {
            return ui(new Promise(e => setTimeout(e, 1e3)), (function() {
                let t;
                if (e instanceof Error) {
                    const n = e.message,
                        i = null == n ? void 0 : n.split(" ").find(e => e.includes("http"));
                    t = new URL(i), t.searchParams.set("t", `${Date.now()}`)
                }
                return pi((function() {
                    return ui(
                        import (t.href))
                }), (function() {
                    throw e
                }))
            }))
        }))
    })),
    vi = /^(%20|\s)*(javascript|data)/im,
    mi = /[^\x20-\x7E]/gim,
    fi = /^([^:]+):/gm,
    hi = [".", "/"];

function gi(e) {
    const t = e.match(fi);
    return null == t ? void 0 : t[0]
}

function bi(e) {
    return e ? decodeURI(encodeURI(function(e) {
        const t = gi(e = e.trim());
        return e && !t && (e = `https://${e}`), e
    }(function(e) {
        let t = e.replace(mi, "");
        if (function(e) {
                return hi.indexOf(e[0]) > -1
            }(t)) return t;
        const n = gi(t);
        return n && vi.test(n) ? "" : t
    }(e)))) : null
}

function yi(e = "") {
    return e.includes("?")
}

function Ei(e, t, n) {
    const [, i] = e.split("#");
    let o = null;
    const r = Ci(i, `vimeo_${t}_${n}`),
        a = Ci(i, `vimeo_${t}`);
    return (r || a) && (o = r || a), o
}

function Ci(e, n) {
    const {
        [n]: i
    } = t(e);
    let o = null;
    return i && (o = parseInt(i, 10), isNaN(o) && (o = i)), o
}

function Ti(e) {
    return isNaN(e) ? null : e
}
let wi, Li, Si, Ai, ki, Pi, Ii, Oi, Ri, Ni, Mi, Di, xi, Bi, Vi, Ui, Fi;
! function(e) {
    e.CONNECTED = "CONNECTED", e.CONNECTING = "CONNECTING", e.NOT_CONNECTED = "NOT_CONNECTED", e.NOT_SETUP = "NOT_SETUP", e.NO_DEVICES_AVAILABLE = "NO_DEVICES_AVAILABLE", e.SETUP_DONE = "SETUP_DONE"
}(wi || (wi = {})),
function(e) {
    e.VimeoPlayer = "VimeoPlayer", e.BackgroundPlayer = "BackgroundPlayer", e.ChromelessPlayer = "Chromeless"
}(Li || (Li = {})),
function(e) {
    e.INLINE = "inline", e.PICTURE_IN_PICTURE = "picture-in-picture"
}(Si || (Si = {})),
function(e) {
    e.NORMAL = "normal", e.MINI = "mini", e.TINY = "tiny"
}(Ai || (Ai = {})),
function(e) {
    e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e[e.ERROR = 3] = "ERROR"
}(ki || (ki = {})),
function(e) {
    e.FIELD_MARKERS = "markers", e.FIELD_CLIP_ID = "clip_id", e.FIELD_PROFILE_ID = "profile_id", e.FIELD_PLAYER_SIZE = "player_size", e.FIELD_DROPPED_FRAMES = "dropped_frames", e.FIELD_TOTAL_FRAMES = "total_frames", e.FIELD_BANDWIDTH = "bandwidth", e.FIELD_STREAMS = "streams", e.FIELD_FILES = "files", e.FIELD_VIDEO_DIMS = "video_dims", e.FIELD_MIN_BANDWIDTH = "min_bandwidth", e.FIELD_MAX_BANDWIDTH = "max_badwidth", e.FIELD_BUFFER_OCCUPANCY = "buffer_occupancy", e.FIELD_LIVE_LATENCY = "live_latency", e.FIELD_SCANNERS = "scanner", e.FIELD_VR_HEADSET = "vr_headset"
}(Pi || (Pi = {})),
function(e) {
    e.AUTO = "auto"
}(Ii || (Ii = {})),
function(e) {
    e.PRIVACY_PUBLIC = "anybody", e.PRIVACY_NOBODY = "nobody", e.PRIVACY_FOLLOW = "contacts", e.PRIVACY_PASSWORD = "password", e.PRIVACY_USER = "users", e.PRIVACY_PURGATORY = "purgatory", e.PRIVACY_HIDE_FROM_VIMEO = "disable", e.PRIVACY_PAYTOVIEW = "ptv", e.PRIVACY_PAYTOVIEWEXTRA = "ptv_extra", e.PRIVACY_UNLISTED = "unlisted", e.PRIVACY_STOCK = "stock"
}(Oi || (Oi = {})),
function(e) {
    e.MEDIA_SOURCE_SCANNER = "MediaSourceScanner", e.HLS_LIVE_SCANNER = "HLSLiveScanner"
}(Ri || (Ri = {})),
function(e) {
    e.PLAY = "play", e.PAUSE = "pause", e.REPLAY = "replay", e.TRAILER = "trailer"
}(Ni || (Ni = {})),
function(e) {
    e.FONT_SIZE = "fontSize", e.FONT_FAMILY = "fontFamily", e.FONT_OPACITY = "fontOpacity", e.COLOR = "color", e.EDGE_STYLE = "edgeStyle"
}(Mi || (Mi = {})),
function(e) {
    e.BG_OPACITY = "bgOpacity", e.BG_COLOR = "bgColor"
}(Di || (Di = {})),
function(e) {
    e.WINDOW_OPACITY = "windowOpacity", e.WINDOW_COLOR = "windowColor"
}(xi || (xi = {})),
function(e) {
    e[e.FONT_SIZE = Mi.FONT_SIZE] = "FONT_SIZE", e[e.FONT_FAMILY = Mi.FONT_FAMILY] = "FONT_FAMILY", e[e.FONT_OPACITY = Mi.FONT_OPACITY] = "FONT_OPACITY", e[e.COLOR = Mi.COLOR] = "COLOR", e[e.EDGE_STYLE = Mi.EDGE_STYLE] = "EDGE_STYLE", e[e.BG_OPACITY = Di.BG_OPACITY] = "BG_OPACITY", e[e.BG_COLOR = Di.BG_COLOR] = "BG_COLOR", e[e.WINDOW_OPACITY = xi.WINDOW_OPACITY] = "WINDOW_OPACITY", e[e.WINDOW_COLOR = xi.WINDOW_COLOR] = "WINDOW_COLOR"
}(Bi || (Bi = {})),
function(e) {
    e.CCMenu = "c", e.PrefsMenu = "h", e.Transcript = "T"
}(Vi || (Vi = {})),
function(e) {
    e.SINGLE_VIDEO_VIEW_MANAGE = "single_video_view_manage", e.SINGLE_VIDEO_VIEW_RECIPIENT = "single_video_view_recipient", e.EMBEDDED_PAGE = "embedded_page", e.CLIP_PAGE = "clip_page"
}(Ui || (Ui = {})),
function(e) {
    e[e.CacheMiss = 0] = "CacheMiss", e[e.MidCacheHit = 1] = "MidCacheHit", e[e.EdgeCacheHit = 2] = "EdgeCacheHit"
}(Fi || (Fi = {}));
const {
    VIMEO_URL: Hi,
    SVV_RECIPIENT_URL: qi,
    SVV_MANAGE_URL: Wi,
    CLIP_URL: $i,
    PROFILE_URL: Yi,
    VOD_URL: Gi,
    VOD_VIDEO_MANAGE_URL: zi
} = {
    VIMEO_URL: "vimeoUrl",
    SVV_RECIPIENT_URL: "svvRecipientUrl",
    SVV_MANAGE_URL: "svvManageUrl",
    CLIP_URL: "clipUrl",
    PROFILE_URL: "profileUrl",
    VOD_URL: "vodUrl",
    VOD_VIDEO_MANAGE_URL: "vodVideoManageUrl"
}, ji = {
    "vimeo-logo": {
        viewer: {
            unlisted: $i,
            password: $i,
            disable: Hi,
            nobody: $i,
            anybody: $i,
            ptv: Gi,
            privateMode: Hi
        },
        creator: {
            unlisted: Wi,
            password: Wi,
            disable: Wi,
            nobody: Wi,
            anybody: Wi,
            ptv: zi,
            privateMode: Wi
        }
    },
    "video-title": {
        viewer: {
            unlisted: qi,
            password: $i,
            disable: Yi,
            nobody: Wi,
            anybody: $i,
            ptv: Gi,
            privateMode: Hi
        },
        creator: {
            unlisted: Wi,
            password: Wi,
            disable: Wi,
            nobody: Wi,
            anybody: Wi,
            ptv: zi,
            privateMode: Wi
        }
    },
    "video-portrait": {
        viewer: {
            unlisted: Yi,
            password: Yi,
            disable: Yi,
            nobody: Yi,
            anybody: Yi,
            ptv: Yi,
            privateMode: Hi
        },
        creator: {
            unlisted: Yi,
            password: Yi,
            disable: Yi,
            nobody: Yi,
            anybody: Yi,
            ptv: zi,
            privateMode: Wi
        }
    },
    "video-byline": {
        viewer: {
            unlisted: Yi,
            password: Yi,
            disable: Yi,
            nobody: Yi,
            anybody: Yi,
            ptv: Yi,
            privateMode: Hi
        },
        creator: {
            unlisted: Yi,
            password: Yi,
            disable: Yi,
            nobody: Yi,
            anybody: Yi,
            ptv: zi,
            privateMode: Wi
        }
    }
};

function Ki(e = {}) {
    const t = {
        selectDestination(e) {
            const n = ji[e];
            if (!n) return "";
            const i = t.isOwner ? n.creator : n.viewer;
            return t.isPrivateMode ? i.privateMode : i[t.videoPrivacy]
        },
        get [$i]() {
            return function(e, t) {
                var n, i;
                const o = null == (n = t.video) ? void 0 : n.id,
                    r = null == (i = t.video) ? void 0 : i.unlisted_hash;
                return `${e}/${o}${r?"/"+r:""}`
            }(t[Hi], e)
        },
        get [qi]() {
            var n, i;
            return function(e, t, n) {
                return n ? `${e}/${t}/${n}` : `${e}/${t}`
            }(t[Hi], null == (n = e.video) ? void 0 : n.id, null == (i = e.video) ? void 0 : i.unlisted_hash)
        },
        get [Wi]() {
            var n;
            return function(e, t) {
                return `${e}/manage/videos/${t}`
            }(t[Hi], null == (n = e.video) ? void 0 : n.id)
        },
        get [Hi]() {
            return `https://${e.vimeo_url}`
        },
        get [Yi]() {
            var t, n;
            return null == (t = e.video) || null == (n = t.owner) ? void 0 : n.url
        },
        get [Gi]() {
            var t, n;
            return null == (t = e.video) || null == (n = t.vod) ? void 0 : n.url
        },
        get [zi]() {
            var t, n;
            return `https://${e.vimeo_url}/ondemand/${null==(t=e.video)||null==(n=t.vod)?void 0:n.id}/settings/basic`
        },
        get videoPrivacy() {
            var t;
            return null == (t = e.video) ? void 0 : t.privacy
        },
        get isPrivateMode() {
            var t;
            return !!(null == (t = e.user) ? void 0 : t.private_mode_enabled)
        },
        get isOwner() {
            var t, n, i;
            return (null == (t = e.user) ? void 0 : t.id) === (null == (n = e.video) || null == (i = n.owner) ? void 0 : i.id)
        }
    };
    return t
}

function Xi(e, t) {
    let n = "";
    const i = Ki(t),
        o = i.selectDestination(e);
    return i[o] && (n = i[o]), n
}

function Zi(e, t, n) {
    (function(e, t) {
        return -1 !== e.indexOf(`?${t}=`) || -1 !== e.indexOf(`&${t}=`)
    })(e, t) || yi(e) && (e += `&${t}=`);
    const i = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
    return e.replace(i, "$1" + t + "=" + n + "$2")
}

function Ji(e, t = window.location.href) {
    const n = Ki(e),
        i = -1 !== e.embed.context.indexOf("VideoController"),
        o = -1 !== e.embed.context.indexOf("ClipController");
    if (i) {
        const e = -1 !== t.indexOf(n.svvManageUrl),
            i = -1 !== t.indexOf(n.svvRecipientUrl) || t === n.clipUrl;
        if (e) return Ui.SINGLE_VIDEO_VIEW_MANAGE;
        if (i) return Ui.SINGLE_VIDEO_VIEW_RECIPIENT
    } else if (o) return Ui.CLIP_PAGE;
    return Ui.EMBEDDED_PAGE
}

function Qi(e) {
    return !(!o.browser.chromium || e.video.spatial || "stock" === e.video.privacy || "https:" !== window.location.protocol)
}
const eo = s("Storage Access", "color: #fff; background-color: #fc6203; padding: 2px; border-radius: 2px;"),
    to = () => o.storageAccessAPI;

function no(e) {
    return e.video.ecdn ? e.video.live_event ? "vimeo-live-ecdn" : "vimeo-vod-ecdn" : e.embed.wirewax ? "vimeo-interactive-vod" : e.request.flags.ott ? "vimeo-ott-vod" : e.video.webinar && "ended" !== e.video.webinar.status ? "vimeo-live-webinar" : e.video.live_event ? "vimeo-live" : e.embed.context && -1 !== e.embed.context.indexOf("Stock") ? "vimeo-stock-vod" : e.video.vod ? "vimeo-ondemand" : "vimeo-vod"
}
const io = () => {
        const [e, t, n] = "4.27.3".split(".");
        return {
            full: "4.27.3",
            major: e,
            minor: t,
            patch: n
        }
    },
    oo = o.iPhone || o.mobileAndroid || o.windowsPhone || o.browser.bb10;

function ro() {
    let e = "desktop";
    return o.iPad ? e = "tablet" : oo && (e = "mobile"), e
}

function ao() {
    let e = "windows";
    return o.iOS ? e = "iOS" : o.android ? e = "android" : o.mac ? e = "macOS" : o.windowsPhone && (e = "windowsPhone"), e
}

function so(e) {
    const {
        user: t,
        video: n
    } = e;
    let i = "viewer";
    return t.team_id && (i = t.id === t.team_origin_user_id ? "admin" : "contributor"), t.id === n.owner.id && (i = "owner"), i
}

function lo(e, t) {
    return e === t ? "square" : t > e ? "portrait" : "landscape"
}

function co(e) {
    const t = e.x_vim_cachebc,
        n = e.x_cache;
    return t ? function(e) {
        let t = !1,
            n = !1;
        return e.split(",").forEach(e => {
            let [i, o] = e.split(":");
            "E" !== i || "h" !== o ? "h" !== o || (t = !0) : n = !0
        }), n ? Fi.EdgeCacheHit : t ? Fi.MidCacheHit : Fi.CacheMiss
    }(t) : n ? function(e) {
        return "HIT" === e.substr(0, 3) ? Fi.MidCacheHit : "HIT" === e.substr(-3) ? Fi.EdgeCacheHit : Fi.CacheMiss
    }(n) : Fi.CacheMiss
}
const uo = (e, t) => e.split("/").slice(4).join("/"),
    po = e => e.split("/")[4],
    _o = (e, t) => function(n) {
        try {
            const {
                type: i,
                url: o
            } = n;
            return i && o && o.includes(e) && (i === u.MANIFEST || i === u.SEGMENT) ? p(n, t) : null
        } catch (ke) {
            return Promise.reject(ke)
        }
    },
    vo = () => {
        const e = d(window, "Streamroot.instances[0].stats", {}),
            t = d(e, "realtime.dnaSources", {}) || 0;
        return {
            ecdnBytesByCdn: d(e, "currentContent.cdnDownload", 0),
            ecdnBytesPeered: d(e, "currentContent.dnaDownload", 1),
            ecdnPeers: t
        }
    },
    mo = () => {
        var e;
        const t = d(window, "_hiveStats", {
                cdnResponseBytes: 0,
                p2pResponseBytes: 0,
                partners: {}
            }),
            {
                cdnResponseBytes: n,
                p2pResponseBytes: i,
                partners: o
            } = t;
        return {
            ecdnBytesByCdn: n,
            ecdnBytesPeered: i,
            ecdnPeers: (null !== (e = Object.keys(o)) && void 0 !== e ? e : []).length
        }
    },
    fo = () => {
        const e = d(window, "_kollectiveStats", {
                originBytes: 0,
                ecdnBytes: 0,
                currentPeerConnections: 0
            }),
            {
                originBytes: t,
                ecdnBytes: n,
                currentPeerConnections: i
            } = e;
        return {
            ecdnBytesByCdn: t,
            ecdnBytesPeered: n,
            ecdnPeers: i
        }
    },
    ho = e => {
        const t = {
            streamroot: vo,
            hive: mo,
            kollective: fo
        };
        return t[e] ? t[e]() : {
            ecdnBytesByCdn: 0,
            ecdnBytesPeered: 0,
            ecdnPeers: 0
        }
    },
    go = !!window.newrelic && "function" == typeof window.newrelic.addToTrace && "function" == typeof window.newrelic.noticeError && "function" == typeof window.newrelic.setErrorHandler && "function" == typeof window.newrelic.setCustomAttribute,
    bo = ["chrome-extension:", "moz-extension:"].includes(document.location.protocol),
    yo = Date.now(),
    Eo = ["NotAllowedError", "AbortError", "PlayInterrupted", "Failed to load image", "window.__withBuiltIn is not a function", "window.__timeSinceLastTimeout is not a function", "div:has(> iframe[id=", "No cast extension found", "Cast is not available on this browser."];

function Co(e) {
    return Math.random() <= e
}

function To(e, t, n = .1) {
    Co(n) && ((e, t = {}) => {
        if (go && e) {
            const n = Object.assign({}, t, {
                manually_captured: 1,
                player_lifespan_seconds: Math.round((Date.now() - yo) / 1e3)
            });
            newrelic.noticeError(e, n)
        }
    })(e, t)
}
window.addEventListener("unhandledrejection", e => {
    e.preventDefault(), e.reason && To(e.reason, {
        unhandled_rejection: 1
    })
});
var wo = {
    setUp: function(e) {
        ((e, t = Li.VimeoPlayer) => {
            go && (((e, t) => {
                var n, i, o;
                const r = {
                    environment: "dev" === e.request.build.js ? "dev" : "production",
                    js_modules: !0,
                    version_js: e.request.build.js,
                    version_backend: e.request.build.backend,
                    visibility_state: document.visibilityState,
                    vimeo_session: e.request.session,
                    locale: e.request.lang,
                    product: no(e),
                    video_embed_permission: e.video.embed_permission,
                    video_privacy: e.video.privacy,
                    live_session_id: null == (n = e.video.live_event) ? void 0 : n.id,
                    rawUserAgent: navigator.userAgent,
                    background_mode: 1 === (null == (i = e.embed) || null == (o = i.settings) ? void 0 : o.background) ? 1 : 0,
                    player_name: t
                };
                if (e.request.ab_tests)
                    for (const a in e.request.ab_tests) {
                        const t = e.request.ab_tests[a];
                        r[`${a}_test`] = 1, r[`${a}_group`] = t.group;
                        for (const e in t.data) r[`${a}_data_${e}`] = t.data[e]
                    }
                e.user.logged_in && (r.userId = e.user.id);
                for (let a in r) newrelic.setCustomAttribute(a, r[a])
            })(e, t), newrelic.setErrorHandler((function(t) {
                var n;
                return !!((e, t) => {
                    var n;
                    return !!(o.appleMail || !t.request || bo || Eo.some(t => {
                        var n, i;
                        return (null == e || null == (n = e.message) ? void 0 : n.includes(t)) || (null == e || null == (i = e.name) ? void 0 : i.includes(t))
                    }) || (null == e || null == (n = e.message) ? void 0 : n.startsWith("ReportingObserver")) && Math.random() > .01)
                })(t, e) || ((null == t || null == (n = t.message) ? void 0 : n.startsWith("Non-Error exception captured")) && newrelic.addToTrace({
                    name: "nonErrorException",
                    start: Date.now()
                }), !1)
            })))
        })(e.config)
    },
    captureException: To,
    captureMessage: function(e) {},
    captureBreadcrumb: function(e) {
        (e => {
            go && newrelic.addToTrace({
                name: e,
                start: Date.now()
            })
        })(e)
    }
};
let Lo;

function So({
    events: e
}) {
    let t = null,
        n = null,
        i = null,
        o = null,
        r = null,
        a = {
            video: {},
            request: {},
            embed: {}
        };

    function s() {
        return n && n - 6e4 <= Date.now()
    }

    function l(e) {
        const t = Date.now() + 1e3 * e;
        return r = setTimeout(() => {
            "onLine" in navigator && !navigator.onLine || o || (o = d().catch(wo.captureException))
        }, 1e3 * e - 6e4 - 5e3), t
    }

    function c(e, i = {}) {
        var o, s;
        clearTimeout(r);
        const c = t;
        if (isNaN(e) && "string" != typeof e) return t = e, n = l(t.request.expires), Promise.resolve({
            old: c,
            loaded: t
        });
        Date.now(), a = v(a, t);
        const d = a.request.referrer;
        d && (i.referrer = d), a.video.webinar && a.video.webinar.registrant && (i.webinar_registrant_uuid = a.video.webinar.registrant), Lo || (Lo = pt(e));
        const u = _t(Lo || ((null == (o = t) ? void 0 : o.player_url) ? `https://${null==(s=t)?void 0:s.player_url}` : ""), e, i);
        return _(u, {
            withCredentials: !0,
            throwHttpErrors: !1
        }).json().then(e => (t = e, t.view !== Ft.error && (n = l(t.request.expires), a.request.session && t.video.id === a.video.id && (t.request.session = a.request.session), d && (t.request.referrer = d), a.embed.player_id && (t.embed.player_id = a.embed.player_id), a.embed.on_site && (t.embed.on_site = 1, t.embed.context = a.embed.context)), Date.now(), {
            old: c,
            loaded: t
        })).catch(e => {
            wo.captureException(e)
        })
    }

    function d() {
        var i;
        clearTimeout(r), Date.now();
        const a = null == (i = t) ? void 0 : i.request.referrer,
            {
                signature: s,
                session: c,
                timestamp: d,
                expires: u
            } = t.request,
            p = t.request.ott_chromecast_token;
        let v = `https://${t.player_url}/video/${t.video.id}/config/request?session=${c}&signature=${s}&time=${d}&expires=${u}`;
        return p && (v = `${v}&ott_chromecast_token=${p}`), a && (v += `${-1===v.indexOf("?")?"?":"&"}referrer=${encodeURIComponent(a)}`), _(v, {
            withCredentials: !0,
            retry: 3
        }).json().then(i => (t.request = i, a && (t.request.referrer = a), n = l(t.request.expires), Date.now(), o = null, e.fire(Bt._requestConfigReloaded), t.request)).catch(t => {
            const n = {
                id: "network",
                title: "Network error",
                message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
                final: !0
            };
            throw e.fire(Bt._error, n.id, n), t
        })
    }
    return window.addEventListener("online", () => {
        s() && (o = d().catch(wo.captureException))
    }), e.on(Bt._error, e => {
        o || "media-url-expired" !== e || (o = d().catch(wo.captureException))
    }), {
        get isExpired() {
            return s()
        },
        load: (e, t) => c(e, t),
        reload() {
            var e;
            return (null == (e = t) ? void 0 : e.video.id) ? c(t.video.id) : Promise.reject(new Error("No config loaded."))
        },
        toJSON: () => t,
        get config() {
            return t
        },
        set config(e) {
            t = e
        },
        verify: () => s() ? (o || (o = d()), o) : Promise.resolve(t.request),
        loadRequest: () => d(),
        get _video() {
            return i
        },
        set _video(e) {
            i = e
        }
    }
}

function Ao(e, t) {
    let n = e,
        i = t;
    return n % 320 != 0 && (n = 100 * Math.ceil(e / 100), i = Math.round(n / e * t)), {
        width: n,
        height: i
    }
}

function ko({
    width: e,
    height: t,
    baseUrl: i,
    crop: r = !1
}) {
    i = i.replace(/\.[^/.]+$/, "");
    let a = {};
    const s = parseInt(e, 10),
        l = parseInt(t, 10);
    return 0 === s || isNaN(s) || (r ? a.w = s : a.mw = s), 0 === l || isNaN(l) || (r ? a.h = l : a.mh = l), o.devicePixelRatio > 1 && (a.q = 70), n(i, a)
}

function Po(e) {
    return function(e) {
        return new Promise((t, n) => {
            const i = new Image;

            function o() {
                wo.captureBreadcrumb(`Load image: ${e}`, {}), n(new Error("Failed to load image."))
            }
            i.onload = function() {
                i && i.width > 0 && i.height > 0 ? t(i) : o()
            }, i.onerror = o, i.src = e
        })
    }(e).catch(t => (wo.captureException(t, {
        extra: {
            imageUrl: e
        }
    }), new Promise(() => {})))
}
const Io = {
        id: "7742C69E",
        name: "prod"
    },
    Oo = {
        id: "BA42D416",
        name: "prod"
    },
    Ro = {
        id: "78077C77",
        name: "prod"
    },
    No = {
        connected: Tt(),
        disconnected: Tt(),
        playing: Tt(),
        paused: Tt(),
        buffering: Tt(),
        idle: Tt(),
        ended: Tt(),
        initialized: Tt(),
        castStateChanged: Tt(),
        sessionStateChanged: Tt(),
        timeUpdated: Tt(),
        mediaLoadedSuccess: Tt(),
        mediaLoadedFailed: Tt(),
        error: Tt()
    };
let Mo = function() {
    function e({
        player: e,
        textAlert: t = null
    }) {
        this._textAlert = t, this._player = e, this._onControlSeek = this.onControlSeek.bind(this), this._onChangeVolume = this.onChangeVolume.bind(this), this._onPlayOrPausePressed = this.onPlayOrPausePressed.bind(this), this._onConfigChanged = this.onConfigChanged.bind(this), this._onReset = this.onReset.bind(this), this._onPlayerStateChanged = this.onPlayerStateChanged.bind(this), this._onCurrentTimeChanged = this.onCurrentTimeChanged.bind(this), this._onIsConnectedChanged = this.onIsConnectedChanged.bind(this), this._onSessionStateChanged = this.onSessionStateChanged.bind(this), this._onCastStateChanged = this.onCastStateChanged.bind(this), this._onIsMediaLoadedChanged = this.onIsMediaLoadedChanged.bind(this), this._onVolumeLevelChanged = this.onVolumeLevelChanged.bind(this), this._onIsMutedChanged = this.onIsMutedChanged.bind(this), this._onCaptionsChanged = this.onCaptionsChanged.bind(this), this._onMessageReceived = this.onMessageReceived.bind(this), this._preventPlayerDefaultEvent = this.preventPlayerDefaultEvent.bind(this), this.endVideo = y(this._endVideo, 500)
    }
    var t = e.prototype;
    return t.calculateStartTime = function(e = null) {
        let t = Number(e) || this._player.backbone.currentTime - 7;
        return t < 0 && (t = 0), this.isEndOfVideo && (t = 0), t
    }, t.loadMedia = function({
        contentId: e,
        currentTime: t = null,
        duration: n = null,
        token: i = null,
        bypassToken: o = null,
        autoRequest: r = !1,
        autoCaption: a = !0,
        autoDisconnect: s = !0,
        tracks: c = []
    } = {}) {
        if (Do.isLoadingMedia) return Promise.resolve(!1);
        const u = this._player.config;
        e = e || u.video.id;
        const p = u.request,
            _ = p.drm;
        let v;
        if (null == _ ? void 0 : _.fastly) {
            const t = d(p, "files.dash.default_cdn");
            e = d(p, `files.dash.cdns.${t}.url`), v = d(_, "cdms.widevine.license_url"), c = (p.text_tracks || []).map(e => {
                const {
                    pathname: t,
                    search: n
                } = m(e.url);
                return l(l({}, e), {}, {
                    url: `https://player.vimeo.com${t}${n}`
                })
            })
        }
        const h = this.calculateStartTime(t);
        n = Number(n) || this.duration, i = i || u.user.vimeo_api_client_token, o = o || u.video.bypass_token, this.isEndOfVideo && (this._isEndOfVideo = !1);
        const g = {
            contentId: e,
            duration: n,
            autoRequest: r,
            tracks: c,
            currentTime: h,
            requestCustomData: {
                token: i,
                bypassToken: o,
                tokenType: "jwt"
            }
        };
        return this._player.config.request.ott_chromecast_token && (g.requestCustomData.ottChromecastToken = this._player.config.request.ott_chromecast_token), this._player.config.ottCastOptions && (g.ottCastOptions = this._player.config.ottCastOptions), (v ? this._getLicenseUrl(v).then(e => l(l({}, g), {}, {
            mediaCustomData: {
                widevineLicenseServerURL: e
            }
        })) : Promise.resolve(g)).then(e => Do.loadMedia(e)).then(() => (Do.fire(No.mediaLoadedSuccess), this.addRemotePlayerListenersOnPlaying(), this._player.events.fire(f), this._player.events.fire(St._hideOutro), this._isOutroRendered = !1, a && this.onCaptionsChanged(this._player.backbone.enabledTextTrack), this._player.backbone.paused || this._player.backbone.pause(), !0)).catch(e => (Do.fire(No.mediaLoadedFailed, e), s && this.endCurrentSession(), Promise.reject(e)))
    }, t._getLicenseUrl = function(e) {
        return new Promise((t, n) => {
            const i = new XMLHttpRequest;
            i.open("GET", e), i.onload = () => {
                const e = e => new Error(`Error retrieving License Acquisition URL (LA_URL): ${e}`);
                if (i.status >= 200 && i.status < 300) try {
                    t(i.response)
                } catch (ke) {
                    n(e(ke))
                } else n(e(i.status))
            }, i.onerror = n, i.send()
        })
    }, t.init = function() {
        this.removeInitListeners(), this.addInitListeners()
    }, t.addInitListeners = function() {
        this.addSessionStateListener(), this.addCastStateListener(), this.addIsConnectedListener()
    }, t.endCurrentSession = function(e = !0) {
        Do.castContext && Do.castContext.endCurrentSession(e)
    }, t.syncBackbone = function() {
        !this.isOutroRendered && this._player.backbone.paused && (this._player.backbone.currentTime = this.lastCurrentTime, this.syncTime())
    }, t.stopBackbone = function() {
        this._player.events.fire(St._reset)
    }, t.storeBackboneData = function() {
        this.lastCurrentTime = this._player.backbone.currentTime
    }, t.applyBackboneData = function() {
        this.lastCurrentTime && (this._player.backbone.currentTime = this.lastCurrentTime)
    }, t.enableUI = function() {
        if (this._textAlert) {
            var e;
            const t = null == (e = Do.currentSessionObj) ? void 0 : e.receiver;
            t && this._textAlert.show("Casting on " + t.friendlyName)
        }
        this._player.preview.show(), this._player.element.classList.add("is-casting")
    }, t.disableUI = function() {
        this._textAlert && this._textAlert.hide(), this.isOutroRendered || (this._player.preview.hide(), this._player.backbone.element.classList.remove("invisible")), this._player.element.classList.remove("is-casting")
    }, t.syncTime = function() {
        const e = this.lastCurrentTime / this.duration;
        Do.fire(No.timeUpdated, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            percent: e
        }), e > 0 && this._player.events.fire(h.TIME_UPDATE, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            timeProgress: e
        })
    }, t._endVideo = function() {
        return this._isEndOfVideo = !0, this._player.events.fire(Bt._ended), this.removeRemotePlayerListenersOnPlaying(), this.isLooped ? this.loadMedia().catch(() => {
            this.showOutro()
        }) : this.showOutro(), Do.fire(No.ended), !0
    }, t.showOutro = function() {
        this.isOutroRendered || (this._isOutroRendered = !0, this._player.events.fire(St._showOutro))
    }, t.dispose = function() {
        this.endCurrentSession(), this.removeAllRemoteListeners()
    }, t.onIsMediaLoadedChanged = function(e) {
        !1 === e.value ? this.isTimeEnded && this.endVideo() : this._player.backbone.paused || this._player.backbone.pause()
    }, t.onPlayerStateChanged = function(e) {
        switch (null === e.value && this.isTimeEnded && this.endVideo(), e.value) {
            case Do.PlayerState.PLAYING:
                Do.fire(No.playing);
                break;
            case Do.PlayerState.PAUSED:
                Do.fire(No.paused);
                break;
            case Do.PlayerState.BUFFERING:
                Do.fire(No.buffering);
                break;
            case Do.PlayerState.IDLE:
            default:
                Do.fire(No.idle)
        }
    }, t.onVolumeLevelChanged = function(e) {
        this._player.events.fire(St._changeVolume, e.value, !0)
    }, t.onIsMutedChanged = function(e) {
        this._player.events.fire(St._changeVolume, e.value ? 0 : Do.remotePlayer.volumeLevel, !0)
    }, t.onCurrentTimeChanged = function(e) {
        this.isMediaLoaded && (this.lastCurrentTime = e.value), this.syncTime(), this.isTimeEnded && this.endVideo()
    }, t.onChangeVolume = function(e) {
        this.volumeLevel = e
    }, t.onCaptionsChanged = function(e) {
        const t = Do.currentSession;
        t && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
            action: "setActiveByLanguage",
            value: null == e ? void 0 : e.language
        })
    }, t.onSessionStateChanged = function(e) {
        switch (e.sessionState) {
            case Do.SessionState.SESSION_STARTING:
                this.addPreventLocalPlayerEvents();
                break;
            case Do.SessionState.SESSION_RESUMED:
            case Do.SessionState.SESSION_STARTED:
                this.loadMedia();
                break;
            case Do.SessionState.SESSION_ENDING:
            case Do.SessionState.SESSION_ENDED:
                break;
            case Do.SessionState.SESSION_START_FAILED:
                this.removePreventLocalPlayerEvents()
        }
        Do.fire(No.sessionStateChanged, e.sessionState)
    }, t.onCastStateChanged = function(e) {
        Do.fire(No.castStateChanged)
    }, t.onIsConnectedChanged = function(e) {
        e.value ? this.onConnected() : this.onDisconnected()
    }, t.onConnected = function() {
        this.removePreventLocalPlayerEvents(), this.storeBackboneData(), this.stopBackbone(), this.applyBackboneData(), this.addLocalPlayerListeners(), this.addRemotePlayerListenersOnIdle(), this.addMessageListener(), this.enableUI(), Do.fire(No.connected)
    }, t.onDisconnected = function() {
        this.syncBackbone(), this.removeRemotePlayerListeners(), this.removeLocalPlayerListeners(), this.removeMessageListener(), this.disableUI(), Do.fire(No.disconnected)
    }, t.onConfigChanged = function() {
        this.loadMedia()
    }, t.onReset = function() {
        this.loadMedia()
    }, t.onPlayOrPausePressed = function() {
        this.isEndOfVideo ? this.loadMedia() : this.isPlayingOrPaused && Do.remotePlayerController.playOrPause(), this._player.events.halt()
    }, t.onControlSeek = function(e) {
        this.currentTime = e, this._player.events.halt()
    }, t.addSessionStateListener = function() {
        Do.castContext && Do.castContext.addEventListener(Do.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged)
    }, t.addCastStateListener = function() {
        Do.castContext && Do.castContext.addEventListener(Do.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)
    }, t.addMessageListener = function() {
        const e = Do.currentSession;
        e && e.addMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.onMessageReceived = function(e, t) {
        "MEDIA_FINISHED" === (t = JSON.parse(t)).type && ("END_OF_STREAM" === t.endedReason ? this.endVideo() : "ERROR" === t.endedReason && (this.endCurrentSession(), Do.fire(No.error, new Error("Chromecast encountered an error and media finished."))))
    }, t.addIsConnectedListener = function() {
        Do.remotePlayerController && Do.remotePlayerController.addEventListener(Do.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.addPreventLocalPlayerEvents = function() {
        this._player.events.prependOn([Bt._playButtonPressed, Bt._pauseButtonPressed, Bt._scrubbingStarted, Bt._scrubbingEnded, g.BUFFER_STARTED, g.BUFFER_ENDED, St._seek, Bt._volumeChanged, Bt._captionsChanged, Bt._configChanged, St._reset], this._preventPlayerDefaultEvent)
    }, t.addRemotePlayerListenersOnIdle = function() {
        this.removeRemotePlayerListenersOnIdle(), this.addIsMediaLoadedChangedListener(), this.addVolumeLevelChangedListener()
    }, t.addLocalPlayerListeners = function() {
        this._player.events.prependOn(Bt._playButtonPressed, this._onPlayOrPausePressed), this._player.events.prependOn(Bt._pauseButtonPressed, this._onPlayOrPausePressed), this._player.events.prependOn(Bt._scrubbingStarted, this._preventPlayerDefaultEvent), this._player.events.prependOn(Bt._scrubbingEnded, this._preventPlayerDefaultEvent), this._player.events.prependOn(g.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._player.events.prependOn(g.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._player.events.prependOn(St._seek, this._onControlSeek), this._player.events.prependOn(Bt._volumeChanged, this._onChangeVolume), this._player.events.on(Bt._captionsChanged, this._onCaptionsChanged), this._player.events.on(Bt._configChanged, this._onConfigChanged), this._player.events.on(St._reset, this._onReset)
    }, t.preventPlayerDefaultEvent = function() {
        this._player.events.halt()
    }, t.addCurrentTimeChangedListener = function() {
        Do.remotePlayerController && Do.remotePlayerController.addEventListener(Do.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.addIsMediaLoadedChangedListener = function() {
        Do.remotePlayerController && Do.remotePlayerController.addEventListener(Do.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.addPlayerStateChangedListener = function() {
        Do.remotePlayerController && Do.remotePlayerController.addEventListener(Do.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.addVolumeLevelChangedListener = function() {
        Do.remotePlayerController && (Do.remotePlayerController.addEventListener(Do.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), Do.remotePlayerController.addEventListener(Do.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.addRemotePlayerListenersOnPlaying = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.addCurrentTimeChangedListener(), this.addPlayerStateChangedListener()
    }, t.removeRemotePlayerListenersOnIdle = function() {
        this.removeIsMediaLoadedChangedListener(), this.removeVolumeLevelChangedListener()
    }, t.removeInitListeners = function() {
        Do.castContext && (Do.castContext.removeEventListener(Do.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged), Do.castContext.removeEventListener(Do.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)), Do.remotePlayerController && Do.remotePlayerController.removeEventListener(Do.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.removeRemotePlayerListenersOnPlaying = function() {
        this.removeCurrentTimeChangedListener(), this.removePlayerStateChangedListener()
    }, t.removeMessageListener = function() {
        const e = Do.currentSession;
        e && e.removeMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.removeCurrentTimeChangedListener = function() {
        Do.remotePlayerController && Do.remotePlayerController.removeEventListener(Do.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.removeIsMediaLoadedChangedListener = function() {
        Do.remotePlayerController && Do.remotePlayerController.removeEventListener(Do.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.removePlayerStateChangedListener = function() {
        Do.remotePlayerController && Do.remotePlayerController.removeEventListener(Do.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.removeVolumeLevelChangedListener = function() {
        Do.remotePlayerController && (Do.remotePlayerController.removeEventListener(Do.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), Do.remotePlayerController.removeEventListener(Do.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.removePreventLocalPlayerEvents = function() {
        this._player.events.off([Bt._playButtonPressed, Bt._pauseButtonPressed, Bt._scrubbingStarted, Bt._scrubbingEnded, g.BUFFER_STARTED, g.BUFFER_ENDED, St._seek, Bt._volumeChanged, Bt._captionsChanged, Bt._configChanged, St._reset], this._preventPlayerDefaultEvent)
    }, t.removeLocalPlayerListeners = function() {
        this._player.events.off(Bt._playButtonPressed, this._onPlayOrPausePressed), this._player.events.off(Bt._pauseButtonPressed, this._onPlayOrPausePressed), this._player.events.off(Bt._scrubbingStarted, this._preventPlayerDefaultEvent), this._player.events.off(Bt._scrubbingEnded, this._preventPlayerDefaultEvent), this._player.events.off(g.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._player.events.off(g.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._player.events.off(St._seek, this._onControlSeek), this._player.events.off(Bt._volumeChanged, this._onChangeVolume), this._player.events.off(Bt._captionsChanged, this._onCaptionsChanged), this._player.events.off(Bt._configChanged, this._onConfigChanged), this._player.events.off(St._reset, this._onReset)
    }, t.removeRemotePlayerListeners = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.removeRemotePlayerListenersOnIdle()
    }, t.removeAllRemoteListeners = function() {
        this.removeRemotePlayerListeners(), this.removeInitListeners()
    }, b(e, [{
        key: "currentTime",
        get: function() {
            return this.lastCurrentTime || 0
        },
        set: function(e) {
            Do.remotePlayer && Do.remotePlayerController && (Do.remotePlayer.currentTime = e, Do.remotePlayerController.seek(), this.lastCurrentTime = e)
        }
    }, {
        key: "isTimeEnded",
        get: function() {
            return this.lastCurrentTime + .5 >= this.duration
        }
    }, {
        key: "isOutroRendered",
        get: function() {
            return this._isOutroRendered || !1
        }
    }, {
        key: "isLooped",
        get: function() {
            return this._player.config.embed.loop
        }
    }, {
        key: "isEndOfVideo",
        get: function() {
            return this._isEndOfVideo || !1
        }
    }, {
        key: "volumeLevel",
        set: function(e) {
            Do.remotePlayer && Do.remotePlayerController && (Do.remotePlayer.volumeLevel = e, Do.remotePlayerController.setVolumeLevel())
        },
        get: function() {
            return Do.remotePlayer ? Do.remotePlayer.volumeLevel : 0
        }
    }, {
        key: "duration",
        get: function() {
            return this._player.config.video.duration
        }
    }, {
        key: "isPlayingOrPaused",
        get: function() {
            return Do.remotePlayer ? Do.remotePlayer.playerState === Do.PlayerState.PLAYING || Do.remotePlayer.playerState === Do.PlayerState.PAUSED : null
        }
    }, {
        key: "isIdle",
        get: function() {
            return Do.remotePlayer ? null === Do.remotePlayer.playerState || Do.remotePlayer.playerState === Do.PlayerState.IDLE : null
        }
    }, {
        key: "isMediaLoaded",
        get: function() {
            return !!Do.remotePlayer && Do.remotePlayer.isMediaLoaded
        }
    }]), e
}();
const Do = E(new(function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    C(t, e);
    var n = t.prototype;
    return n.init = function({
        appId: t,
        chromecastPlayer: n = null
    } = {}) {
        var i, o;
        return t || (t = (null == n || null == (i = n._player) ? void 0 : i.config.request.flags.ott) ? (null == n || null == (o = n._player) ? void 0 : o.config.ottCastOptions) ? n._player.config.ottCastOptions.appId ? n._player.config.ottCastOptions.appId : Oo.id : Ro.id : Io.id), this.chromecastPlayer = n, this.setup().then(n => (n && (e.prototype.init.call(this, {
            receiverApplicationId: t,
            autoJoinPolicy: this.AutoJoinPolicy.PAGE_SCOPED
        }), this.chromecastPlayer && this.chromecastPlayer.init(), this.fire(No.initialized)), n)).catch(e => (this.fire(No.error, e), Promise.reject(e)))
    }, n.dispose = function() {
        this.chromecastPlayer = null
    }, b(t, [{
        key: "chromecastPlayer",
        get: function() {
            return this._chromecastPlayer
        },
        set: function(e) {
            if (e && !(e instanceof Mo)) throw new SyntaxError("An invalid ChromecastPlayer was specified");
            this.chromecastPlayer && this.chromecastPlayer.dispose(), this._chromecastPlayer = e
        }
    }]), t
}(T)));

function xo(e) {
    return e.replace(/(_\w)/g, e => e[1].toUpperCase())
}

function Bo(e) {
    return function e(t, n) {
        return Object.keys(n).reduce((i, o) => (n[o] && "object" == typeof n[o] ? i[t(o)] = e(t, n[o]) : i[t(o)] = n[o], i), {})
    }(xo, e)
}
const Vo = e => ({
        type: "CONFIG_LOAD",
        payload: l({}, Bo(e))
    }),
    Uo = e => ({
        type: "LIVE_SETTINGS_UPDATE",
        payload: e
    });

function Fo(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.liveEvent ? l(l({}, e), n.video.liveEvent) : null;
        case "LIVE_UPDATE":
            return l(l({}, e), n);
        case "LIVE_SET_START_TIME":
            return l(l({}, e), {}, {
                ingest: l(l({}, e.ingest), {}, {
                    startTime: n
                })
            });
        case "LIVE_SETTINGS_UPDATE":
            return l(l({}, e), {}, {
                settings: l(l({}, e.settings), n)
            });
        default:
            return e
    }
}
const Ho = e => {
        var t;
        return !!(null == (t = e.liveEvent) ? void 0 : t.status)
    },
    qo = e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.status
    },
    Wo = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.scheduledStartTime) || null
    },
    $o = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.startTime) || null
    },
    Yo = e => {
        var t;
        return "pending" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Go = e => {
        var t;
        return "active" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    zo = e => {
        var t;
        return "started" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    jo = e => {
        var t;
        return "ended" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Ko = e => Ho(e) && !jo(e),
    Xo = e => {
        var t, n;
        return "done" === (null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status)
    },
    Zo = e => {
        var t, n;
        return null == e || null == (t = e.liveEvent) || null == (n = t.settings) ? void 0 : n.eventSchedule
    };
var Jo = Object.freeze({
    __proto__: null,
    default: Fo,
    liveExists: Ho,
    liveStatus: qo,
    liveArchiveStatus: e => {
        var t, n;
        return null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status
    },
    dashLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.dash_noredirect
    },
    hlsLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.hls
    },
    scheduledLiveStartTime: Wo,
    liveStartTime: $o,
    isLivePending: Yo,
    isLiveActive: Go,
    isLiveStarted: zo,
    isLiveEnded: jo,
    liveInProgress: Ko,
    isLiveArchived: Xo,
    hasEventSchedule: Zo
});

function Qo(e, t, n) {
    let i = null;

    function r() {
        return n.getAttribute("data-thumb")
    }

    function a() {
        return Ao(t.get("ui.player.width") * o.devicePixelRatio, t.get("ui.player.height") * o.devicePixelRatio)
    }

    function s() {
        return t.get(Ho) && !t.get(zo) || !e.config.embed.autoplay || Do.isCastConnected
    }

    function l() {
        if (!e.config.video.thumbs.base) return Promise.resolve();
        const {
            width: i,
            height: o
        } = a(), l = ko({
            width: i,
            height: o,
            baseUrl: e.config.video.thumbs.base
        });
        n.setAttribute("data-thumb", l), n.setAttribute("data-thumb-width", i);
        const c = Po(l).then(e => (t.dispatch(((e, t) => ({
            type: "PREVIEW_SET_SIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e.width, e.height)), s() && (n.style.backgroundImage = `url(${r()})`), e));
        return s() ? Promise.race([c, new Promise(e => setTimeout(e, 2e3))]) : Promise.resolve()
    }
    return i = l(), e.events.on(Bt._didEnterFullscreen, () => {
        n.classList.contains("vp-preview-invisible") && "beginning" !== e.config.embed.outro || (i = l())
    }), t.watch("ui.player.width", y(() => {
        i = i.then(() => function() {
            const {
                width: e
            } = a(), t = n.getAttribute("data-thumb-width");
            return e <= parseInt(t, 10) || 0 === e ? Promise.resolve() : l()
        }()).catch(e => {})
    }, 150)), t.watch("ui.preview.scaleFactor", e => {
        n.classList.toggle("vp-preview-cover", e > 1)
    }), {
        show: function() {
            n.style.backgroundImage = `url(${r()})`, n.classList.remove("vp-preview-invisible")
        },
        hide: function() {
            n.classList.add("vp-preview-invisible")
        },
        resetThumbnail: function() {
            n.setAttribute("data-thumb", ""), n.setAttribute("data-thumb-width", ""), n.style.backgroundImage = ""
        },
        getThumbnail: r,
        loadThumbnail: l,
        thumbnailPromise: i
    }
}
const er = e => ({
        type: "CAPTIONS_SET_FONT_SIZE",
        payload: e
    }),
    tr = e => ({
        type: "CAPTIONS_SET_FONT_FAMILY",
        payload: e
    }),
    nr = e => ({
        type: "CAPTIONS_SET_FONT_OPACITY",
        payload: e
    }),
    ir = e => ({
        type: "CAPTIONS_SET_COLOR",
        payload: e
    }),
    or = e => ({
        type: "CAPTIONS_SET_BACKGROUND_OPACITY",
        payload: e
    }),
    rr = e => ({
        type: "CAPTIONS_SET_BACKGROUND_COLOR",
        payload: e
    }),
    ar = e => ({
        type: "CAPTIONS_SET_WINDOW_OPACITY",
        payload: e
    }),
    sr = e => ({
        type: "CAPTIONS_SET_WINDOW_COLOR",
        payload: e
    }),
    lr = e => ({
        type: "CAPTIONS_SET_EDGE_STYLE",
        payload: e
    }),
    cr = () => ({
        bgColor: {
            items: [{
                id: "white",
                label: "White"
            }, {
                id: "yellow",
                label: "Yellow"
            }, {
                id: "green",
                label: "Green"
            }, {
                id: "cyan",
                label: "Cyan"
            }, {
                id: "blue",
                label: "Blue"
            }, {
                id: "magenta",
                label: "Magenta"
            }, {
                id: "red",
                label: "Red"
            }, {
                id: "black",
                label: "Black"
            }],
            id: "bgColor",
            cookie: "bg_color",
            title: "Color",
            dispatch: rr
        },
        color: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "color",
            cookie: "color",
            title: "Color",
            dispatch: ir
        },
        fontSize: {
            items: [{
                id: "0.5",
                label: "50%"
            }, {
                id: "1",
                label: "100%"
            }, {
                id: "1.5",
                label: "150%"
            }, {
                id: "2",
                label: "200%"
            }],
            id: "fontSize",
            cookie: "font_size",
            title: "Size",
            dispatch: er
        },
        fontFamily: {
            items: [{
                id: "monospace_serif",
                value: '"Courier New", Courier, monospace',
                label: "Monospace Serif"
            }, {
                id: "proportional_serif",
                value: "Georgia, Times, serif",
                label: "Proportional Serif"
            }, {
                id: "monospace_sans_serif",
                value: 'Monaco, "Lucida Console", monospace',
                label: "Monospace Sans-Serif"
            }, {
                id: "proportional_sans_serif",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Proportional Sans-Serif"
            }, {
                id: "casual",
                value: '"Comic Sans MS", sans-serif',
                label: "Casual"
            }, {
                id: "cursive",
                value: '"Apple Chancery", "Lucida Handwriting”, cursive',
                label: "Cursive"
            }, {
                id: "small_capitals",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Small Capitals"
            }],
            id: "fontFamily",
            cookie: "font_family",
            title: "Family",
            dispatch: tr
        },
        fontOpacity: {
            items: [{
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "fontOpacity",
            cookie: "font_opacity",
            title: "Opacity",
            dispatch: nr
        },
        edgeStyle: {
            items: [{
                id: "none",
                label: "None"
            }, {
                id: "shadow",
                label: "Drop Shadow"
            }, {
                id: "raised",
                label: "Raised"
            }, {
                id: "depressed",
                label: "Depressed"
            }, {
                id: "outline",
                label: "Outline"
            }],
            id: "edgeStyle",
            cookie: "edge",
            title: "Edge style",
            dispatch: lr
        },
        bgOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "bgOpacity",
            cookie: "bg_opacity",
            title: "Opacity",
            dispatch: or
        },
        windowColor: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "windowColor",
            cookie: "window_color",
            title: "Color",
            dispatch: sr
        },
        windowOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "windowOpacity",
            cookie: "window_opacity",
            title: "Opacity",
            dispatch: ar
        }
    }),
    dr = {
        fontSize: 1,
        fontFamily: "proportional_sans_serif",
        fontOpacity: "100",
        color: "#fff",
        bgOpacity: "100",
        bgColor: "black",
        windowOpacity: "0",
        windowColor: "#000",
        edgeStyle: "none"
    };

function ur(e) {
    return !0 === e || !1 === e ? Number(e) : "null" === e ? null : e
}

function pr(e, t = document.cookie) {
    try {
        if (t && "" !== t) return t.split(";").reduce((function(t, n) {
            return 0 === (n = n.trim()).indexOf(`${e}=`) ? decodeURIComponent(n.substr(e.length + 1)) : t
        }), null)
    } catch (ke) {}
    return null
}
const _r = ["quality", "volume", "captions", "transcript", "captions_color", "captions_font_family", "captions_font_size", "captions_font_opacity", "captions_bg_color", "captions_bg_opacity", "captions_edge", "captions_window_color", "captions_window_opacity", "audio_language", "audio_kind", "qoe_survey_vote"];
let vr, mr, fr = null;

function hr(e) {
    const t = cr(),
        n = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin);
    let i = 0;

    function o(e) {
        let t = null;
        try {
            t = pr("player")
        } catch (ke) {}
        if (!t) return null;
        t = t.substring(1, t.length - 1);
        const n = {};
        t.split("&").forEach((function(e) {
            e = e.split("="), n[e[0]] = ur(decodeURIComponent(e[1] || ""))
        }));
        const i = [].concat(e),
            o = i.reduce((function(e, t) {
                if (t in n) {
                    const i = parseFloat(n[t]);
                    return e[t] = isNaN(i) || "quality" === t ? n[t] : i, e
                }
                return e[t] = null, e
            }), {});
        return 1 === i.length ? o[e] : o
    }

    function r(t, n, i = !0) {
        e.doNotTrackEnabled || (n = ur(n), i && function(t, n) {
            if (fr) {
                const i = {
                    method: "set",
                    key: `sync_${t}`,
                    val: n,
                    session: e.config.request.session
                };
                return function(t) {
                    fr.then(n => {
                        const i = lt(e.config.request.urls.proxy);
                        return n.contentWindow.postMessage(t, i), n
                    }).catch(t => {
                        wo.captureException(t, {
                            extra: {
                                proxyUrl: e.config.request.urls.proxy
                            }
                        })
                    })
                }(i), void
                function(t) {
                    e.config.embed.on_site && window.postMessage(t, window.location.origin)
                }(i)
            }
            try {
                window.localStorage.setItem(`sync_${t}`, JSON.stringify(n))
            } catch (i) {}
        }(t, n), function(t, n) {
            _r.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            const i = [];
            _r.indexOf(t) >= 0 && null !== n && i.push(`${t}=${n}`);
            const r = o(_r);
            for (let e in r) e in r && null !== r[e] && e !== t && i.push(`${e}=${r[e]}`);
            ! function(e, t, n, {
                samesite: i,
                secure: o
            } = {}) {
                var r = new Date;
                r.setFullYear(r.getFullYear() + 1), r = r.toGMTString();
                var a = `${e}=${t=ur(t)}`;
                a += `;expires=${r}`, a += ";path=/", a += `;domain=${n}`, o && (a += ";secure"), i && (a += `;samesite=${i}`);
                try {
                    document.cookie = a
                } catch (ke) {
                    return !1
                }
            }("player", `"${i.join("&")}"`, e.config.request.cookie_domain, {
                secure: !0,
                samesite: "none"
            })
        }(t, n))
    }

    function a(t, n) {
        switch (t) {
            case "sync_quality":
                e.events.fire(St._changeQuality, n, !0);
                break;
            case "sync_volume":
                if (e.config.embed.settings.background) break;
                e.events.fire(St._changeVolume, n, !0);
                break;
            case "sync_captions":
                if (null === n) {
                    e.events.fire(St._turnCaptionsOff, !0);
                    break
                }
                e.events.fire(St._turnCaptionsOn, n, !0);
                break;
            case "sync_login":
                ! function(t) {
                    i > 4 || (i++, t && !e.config.user.logged_in ? e.events.fire(Bt._userLogIn) : !t && e.config.user.logged_in && e.events.fire(Bt._userLoggedOut))
                }(n);
                break;
            case "sync_active":
                null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(Bt._becameInactive)
        }
    }
    return e.events.on(Bt._qualityChanged, (function(e, t) {
            t || r("quality", e)
        })),
        function() {
            const t = (t, n) => {
                e.config.request.cookie.volume = ur(t), n || r("volume", t, !1)
            };
            e.events.on(Bt._volumeChanged, t), e.events.on(Bt._mutedChanged, (e, n) => {
                e && t(0, n)
            })
        }(), e.events.on(Bt._captionsChanged, (function(t, n) {
            if (t) {
                const i = `${t.language}.${t.kind}`;
                return e.config.request.cookie.captions = ur(i), void(n || r("captions", e.config.request.cookie.captions))
            }
            e.config.request.cookie.captions = null, n || r("captions", null)
        })), e.events.on(St._changeCaptionsStyles, (function(t, n) {
            const {
                dispatch: i,
                cookie: o
            } = t;
            e.store.dispatch(i(n)), r(`captions_${o}`, ur(n))
        })), e.events.on(St._resetCaptionsStyles, (function() {
            e.store.dispatch({
                type: "CAPTIONS_RESET"
            }), Object.keys(t).forEach(e => {
                const {
                    cookie: n
                } = t[e];
                r(`captions_${n}`, null)
            })
        })), e.events.on(Bt._transcriptChanged, (function(t, n) {
            if (t) return e.config.request.cookie.transcript = ur(t.language), void(n || r("transcript", e.config.request.cookie.transcript));
            e.config.request.cookie.transcript = null, n || r("transcript", null)
        })),
        function() {
            const t = ["descriptions", "main-desc"];
            e.events.on(St._changeAudioTrack, (function(n, i) {
                e.config.request.cookie.audio_language = (null == n ? void 0 : n.language) ? ur(n.language) : null, e.config.request.cookie.audio_kind = t.includes(null == n ? void 0 : n.kind) ? ur(n.kind) : null, i || (r("audio_language", e.config.request.cookie.audio_language), r("audio_kind", e.config.request.cookie.audio_kind))
            }))
        }(), e.events.on(Bt._qoeSurveyPresented, (function() {
            const t = Date.now();
            e.config.request.cookie.qoe_survey_vote = t, r("qoe_survey_vote", t)
        })), e.events.on(Bt._playButtonPressed, (function() {
            e.config.embed.settings.background || (r("active", e.config.request.session), e.events.fire(Bt._becameActive))
        })), e.events.on([Bt._pauseButtonPressed, Bt._ended], (function() {
            o("active") === e.config.request.session && r("active", null)
        })), e.events.on(Bt._userLoggedIn, (function() {
            r("login", !0)
        })), n && !fr && (fr = function(t) {
            return new Promise((n, i) => {
                document.createElement("a").href = e.config.request.urls.proxy;
                const o = document.createElement("iframe");
                o.src = t, o.setAttribute("title", "Vimeo LocalStorage Proxy"), o.setAttribute("aria-hidden", "true"), o.setAttribute("hidden", ""), o.onload = function(t) {
                    const n = lt(e.config.request.urls.proxy);
                    o.contentWindow.postMessage({
                        method: "ping"
                    }, n)
                }, o.onerror = function(e) {
                    i(e)
                };
                const r = setTimeout(() => {
                    i()
                }, 1e4);
                window.addEventListener("message", (function e(i) {
                    0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1), clearTimeout(r), n(o))
                }), !1), document.body.appendChild(o)
            })
        }(e.config.request.urls.proxy)), n ? window.addEventListener("message", (function(t) {
            const n = lt(e.config.request.urls.proxy);
            t.origin === n && "object" == typeof t.data && "key" in t.data && "newValue" in t.data ? a(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && a(t.data.key, t.data.val)
        }), !1) : window.addEventListener("storage", (function(e) {
            var t;
            if (0 === (null == (t = e.key) ? void 0 : t.indexOf("sync_")) && e.oldValue !== e.newValue) {
                try {
                    if (window.localStorage.getItem(e.key) !== e.newValue) return
                } catch (n) {}
                try {
                    a(e.key, JSON.parse(e.newValue))
                } catch (n) {
                    wo.captureException(n, {
                        extra: {
                            key: e.key,
                            oldValue: e.oldValue,
                            newValue: e.newValue
                        }
                    })
                }
            }
        }), !1), {
            reset: function() {
                r("login", !!e.config.user.logged_in)
            }
        }
}

function gr(e, t) {
    return function(e, t = null) {
        const n = {
            feature: t,
            $deeplink_path: "app.vimeo.com/" + e,
            $always_deeplink: !0,
            ref: "player",
            context: "player"
        };
        let i = "",
            o = [];
        for (let r in n) o.push(`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`);
        return i = o.join("&"), `https://bnc.lt/a/key_live_jpj6Duy53e6MhounkriNljdgsBhGbf0d?${i}`
    }(`videos/${e}`, t)
}! function(e) {
    e.started = "started", e.done = "done", e.error = "error"
}(vr || (vr = {})),
function(e) {
    e.pending = "pending", e.active = "active", e.started = "started", e.ended = "ended"
}(mr || (mr = {}));
const br = e => {
        var t;
        const n = null == e || null == (t = e.ingest) ? void 0 : t.start_time;
        if (!n) return 12e3;
        const i = 12e3 - (Date.now() - n);
        return Math.min(Math.max(i, 0), 12e3)
    },
    yr = e => !!e && e.status === mr.started && 0 === br(e);

function Er() {}

function Cr(e, t, n) {
    const i = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            return function(t, n) {
                var i = function() {
                    var t, n;
                    if (en.includes(null == e || null == (t = e.config) || null == (n = t.user) ? void 0 : n.id)) return function(e, t) {
                        return e && e.then ? e.then(Er) : Promise.resolve()
                    }(q(2e3))
                }();
                return i && i.then ? i.then(n) : n()
            }(0, (function() {
                e.loadConfigRequestObject()
            }))
        })),
        r = e.events;
    let a = e.backbone;
    const s = cr(),
        l = !e.config.embed.playsinline && (o.mobileAndroid || o.iOS && !o.iPad);
    var c = (o.iOS >= 8 || Wt) && !o.iPad,
        d = !1,
        u = !1,
        p = !1,
        _ = !1,
        v = null,
        m = !1,
        b = !1,
        y = !1,
        E = !1,
        C = !1,
        T = !1;

    function W(e) {
        a.element.classList.remove("invisible"), $()
    }

    function $() {
        let e = a.play();
        return T && (e = e.catch(Y)), e.catch(z).then(j)
    }

    function Y(e) {
        if (T = !1, G(e)) return r.fire(St._changeMuted, !0, !0), a.play();
        throw e
    }

    function G(e) {
        return e && ("NotAllowedError" === e.name || "AbortError" === e.name)
    }

    function z(e) {
        return r.fire(Bt._playRejected, e), new Promise(() => {})
    }

    function j() {
        r.fire(Bt._playResolved)
    }

    function K(e) {
        try {
            a.currentTime = e
        } catch (t) {}
    }

    function X() {
        _ || m || d && a.paused && $()
    }

    function Z() {
        let t = "none";
        ("metadata" === e.config.request.flags.preload_video || l || o.iOS >= 8 || Wt) && (t = "metadata"), "auto" === e.config.request.flags.preload_video && (t = "metadata", "MediaSourceScanner" === a.currentScannerName && (t = "auto")), o.isGoogleBot && (t = "none"), a.preload = t, r.on(Bt._mousedOver, (function() {
            e.config.request && "metadata_on_hover" === e.config.request.flags.preload_video && !p && e.verifyConfig().then(() => (a.preload = "metadata", !0)).catch(e => {})
        })), r.on(g.LOAD_SEGMENT_FAILED, (function(e) {
            wo.captureException(e)
        }))
    }

    function J() {
        C = !1;
        const t = a.video;
        if (a.loadVideo(e.config), !t)
            if (e.config.embed.texttrack) {
                let t = e.config.embed.texttrack;
                if (a.hasTextTrack(t)) {
                    const e = !0;
                    r.fire(St._turnCaptionsOn, t, e)
                }
            } else r.on(g.TEXT_TRACKS_AVAILABLE, () => {
                n(), i()
            }), n(), i();

        function n() {
            if (null === e.config.request.cookie.captions || "null" === e.config.request.cookie.captions);
            else if (a.hasTextTrack(e.config.request.cookie.captions)) {
                const t = !0;
                r.fire(St._turnCaptionsOn, e.config.request.cookie.captions, t)
            }
        }

        function i() {
            Object.keys(s).forEach(t => {
                var n;
                const {
                    dispatch: i,
                    items: o
                } = s[t], r = null == (n = e.config.request.cookie.captions_styles) ? void 0 : n[t], a = o.some(e => e.id === r);
                e.store.dispatch(i(a ? r : dr[t]))
            })
        }
    }

    function Q(e, t, n, i) {
        if (u) {
            const o = new XMLHttpRequest;
            o.open("DELETE", `${e}/plays/${t}/${n}?token=${i}`, !1), o.send(), u = !1
        }
    }

    function ee() {
        if (e.config.embed.autoplay) {
            var n, i;
            if (t.get(Ho) && !t.get(zo)) return;
            if (t.get(Ho) && !yr(null == (n = e.config.video) ? void 0 : n.live_event)) return void setTimeout((function() {
                r.fire(Bt._liveEventSafeToPlay), r.fire(Bt._playButtonPressed)
            }), br(null == (i = e.config.video) ? void 0 : i.live_event));
            r.fire(Bt._playButtonPressed)
        }
    }
    a.element.classList.add("invisible"), c && a.element.classList.add("hide-webkit-controls"), e.config.video.live_event && n.classList.add("live-background"), e.config.embed.transparent && n.classList.add("transparent"), t.watch(qo, (function(e) {
            "started" === e && setTimeout(() => {
                J(), a.element.classList.remove("invisible"), r.fire(Bt._liveEventSafeToPlay), r.fire(Bt._playButtonPressed)
            }, 12e3)
        })), t.watch(Xo, i), t.watch("ui.video.scaleFactor", e => {
            a.element.classList.toggle("vp-telecine-cover", e > 1)
        }),
        function t() {
            r.once(Bt._swapVideo, t), a = e.backbone, bt(a.on, r.fire, [w, L, S, A, f, k, P, I, O, R, N.ACTIVATED, N.AVAILABLE, N.DEACTIVATED, N.UNAVAILABLE, M.ARCHIVE_DONE, M.EVENT_ACTIVE, M.EVENT_ENDED, M.EVENT_STARTED, M.STREAM_OFFLINE, M.STREAM_ONLINE, M.BUFFER_GAP_JUMP, M.BUFFER_GAP_JUMP_PREVENT, M.STALL_JUMP, M.SETTINGS_UPDATED, M.LOW_LATENCY_FALLBACK, M.LIVE_STATS_SUCCESS, M.LIVE_STATS_FAILURE, D.MEDIASESSION_PAUSE, D.MEDIASESSION_PLAY, D.MEDIASESSION_SEEK_BACKWARD, D.MEDIASESSION_SEEK_FORWARD, g.AV_DURATION_MISMATCH, g.BANDWIDTH, g.BUFFER_ENDED, g.BUFFER_OCCUPANCY, g.BUFFER_STARTED, g.CHAPTER_CUES_UPDATED, g.CUE_POINT, g.CURRENT_FILE_CHANGE, g.DOWNLOAD_END, g.DOWNLOAD_TIMEOUT, g.DRM_AUTH_SUCCESS, g.DRM_KEY_SWITCH, g.DROPPED_FRAMES, g.MANIFEST_LOADED, g.MANIFEST_TIMEOUT, g.QUOTA_EXCEEDED_ERROR, g.SCANNER_CHANGE, g.STREAM_BUFFER_START, g.STREAM_CHANGE, g.STREAM_CHANGE_START, g.STREAM_TARGET_CHANGE, g.AVAILABLE_STREAMS_CHANGED, g.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, g.TEXT_TRACKS_AVAILABLE, g.DROPPED_FRAME_PERCENT_EXCEEDED, g.LOAD_SEGMENT_FAILED, g.AUDIO_TRACK_CHANGED, x.CAMERA_CHANGE, x.CAMERA_UPDATE, x.MOTION_END, x.MOTION_START, x.SPATIAL_UNSUPPORTED, x.WEBVR_ENTER, x.WEBVR_EXIT, x.WEBVR_HARDWARE_AVAILABLE, B.BRAIN_ML_SWITCH_TO_SKYFIRE, B.BRAIN_ML_MODEL_INPUTS, h.DURATION_CHANGE, h.ENDED, h.ERROR, h.LOAD_START, h.LOADED_DATA, h.LOADED_METADATA, h.PAUSE, h.PLAY, h.PLAYING, h.PROGRESS, h.RATE_CHANGE, h.RESIZE, h.SEEKED, h.SEEKING, h.STALLED, h.TIME_UPDATE, h.VOLUME_CHANGE, h.WAITING, h.ENTER_PICTURE_IN_PICTURE, h.LEAVE_PICTURE_IN_PICTURE, h.WEBKIT_BEGIN_FULLSCREEN, h.WEBKIT_END_FULLSCREEN])
        }(), bt(Do.on, r.fire, [No.connected, No.disconnected]), Z(), r.on(h.LOADED_METADATA, (function(t) {
            e.config.video.duration = a.duration, e.config.video.video_width = a.videoWidth, e.config.video.video_height = a.videoHeight
        })), r.on(h.DURATION_CHANGE, (function(t) {
            e.config.video.duration = a.duration
        })), r.on(g.SCANNER_CHANGE, () => {
            Z(), setTimeout(() => {
                r.fire(a.supportsSettingVolume ? St._enableVolume : St._disableVolume), r.fire(a.supportsTextTracks ? St._enableCaptions : St._disableCaptions)
            }, 0), wo.captureBreadcrumb(`Scanner changed to ${a.currentScannerName}`, {}, "video")
        }), r.on([M.EVENT_ACTIVE, M.EVENT_STARTED, M.EVENT_ENDED, M.ARCHIVE_DONE], n => {
            Object.assign(e.config.video.live_event, n), t.dispatch((e => ({
                type: "LIVE_UPDATE",
                payload: e
            }))(n))
        }), r.on(Bt._playButtonPressed, (function() {
            e.displayContext !== e.backbone ? e.displayContext.play() : function() {
                if ("disable" !== e.config.video.privacy && e.config.video.spatial && o.iOS && !C || a.element.classList.remove("invisible"), v) return r.fire(Bt._error, v), void e.preview.show();
                if (d = !0, m) e.preview.show();
                else {
                    if (a.off(h.PLAY, W), l && (b = !0, r.fire(St._forceFullscreen)), t.get(zo) && (T = !0), !p) return e.config.video.spatial && o.iOS && !C ? (C = !0, r.fire(St._showOverlay, "app-redirect", {
                        redirectUrl: e.doNotTrackEnabled ? e.config.video.share_url : gr(e.config.video.id, "player-spatial-redirect"),
                        title: null,
                        buttonText: "Watch in the Vimeo app",
                        ignoreText: null,
                        bottomText: "360 not supported in this browser",
                        newWindow: !e.config.embed.on_site
                    }), void r.once(h.PLAY, W)) : void $().then(() => {
                        !a.muted || !t.get(zo) && a.supportsSettingVolume || r.fire(Bt._muteAutoplayed)
                    }).catch(console.error);
                    p && X()
                }
            }()
        })).on(Bt._pauseButtonPressed, () => {
            d = !1, e.displayContext.pause()
        }).on(Bt._becameInactive, (function() {
            (window.location.search.indexOf("autopause=0") < 0 && !a.paused && !e.config.embed.settings.background || d) && (d = !1, r.fire(Bt._pauseButtonPressed))
        })), r.on(h.ERROR, (function(t) {
            if (G(t) && !T) {
                if (e.config.embed.autoplay = 0, a.pause(), e.startTime) return K(e.startTime), void r.fire(Bt._paused, a.currentTime);
                if (0 === a.currentTime) return void r.fire(St._reset);
                r.fire(Bt._paused, a.currentTime)
            }
        })), r.on(h.PLAY, (function(e) {
            a.element.classList.remove("invisible")
        })), r.on(h.PAUSE, (function(e, t) {
            _ || r.fire(Bt._paused, e, t)
        })), r.on(h.TIME_UPDATE, (function({
            currentTime: e
        }) {})), r.on(h.ENDED, (function(t) {
            _ || e.config.embed.loop || (b && r.fire(Bt._fullscreenButtonPressed), d = !1, r.fire(Bt._ended, t))
        })), r.on(g.DRM_AUTH_SUCCESS, () => {
            u = !0
        }), r.on(f, () => {
            p = !0, r.once(h.TIME_UPDATE, () => {
                r.fire(Bt._firstTimeUpdate)
            })
        }), r.on(g.BUFFER_STARTED, () => {
            _ || r.fire(wt._bufferStarted)
        }), r.on(B.BRAIN_ML_SWITCH_TO_SKYFIRE, () => {
            "ml_brain" in e.config.request.ab_tests && delete e.config.request.ab_tests.ml_brain
        }),
        function() {
            let t = !1,
                n = !1;

            function i(o) {
                if (t) return;
                if (o.name.includes(V)) return;
                if (o.name === U) return void r.fire(St._disableCaptions);
                wo.captureBreadcrumb(o.name, {
                    message: o.message
                }, "telecine error", "error");
                let a = e.config.video.live_event ? .25 : .01;
                if (o.name === F && !n) {
                    n = !0, a = .5;
                    const t = e.config.request,
                        i = t.files,
                        r = i.dash.cdns.fastly_skyfire.url,
                        s = i.hls.cdns.fastly_skyfire.url,
                        l = i.dash.cdns.akfire_interconnect_quic.url,
                        c = i.hls.cdns.akfire_interconnect_quic.url,
                        d = i.progressive.length ? i.progressive[0].url : null,
                        u = i.progressive.length ? i.progressive[0].id : null,
                        p = t.file_codecs,
                        _ = e.config.video.file_codecs,
                        v = e.config.user.logged_in,
                        m = t.build.js;
                    wo.captureBreadcrumb(o.name, {
                        fastly_dash_url: r,
                        fastly_hls_url: s,
                        akamai_dash_url: l,
                        akamai_hls_url: c,
                        prog_url: d,
                        prog_id: u,
                        file_codecs: p,
                        video_file_codecs: _,
                        logged_in: v,
                        version: m
                    }, "MediaUrlBadRequest config", "error")
                } - 1 !== o.name.indexOf("Mimir") && (a = .5, wo.captureBreadcrumb(o.name, o, "ABR", "error"));
                const s = "string" != typeof o.message ? o.name : o.message,
                    l = new Error(s);
                l.name = o.name;
                const c = "object" == typeof o.message ? o.message : null;
                wo.captureException(l, c, a);
                const d = nn[o.name];
                if ("function" != typeof d) return;
                const u = d();
                if (u.final && r.off(h.ERROR, i), v = u.deferred ? u.id : null, o.name === H) {
                    let t = e.config.request.dynamic_drm_translation_map,
                        n = o.message.code;
                    t && n && t[n] && (u.title = t[n].title, u.message = t[n].msg), wo.captureBreadcrumb("DRM failure", o, "video")
                }
                r.fire(Bt._error, u.id, u)
            }
            window.addEventListener("unload", () => {
                t = !0
            }, !1), r.on(h.ERROR, i), r.on("test-error", i)
        }(), r.on(St._changeLoop, (function(t) {
            const n = !!t && ("boolean" == typeof o.iOS || o.iOS >= 10);
            e.config.embed.loop = n, a.loop = n
        })), r.fire(St._changeLoop, e.config.embed.loop), r.on(Bt._chapterSeekAttempted, (t, n) => {
            e.events.fire(Bt._chapterSeek, n), e.events.fire(St._seek, t), p || r.fire(Bt._playButtonPressed)
        }), r.on(Bt._scrubbingStarted, (function() {
            m || (d = !a.paused, _ = !0, a.pause())
        })), r.on(Bt._scrubbingEnded, (function(e) {
            _ = !1, p ? e || X() : r.fire(Bt._playButtonPressed)
        })), r.on(St._seek, (function(e) {
            m || r.fire(St._setTime, e)
        })), r.on(St._setTime, (function(t) {
            p || e.fragmentsHandler.checkForNewFragment(t, a.duration), K(t)
        })),
        function() {
            r.on(St._changeVolume, (function(t, n, i) {
                i && (t += a.volume), t = mt(t = dt(t, 0, 1)), e.displayContext !== a && (e.displayContext.volume = t), a.volume = t, e.events.fire(Bt._volumeChanged, t, n), a.muted && e.events.fire(St._changeMuted, !1, n)
            })), r.on(St._changeMuted, (function(t, n = !1) {
                a.muted = !!t, e.events.fire(Bt._mutedChanged, t, n)
            })), r.on(h.VOLUME_CHANGE, () => {
                r.fire(Bt._volumeChanged, a.volume, !0)
            });
            const t = e.config.request.cookie.volume;
            r.fire(St._changeVolume, t, !0), r.fire(St._changeMuted, e.config.embed.muted, !0)
        }(),
        function() {
            let e;
            r.on(St._changeQuality, (function(n, i) {
                (a.video.currentFile.mime === Lt.dash || t.get(zo)) && (i = !0), e = i, a.quality = n
            })), r.on(k, (function(t) {
                r.fire(Bt._qualityChanged, t, e)
            }))
        }(),
        function() {
            let e = a.playbackRate;
            r.on(h.RATE_CHANGE, (function(t) {
                a.playbackRate !== e && (r.fire(Bt._playbackRateChanged, a.playbackRate, e), e = a.playbackRate)
            })), r.on(St._changePlaybackRate, (function(e) {
                a.playbackRate = e
            })), r.on(Bt._loadVideo, (function() {
                try {
                    a.playbackRate = 1
                } catch (e) {}
            }))
        }(),
        function() {
            function e(e) {
                m = !0, "interactive" !== e && p && !E && (d = d || !a.paused, a.pause(), r.fire(Bt._paused, a.currentTime))
            }

            function t() {
                m = !1, d && !E && (b || y || !l || r.fire(St._forceFullscreen), X())
            }
            r.on(Bt._overlayOpened, e), r.on(Bt._overlayClosed, t), r.on(Bt._menuVisibilityChanged, (function(n, i) {
                i && "preact-menu" !== i && i.isCentered() && (i.isVisible() ? e() : t())
            }))
        }(), r.on(Bt._popupOpened, (function(e) {
            p && !E && (d = !a.paused, a.pause())
        })), r.on(Bt._popupClosed, (function(e) {
            E || X()
        })), r.on(Bt._didEnterFullscreen, (function(t, n) {
            a.element.classList.remove("hide-webkit-controls"), t && (y = !0), t || (p || o.browser.safari || (a.poster = e.preview.getThumbnail()), b = !0, setTimeout(() => {
                a.textTracks.forEach(e => {
                    "hidden" === e.mode && (e.mode = "showing")
                })
            }, 500)), n || !o.windowsPhone || o.browser.edge || r.fire(St._toggleNativeControls, !0)
        })), r.on(Bt._didExitFullscreen, (function(e) {
            a.poster = "", e || a.pause(), p || a.element.classList.add("invisible"), b = !1, y = !1, c && a.element.classList.add("hide-webkit-controls"), a.textTracks.forEach(e => {
                "showing" === e.mode && (e.mode = "hidden")
            })
        })), r.on(f, (function() {
            a.poster = ""
        })), r.on(St._toggleNativeControls, (function(e) {
            if (e) return a.controls = !0, void n.classList.add("native-controls");
            a.controls = !1, n.classList.remove("native-controls")
        })), r.on(Bt._requestConfigReloaded, (function() {
            J()
        })), r.on(Bt._configChanged, (function() {
            J(), ee()
        })), r.on(St._reset, (function() {
            a.unload(), r.fire(Bt._paused, a.currentTime);
            const t = e.element.querySelector("[telecine-snapshot]");
            t && "none" !== t.style.display || (e.preview.show(), a.element.classList.add("invisible")), p = !1, d = !1, v = null
        })),
        function() {
            let t;
            r.on(St._turnCaptionsOn, (function(n, i = !1) {
                t = i;
                try {
                    (e.config.request.flags.ott || "dev" === e.config.request.build.js || "gedevplayer.vimeows.com" === e.config.player_url) && a.videoElement && a.videoElement.setAttribute("crossorigin", "anonymous"), a.enableTextTrack(n)
                } catch (o) {}
            })).on(St._turnCaptionsOff, (function(n = !1) {
                t = n, e.config.request.flags.ott && a.videoElement && a.videoElement.removeAttribute("crossorigin"), a.disableTextTrack()
            })), r.on(w, (function(e, n) {
                r.fire(Bt._captionsChanged, e, t || n)
            })), r.on(h.WEBKIT_BEGIN_FULLSCREEN, (function() {
                var e;
                null == (e = a.videoElement) || e.setAttribute("crossorigin", "anonymous")
            })), r.on(h.WEBKIT_END_FULLSCREEN, (function() {
                var t;
                e.config.request.flags.ott || null == (t = a.videoElement) || t.removeAttribute("crossorigin")
            }))
        }(), r.on(N.AVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    r.fire(Bt._airPlayAvailable)
            }
        })), r.on(N.UNAVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    r.fire(Bt._airPlayNotAvailable)
            }
        })), r.on(N.ACTIVATED, (function({
            type: e
        }) {
            switch (E = !0, e) {
                case "AirPlay":
                    r.fire(Bt._airPlayActivated)
            }
        })), r.on(N.DEACTIVATED, (function({
            type: e
        }) {
            switch (E = !1, e) {
                case "AirPlay":
                    r.fire(Bt._airPlayDeactivated)
            }
        })), r.on(Bt._airPlayButtonPressed, (function() {
            a.showExternalDisplayPicker("AirPlay")
        })), r.on(St._activatePictureInPicture, () => {
            a.pictureInPictureEnabled && a.requestPictureInPicture()
        }), r.on(St._deactivatePictureInPicture, () => {
            a.pictureInPictureEnabled && a.exitPictureInPicture()
        }), J(), o.spatialPlayback ? (r.fire(St._attachSpatialPlaybackEvents), r.on([h.PLAY, h.SEEKED], () => {
            r.fire(St._revealSpatialControls)
        }), r.on(x.SPATIAL_UNSUPPORTED, () => {
            p ? r.fire(wt._spatialFailure, m) : r.once(Bt._firstTimeUpdate, () => {
                r.fire(wt._spatialFailure, m)
            })
        })) : r.once(Bt._firstTimeUpdate, () => {
            e.config.video.spatial && r.fire(wt._spatialUnsupported, m)
        }), window.addEventListener("beforeunload", () => {
            const t = e.config.request.drm;
            t && Q(t.hoover_url, t.user, t.asset, t.hoover_token)
        }, !1), r.on(Bt._loadVideo, () => {
            const t = e.config.request && e.config.request.drm;
            t && Q(t.hoover_url, t.user, t.asset, t.hoover_token)
        }), e.events.on(St._destroy, () => a.destroy()), e.ready().then(() => (setTimeout(() => ee(), 0), e.startTime > 0 && r.fire(St._setTime, e.startTime, e.startTime / a.duration), null)).catch(e => {}), r.fire(Bt._videoModuleReady)
}

function Tr(e) {
    return "dev" === e.request.build.js ? "dev" : "4.27.3"
}

function wr(e) {
    switch (e.player_url) {
        case "player.vimeo.com":
            return "PROD";
        case "player-backend-ci.vimeows.com":
        case "master.playerci-py.vimeows.com":
            return "CI";
        case "player2.vimeo.dev":
            return "DEV";
        default:
            return
    }
}
const Lr = (e, t) => ({
    type: "WEBINAR_FORM_SUCCESS",
    payload: {
        formSuccess: e,
        registrantUuid: t
    }
});

function Sr(e, t) {
    var n, i, r, a, s, d, u = 0,
        p = {},
        v = new c;

    function m() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function b() {
        const t = e.backbone.getEffectByName("ThreeSixtyEffect");
        return o.spatialPlayback && t ? t.isStereo() ? 2 : 1 : 0
    }

    function y() {
        n = !1, i = e.backbone ? e.backbone.currentTime : 0, r = 0, a = 0, s = 0, d = !1
    }

    function E(t, n, i, o) {
        e.verifyConfig().then(() => {
            let r = n;
            r.signature = e.config.request.signature, r.session = e.config.request.session, r.time = e.config.request.timestamp, r.expires = e.config.request.expires;
            const a = JSON.stringify(r);
            if (null === r.sessionTime && (wo.captureBreadcrumb("sessionTime is null breadcrumbs", {
                    endpoint: t,
                    allParams: r
                }), wo.captureException("sessionTime is null when making stats request")), !e.config.request.urls.player_telemetry_url) throw new Error("Stats logging failed due to lack of telemetry host");
            const s = e.config.request.urls.player_telemetry_url + t;
            return v.logRequestPromiseWithUrl(s, a, !i).then(t => {
                if (200 !== t.status && o < 2) {
                    if (410 === t.status) return void e.events.once(Bt._requestConfigReloaded, () => {
                        E(s, n, i, o + 1)
                    });
                    setTimeout(() => {
                        E(s, n, i, o + 1)
                    }, 1e3)
                }
            }).catch(e => {
                throw e
            })
        }).catch(e => {})
    }

    function C(n, i, o) {
        const a = e.backbone.currentFile || {};
        let {
            id: s = 0,
            mime: c = Lt.h264,
            metadata: {
                profile: d = -1
            } = {}
        } = a;
        c === Lt.dash && ({
            id: s = 0,
            profile: d = -1
        } = p), e.performDelegateAction(xt, (u, p = {}) => {
            let v = u => {
                var _, v;
                let m = l(l({
                    referrer: e.config.request.referrer,
                    embed: !e.config.embed.on_site,
                    context: e.config.embed.context,
                    autoplay: p.continuous ? 2 : e.config.embed.autoplay,
                    loop: e.config.embed.loop ? 1 : 0,
                    id: e.config.video.id,
                    vodId: (null == (_ = e.config.video.vod) ? void 0 : _.id) ? e.config.video.vod.id : null,
                    vodSaleId: (null == (v = e.config.video.vod) ? void 0 : v.sale_id) ? e.config.video.vod.sale_id : null,
                    sessionTime: mt(r),
                    videoShape: e.config.video.spatial ? "mono" !== e.config.video.spatial.stereo_mode ? 2 : 1 : 0,
                    spatialPlayback: b(),
                    userId: e.config.user.id,
                    userAccountType: e.config.user.account_type,
                    userIsMod: e.config.user.mod ? 1 : 0,
                    teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                    teamId: e.config.user.team_id ? e.config.user.team_id : null,
                    ownerId: e.config.video.owner.id,
                    ownerAccountType: e.config.video.owner.account_type,
                    privacy: e.config.video.privacy,
                    rating: e.config.video.rating ? e.config.video.rating.id : null,
                    type: "html",
                    videoFileId: Number.isInteger(Number(s)) ? s : "0",
                    delivery: Ut[c],
                    profileId: d,
                    quality: a.metadata ? a.metadata.quality : null,
                    duration: mt(e.config.video.duration),
                    seconds: mt(i)
                }, u), {}, {
                    playbackRate: e.backbone.playbackRate,
                    build: Tr(e.config)
                });
                ! function(e, t, n) {
                    var i;
                    if (null == (i = e.user) ? void 0 : i.lead) {
                        var o, r;
                        const t = null == (o = e.user.lead) ? void 0 : o.id;
                        n.leadUuid = t, n.contentType = null == (r = e.user.lead) ? void 0 : r.type
                    } else if (e.video.webinar) {
                        const i = `${e.video.webinar.id}_webinar_registrant`;
                        if (!t.get("webinar.webinarRegistrantUuid")) {
                            const e = pr(i);
                            t.dispatch((e => ({
                                type: "WEBINAR_REGISTRANT_UUID_AVAILABLE",
                                payload: {
                                    registrantUuid: e
                                }
                            }))(e))
                        }
                        n.leadUuid = t.get("webinar.webinarRegistrantUuid")
                    }
                }(e.config, t, m), E(n, m, o)
            };
            const m = e.config.video.live_event ? 1 : 0;
            let f = t.get($o),
                h = {
                    isLive: m
                };
            if (m) {
                if (!f) return void _(`https://${e.config.vimeo_url}/live_event/status?clip_id=${e.config.video.id}`).json().then(e => (e && e.ingest && (t.dispatch((e => ({
                    type: "LIVE_SET_START_TIME",
                    payload: e
                }))(e.ingest.start_time)), f = t.get($o)), f && (h.liveStartTime = f), v(h), e)).catch(e => {});
                h.liveStartTime = f
            }
            v(h)
        })
    }

    function T() {
        !d && e.playLoggingEnabled && (d = !0, C("/log/play", e.backbone.currentTime))
    }

    function w(t = 0, i = !1, o = !0) {
        if (e.playLoggingEnabled) {
            var r = m();
            o && a + 1e3 > r || (a = r, n || C("/log/partial", t, i))
        }
    }

    function L(t, n) {
        var i, o;
        n = n || {};
        var r = {
            referrer: e.config.request.referrer,
            embed: !e.config.embed.on_site,
            context: e.config.embed.context,
            id: e.config.video.id,
            vodId: (null == (i = e.config.video.vod) ? void 0 : i.id) ? e.config.video.vod.id : null,
            vodSaleId: (null == (o = e.config.video.vod) ? void 0 : o.sale_id) ? e.config.video.vod.sale_id : null,
            userId: e.config.user.id,
            userAccountType: e.config.user.account_type,
            userIsMod: e.config.user.mod ? 1 : 0,
            ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
            duration: mt(e.config.video.duration),
            seconds: mt(e.backbone.currentTime),
            playbackRate: e.backbone.playbackRate,
            build: Tr(e.config)
        };
        for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
        E("/log/" + t, r)
    }
    return y(),
        function() {
            e.events.on(h.TIME_UPDATE, (function({
                currentTime: e,
                duration: t,
                timeProgress: o,
                playbackRate: a
            }) {
                var l = Math.floor(e);
                if (!n && s + 1e3 < m()) {
                    const t = 0 !== e && 0 === i;
                    e > i && !t && (r += (e - i) / a), i = e
                }
                l % 30 == 0 && w(e)
            })), e.events.on(Bt._playbackRateChanged, (function(t, n) {
                L("playback_rate_change", {
                    oldPlaybackRate: n
                }), w(e.backbone.currentTime)
            })), e.events.once(f, (function() {
                t.get(Ho) && t.get(zo) ? e.events.once(Bt._firstTimeUpdate, () => T()) : T()
            })), e.events.on(Bt._paused, (function(t) {
                e.backbone.ended || w(t)
            })), e.events.on(h.SEEKED, (function({
                currentTime: e
            }) {
                u = e, n || w(u)
            })), e.events.on(Bt._scrubbingStarted, (function() {
                s = m(), n = !0
            })), e.events.on(Bt._scrubbingEnded, (function() {
                i = e.backbone.currentTime, n = !1, w(i)
            })), e.events.on(Bt._prefsButtonPressed, (function() {
                w(e.backbone.currentTime)
            })), e.events.on(Bt._ended, (function() {
                e.backbone.isLive() || (r += e.config.video.duration - i), w(e.backbone.isLive() ? i : e.config.video.duration, !1, !1)
            })), e.events.on(g.STREAM_CHANGE, (function(e) {
                p = e
            }));
            let o = [],
                a = !1;

            function l() {
                o.length && e.performDelegateAction(xt, (t, n = {}) => {
                    var i, r;
                    E("/log/spatial", {
                        embed: !e.config.embed.on_site,
                        id: e.config.video.id,
                        context: e.config.embed.context,
                        ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                        referrer: e.config.request.referrer,
                        vodId: (null == (i = e.config.video.vod) ? void 0 : i.id) ? e.config.video.vod.id : null,
                        vodSaleId: (null == (r = e.config.video.vod) ? void 0 : r.sale_id) ? e.config.video.vod.sale_id : null,
                        userId: e.config.user.id,
                        userAccountType: e.config.user.account_type,
                        userIsMod: e.config.user.mod ? 1 : 0,
                        teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                        teamId: e.config.user.team_id ? e.config.user.team_id : null,
                        build: Tr(e.config),
                        motionLog: JSON.stringify(o)
                    }, !1)
                })
            }
            e.events.on(x.MOTION_START, () => {
                a = !0,
                    function t() {
                        let n = e.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates,
                            i = Math.round(100 * n.lat) / 100,
                            s = Math.round(100 * n.long) / 100;
                        const l = {
                            sessionTime: r,
                            videoTime: e.backbone.currentTime,
                            coordinates: {
                                lat: i,
                                lon: s
                            }
                        };
                        o.push(l), setTimeout(() => {
                            a && t()
                        }, 1e3)
                    }()
            }), e.events.on(x.MOTION_END, () => {
                a = !1, l()
            }), e.events.on(Bt._loadVideo, () => {
                l(), o = []
            }), window.addEventListener("unload", (function() {
                if (e.backbone && e.backbone.currentTime > 0) {
                    const t = !0,
                        n = !1;
                    w(e.backbone.currentTime, t, n), l()
                }
            }), !1)
        }(), [{
            type: "share_press",
            event: Bt._shareButtonPressed
        }, {
            type: "facebook_press",
            event: Bt._facebookButtonPressed
        }, {
            type: "twitter_press",
            event: Bt._twitterButtonPressed
        }, {
            type: "tumblr_press",
            event: Bt._tumblrButtonPressed
        }, {
            type: "email_press",
            event: Bt._emailButtonPressed
        }, {
            type: "embed_press",
            event: Bt._embedButtonPressed
        }, {
            type: "login_success",
            event: Bt._userLoggedIn
        }, {
            type: "airplay",
            event: Bt._airPlayActivated
        }, {
            type: "vod_press",
            event: Bt._vodButtonPressed
        }, {
            type: "collection_press",
            event: Bt._collectionsButtonPressed
        }, {
            type: "email_capture_submitted",
            event: Bt._emailCaptureSubmitted
        }].forEach((function(t) {
            e.events.on(t.event, function(e) {
                return function() {
                    L(e)
                }
            }(t.type))
        })), e.events.on(Bt._outroDisplayed, (function(t) {
            var n = {
                outroType: e.config.embed.outro,
                ownerAccountType: e.config.video.owner.account_type,
                playerWidth: e.element.clientWidth,
                playerHeight: e.element.clientHeight
            };
            (null == t ? void 0 : t.length) && (n.outroVideos = t.join(",")), L("outro_displayed", n)
        })).on(Bt._outroVideoPressed, (function(t) {
            L("outro_video_press", {
                ownerAccountType: e.config.video.owner.account_type,
                videoId: t
            })
        })).on(Bt._followButtonPressed, (function() {
            L("outro_follow_press", {
                add: !e.config.user.following
            })
        })).on(Bt._outroCtaPressed, (function(t) {
            L("outro_cta_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Bt._outroLinkPressed, (function(t) {
            L("outro_link_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Bt._outroImagePressed, (function(t) {
            L("outro_image_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Bt._likeButtonPressed, (function() {
            L("like_press", {
                add: !e.config.user.liked
            })
        })).on(Bt._watchLaterButtonPressed, (function() {
            L("watch_later_press", {
                add: !e.config.user.watch_later
            })
        })).on(Bt._popupOpened, (function(e) {
            0 === e.indexOf("login-") && L("login_attempt")
        })).on(Bt._captionsChanged, (function(e, t) {
            t || (e ? L("text_track_change", {
                textTrackLanguage: e.language,
                textTrackKind: e.kind
            }) : L("text_track_change"))
        })).on(Bt._badgePressed, (function(e) {
            1 !== e && 12 !== e || L("badge_press", {
                badgeId: e
            })
        })).on(Bt._overlayOpened, (function(e) {
            "email-capture" === e && L("email_capture_displayed")
        })).on(Bt._overlayClosed, (function(e) {
            "email-capture" === e && L("email_capture_dismissed")
        })).on(Bt._cardPressed, (function(t) {
            L("card_press", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: "link"
            })
        })).on(Bt._cardDisplayed, (function(t, n) {
            e.config.embed.editor || L("card_displayed", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: n.url ? "link" : "text"
            })
        })), e.events.on(Bt._configChanged, (function(e) {
            e && y()
        })), e.events.fire(Bt._statsModuleReady), {}
}
const Ar = {
    settings: {}
};

function kr(e = Ar, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return l(l({}, e), n.embed);
        default:
            return e
    }
}
var Pr = Object.freeze({
    __proto__: null,
    default: kr,
    transparent: e => e.embed.transparent
});

function Ir(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return l(l({}, e), n.video);
        default:
            return e
    }
}
const Or = e => e.video.height / e.video.width;
var Rr = Object.freeze({
    __proto__: null,
    default: Ir,
    ratio: Or
});

function Nr(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.webinar ? l(l({}, e), n.video.webinar) : null;
        case "WEBINAR_FORM_SUCCESS":
            return l(l({}, e), {}, {
                formSuccess: n.formSuccess,
                registrantUuid: n.registrantUuid
            });
        case "WEBINAR_REGISTRANT_UUID_AVAILABLE":
            return l(l({}, e), {}, {
                registrantUuid: n.registrantUuid
            });
        default:
            return e
    }
}
const Mr = e => {
        var t;
        return !!(null == (t = e.webinar) ? void 0 : t.formSuccess)
    },
    Dr = e => {
        var t;
        return null == (t = e.webinar) ? void 0 : t.registrantUuid
    };
var xr = Object.freeze({
    __proto__: null,
    default: Nr,
    webinarFormSuccess: Mr,
    webinarRegistrantUuid: Dr
});

function Br(e = {}, t) {
    switch (t.type) {
        case "CONTAINER_RESIZE":
            return l(l({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var Vr = Object.freeze({
    __proto__: null,
    default: Br,
    width: e => e.ui.container.width,
    height: e => e.ui.container.height
});

function Ur(e = {}, t) {
    switch (t.type) {
        case "PLAYER_CONTAINER_RESIZE":
            return l(l({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var Fr = Object.freeze({
    __proto__: null,
    default: Ur,
    width: e => e.ui.playercontainer.width,
    height: e => e.ui.playercontainer.height
});

function Hr(e = {}, t) {
    switch (t.type) {
        case "PREVIEW_SET_SIZE":
            return l(l({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var qr = Object.freeze({
    __proto__: null,
    default: Hr,
    scaleFactor: e => ct({
        width: e.ui.preview.width,
        height: e.ui.preview.height,
        elementWidth: ea.width(e),
        elementHeight: ea.height(e)
    }).scaleFactor
});

function Wr(e = dr, t) {
    switch (t.type) {
        case "CAPTIONS_RESET":
            return l(l({}, e), dr);
        case "CAPTIONS_SET_FONT_SIZE":
            return l(l({}, e), {}, {
                fontSize: t.payload
            });
        case "CAPTIONS_SET_COLOR":
            return l(l({}, e), {}, {
                color: t.payload
            });
        case "CAPTIONS_SET_FONT_FAMILY":
            return l(l({}, e), {}, {
                fontFamily: t.payload
            });
        case "CAPTIONS_SET_FONT_OPACITY":
            return l(l({}, e), {}, {
                fontOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_OPACITY":
            return l(l({}, e), {}, {
                bgOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_COLOR":
            return l(l({}, e), {}, {
                bgColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_COLOR":
            return l(l({}, e), {}, {
                windowColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_OPACITY":
            return l(l({}, e), {}, {
                windowOpacity: t.payload
            });
        case "CAPTIONS_SET_EDGE_STYLE":
            return l(l({}, e), {}, {
                edgeStyle: t.payload
            });
        default:
            return e
    }
}
var $r = Object.freeze({
    __proto__: null,
    default: Wr,
    calculatedFontSize: e => Math.max(10, Math.round(.045 * ea.height(e) * e.ui.captions.fontSize)),
    fontFamily: e => e.ui.captions.fontFamily,
    fontOpacity: e => e.ui.captions.fontOpacity,
    color: e => e.ui.captions.color,
    backgroundOpacity: e => e.ui.captions.bgOpacity,
    backgroundColor: e => e.ui.captions.bgColor,
    edgeStyle: e => e.ui.captions.edgeStyle
});
const Yr = e => {
        const t = t => Math.min(e.height(t) / Or(t), e.width(t)),
            n = t => Math.min(e.width(t) * Or(t), e.height(t)),
            i = i => ct({
                width: t(i),
                height: n(i),
                elementWidth: e.width(i),
                elementHeight: e.height(i)
            }).scaleFactor,
            o = e => i(e) > 1,
            r = n => n.embed.transparent && !o(n) ? t(n) : e.width(n),
            a = t => t.embed.transparent && !o(t) ? n(t) : e.height(t),
            s = e => e.embed.transparent && !o(e) ? "contain" : "100% 100%",
            l = G.createSelector(r, a, (e, t) => ({
                width: e,
                height: t
            })),
            c = G.createSelector(Or, s, (e, t, n) => ({
                ratio: e,
                size: t
            }));
        return {
            scaleFactor: i,
            width: r,
            height: a,
            size: s,
            boundingRect: l,
            settings: c
        }
    },
    Gr = {
        xxs: 0,
        xs: 390,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920
    },
    zr = (e, t) => {
        const n = G.createSelector(e, t, (e, t) => ({
                width: e,
                height: t
            })),
            i = e => {
                const {
                    height: t,
                    width: n
                } = e.video;
                return t > n
            },
            o = n => {
                const o = e(n),
                    r = t(n);
                if (i(n)) return o < 225;
                const a = z(n.embed.settings.customLogo) && o < 300 || r < 169,
                    s = !z(n.embed.settings.customLogo) && (o < 338 || r < 190);
                return a || s
            },
            r = t => {
                const n = e(t);
                if (i(t)) return n < 300;
                const o = z(t.embed.settings.customLogo) && n <= 375,
                    r = !z(t.embed.settings.customLogo) && n <= 450;
                return o || r
            },
            a = t => {
                const n = e(t);
                return n >= Gr.xxs && n < Gr.xs
            },
            s = t => {
                const n = e(t);
                return n >= Gr.xs && n < Gr.sm
            },
            l = t => {
                const n = e(t);
                return n >= Gr.sm && n < Gr.md
            },
            c = t => {
                const n = e(t);
                return n >= Gr.md && n < Gr.lg
            },
            d = t => {
                const n = e(t);
                return n >= Gr.lg && n < Gr.xl
            },
            u = t => {
                const n = e(t);
                return n >= Gr.xl && n < Gr.xxl
            },
            p = t => e(t) >= Gr.xxl;
        return {
            width: e,
            height: t,
            breakpoint: e => {
                const t = {
                    xxs: a,
                    xs: s,
                    sm: l,
                    md: c,
                    lg: d,
                    xl: u,
                    xxl: p
                };
                return Object.keys(Gr).find(n => t[n](e))
            },
            xxl: p,
            xl: u,
            lg: d,
            md: c,
            sm: l,
            xs: s,
            xxs: a,
            mode: e => o(e) ? "tiny" : r(e) ? "mini" : "normal",
            isMiniMode: r,
            isTinyMode: o,
            isVerticalVideo: i,
            boundingRect: n
        }
    };
var jr = Object.freeze({
        __proto__: null,
        scaleFactor: e => ct({
            width: e.video.width,
            height: e.video.height,
            elementWidth: ea.width(e),
            elementHeight: ea.height(e)
        }).scaleFactor
    }),
    Kr = Object.freeze({
        __proto__: null,
        isLinkTitleVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 203 || e.container.width >= 415,
        isLinkDescriptionVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 340 || e.container.width >= 415 && e.container.height >= 234
    }),
    Xr = Object.freeze({
        __proto__: null,
        isEmailCaptureVisible: ({
            ui: e
        }) => e.container.width >= 300 && e.container.height >= 169
    });
const Zr = e => ea.isVerticalVideo(e) ? ea.isTinyMode(e) : ea.isMiniMode(e) || ea.isTinyMode(e) || ea.xs(e) || ea.xxs(e);
var Jr = Object.freeze({
    __proto__: null,
    isPrefsMenuCentered: e => o.touch && ea.width(e) < 415,
    isMenuFullWidth: Zr,
    isMenuVerticalVideoMode: e => !Zr(e) && ea.isVerticalVideo(e) && ea.xxs(e) && ea.height(e) > 300,
    doMenuItemsWrap: e => ea.width(e) < 240
});

function Qr(e = {}, t, n) {
    return {
        container: Br(e.container, t),
        preview: Hr(e.preview, t),
        captions: Wr(e.captions, t),
        playercontainer: Ur(e.playercontainer, t)
    }
}
const ea = zr(e => ia.width(e), e => ia.height(e)),
    ta = zr(e => na.width(e), e => na.height(e)),
    na = Yr(Vr),
    ia = Yr(Fr);
var oa = Object.freeze({
    __proto__: null,
    default: Qr,
    container: Vr,
    player: ea,
    appLayout: na,
    playerLayout: ia,
    preview: qr,
    video: jr,
    outro: Kr,
    overlay: Xr,
    controlbar: Jr,
    captions: $r,
    playercontainer: Fr,
    app: ta
});

function ra(e = {}, t) {
    const n = l(l({}, function(e = {}, t) {
        switch (t.type) {
            case "CONFIG_LOAD":
                return l(l({}, e), t.payload);
            default:
                return e
        }
    }(e, t)), {}, {
        embed: kr(e.embed, t),
        video: Ir(e.video, t),
        liveEvent: Fo(e.liveEvent, t),
        webinar: Nr(e.webinar, t)
    });
    return l(l({}, n), {}, {
        ui: Qr(e.ui, t)
    })
}
var aa = Object.freeze({
        __proto__: null,
        default: ra,
        embed: Pr,
        video: Rr,
        liveEvent: Jo,
        ui: oa,
        webinar: xr
    }),
    sa = j((function(e) {
        ! function() {
            var t = {
                templates: {},
                render: function(e, n) {
                    return t.templates[e] ? t.templates[e].call(t, n || {}) : ""
                },
                map: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                },
                escape: function(e) {
                    return null == e ? "" : String(e).replace(/[&<>"'\\/]/g, (function(e) {
                        return t.map[e]
                    }))
                },
                helpers: {}
            };
            t.templates.adcountdown = function(e) {
                return '<div class="vp-ads-tag hidden"><span class="vp-ads-countdown"></span></div>'
            }, t.templates.buffer_pattern = function(e) {
                return '<pattern id="' + e.id + '" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern>'
            }, t.templates.compass = function(e) {
                var t = "";
                return t += this.render("tooltip", {
                    text: e.label
                }) || "", t += '<svg viewBox="0 0 36 36"> ', 1 == e.version ? t += ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-45, 18, 18)" d="M0,0 m18,18 l12,0 A12,12 0 0,0 18,6 z"/><circle fill="none" class="compass-ring" stoke-width="3" r="14.5" cx="18" cy="18"></circle><polygon class="compass-dimple" points="16,3.5 18,1 20,3.5"/> ' : t += ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-30, 18, 18)" d="M0,0 m18,18 l13,0 A13,13 0 0,0 11.500000000000004,6.741669750802297 z"/><circle class="compass-centercircle" r="3" cx="18" cy="18"></circle><path class="compass-line" stroke-linecap="round" d="M0,18 L36,18 z" /> ', t + "</svg>"
            }, t.templates.logo = function(e) {
                return '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" focusable="false" aria-labelledby="logo-icon-title" role="img"><title id="logo-icon-title">Vimeo</title><g><path class="fill logo-v" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill logo-i" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill logo-m" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill logo-e" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill logo-o" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>'
            }, t.templates.outer = function(e) {
                var t = '<div class="vp-content-area-background"></div><div class="vp-video-wrapper" data-content-area-sibling-eligible><div class="vp-video"><div class="vp-telecine"></div></div><div class="vp-preview" id="vp-preview"></div></div><div class="vp-text-alert-wrapper hidden" data-content-area-sibling-eligible><div class="vp-alert-text"></div><div class="vp-alert-time"><div class="vp-live-start-time-title"></div><div class="vp-live-start-time-body"></div><div class="vp-live-start-time-footer"></div></div></div><div class="vp-target" data-content-area-sibling-eligible></div><div class="vp-outro-wrapper hidden" hidden data-content-area-sibling-eligible><div class="vp-outro" role="dialog"></div></div><div class="vp-player-ui-container" data-content-area-sibling-eligible></div><div class="vp-player-ui-overlays" data-content-area-sibling-eligible><div class="vp-wirewax-wrapper"></div></div><div class="vp-controls-wrapper" data-content-area-sibling-eligible></div><div class="vp-overlay-wrapper hidden" role="dialog" aria-modal="true" aria-labelledby="vp-overlay-labelledby" hidden data-content-area-sibling-eligible><div class="vp-overlay-bg"></div><div class="vp-overlay-cell"><div class="vp-overlay"></div><div class="vp-overlay-icon-wrapper hidden"><div class="vp-overlay-icon"></div></div><div class="vp-overlay-logo logo"></div></div><nav><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">';
                return t += this.render("icon_prev") || "", t += '</button><button type="button" class="vp-nav-closeButton js-close" aria-label="' + e.strings.close + '">', (t += this.render("icon_close") || "") + '</button></nav></div><div class="vp-notification-wrapper hidden" hidden data-content-area-sibling-eligible><div class="vp-notification-cell"><div class="vp-notification" role="dialog" aria-live="assertive"></div></div></div><span id="new-window" hidden>This opens in a new window.</span>'
            }, t.templates.threesixty_reminder = function(e) {
                var t = '<div class="intro-wrap text-only"><div> ';
                return e.showArrows && (t += ' <div class="key-wrapper"><div class="key-row"><div class="key"><div class="arrow arrow-top"></div></div></div><div class="key-row"><div class="key"><div class="arrow arrow-left"></div></div><div class="key"><div class="arrow arrow-down"></div></div><div class="key"><div class="arrow arrow-right"></div></div></div></div> '), t + " <div>" + e.text + "</div></div></div>"
            }, t.templates.time_series_graph = function(e) {
                return '<svg width="' + e.width + '" height="' + e.height + '" viewBox="0 0 ' + e.width + " " + e.height + '"><g><polyline stroke="white" fill="none" points="' + e.points + '"></polyline></g><g> ' + e.markers + " </g></svg>"
            }, t.templates.notice = function(e) {
                return "<h3><span>" + e.strings.text + "<span></h3>"
            }, t.templates.stream_studder = function(e) {
                var t = "<h3> ";
                return (t += this.render("icon_warning") || "") + ' <span>Having issues? <button type="button" class="vp-alert-button-link button-link" aria-label="Switch to auto" data-alert-autofocus data-close data-context="suggestion">Switch to Auto</button> for smoother streaming.</span></h3>'
            }, t.templates.warning_alert = function(e) {
                var t = "<h3> ";
                return (t += this.render("icon_warning") || "") + " <span>" + e.strings.text + "<span></h3>"
            }, t.templates.icon_broken_heart = function(e) {
                return '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>'
            }, t.templates.icon_check = function(e) {
                return "<svg xmlns='http://www.w3.org/2000/svg' class='check-icon' viewBox='-4 -4 18 18'><path class='fill' fill='#ffffff' d='M10.9 2.9l-.7-.7c-.2-.2-.6-.2-.8-.1L5 6.6 2.6 4.1c-.2-.1-.6-.1-.7 0l-.8.8c-.1.1-.1.5 0 .7l3.1 3.1c.4.4 1 .4 1.4 0l5.1-5.1c.3-.2.3-.6.2-.7z'/></svg>"
            }, t.templates.icon_clock = function(e) {
                return '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>'
            }, t.templates.icon_close = function(e) {
                return '<svg viewBox="0 0 20 20" class="icon-close"><path d="M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z" fill="#fff" fill-rule="evenodd"></path></svg>'
            }, t.templates.icon_embed = function(e) {
                return '<svg class="embed-icon" viewBox="0 0 55 48" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="embed-icon-title" role="img"><title id="embed-icon-title">' + e.title + '</title><polygon class="fill" points="16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"/><polygon class="fill" points="42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"/><polygon class="fill" points="24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"/></svg>'
            }, t.templates.icon_facebook = function(e) {
                return '<svg class="facebook-icon" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="fb-icon-title" role="img"><title id="fb-icon-title">' + e.title + '</title><path class="fill" d="M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"/></svg>'
            }, t.templates.icon_follow = function(e) {
                return '<svg class="icon icon-follow" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid" focusable="false"><defs><clipPath id="icon-mask--check"><rect x="0" y="0" width="24" height="24" /></clipPath></defs><path class="icon-path icon-path--plus fill" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/><path class="icon-path icon-path--check fill" d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" clip-path="url(#icon-mask--check)"/><path class="icon-path icon-path--close fill" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>'
            }, t.templates.icon_heart = function(e) {
                return '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>'
            }, t.templates.icon_lock = function(e) {
                return '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>'
            }, t.templates.icon_mail = function(e) {
                return '<svg class="mail-icon" viewBox="0 0 72 72" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="mail-icon-title" role="img"><title id="mail-icon-title">' + e.title + '</title><path class="fill" d="M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"/><path class="fill" d="M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"/><path class="fill" d="M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"/><path class="fill" d="M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"/></svg>'
            }, t.templates.icon_prev = function(e) {
                return '<svg class="icon-prev" viewBox="0 0 27 48" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"/></svg>'
            }, t.templates.icon_tumblr = function(e) {
                return '<svg class="tumblr-icon" viewBox="0 0 12 20" focusable="false" aria-labelledby="tumblr-icon-title" role="img"><title id="tumblr-icon-title">' + e.title + '</title><path class="fill" d="M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"/></svg>'
            }, t.templates.icon_twitter = function(e) {
                return '<svg class="twitter-icon" viewBox="0 0 274 223" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="twitter-icon-title" role="img"><title id="twitter-icon-title">' + e.title + '</title><path class="fill" d="M85.98,222 C54.305,222 24.822,212.715 0,196.801 C4.388,197.319 8.853,197.584 13.38,197.584 C39.658,197.584 63.843,188.617 83.039,173.574 C58.495,173.121 37.781,156.905 30.644,134.621 C34.068,135.276 37.582,135.627 41.196,135.627 C46.312,135.627 51.267,134.942 55.974,133.66 C30.314,128.508 10.981,105.838 10.981,78.662 C10.981,78.426 10.981,78.191 10.985,77.957 C18.548,82.158 27.196,84.681 36.391,84.972 C21.341,74.914 11.438,57.746 11.438,38.287 C11.438,28.008 14.204,18.373 19.032,10.089 C46.696,44.023 88.025,66.353 134.641,68.692 C133.685,64.587 133.188,60.306 133.188,55.91 C133.188,24.935 158.302,-0.178 189.279,-0.178 C205.411,-0.178 219.988,6.634 230.22,17.535 C242.996,15.019 255,10.351 265.837,3.924 C261.649,17.021 252.756,28.013 241.175,34.955 C252.521,33.599 263.331,30.584 273.39,26.123 C265.87,37.371 256.36,47.25 245.402,55.158 C245.51,57.563 245.564,59.982 245.564,62.414 C245.564,136.533 189.148,222 85.98,222"/></svg>'
            }, t.templates.icon_vod = function(e) {
                return '<svg class="vod-icon" viewBox="0 0 21 23" focusable="false"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"/></svg>'
            }, t.templates.icon_vod_download = function(e) {
                return '<svg class="vod-download-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z"/><path class="fill" d="M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z"/></svg>'
            }, t.templates.icon_vod_rent = function(e) {
                return '<svg class="vod-rent-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z"/><path class="fill" d="M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z"/></svg>'
            }, t.templates.icon_vod_subscribe = function(e) {
                return '<svg class="vod-subscribe-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z"/><path class="fill" d="M13 20v-8l8 4"/></svg>'
            }, t.templates.icon_warning = function(e) {
                return '<svg class="warning-icon" focusable="false" width="36" height="32.326" viewBox="287.915 380.297 36 32.326"><path d="M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"/></svg>'
            }, t.templates.app_redirect = function(e) {
                var t = '<div class="vp-overlay-content"> ';
                return e.strings.title && (t += ' <div class="app-redirect-title">' + e.strings.title + "</div> "), e.hideRedirectButton || (t += ' <div class="' + (e.strings.title ? "" : "app-redirect--topspace") + '"><a class="app-redirect-button" href="' + e.redirectUrl + '" role="button"', e.newWindow && (t += ' data-new-window="1" target="_blank" rel="noopener"'), t += ' aria-describedby="new-window">' + e.strings.buttonText + "</a></div> "), e.strings.ignoreText && (t += ' <div class="app-redirect-ignore">' + e.strings.ignoreText + "</div> "), e.strings.bottomText && (t += ' <div class="app-redirect-bottom-text">' + e.strings.bottomText + "</div> "), t + "</div>"
            }, t.templates.email_capture = function(e) {
                var t = '<div class="vp-email-capture-wrapper ';
                return e.showWebinarForm && (t += "vp-webinar-wrapper"), t += '"><div class="vp-email-capture ', e.registrationFull && (t += "hidden"), t += '"> ', e.text || (t += ' <div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> "), t += ' <form class="vp-email-capture-form" novalidate><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.event_is_live
                }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || "" : t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.unscheduled
                }) || ""), t += ' <div class="vp-email-capture-title" id="vp-overlay-labelledby"> ', e.showWebinarForm && e.showWebinarLogin ? t += this.render("email_capture_title", {
                    title: e.reg_login_title
                }) || "" : e.text && (t += this.render("email_capture_title", {
                    title: e.text
                }) || ""), t += ' </div></div><div class="vp-email-capture-form-fields-bubble-wrapper"><div class="vp-email-capture-form-fields-wrapper"><div class="vp-email-capture-form-fields-slider"> ', t += this.render("email_capture_fields", {
                    customFields: e.customFields
                }) || "", t += ' </div></div><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-message"></div></div></div><div class="vp-email-capture-form-buttons"><input class="vp-email-capture-form-button vp-email-capture-form-button--back" tabIndex="-1" type="button" value="' + e.strings.back + '" aria-hidden="true"><div class="vp-email-capture-form-button--next-submit-wrapper"><div class="vp-email-capture-form-button--next-submit-slider"><input class="vp-email-capture-form-button vp-email-capture-form-button--next" tabIndex="-1" type="button" value="' + e.strings.next + '" aria-hidden="true"><input class="vp-email-capture-form-button vp-email-capture-form-button--submit" tabIndex="-1" type="submit" value="' + e.strings.submit + '" aria-hidden="true"></div></div></div> ', e.showWebinarForm ? t += this.render("webinar_disclaimer", {
                    text: e.strings.webinar,
                    url: e.privacyPolicy
                }) || "" : t += this.render("email_capture_disclaimer", {
                    text: e.strings,
                    url: e.privacyPolicy
                }) || "", e.showWebinarForm && (t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', t += this.render("webinar_registration_bypass_btn", {
                    showWebinarLogin: e.showWebinarLogin,
                    regBypass: e.strings.webinar.reg_bypass,
                    getGoBack: e.strings.webinar.reg_go_back
                }) || "", t += " </div> "), t += ' </form><div class="vp-email-capture-form-skip"> ', e.allowSkip && (t += this.render("email_capture_skip", {
                    position: e.position,
                    skipText: e.strings.skip,
                    skipToVideoText: e.strings.skip_to_video,
                    positionIsAfter: e.positionIsAfter
                }) || ""), t += ' </div><div class="vp-email-capture-progress-wrapper"><div class="vp-email-capture-steps"> ' + e.strings.step + ' <span class="vp-email-capture-current-step"></span> ' + e.strings.of + ' <span class="vp-email-capture-total-steps">' + e.customFields.length + '</span></div><div class="vp-email-capture-progress-bar"><span class="vp-email-capture-progress-meter"></span></div></div></div><div class="vp-email-capture-thank-you hidden"><div class="vp-email-capture-thank-you-box"><h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.successful + "</p></div> ", e.positionIsAfter || (t += ' <div class="vp-email-capture-video-countdown vp-email-capture-video-countdown-meter-wrapper" aria-label="' + e.strings.video_starts + '"><div class="vp-email-capture-video-countdown-meter"></div><div class="vp-email-capture-video-countdown-meter-text"> ' + e.strings.video_starts + ' <span class="vp-email-capture-video-countdown-timer"></span></div></div> '), t += ' </div><div class="vp-email-capture-reg-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.reg_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.reg_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-login-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.login_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.login_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-reg-full ', e.registrationFull || (t += "hidden"), t += '"><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.event_is_live
                }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || "" : t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.unscheduled
                }) || ""), t += " </div> ", t += this.render("webinar_full", {
                    text: e.strings.webinar.reg_full
                }) || "", t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', (t += this.render("webinar_registration_bypass_btn", {
                    showWebinarLogin: e.showWebinarLogin,
                    regBypass: e.strings.webinar.reg_bypass,
                    getGoBack: e.strings.webinar.reg_go_back
                }) || "") + ' </div></div></div><div class="vp-email-capture-dropdown-overlay"></div>'
            }, t.templates.email_capture_disclaimer = function(e) {
                var t = '<div class="vp-email-capture-disclaimer-wrapper"><div class="vp-email-capture-disclaimer" value="';
                return t += this.escape(e.text.disclaimer) || "", t += '">', t += this.escape(e.text.disclaimer) || "", t += "</div> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.privacy_policy + "</a> "), t + "</div>"
            }, t.templates.email_capture_field = function(e) {
                var t = "";
                if ("dropdown" === e.field.field_type && e.field.field_metadata && e.field.field_metadata.options) {
                    if (e.field.required) {
                        t += ' <div class="vp-email-capture-form-custom-field required vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly required /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option-disabled" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                        for (var n = 0; n < e.field.field_metadata.options.length; n++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[n].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[n].option_label + " </li> ";
                        t += " </ul></div></div> "
                    } else {
                        t += ' <div class="vp-email-capture-form-custom-field vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                        for (var i = 0; i < e.field.field_metadata.options.length; i++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[i].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[i].option_label + " </li> ";
                        t += " </ul></div></div> "
                    }
                    t += ""
                } else e.field.required ? (t += ' <div class="vp-email-capture-form-custom-field required" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" maxlength="180" tabIndex="-1" required /></div> ') : (t += ' <div class="vp-email-capture-form-custom-field" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="180" /></div> '), t += "";
                return t + ""
            }, t.templates.email_capture_fields = function(e) {
                for (var t = "", n = 0; n < e.customFields.length; n++) t += this.render("email_capture_field", {
                    field: e.customFields[n]
                }) || "", t += "";
                return t + ""
            }, t.templates.email_capture_logo = function(e) {
                var t = '<img src="';
                return (t += this.escape(e.url) || "") + '" alt="" class="vp-email-capture-logo">'
            }, t.templates.email_capture_skip = function(e) {
                var t = "";
                return e.positionIsAfter && (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipText + '">'), t += "", e.positionIsAfter || (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipToVideoText + '">'), t + ""
            }, t.templates.email_capture_start_time = function(e) {
                return '<div class="vp-email-capture-start-time"> ' + e.startTime + "</div>"
            }, t.templates.email_capture_title = function(e) {
                var t = "";
                return (t += this.escape(e.title) || "") + ""
            }, t.templates.error = function(e) {
                var t = '<div class="vp-overlay-content error"><div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> ";
                return e.title && (t += " <h1>" + e.title + "</h1> "), e.message && (t += " <p>" + e.message + "</p> "), t + "</div>"
            }, t.templates.outro_email = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t + '></div><div class="vp-outro-content vp-outro-content--email vp-outro-shade js-outro-content"></div>'
            }, t.templates.outro_image = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--image js-outro-content"> ';
                return e.url && (t += '<a class="vp-outro-imageLink js-imageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), e.bgimage && (t += '<div class="vp-outro-image" style="background-image: url(' + e.bgimage + ');"', e.alt_text && (t += ' aria-label="', t += this.escape(e.alt_text) || "", t += '" role="img"'), t += "></div>"), e.url && (t += "</a>"), t + "</div>"
            }, t.templates.outro_link = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--link vp-outro-shade js-outro-content"><div class="vp-outro-linkWrapper js-outro-linkWrapper"> ', e.title && (t += '<h1 class="vp-outro-textTitle js-outro-title">', t += this.escape(e.title) || "", t += "</h1>"), e.description && (t += '<p class="vp-outro-textDescription js-outro-text">', t += this.escape(e.description) || "", t += "</p>"), e.text && e.url && (t += ' <div class="vp-outro-buttonWrap"><a class="vp-outro-button js-cta" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window"><span>', t += this.escape(e.text) || "", t += "</span></a></div> "), e.text2 && e.url2 && (t += ' <div class="vp-outro-linkWrap js-outro-linkWrap"><a class="vp-outro-link js-link" href="' + e.url2 + '" target="_blank" rel="noopener" aria-describedby="new-window">', t += this.escape(e.text2) || "", t += "</a></div> "), t + " </div></div>"
            }, t.templates.outro_nothing = function(e) {
                return '<div class="vp-outro-bg"></div><div class="vp-outro-content vp-outro-content--nothing vp-outro-shade js-outro-content"></div>'
            }, t.templates.outro_share = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--share vp-outro-shade js-outro-content"></div><nav class="panel-nav"><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">', (t += this.render("icon_prev") || "") + "</button></nav>"
            }, t.templates.outro_staticimage = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--staticImage js-outro-content"><div class="vp-outro-staticImageWrapper"> ';
                return e.url && (t += '<a class="vp-outro-staticImageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), t += ' <img class="vp-outro-staticImage" src="' + e.svg_url + '"> ', e.url && (t += "</a>"), t + " </div></div>"
            }, t.templates.outro_text = function(e) {
                return '<div class="vp-outro-content vp-outro-content--text vp-outro-shade js-outro-content"><div class="vp-outro-textWrapper"><div class="vp-outro-text">' + e.text + "</div></div></div>"
            }, t.templates.outro_videos = function(e) {
                var t = '<div class="vp-outro-bg"';
                e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--videos vp-outro-shade js-outro-content"> ';
                for (var n = 0; n < e.contexts.length; n++) {
                    var i = e.contexts[n];
                    t += ' <div class="vp-outro-videosSection vp-outro-videosSection--' + i.videos.length, i.promoted && (t += " vp-outro-videosSection--promoted"), t += '"><div class="vp-outro-videosHeaderWrapper"><header class="vp-outro-videosHeader"><h1 class="vp-outro-videosTitle">' + i.context + "</h1> ", e.showFollowButton && !i.promoted && (t += ' <div class="vp-outro-followWrap js-outro-followWrap"><button type="button" class="vp-outro-follow js-outro-follow" aria-label="' + e.strings.follow + '" aria-pressed="', e.following ? t += "true" : t += "false", t += '"> ', t += this.render("icon_follow") || "", t += ' <span class="vp-outro-follow-text" data-label-follow="' + e.strings.follow + '" data-label-following="' + e.strings.following + '" data-label-unfollow="' + e.strings.unfollow + '"></span></button></div> '), t += ' </header></div><ul class="vp-outro-videos vp-outro-videos--' + i.videos.length + '"> ';
                    for (var o = 0; o < i.videos.length; o++) t += ' <li><a class="vp-outro-videoLink js-videoLink', 1 == n && (t += " hovered"), t += '" href="' + i.videos[o].url + '" ', e.target && (t += ' target="_blank" rel="noopener" '), t += ' data-video-id="' + i.videos[o].id + '" aria-describedby="new-window" ><div class="vp-outro-imgWrapper" style="background-image: url(' + i.videos[o].thumbnail + ')"></div><header class="vp-outro-videoHeader" id="vp-outro-videoHeader"><h1 class="vp-outro-videoTitle">', t += this.escape(i.videos[o].title) || "", t += "</h1> ", i.videos[o].byline && (t += ' <h2 class="vp-outro-videoByline">', t += this.escape(i.videos[o].byline) || "", t += "</h2> "), t += " </header></a> ";
                    t += " </ul></div> "
                }
                return t + "</div>"
            }, t.templates.outro_vod = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--vod vp-outro-shade js-outro-content"><div class="vp-outro-vodWrapper"><h1 class="vp-outro-vodHeader" aria-describedby="new-window"><a href="' + e.url + '" target="_blank" rel="noopener">';
                t += this.escape(e.title) || "", t += "</a></h1> ";
                var n = e.countries,
                    i = e.country;
                if (this.helpers.isAvailableInCountry(n, i))
                    if (e.purchased) t += ' <a class="vp-outro-vodButton vp-outro-vodButton--watch js-vod-watch" role="button" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.strings.watch + "</a> ";
                    else {
                        if (!e.isComingSoon) {
                            t += ' <ul class="vp-outro-vod"> ';
                            for (var o = 0; o < e.buttons.length; o++) {
                                t += ' <li class="vp-outro-vod-item"><a class="vp-outro-vodButton vp-outro-vodButton--' + e.buttons[o].type + ' js-vod-button" role="button" href="' + e.url + "#buy=" + e.buttons[o].product_id + '" target="_blank" rel="noopener" data-product-id="' + e.buttons[o].product_id + '" aria-describedby="new-window" ><div class="vp-outro-vodIcon"> ', "buy" === e.buttons[o].type ? t += this.render("icon_vod_download") || "" : "rent" === e.buttons[o].type ? t += this.render("icon_vod_rent") || "" : "subscribe" === e.buttons[o].type ? t += this.render("icon_vod_subscribe") || "" : t += this.render("icon_vod") || "", t += " </div> ";
                                var r = e.currency,
                                    a = e.buttons[o];
                                t += " <p>" + this.helpers.formatVodLabel(e.translationMap, "outro_string", r, a) + "</p></a></li> "
                            }
                            t += " </ul> "
                        }(e.isPreorder || e.isComingSoon) && (t += " <p>" + e.strings.preRelease + "</p> ")
                    }
                return t + " </div></div>"
            }, t.templates.password = function(e) {
                return '<div class="vp-overlay-content password form"><h1 class="header" id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><form action="' + e.action + '" method="post" novalidate><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-arrow-clipper"><div class="vp-validation-bubble-arrow"></div></div><div class="vp-validation-bubble-message"></div></div><input class="js-password" type="password" name="password" placeholder="' + e.strings.password + '" required aria-required="true" aria-label="' + e.strings.password + '"><input type="submit" value="' + e.strings.watch + '"></form></div>'
            }, t.templates.private_locked = function(e) {
                return '<div class="vp-overlay-content login"><h1 id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><a href="' + e.action + '" class="popup js-login" target="_blank" rel="noopener" role="button" aria-describedby="new-window">' + e.strings.buttonText + "</a></div>"
            }, t.templates.share = function(e) {
                var t = '<div class="vp-share-wrapper js-share"><section class="vp-share-screen vp-share-screen--share' + (e.embedOnly ? " cloaked" : "") + ' js-share-screen"><h1 class="vp-share-title vp-share-title--share" id="vp-overlay-labelledby">' + e.strings.share + '</h1><ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--facebook js-facebook" href="' + e.playerShareUrl + "/facebook" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.facebookIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--twitter js-twitter" href="' + e.playerShareUrl + "/twitter" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.twitterIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--tumblr js-tumblr" href="' + e.playerShareUrl + "/tumblr" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.tumblrIcon + " </a> ";
                return e.shareUrl && (t += ' <li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--email js-email" href="mailto:?subject=', t += encodeURIComponent(e.strings.emailSubject) || "", t += "&amp;body=", t += encodeURIComponent(e.strings.emailBody) || "", t += '" role="button" aria-describedby="new-window" > ' + e.emailIcon + " </a> "), t += " </ul> ", e.embed && (t += ' <ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--embed js-embed" href="' + e.url + '#share" target="_blank" rel="noopener" role="button" > ' + e.embedIcon + " </a></li></ul> "), e.shareUrl && (t += ' <p class="vp-share-footnote vp-share-footnote--share"><a class="clip_url" href="' + e.shareUrl + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.shareUrl + "</a></p> "), t += " </section> ", e.embed && (t += ' <section class="vp-share-screen vp-share-screen--embed' + (e.embedOnly ? "" : " cloaked") + ' js-embed-screen"><div class="vp-share-embedWrapper"><h1 class="vp-share-title vp-share-title--embed">' + e.strings.embedTitle + '</h1><p class="vp-share-subtitle vp-share-subtitle--embed">' + e.strings.embedSubtitle + '</p><div class="vp-share-embedCode form"><div><input class="vp-share-embedInput js-embed-input" type="text" name="embed_code" title="Embed code" value="' + e.embedCode + '" spellcheck="false" aria-readonly="true"', e.readOnly && (t += " readonly"), t += "></div> ", e.copyButton && (t += ' <button type="button" class="vp-share-embedCopy js-embedCopy" data-clipboard-text=\'' + e.embedCode + "' data-label=\"" + e.strings.copy + '" data-success-label="' + e.strings.copySuccess + '">' + e.strings.copy + "</button> "), t += " </div> ", e.customizeEmbed && (t += ' <p class="vp-share-footnote vp-share-footnote--embed">' + e.strings.customize + "</p> "), t += " </div></section> "), t + "</div>"
            }, t.templates.webinar_confirmation = function(e) {
                var t = '<div class="vp-email-capture-reg-thank-you"><div class="vp-email-capture-thank-you-box"> ';
                return e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t + ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.thank_you_subtitle + "</p></div></div>"
            }, t.templates.webinar_disclaimer = function(e) {
                var t = '<div class="vp-email-capture-disclaimer-wrapper vp-webinar-disclaimer-wrapper"> ';
                return t += ' <div class="vp-webinar-compliance-checkbox-border"><input type="checkbox" class="vp-disclaimer-checkbox"></div><div class="vp-disclaimer-text-wrapper"><label for="vp-disclaimer-checkbox" class="vp-email-capture-disclaimer vp-webinar-disclaimer"> ' + e.text.disclaimer + " </label> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.host_privacy_policy + "</a> "), t + ' <div class="vp-opt-in-bubble hidden"><p class="vp-opt-in-bubble-message">' + e.text.opt_in_error + "</p></div></div></div>"
            }, t.templates.webinar_ended = function(e) {
                var t = '<div class="vp-text-alert-wrapper "> ';
                return e.strings.title && (t += ' <div class="vp-alert-text">' + e.strings.title + "</div> "), t + "</div>"
            }, t.templates.webinar_full = function(e) {
                return '<div class="vp-reg-full-wrapper"><h2 class="vp-reg-full-text"> ' + e.text + " </h2></div>"
            }, t.templates.webinar_registration_bypass_btn = function(e) {
                var t = "";
                return e.showWebinarLogin ? e.showWebinarLogin && !e.registrationFull && (t += ' <button class="vp-email-capture-reg-go-back vp-webinar-email-capture-reg-go-back">' + e.regGoBack + "</button>") : t += ' <button class="vp-email-capture-reg-bypass">' + e.regBypass + "</button>", t + ""
            }, e.exports ? e.exports = t : window.Aftershave = t
        }()
    }));
const la = function(e) {
    return (t, ...n) => (n.forEach(n => {
        for (const i in n) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            Object.defineProperty(t, i, Object.assign(o, e))
        }
    }), t)
}({
    enumerable: !0,
    configurable: !0,
    writeable: !1
});

function ca(e, t, n) {
    const i = c() ? n.parentElement : n,
        o = n.querySelector(".vp-video-wrapper"),
        r = K(s, 150),
        a = K(l, 150);

    function s() {
        const {
            width: e,
            height: n
        } = st(i);
        t.dispatch(((e, t) => ({
            type: "CONTAINER_RESIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e, n))
    }

    function l() {
        const {
            width: e,
            height: n
        } = st(o);
        t.dispatch(((e, t) => ({
            type: "PLAYER_CONTAINER_RESIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e, n))
    }

    function c() {
        return n.parentElement === document.body
    }

    function d({
        size: e,
        ratio: t,
        bottom: o
    }) {
        c() && (i.classList.toggle("vp-center", "contain" === e), function(e, t) {
            [].concat(["height", "max-width", "max-height", "bottom"]).map(t => e.style.removeProperty(t))
        }(n), "contain" !== e ? o > 0 && gt(n, {
            height: `calc(100% - ${o}px)`,
            bottom: `${o/2}px`
        }) : gt(n, o > 0 ? {
            maxWidth: `calc((100vh - ${o}px) / ${t})`,
            maxHeight: `calc(100vh - ${o}px)`,
            height: `calc(${t} * 100vw)`,
            bottom: `${o/2}px`
        } : {
            maxWidth: `calc(100vh / ${t})`,
            height: `calc(${t} * 100vw)`
        }))
    }
    t.watch("ui.appLayout.settings", d), d(t.get("ui.appLayout.settings")), new X(r).observe(i), new X(a).observe(o), window.addEventListener("orientationchange", r), window.addEventListener("orientationchange", a), e.events.on(Bt._didEnterFullscreen, r), e.events.on(Bt._didExitFullscreen, r), e.events.on(Bt._didEnterFullscreen, a), e.events.on(Bt._didExitFullscreen, a), s(), l()
}

function da(e) {
    return e.account_type && "basic" !== e.account_type && !/_lapsed|_expired/.test(e.account_type)
}

function ua(e) {
    const {
        videoObject: t
    } = _a();
    null == e || !e.length || null != t && t.transcript || pa({
        transcript: e.map(({
            text: e
        }) => e).join(" ")
    })
}

function pa(e) {
    const {
        videoObject: t,
        element: n
    } = _a();
    if (t) try {
        Object.assign(t, e), n.textContent = JSON.stringify(t)
    } catch (i) {}
}

function _a() {
    const e = document.body.querySelector("script[type='application/ld+json']");
    if (e) try {
        return {
            videoObject: JSON.parse(e.textContent),
            element: e
        }
    } catch (t) {}
    return {}
}

function va(e, t) {
    switch (e.view) {
        case Ft.privateLocked:
            throw new Z("The video is private.", "PrivacyError", t);
        case Ft.privatePassword:
            throw new Z("The video is password-protected. The viewer must enter the password first.", "PasswordError", t);
        case Ft.error:
            throw new Z(e.message, "NotFoundError", t)
    }
}

function ma(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push([e.start(n), e.end(n)]);
    return t
}

function fa() {
    try {
        return window.self !== window.top
    } catch (ke) {
        return !0
    }
}
let ha, ga, ba;
! function(e) {
    e.WEB_GLOBAL = "vimeo.web_global", e.COPY_VIDEO_EMBED_CODE = "workflow.copy_video_embed_code", e.PLAYER_PERFORMANCE_MEASUREMENT = "vimeo.player_performance_measurement", e.CHAPTER_SEGMENT_CLICK = "vimeo.chapter_segment_click", e.CLICK = "vimeo.click", e.TIMING_OBJECT_CONNECT = "vimeo.timing_object_connect", e.TIMING_OBJECT_DISCONNECT = "vimeo.timing_object_disconnect", e.EMBEDDED_TRANSCRIPT_CLICK = "vimeo.embedded_transcript_click", e.CLOSED_CAPTIONS_CLICK = "vimeo.closed_captions_click", e.MULTI_AUDIO_TRACK_CLICK = "vimeo.multi_audio_track_click", e.VIEW_PLAYER_CSAT_V1 = "vimeo.view_player_csat_v1", e.SELECT_THUMBS_UP_PLAYER_CSAT_V1 = "vimeo.select_thumbs_up_player_csat_v1", e.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1 = "vimeo.select_thumbs_down_player_csat_v1", e.DISMISS_PLAYER_CSAT_V1 = "vimeo.dismiss_player_csat_v1"
}(ha || (ha = {})),
function(e) {
    e.TEAM = "team_context", e.ACTION = "action_context", e.VIEW = "view_context", e.WEB = "web_context", e.VIDEO = "video_context", e.PLAYER = "player_context"
}(ga || (ga = {})),
function(e) {
    e[e.WEB_GLOBAL = 5] = "WEB_GLOBAL", e[e.COPY_VIDEO_EMBED_CODE = 5] = "COPY_VIDEO_EMBED_CODE", e[e.PLAYER_PERFORMANCE_MEASUREMENT = 1] = "PLAYER_PERFORMANCE_MEASUREMENT", e[e.CHAPTER_SEGMENT_CLICK = 2] = "CHAPTER_SEGMENT_CLICK", e[e.CLICK = 83] = "CLICK", e[e.TIMING_OBJECT_CONNECT = 1] = "TIMING_OBJECT_CONNECT", e[e.TIMING_OBJECT_DISCONNECT = 1] = "TIMING_OBJECT_DISCONNECT", e[e.EMBEDDED_TRANSCRIPT_CLICK = 6] = "EMBEDDED_TRANSCRIPT_CLICK", e[e.CLOSED_CAPTIONS_CLICK = 2] = "CLOSED_CAPTIONS_CLICK", e[e.MULTI_AUDIO_TRACK_CLICK = 1] = "MULTI_AUDIO_TRACK_CLICK", e[e.TEAM = 5] = "TEAM", e[e.ACTION = 5] = "ACTION", e[e.VIEW = 3] = "VIEW", e[e.WEB = 10] = "WEB", e[e.VIDEO = 2] = "VIDEO", e[e.PLAYER = 2] = "PLAYER", e[e.DEFAULT = -1] = "DEFAULT"
}(ba || (ba = {}));
const ya = {
        [ha.WEB_GLOBAL]: ba.WEB_GLOBAL,
        [ha.COPY_VIDEO_EMBED_CODE]: ba.COPY_VIDEO_EMBED_CODE,
        [ha.PLAYER_PERFORMANCE_MEASUREMENT]: ba.PLAYER_PERFORMANCE_MEASUREMENT,
        [ha.CHAPTER_SEGMENT_CLICK]: ba.CHAPTER_SEGMENT_CLICK,
        [ha.CLICK]: ba.CLICK,
        [ha.TIMING_OBJECT_CONNECT]: ba.TIMING_OBJECT_CONNECT,
        [ha.TIMING_OBJECT_DISCONNECT]: ba.TIMING_OBJECT_DISCONNECT,
        [ha.EMBEDDED_TRANSCRIPT_CLICK]: ba.EMBEDDED_TRANSCRIPT_CLICK,
        [ha.CLOSED_CAPTIONS_CLICK]: ba.CLOSED_CAPTIONS_CLICK,
        [ha.MULTI_AUDIO_TRACK_CLICK]: ba.MULTI_AUDIO_TRACK_CLICK,
        [ha.VIEW_PLAYER_CSAT_V1]: ba.DEFAULT,
        [ha.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: ba.DEFAULT,
        [ha.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: ba.DEFAULT,
        [ha.DISMISS_PLAYER_CSAT_V1]: ba.DEFAULT,
        [ga.TEAM]: ba.TEAM,
        [ga.ACTION]: ba.ACTION,
        [ga.VIEW]: ba.VIEW,
        [ga.WEB]: ba.WEB,
        [ga.VIDEO]: ba.VIDEO,
        [ga.PLAYER]: ba.PLAYER
    },
    Ea = [ga.PLAYER, ga.VIDEO, ga.WEB, ga.TEAM],
    Ca = {
        [ha.VIEW_PLAYER_CSAT_V1]: [].concat(Ea, [ga.VIEW]),
        [ha.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: [].concat(Ea, [ga.ACTION]),
        [ha.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: [].concat(Ea, [ga.ACTION]),
        [ha.DISMISS_PLAYER_CSAT_V1]: [].concat(Ea, [ga.ACTION])
    };
let Ta, wa, La;
! function(e) {
    e.WORKFLOW = "Workflow", e.PLAYBACK = "Playback"
}(Ta || (Ta = {}));
let Sa = function() {
    function e(e) {
        this.player = e, this._configure(), this._setupEventListeners()
    }
    var t = e.prototype;
    return t._configure = function() {
        const e = "PROD" === wr(this.player.config) ? J.Service.FRESNEL_PROD : J.Service.FRESNEL_DEV,
            t = ka(ha.WEB_GLOBAL, this.player.config),
            n = new J.Configuration(e, t);
        J.BigPictureClient.configure(n)
    }, t._setupEventListeners = function() {
        this.player.events.on(h.TIME_UPDATE, ({
            currentTime: e
        }) => {
            La = e
        }), this.player.events.on(Bt._transcriptSessionStarted, ({
            id: e,
            startTime: t,
            defaultLanguage: n
        }) => {
            wa = {
                id: e,
                startTime: t,
                defaultLanguage: n
            }
        })
    }, e
}();

function Aa(e) {
    return ya[e]
}

function ka(e, t, n = {}) {
    const i = function(e, t, n = {}) {
            return Object.assign({}, function(e, t) {
                var n, i, r, a, s;
                const {
                    user: l,
                    request: c,
                    video: d,
                    embed: u
                } = t;
                switch (e) {
                    case ha.WEB_GLOBAL:
                        return {
                            user: {
                                subscription_type: l.account_type || null,
                                is_mod: !!l.mod,
                                session_id: c.session || null,
                                teams: l.team_id ? [{
                                    team_id: l.team_id,
                                    team_role: so(t)
                                }] : [],
                                user_id: l.id || null,
                                vuid: pr("vuid") || null,
                                flags: c.flags ? Object.keys(c.flags) : null,
                                is_free_trial: !1
                            },
                            application: {
                                application: "vimeo",
                                vimeo_language: c.lang || "en",
                                product: no(t),
                                build_environment: "production",
                                version: io()
                            },
                            platform: {
                                device_language: null !== (n = null == (i = window.navigator) ? void 0 : i.language) && void 0 !== n ? n : "",
                                screen: {
                                    dpi: screen.pixelDepth,
                                    height: screen.height,
                                    width: screen.width,
                                    size: `${screen.width} x ${screen.height}`
                                },
                                network: null,
                                platform: "web"
                            }
                        };
                    case ha.COPY_VIDEO_EMBED_CODE:
                        return {
                            hash: d.unlisted_hash,
                            height: d.height,
                            is_video_password_protected: "password" === d.privacy,
                            product: Ta.WORKFLOW,
                            sizing: u.playsinline ? "fixed" : "responsive",
                            video_embed_privacy: d.embed_permission,
                            video_id: `${d.id||""}`,
                            video_privacy: d.privacy,
                            width: d.width,
                            actor_resource_role: null,
                            actor_team_role: null,
                            entry_page: null,
                            is_preset_applied: null,
                            location: null,
                            page: null,
                            path: null,
                            team_owner_id: null,
                            team_size: null,
                            team_subscription_type: null,
                            upload_id: null,
                            video_app_id: null,
                            video_status: null,
                            video_type: null
                        };
                    case ha.PLAYER_PERFORMANCE_MEASUREMENT:
                        return {
                            module_player: !1,
                            device_type: ro(),
                            browser: Object.keys(o.browser).find(e => o.browser[e]) || "",
                            device_os: ao(),
                            iframed: fa(),
                            measurement_type: null,
                            measurement_value: null
                        };
                    case ha.CHAPTER_SEGMENT_CLICK:
                        return {
                            video_id: d.id,
                            team_owner_id: d.owner.id,
                            is_creator_mode: !!l.owner,
                            chapter_seek_event_delta: null,
                            fragment_no_chapters_at_seek: null,
                            is_chapter_seek: null,
                            nearest_chapter_start_time: null,
                            seek_event_start_time: null,
                            total_no_chapters_at_seek: null
                        };
                    case ha.CLICK:
                        return {
                            page: Ji(t),
                            click_type: null,
                            copy: null,
                            device_type: null,
                            feature: null,
                            location: null,
                            name: null,
                            path: null,
                            target: null,
                            target_path: null,
                            type: null
                        };
                    case ha.EMBEDDED_TRANSCRIPT_CLICK:
                        return {
                            video_id: d.id,
                            team_owner_id: d.owner.id,
                            total_clip_duration: mt(d.duration, 2),
                            embedded_transcript_session_id: null == (r = wa) ? void 0 : r.id,
                            session_duration: mt(Vn(null == (a = wa) ? void 0 : a.startTime), 2),
                            default_transcript_language: null == (s = wa) ? void 0 : s.defaultLanguage,
                            video_timestamp: mt(La, 2) || 0,
                            copy: null,
                            current_transcript_language: null,
                            element: null,
                            location: null,
                            name: null
                        };
                    case ha.CLOSED_CAPTIONS_CLICK:
                        return {
                            video_id: d.id,
                            video_privacy: d.privacy,
                            final_action_reset_all: null,
                            has_changed_background: null,
                            has_changed_font: null,
                            has_changed_window: null,
                            has_clicked_background: null,
                            has_clicked_window: null,
                            has_clicked_customize: null,
                            has_clicked_font: null,
                            has_customized: null,
                            has_reset_all: null,
                            language_selected: null
                        };
                    case ha.MULTI_AUDIO_TRACK_CLICK:
                        return {
                            video_id: `${d.id||""}`,
                            video_privacy: d.privacy,
                            video_owner_id: `${d.owner.id}`,
                            page: Ji(t),
                            event_name: null,
                            has_selected_track: null,
                            initial_track: null,
                            track_selected: null
                        };
                    default:
                        return {}
                }
            }(e, t), n)
        }(e, t, n),
        r = Aa(e);
    return new J.Event(e, r, i)
}

function Pa(e, t, n = {}, i = {}) {
    const r = ka(e, t, n),
        a = function(e, t, n = {}) {
            const i = Ca[e];
            return i ? i.reduce((e, i) => {
                const r = Aa(i),
                    a = n[i] || {},
                    s = function(e, t, n = {}) {
                        return Object.assign({}, function(e, t) {
                            var n;
                            const {
                                user: i,
                                request: r,
                                video: a
                            } = t;
                            switch (e) {
                                case ga.TEAM:
                                    return {
                                        team_owner_id: i.team_origin_user_id,
                                        team_subscription_type: i.account_type,
                                        team_role: so(t),
                                        team_id: i.team_id,
                                        joined_team_at: null,
                                        resource_permission_level: null,
                                        team_size: null
                                    };
                                case ga.WEB:
                                    return {
                                        location: "player",
                                        page_name: Ji(t),
                                        referrer: r.referrer,
                                        copy: null,
                                        path: null,
                                        referrer_page_name: null,
                                        target: null
                                    };
                                case ga.VIDEO:
                                    return {
                                        video_id: a.id,
                                        title: a.title,
                                        video_privacy: a.privacy,
                                        video_embed_privacy: a.embed_permission,
                                        content_rating: `${null==(n=a.rating)?void 0:n.id}`,
                                        duration: Math.round(a.duration),
                                        resolution: `${a.width}x${a.height}`,
                                        video_height: a.height,
                                        video_width: a.width,
                                        orientation: lo(a.width, a.height),
                                        is_auto_cc_enabled: null,
                                        upload_method_api: null,
                                        upload_method_api_id: null
                                    };
                                case ga.PLAYER:
                                    return {
                                        player_session_id: r.session,
                                        total_video_duration: a.duration,
                                        video_timestamp: mt(La, 2) || 0
                                    };
                                case ga.ACTION:
                                    return {
                                        feature: "player",
                                        action_type: o.touch ? "tap" : "click"
                                    };
                                case ga.VIEW:
                                    return {
                                        feature: "player",
                                        view_type: "impression"
                                    };
                                default:
                                    return {}
                            }
                        }(e, t), n)
                    }(i, t, a);
                return e[i] = new J.EventContext(i, r, s), e
            }, {}) : {}
        }(e, t, i);
    J.BigPictureClient.sendEventWithContexts(r, a)
}

function Ia(e) {
    const t = e.events;
    let n, i, o, a = E(),
        s = !1,
        c = !1,
        u = null,
        p = !1,
        _ = null,
        v = null;

    function m(t) {
        i !== t && (i = t, e.config.embed.api = t)
    }

    function f() {
        n && n.emit("exitFullscreen"), e.events.halt()
    }

    function b() {
        var t = mt(e.config.request.cookie.volume);
        return 1 === i ? Math.round(100 * t) : t
    }

    function y(n, i, o, a = []) {
        const s = Xt[i];
        let l = e.config.embed[s];
        l || i !== Gt || (l = e.config.embed.color);
        let c = e.config.embed.settings[`force_${s}`];
        if (c || i !== Gt || (c = e.config.embed.settings.color), c && !e.config.embed.on_site) throw new Z(`The creator of the video has chosen to always use ${new r(l).hex}.`, "EmbedSettingsError", o);
        try {
            const o = new r(n);
            t.fire(St._changeColor, o.hex, i), a.forEach((function(t) {
                const n = Xt[t],
                    i = e.config.embed[n];
                try {
                    new r(i).contrast(o).ratio
                } catch (ke) {}
            }))
        } catch (ke) {
            throw new Z("The color should be a valid hex value.", "TypeError", o)
        }
    }
    let C = {
        ping: () => e.config.video.id,
        notifyTimingObjectConnect() {
            Pa(ha.TIMING_OBJECT_CONNECT, e.config)
        },
        notifyTimingObjectDisconnect() {
            Pa(ha.TIMING_OBJECT_DISCONNECT, e.config)
        },
        fullscreenchange(t) {
            e.element.classList.toggle("js-player-fullscreen-api", t), t ? (e.events.prependOn(Bt._fullscreenButtonPressed, f), n.listeners.exitFullscreen = !0, e.events.fire(Bt._willEnterFullscreen), e.events.fire(Bt._didEnterFullscreen, !0, !0)) : (e.events.off(Bt._fullscreenButtonPressed, f), n.listeners.exitFullscreen = !1, e.events.fire(Bt._willExitFullscreen), e.events.fire(Bt._didExitFullscreen, !0))
        },
        on(e, t) {
            e in qt && (e = qt[e]);
            const i = yt(Ht);
            if (i.indexOf(e) < 0) throw new Z(`“${e}” is not a valid event. Valid events are: ${i.join(", ")}.`, "TypeError", "on");
            t && a.on(e, t), n && (n.listeners[e] = !0), e === Ht.LOADED && P()
        },
        off(e, t) {
            t && a.off(e, t), n && (n.listeners[e] = !1)
        },
        play: () => new Promise((n, i) => {
            t.once(Bt._playResolved, n), t.once(Bt._playRejected, e => {
                i(new Z(e.message, e.name, "play"))
            }), va(e.config, "play"), t.fire(Vt._play), t.fire(Bt._playButtonPressed)
        }),
        destroy() {
            t.fire(St._destroy)
        },
        pause() {
            va(e.config, "pause"), t.fire(Vt._pause), t.fire(Bt._pauseButtonPressed)
        },
        loadVideo(t) {
            const {
                id: n,
                url: i,
                params: o
            } = function(e) {
                if (!e) return {};
                if (tt(e)) return {
                    id: parseInt(e, 10),
                    params: {}
                };
                if ("string" == typeof e) return 0 !== e.indexOf("https://") ? {} : {
                    url: e,
                    params: {}
                };
                if ("url" in e) {
                    if (0 !== e.url.indexOf("https://")) return {};
                    const t = e.url;
                    return delete e.url, {
                        url: t,
                        params: e
                    }
                }
                if ("id" in e) {
                    if (!tt(e.id)) return {};
                    const t = e.id;
                    return delete e.id, {
                        id: parseInt(t, 10),
                        params: e
                    }
                }
                return {}
            }(t);
            if (!n && !i) throw new Z("The video id must be an integer.", "TypeError", "loadVideo");
            if (i && i.match(null === new RegExp(`^https?://${e.config.player_url}/video/([0-9]+)/config`))) throw new Z("The config url must be a valid Vimeo url.", "TypeError", "loadVideo");
            return e.loadVideo(i || n, o).then(() => t).catch(() => {
                throw va(e.config, "loadVideo"), new Z("An error occurred loading the video.", "Error", "loadVideo")
            })
        },
        unload() {
            e.config.view !== Ft.main && e.config.view !== Ft.privateUnlocked && e.config.view !== Ft.webinarUnlocked || t.fire(St._reset)
        },
        addCuePoint(n, i) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new Z(`Cue point time must be positive number less than the duration of the video (${mt(e.config.video.duration)}).`, "RangeError", "addCuePoint");
            try {
                const o = e.backbone.addCuePoint(n, i);
                return setTimeout(() => {
                    t.fire(Bt._cuePointAdded, o)
                }, 0), o.id
            } catch (ke) {
                if ("CuePointsNotSupported" === ke.name) throw new Z("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint");
                throw new Z("Unable to add cue point", "InvalidCuePoint", "addCuePoint")
            }
        },
        removeCuePoint(n) {
            const i = e.backbone.cuePoints.filter(e => e.id === n)[0];
            if (!i) throw new Z(`Cue point “${n}” was not found.`, "InvalidCuePoint", "removeCuePoint");
            e.backbone.removeCuePoint(i), setTimeout(() => {
                t.fire(Bt._cuePointRemoved, i)
            }, 0)
        },
        enableTextTrack(n, o = null) {
            let r = ("text_tracks" in e.config.request ? e.config.request.text_tracks : []).map(e => (e.language = e.lang, e));
            if (!r.some(e => e.language.toLowerCase() === n.toLowerCase())) throw new Z(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
            const a = o ? `${n}.${o}` : n,
                {
                    track: s
                } = function(e, t = []) {
                    if (!e || "null" === e || 0 === t.length) return {
                        track: null
                    };
                    const [n, i] = e.split("."), [o] = n.split(/[-_]/), r = n !== o, a = t.filter(e => r && e.language === n || e.language === o).sort((e, t) => {
                        const r = 2 * (e.language === o && e.kind === i) + 2 * (e.language === n) + 1 * (e.kind === i);
                        return 2 * (t.language === o && t.kind === i) + 2 * (t.language === n) + 1 * (t.kind === i) - r
                    });
                    return a.length > 0 ? {
                        track: a[0],
                        exactMatch: a[0].language === n && a[0].kind === i
                    } : {
                        track: null
                    }
                }(a, r);
            if (!s || o && s.kind !== o) throw new Z(`There are no ${o} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            return t.fire(St._turnCaptionsOn, s.id), i < 3 ? null : new Promise((e, n) => {
                t.once(Bt._captionsChanged, (t, n) => {
                    e({
                        label: t.label,
                        language: t.language,
                        kind: t.kind
                    })
                })
            })
        },
        disableTextTrack() {
            t.fire(St._turnCaptionsOff)
        },
        toggleFullscreen(e) {
            const n = {
                not_supported: {
                    name: "UnsupportedError",
                    msg: "Fullscreen is not supported at all or for this element."
                },
                not_enabled: {
                    name: "Error",
                    msg: "The request was made from an iframe that does not allow fullscreen."
                },
                not_allowed: {
                    name: "NotAllowedError",
                    msg: "The request failed, probably because it was not called from a user-initiated event."
                }
            };
            return new Promise((i, o) => {
                if (!ee.element === e) {
                    const r = () => {
                            ee.off("enter", r), i()
                        },
                        a = (t, i) => {
                            ee.off("error", a);
                            const r = n[i] || n.not_supported;
                            o(new Z(r.msg, r.name, `${e?"request":"exit"}Fullscreen`))
                        };
                    return ee.on("enter", r), ee.on("error", a), void t.fire(Bt._fullscreenButtonPressed)
                }
                i()
            })
        },
        requestFullscreen: () => C.toggleFullscreen(!0),
        exitFullscreen: () => C.toggleFullscreen(!1),
        get fullscreen() {
            return !!ee.element
        },
        requestPictureInPicture: () => e.backbone.requestPictureInPicture(),
        exitPictureInPicture: () => e.backbone.exitPictureInPicture(),
        remotePlaybackPrompt() {
            try {
                e.backbone.showExternalDisplayPicker()
            } catch (t) {
                throw new Z("Remote playback is not available.", "NotFoundError", "remotePlaybackPrompt")
            }
        },
        appendVideoMetadata: n => new Promise((i, o) => {
            try {
                const o = Array.from(e.backbone.chapters);
                (function(e, t, n) {
                    const {
                        duration: i,
                        id: o,
                        privacy: r
                    } = e.video;
                    "disable" !== r && "anybody" !== r && "unlisted" !== r || pa({
                        hasPart: function(e, t, n, i) {
                            if (t < 30 || 0 === i.length) return [];
                            const o = [];
                            return i.forEach((r, a) => {
                                const {
                                    startTime: s,
                                    text: l
                                } = r;
                                if (s < t) {
                                    var c;
                                    const t = null == i || null == (c = i[a + 1]) ? void 0 : c.startTime,
                                        r = `vimeo_t_${e}`,
                                        [d] = n.split("#"),
                                        u = `${d}#${r}=${s}`;
                                    o.push({
                                        "@type": "Clip",
                                        name: l,
                                        startOffset: s,
                                        endOffset: t,
                                        url: u
                                    })
                                }
                            }), o.length && (o[o.length - 1].endOffset = t), o
                        }(o, i, t, n)
                    })
                })(e.config, n, o), t.fire(Bt._parentUrlAvailable, n), i()
            } catch (r) {
                o(new Z((null == r ? void 0 : r.message) || "", (null == r ? void 0 : r.name) || "", "appendVideoMetadata"))
            }
        }),
        get pictureInPicture() {
            return e.backbone.pictureInPictureActive
        },
        get autopause() {
            return !!e.config.embed.autopause
        },
        set autopause(t) {
            e.config.embed.autopause = !!t
        },
        get chromecasting() {
            return !!Do.currentSession
        },
        get color() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorOne() {
            var t;
            return null == (t = e.config.embed.color_one) ? void 0 : t.replace("#", "")
        },
        get colorTwo() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorThree() {
            var t;
            return null == (t = e.config.embed.color_three) ? void 0 : t.replace("#", "")
        },
        get colorFour() {
            var t;
            return null == (t = e.config.embed.color_four) ? void 0 : t.replace("#", "")
        },
        set color(e) {
            y(e, Gt, "setColor")
        },
        set colorOne(e) {
            y(e, Yt, "setColorOne", [Gt, zt])
        },
        set colorTwo(e) {
            y(e, Gt, "setColorTwo", [Yt])
        },
        set colorThree(e) {
            y(e, zt, "setColorThree", [Yt])
        },
        set colorFour(e) {
            y(e, jt, "setColorFour")
        },
        get cuePoints() {
            return e.backbone.cuePoints.map(e => ({
                time: e.time,
                data: e.data,
                id: e.id
            }))
        },
        get currentTime() {
            return e.currentTime
        },
        set currentTime(n) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new Z(`Seconds must be a positive number less than the duration of the video (${mt(e.config.video.duration)}).`, "RangeError", "setCurrentTime");
            return t.fire(Vt._seek), t.fire(St._seek, n), t.fire(Bt._mousedOver), i < 3 ? null : new Promise((e, n) => {
                t.once(h.SEEKED, ({
                    currentTime: t
                }) => {
                    e(t)
                })
            })
        },
        get duration() {
            return mt(e.config.video.duration)
        },
        get ended() {
            return !!e.backbone.ended
        },
        get loop() {
            return !!e.config.embed.loop
        },
        set loop(e) {
            t.fire(St._changeLoop, e)
        },
        set muted(e) {
            t.fire(St._changeMuted, e, !0)
        },
        get muted() {
            return e.backbone.muted || 0 === b()
        },
        get paused() {
            return !(e.backbone && "paused" in e.backbone && !e.backbone.paused)
        },
        get buffered() {
            return ma(e.backbone.buffered)
        },
        get played() {
            return ma(e.backbone.played)
        },
        get seekable() {
            return ma(e.backbone.seekable)
        },
        get seeking() {
            return e.backbone.seeking
        },
        get playbackRate() {
            return e.backbone ? e.backbone.playbackRate : 1
        },
        set playbackRate(n) {
            if (!e.config.embed.settings.speed) throw new Z("Setting the playback rate is not enabled for this video.", "Error", "setPlaybackRate");
            if (isNaN(n) || n > 2) throw new Z("Playback rate should be a number below or equal to 2.", "RangeError", "setPlaybackRate");
            t.fire(St._changePlaybackRate, n)
        },
        get remotePlaybackAvailability() {
            return e.backbone.externalDisplayAvailable
        },
        get remotePlaybackState() {
            return e.backbone.externalDisplayActive ? "connected" : "disconnected"
        },
        get textTracks() {
            return (e.backbone ? e.backbone.video.textTracks : []).map(e => ({
                label: e.label,
                language: e.language,
                kind: e.kind,
                mode: e === _ ? "showing" : "disabled"
            }))
        },
        get videoEmbedCode() {
            return e.config.video.embed_code
        },
        get videoHeight() {
            return e.backbone.videoHeight || e.config.video.height
        },
        get videoId() {
            return e.config.video.id
        },
        get videoTitle() {
            return e.config.video.title
        },
        get videoWidth() {
            return e.backbone.videoWidth || e.config.video.width
        },
        get videoUrl() {
            if (!e.config.video.url) throw new Z("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl");
            return e.config.video.url
        },
        get volume() {
            return b()
        },
        set volume(n) {
            if (n = parseFloat(n), 1 === i && (n /= 100), isNaN(n) || n < 0 || n > 1) throw new Z("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            v = n, e.backbone.supportsSettingVolume || 0 !== n ? t.fire(St._changeVolume, n, !0) : t.fire(St._changeMuted, !0, !0)
        },
        get qualities() {
            return e.backbone.qualities
        },
        get quality() {
            return e.backbone.quality
        },
        set quality(t) {
            if (!da(e.config.video.owner)) throw new Z("Setting the quality is not enabled for this video.", "Error", "setQuality");
            t = t.toLowerCase();
            const n = e.backbone.qualities.map(e => e.id);
            if (!n.includes(t)) throw new Z(`“${t}” is not a valid quality. Valid qualities are: ${n.join(", ")}.`, "TypeError", "on");
            e.backbone.quality = t
        },
        _loadVideo: (t, n) => e.loadVideo(t, n),
        get _like() {
            return !!e.config.user.liked
        },
        set _like(n) {
            if (e.config.embed.on_site) {
                if (e.config.user.liked === n) return;
                t.fire(Bt._likeButtonPressed, n)
            }
        },
        get _watchLater() {
            return !!e.config.user.watch_later
        },
        set _watchLater(n) {
            if (e.config.embed.on_site) {
                if (e.config.user.watch_later === n) return;
                t.fire(Bt._watchLaterButtonPressed, n)
            }
        },
        get currentChapter() {
            const t = e.backbone.currentChapterID;
            if (!t) return null;
            const n = Array.from(e.backbone.chapters),
                i = n.findIndex(e => t === e.id);
            return {
                startTime: n[i].startTime,
                title: n[i].text,
                index: i + 1
            }
        },
        get chapters() {
            return Array.from(e.backbone.chapters).map((e, t) => ({
                startTime: e.startTime,
                title: e.text,
                index: t + 1
            }))
        },
        _addChapter(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new Z(`Chapter timecode must be positive number less than the duration of the video (${mt(e.config.video.duration)}).`, "RangeError", "_addChapter");
            try {
                e.backbone.addChapter(t, n)
            } catch (ke) {
                if ("ChaptersNotSupported" === ke.name) throw new Z(ke.message, "UnsupportedError", "_addChapter");
                throw new Z("Unable to add chapter", "InvalidChapter", "_addChapter")
            }
        },
        _removeChapter(t) {
            let n;
            try {
                n = e.backbone.chapters.getCueById(t)
            } catch (ke) {
                throw new Z("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter")
            }
            if (!n) throw new Z("Chapter was not found.", "InvalidChapter", "_removeChapter");
            try {
                e.backbone.removeChapter(n)
            } catch (ke) {
                if ("ChaptersNotSupported" === ke.name) throw new Z("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter");
                throw new Z("Unable to remove chapter", "InvalidChapter", "_removeChapter")
            }
        },
        _addCard(e) {
            t.fire(St._addCard, e)
        },
        _removeCard(e) {
            t.fire(St._removeCard, e)
        },
        _setOutro(n, i) {
            e.config.embed.outro !== n ? (t.fire(St._hideOutro), setTimeout(() => {
                e.config.embed.outro = n, t.fire(St._showOutro, n, i)
            }, 400)) : t.fire(St._showOutro, n, i)
        },
        _hideOutro() {
            t.fire(St._hideOutro)
        },
        _setEmailCapture(t) {
            if (!t) return void C._unsetEmailCapture();
            let n = t.customFields ? e.config.embed.email_capture_form || {} : e.config.embed.email || {};
            n.position = t.position.toLowerCase(), n.timecode = t.timecode, t.nohide = !0, t.noblur = !0, t.nofocus = d(t, "nofocus", !0), C._showOverlay("email-capture", t)
        },
        _updateEmailCapture(n) {
            var i;
            n.custom_fields ? (z(null == (i = e.config.video.webinar) ? void 0 : i.registration_form) || (e.config.video.webinar.registration_form = n), t.fire(St._updateEmailCapture, n)) : this._setEmailCapture(n)
        },
        _updateWebinarStartTime(n) {
            e.config.video.webinar && (e.config.video.webinar.scheduled_start_time = n), t.fire(St._updateWebinarStartTime, n)
        },
        _setActiveEmailCapturePage(e) {
            t.fire(St._setActivePage, e)
        },
        _unsetEmailCapture() {
            e.config.embed.outro && (t.fire(St._hideOutro), delete e.config.embed.outro), e.config.embed.email && (t.fire(St._hideOverlay, {
                unmakeModal: !0
            }), delete e.config.embed.email)
        },
        _hideOverlay(e) {
            t.fire(St._hideOverlay, {
                name: e,
                unmakeModal: !0
            })
        },
        _showOverlay(e, n) {
            t.fire(St._showOverlay, e, n)
        },
        _fireEvent(...e) {
            t.fire.apply(null, e)
        },
        _setEmbedEditor(t) {
            e.config.embed.editor = !!t
        },
        _setLiveEventSettings(n) {
            e.config.embed.on_site && e.config.video.live_event && (Object.keys(n).forEach(i => {
                let o = n[i];
                o = "object" == typeof o ? o : Number(o), e.config.video.live_event.settings[i] = o, t.fire(Bt._liveEventSettingsChanged, i, o), t.fire(M.SETTINGS_UPDATED, i, o)
            }), t.fire(Bt._configChanged, !1, e.config))
        },
        _setEmbedSettings(n) {
            e.config.embed.on_site && (Object.keys(n).forEach(i => {
                let r = n[i];
                r = "object" == typeof r ? r : Number(r), "badge" === i && (r ? r = o : o = e.config.embed.settings.badge), e.config.embed.settings[i] = r, t.fire(Bt._embedSettingChanged, i, r)
            }), t.fire(Bt._configChanged, !1, e.config))
        },
        _setEmbedSetting(n, i) {
            e.config.embed.on_site && (i = "object" == typeof i ? i : Number(i), "badge" === n && (i ? i = o : o = e.config.embed.settings.badge), e.config.embed.settings[n] = i, t.fire(Bt._embedSettingChanged, n, i), t.fire(Bt._configChanged, !1, e.config))
        },
        _setOTTVideoMetadata(n) {
            e.config.request.flags.ott && (e.ottVideoMetadata = n, t.fire(Bt._ottMetadataSet, n))
        },
        _toggleDebugPanel() {
            t.fire(Bt._debugButtonPressed)
        },
        _overrideControlbarBehavior(e) {
            t.fire(St._overrideControlbarBehavior, e)
        },
        _setControlbarVisibility(e) {
            t.fire(St._setControlsVisibility, e)
        },
        get cameraProps() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new Z("Camera props are not available in the current player.", "UnsupportedError", "getCameraProps");
            return t.cameraProps
        },
        set cameraProps(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new Z("Camera props are not available in the current player.", "UnsupportedError", "setCameraProps");
            try {
                n.cameraProps = t
            } catch (ke) {
                throw new Z(ke.message, ke.name, "setCameraProps")
            }
        },
        get _fieldOfView() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new Z("Field of view is not available in the current player.", "UnsupportedError", "getFieldOfView");
            return t.fieldOfView
        },
        set _fieldOfView(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new Z("Field of view is not available in the current player.", "UnsupportedError", "setFieldOfView");
            n.fieldOfView = t
        },
        get _coordinates() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new Z("Coordinates are not available in the current player.", "UnsupportedError", "getCoordinates");
            return t.currentCoordinates
        },
        set _coordinates(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new Z("Coordinates are not available in the current player.", "UnsupportedError", "setCoordinates");
            try {
                n.currentCoordinates = t
            } catch (ke) {
                throw new Z(ke.message, "RangeError", "setCoordinates")
            }
        },
        _setChromecastUI(e) {
            const t = Do.currentSession;
            t && te(e) && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
                action: "setCustomUIStyles",
                value: e
            })
        },
        get _controlSelectors() {
            return {
                details: ".vp-title",
                sidedock: ".vp-sidedock",
                controls: ".vp-controls",
                customLogo: ".custom-logo"
            }
        },
        get _controlAreas() {
            const t = e.element.offsetWidth,
                n = e.element.offsetHeight,
                i = {
                    get details() {
                        const e = st(document.querySelector(".headers > h1")),
                            t = st(document.querySelector(".sub-title")),
                            n = st(document.querySelector(".vp-portrait")),
                            i = Math.max(e.width, t.width) + n.width,
                            o = Math.max(n.height, e.height + t.height);
                        return {
                            top: 10,
                            left: 10,
                            width: Math.max(200, i),
                            height: Math.max(60, o)
                        }
                    },
                    get sidedock() {
                        return {
                            top: 10,
                            left: t - 10 - 36,
                            width: 36,
                            height: 118
                        }
                    },
                    get controls() {
                        const e = i.customLogo,
                            o = Math.max(60, e.height);
                        return {
                            height: o,
                            top: n - 10 - o,
                            left: 10,
                            width: t - 20
                        }
                    },
                    get customLogo() {
                        const e = document.querySelector(".custom-logo"),
                            i = e ? st(e) : {
                                width: 0,
                                height: 0
                            };
                        return {
                            top: n - 10 - i.height,
                            left: t - 10 - i.width,
                            width: i.width,
                            height: i.height
                        }
                    }
                };
            return i
        },
        set _lowLatencyMode(t) {
            e.backbone.lowLatencyMode = t
        },
        get _lowLatencyMode() {
            return e.backbone.lowLatencyMode
        },
        get _presentationDelay() {
            return e.backbone.presentationDelay
        },
        set _presentationDelay(t) {
            e.backbone.presentationDelay = t
        },
        get _liveLatency() {
            return e.backbone.latency
        },
        get _downloadSpeed() {
            return e.backbone.downloadSpeed
        },
        get _backbone() {
            return e.backbone
        },
        addEventListener(...e) {
            C.on.apply(C, e)
        },
        removeEventListener(...e) {
            C.off.apply(C, e)
        },
        seekTo(e) {
            C.currentTime = e
        },
        changeColor(e) {
            C.color = e
        }
    };
    const T = {
        addCuePoint: ({
            time: e,
            data: t
        }) => C.addCuePoint(e, t),
        enableTextTrack({
            language: e,
            kind: t = null
        }) {
            C.enableTextTrack(e, t)
        }
    };

    function w(e, t) {
        n && n.emit(e, t), a.fire(e, t)
    }
    const S = (e, t) => (...n) => {
        const i = t ? t.apply(void 0, n) : void 0;
        w(e, i)
    };

    function A({
        currentTime: e,
        duration: t,
        timeProgress: n
    }) {
        return {
            seconds: mt(e),
            percent: mt(n),
            duration: mt(t)
        }
    }

    function k(e) {
        return {
            playbackRate: e
        }
    }

    function P() {
        w(Ht.LOADED, p ? null : (p = !0, {
            id: e.config.video.id
        }))
    }

    function I(e) {
        return u = e, O(function(e) {
            switch (e) {
                case "BrowserNotSupported":
                case "FilesNotPlayable":
                case "MediaSrcNotSupportedError":
                    return new Z("This video is not supported in this browser.", "NotSupportedError");
                case "FileError":
                    return new Z("There was an error loading the files for this video.", "FileError")
            }
            return new Z("An error occurred during playback.", "PlaybackError")
        }(u))
    }

    function O(e) {
        let t = {
            message: "An error occurred.",
            name: "Error",
            method: e.source
        };
        return "MessageApiError" === e.constructorName && (t = {
            message: e.message,
            name: e.name,
            method: e.source
        }), t
    }
    return function() {
            if (e.config.embed.on_site) return;
            m(e.config.embed.api);
            const t = e.config.request.referrer;
            n = new Q(t), n.listeners = yt(Ht).reduce((e, t) => l(l({}, e), {}, {
                [t]: !1
            }), {}), n.listeners[Ht.READY] = !0, n.listeners[Ht.ERROR] = !0, n.filter(e => n.listeners[e])
        }(),
        function() {
            if (!n) return;
            const t = la({}, C, T);
            n.extendMethods(t), n.hooks({
                logError(e) {
                    w(Ht.ERROR, O(e))
                },
                parseMessage(e) {
                    if (!e || "" === e) return {};
                    if (te(e)) return m(3), e;
                    try {
                        const t = JSON.parse(e);
                        return m(2), t
                    } catch (t) {
                        return m(null), w(Ht.ERROR, "The Vimeo Froogaloop v1 API is no longer supported.\n Please follow the upgrade instructions here: https://goo.gl/mueGRR"), {}
                    }
                },
                buildMessage(t) {
                    var n;
                    (null == (n = e.config.embed) ? void 0 : n.player_id) && (t.player_id = e.config.embed.player_id);
                    try {
                        2 === i && (t = function(e) {
                            if (e.event) {
                                for (const t in qt)
                                    if (qt[t] === e.event) {
                                        e.event = t;
                                        break
                                    }
                                "cuechange" === e.event && (e.data.text = e.data.cues[0].text, e.data.html = e.data.cues[0].html, delete e.data.cues)
                            }
                            return JSON.stringify(e)
                        }(t)), te(t) && "ready" === t.event && (t = JSON.stringify(t))
                    } catch (ke) {}
                    return t
                }
            })
        }(), t.on(g.BUFFER_STARTED, S(Ht.BUFFER_START)), t.on(g.BUFFER_ENDED, S(Ht.BUFFER_END)), t.on(g.CUE_POINT, S(Ht.CUEPOINT, (function({
            time: e,
            data: t,
            id: n
        }) {
            return {
                time: e,
                data: t,
                id: n
            }
        }))), t.on(L, S(Ht.CUE_CHANGE, (function(e, t = []) {
            const {
                language: n = null,
                label: i = null,
                kind: o = null
            } = e || {};
            return {
                label: i,
                language: n,
                kind: o,
                cues: t
            }
        }))), t.on(Bt._chapterChanged, S(Ht.CHAPTER_CHANGE, (function(t) {
            const n = Array.from(e.backbone.chapters).findIndex(e => t === e.id);
            return n >= 0 ? {
                startTime: e.backbone.chapters[n].startTime,
                title: e.backbone.chapters[n].text,
                index: n + 1
            } : null
        }))), t.on(Bt._ended, S(Ht.ENDED, (function() {
            return c = !1, {
                seconds: mt(e.config.video.duration),
                percent: 1,
                duration: mt(e.config.video.duration)
            }
        }))), t.on(Bt._paused, S(Ht.PAUSE, (function(t) {
            return c = !1, {
                seconds: mt(t),
                percent: mt(t / e.config.video.duration),
                duration: mt(e.config.video.duration)
            }
        }))), t.on(Bt._playbackRateChanged, S(Ht.PLAYBACK_RATE_CHANGE, k)), t.on(Bt._playbackRateChanged, S(Ht.RATE_CHANGE, k)), t.on(Bt._captionsChanged, S(Ht.TEXT_TRACK_CHANGE, (function(e) {
            _ = e;
            const {
                language: t = null,
                label: n = null,
                kind: i = null
            } = e || {};
            return {
                label: n,
                language: t,
                kind: i
            }
        }))), t.on(Bt._volumeChanged, S(Ht.VOLUME_CHANGE, (function(e) {
            return {
                volume: mt(e)
            }
        }))), t.on(Bt._controlBarVisibilityChanged, S(Ht.CONTROL_BAR_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(Bt._configChanged, (function(n) {
            v && setTimeout((function() {
                e.backbone.supportsSettingVolume || 0 !== v ? t.fire(St._changeVolume, v, !0) : t.fire(St._changeMuted, !0, !0)
            }), 0), n && P()
        })), t.on(Bt._error, (function(e) {
            const t = I(e);
            s && w(Ht.ERROR, t)
        })), t.on(Bt._didEnterFullscreen, S(Ht.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !0
            }
        }))), t.on(Bt._didExitFullscreen, S(Ht.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !1
            }
        }))), t.on(Bt._qualityChanged, S(Ht.QUALITY_CHANGE, (function(e) {
            return {
                quality: e
            }
        }))), t.on(Bt._adStarted, S(Ht.AD_STARTED)), t.on(Bt._adComplete, S(Ht.AD_COMPLETED)), t.on(Bt._adError, S(Ht.AD_ERROR)), t.on(Bt._adSkipped, S(Ht.AD_SKIPPED)), t.on(Bt._allAdsCompleted, S(Ht.AD_ALL_COMPLETED)), t.on(Bt._adClicked, S(Ht.AD_CLICKED)), t.on(Bt._interactiveHotspotClicked, S(Ht.INTERACTIVE_HOTSPOT_CLICKED, (function({
            hotspotId: e,
            customPayloadData: t,
            actionPreference: n,
            currentTime: i,
            action: o
        }) {
            return {
                hotspotId: e,
                customPayloadData: t,
                actionPreference: n,
                currentTime: i,
                action: o
            }
        }))), t.on(Bt._interactiveOverlayPanelClicked, S(Ht.INTERACTIVE_OVERLAY_PANEL_CLICKED, (function({
            action: e,
            actionPreference: t,
            currentTime: n,
            customPayloadData: i,
            overlayId: o,
            panelId: r
        }) {
            return {
                action: e,
                actionPreference: t,
                currentTime: n,
                customPayloadData: i,
                overlayId: o,
                panelId: r
            }
        }))), t.once(Bt._ready, (function() {
            s = !0, w(Ht.READY), u && (w(Ht.ERROR, I(u)), u = null)
        })), t.on(M.EVENT_ENDED, S(Ht.LIVE_EVENT_ENDED)), t.on(M.EVENT_STARTED, S(Ht.LIVE_EVENT_STARTED)), t.on(M.STREAM_OFFLINE, S(Ht.LIVE_STREAM_OFFLINE)), t.on(M.STREAM_ONLINE, S(Ht.LIVE_STREAM_ONLINE)), t.on(x.CAMERA_CHANGE, S(Ht.CAMERA_CHANGE, (function(e) {
            return e
        }))), t.on(x.MOTION_END, S(Ht.MOTION_END)), t.on(x.MOTION_START, S(Ht.MOTION_START)), t.on(x.WEBVR_HARDWARE_AVAILABLE, S(Ht.WEBVR_HARDWARE_AVAILABLE)), t.on(x.WEBVR_ENTER, S(Ht.ENTER_WEBVR)), t.on(x.WEBVR_EXIT, S(Ht.EXIT_WEBVR)), t.on(x.SPATIAL_UNSUPPORTED, S(Ht.SPATIAL_UNSUPPORTED)), t.on(h.PLAY, S(Ht.PLAY, (function(t) {
            return c ? null : (c = !0, {
                seconds: mt(t),
                percent: mt(t / e.config.video.duration),
                duration: mt(e.config.video.duration)
            })
        }))), t.on(h.PLAYING, S(Ht.PLAYING, (function() {
            return c ? {
                seconds: mt(e.currentTime),
                percent: mt(e.currentTime / e.config.video.duration),
                duration: mt(e.config.video.duration)
            } : null
        }))), t.on(h.PROGRESS, S(Ht.PROGRESS, (function({
            loaded: e,
            duration: t,
            loadProgress: n
        }) {
            let o = {
                seconds: mt(e),
                percent: mt(n),
                duration: mt(t)
            };
            return i < 3 && (o.bytesLoaded = -1, o.bytesTotal = -1), o
        }))), t.on(h.SEEKING, S(Ht.SEEKING, A)), t.on(h.SEEKED, S(Ht.SEEKED, A)), t.on(h.TIME_UPDATE, S(Ht.TIME_UPDATE, (function({
            currentTime: e,
            duration: t,
            timeProgress: n
        }) {
            return {
                seconds: mt(e),
                percent: mt(n),
                duration: mt(t)
            }
        }))), t.on(h.LOADED_METADATA, S(Ht.LOADED_METADATA)), t.on(h.DURATION_CHANGE, S(Ht.DURATION_CHANGE, (function(t) {
            return {
                duration: e.backbone.duration
            }
        }))), t.on(h.WAITING, S(Ht.WAITING)), t.on(h.LOADED_DATA, S(Ht.LOADED_DATA)), t.on(h.LOAD_START, S(Ht.LOAD_START)), t.on(h.RESIZE, S(Ht.RESIZE, (function() {
            return {
                videoWidth: e.backbone.videoWidth,
                videoHeight: e.backbone.videoHeight
            }
        }))), t.on(h.ENTER_PICTURE_IN_PICTURE, S(Ht.ENTER_PICTURE_IN_PICTURE)), t.on(h.LEAVE_PICTURE_IN_PICTURE, S(Ht.LEAVE_PICTURE_IN_PICTURE)), t.on(No.connected, S(Ht.CHROMECAST_CONNECTED)), t.on(Bt._airPlayAvailable, S(Ht.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, () => !0)), t.on(Bt._airPlayNotAvailable, S(Ht.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, () => !1)), t.on(Bt._airPlayActivated, S(Ht.REMOTE_PLAYBACK_CONNECT)), t.on(Bt._airPlayDeactivated, S(Ht.REMOTE_PLAYBACK_DISCONNECT)), t.on(St._reset, (function() {
            u = null, p = !1
        })), e.doNotTrackEnabled || (t.on(Bt._emailCaptureSuccess, () => {
            w(Ht.EMAIL_CAPTURE)
        }), t.on(Bt._emailCaptureFailure, () => {
            w(Ht.EMAIL_CAPTURE_FAILED)
        })), t.on(Bt._spaceChanged, (function(e = {}) {
            n && (n.listeners[Ht.SPACE_CHANGE] = !0, w(Ht.SPACE_CHANGE, e))
        })), t.fire(Bt._apiModuleReady), C
}
let Oa = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentElement = this.alertTextElement.querySelector(".vp-alert-text")
    }
    var t = e.prototype;
    return t.show = function(e) {
        this.alertContentElement.innerHTML = e, this.alertContentElement.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentElement.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
const Ra = l(l({}, ne), {}, {
    CAPTIONS_ENABLED: "captions-enabled",
    CAPTIONS_DISABLED: "captions-disabled",
    CHROMECAST_CONNECTED: "chromecast-connected",
    CHROMECAST_DISCONNECTED: "chromecast-disconnected",
    DRM_KEY_SWITCH: "drm-key-switch",
    MEDIASESSION_PLAY: "mediasession-play",
    MEDIASESSION_PAUSE: "mediasession-pause",
    MEDIASESSION_SEEK_FORWARD: "mediasession-seekforward",
    MEDIASESSION_SEEK_BACKWARD: "mediasession-seekbackward",
    SLATE_DISPLAYED: "slate-displayed",
    CLICK: "click",
    VIDEO_DURATION_MISMATCH: "video-duration-mismatch",
    VIDEO_FULLSCREEN_CHANGE: "video-fullscreen-change",
    VIDEO_MANIFEST_LOADED: "video-manifest-loaded",
    VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout",
    VIDEO_PICTURE_IN_PICTURE_CHANGE: "video-picture-in-picture-change",
    VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed",
    VIDEO_STREAM_CHANGE: "video-stream-change",
    VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto",
    VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto",
    DOWNLOAD_TIMEOUT: "video-download-timeout",
    AD_BUFFERING: "ad-buffering",
    AD_COMPLETE: "ad-complete",
    AD_CLICKED: "ad-clicked",
    AD_ERROR: "ad-error",
    AD_PAUSED: "ad-paused",
    AD_RESUMED: "ad-resumed",
    AD_STARTED: "ad-started",
    AD_SKIPPED: "ad-skipped",
    ENTER_WEBVR: "enter-webvr",
    EXIT_WEBVR: "exit-webvr",
    WEBINAR_REGISTRANT_BLOCKED: "webinar-registrant-blocked",
    WEBINAR_REGISTRANT_UNBLOCKED: "webinar-registrant-unblocked"
});

function Na(e) {
    return Et("av01", e) ? "AV1" : Et("dvh1", e) ? "HEVC_DVH1" : Et("hvc1", e) ? "HEVC" : Et("avc1", e) ? "AVC" : null
}

function Ma(e) {
    return Et("mp4a", e) ? "AAC" : Et("opus", e) ? "OPUS" : null
}

function Da(e, t) {
    var n, i;
    return (null == e || null == (n = e.request) || null == (i = n.ab_tests) ? void 0 : i[t]) ? e.request.ab_tests[t] : {}
}

function xa(t, n, i, r) {
    const a = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (ke) {
                return Promise.reject(ke)
            }
        }
    }((function({
        identifier: e,
        data: {
            request: n,
            response: i,
            extraContext: o
        }
    }) {
        const r = i.headers;
        return function(e, t, n) {
            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
        }(i.arrayBuffer(), (function(a) {
            if ("video" === e.type) {
                const r = t.backbone.representations.reverse(),
                    s = r[e.stream];
                if (!s) return;
                const l = function(e, n, i, o, r, a) {
                    const s = i.headers;
                    delete s[""];
                    let l = {};
                    Object.keys(s).forEach(e => {
                        const t = s[e],
                            n = e.replace(_, "_");
                        l[n] = t
                    });
                    let c = a.slice();
                    return c.forEach(e => {
                        e.profile = String(e.profile || "") || null, e.id = String(e.id || "") || null
                    }), {
                        host: le(n.data.url),
                        product: no(t.config),
                        duration: n.data.duration,
                        size: o.byteLength,
                        index: e.segment,
                        session_id: t.config.request.session,
                        profile_id: String(r.profile || "") || null,
                        quality: r.quality,
                        streams: c,
                        clip_id: t.config.video.id,
                        headers: l,
                        buffered: mt(re(t.backbone.currentTime, t.backbone.buffered), 2),
                        request_id: n.data.uuid ? n.data.uuid : ""
                    }
                }(e, n, i, a, s, r);
                let d = l;
                o && (d = ce({
                    extraContext: o
                }, l)), t.events.fire(Bt._logMetric, {
                    name: Ra.CHUNK_DOWNLOADED,
                    data: d
                });
                const u = {
                    ak_reference_id: l.headers.akamai_reference_id || l.headers.akamai_grn || null,
                    akamai_edge_ip: l.headers.akamai_edge_ip || l.headers.akamai_request_bc || null,
                    content_length: l.headers.content_length || null,
                    content_type: l.headers.content_type || null,
                    x_vim_cachebc: l.headers.x_vim_cachebc || null,
                    x_cache: l.headers.x_cache || null,
                    x_cache_hits: l.headers.x_cache_hits || null
                };
                l.headers = u, Da(t.config, "chunk_logging").group && t.config.request.urls.fresnel_chunk_url && function(e, t, n) {
                    const i = Date.now(),
                        o = [{
                            uuid: ft(),
                            created_at: i,
                            event: {
                                name: "chunk_downloads",
                                version: 5,
                                ts_ms: i,
                                fields: t
                            },
                            tracker: {
                                name: "vimeo-player",
                                version: n
                            }
                        }];
                    new c(e).logRequestPromiseWithUrl(e, JSON.stringify(o), !0)
                }(t.config.request.urls.fresnel_chunk_url + "?beacon=1", l, Tr(t.config)), Q += a.byteLength, ee = l
            }
            "x-akamai-request-id" in r && (W = r["x-akamai-request-id"]), "ak-reference-id" in r && ($ = r["ak-reference-id"]), "akamai-grn" in r && ($ = r["akamai-grn"]),
                function({
                    headers: e,
                    url: t
                }) {
                    if ("x-cache-hits" in e) {
                        let n = e["x-cache-hits"].match(/(0|1)(?:, (0|1))?/);
                        null !== n && (Y = {
                            url: t,
                            servedBy: e["x-served-by"],
                            edge: n[1] ? !!parseInt(n[1], 10) : null,
                            tier1: n[2] ? !!parseInt(n[2], 10) : null,
                            tier2: null
                        })
                    } else if ("x-vim-cachebc" in e) {
                        let n = e["x-vim-cachebc"].match(/E:(m|h)(?:,TD0:(m|h))?(?:,TD1:(m|h))?(?:,TD2:(m|h))?/);
                        if (null !== n) {
                            Y = {
                                url: t,
                                edge: n[1] ? n[1] : null,
                                tier1: n[2] ? n[2] : null,
                                tier2: n[3] ? n[3] : null
                            };
                            for (let e in Y) "edge" !== e && "tier1" !== e && "tier2" !== e || ("h" === Y[e] ? Y[e] = !0 : "m" === Y[e] && (Y[e] = !1))
                        }
                    }
                }(i);
            let s = {};
            W && (s.akamai_request_id = W), $ && (s.akamai_reference_id = $), s.manifest_load_durations = t.backbone.manifestLoadDurations, s.successful_segment_count = t.backbone.successfulSegments.length, s.failed_segment_count = t.backbone.failedSegments.length, j = s
        }))
    }));
    let s, l, u;
    const p = new WeakMap,
        _ = new RegExp("-", "g");
    let v, m = null,
        b = null,
        y = !1,
        E = !1,
        C = !1,
        T = "auto",
        w = {},
        L = {},
        S = null,
        A = null,
        k = null,
        P = [],
        I = null,
        R = {},
        N = !1,
        V = !1,
        U = !1,
        F = 0,
        H = 0,
        q = 0,
        W = null,
        $ = null,
        Y = null,
        G = !1,
        j = null,
        K = null,
        X = null,
        Z = !1,
        J = !1,
        Q = 0,
        ee = null;

    function te() {
        const e = p.get(t.backbone.videoElement);
        e ? ({
            _videoMonitor: l,
            _metricsBufferTracker: u
        } = e) : (u = new ae, l = new oe(t.backbone.videoElement, de), ne(), p.set(t.backbone.videoElement, {
            _videoMonitor: l,
            _metricsBufferTracker: u
        }))
    }

    function ne() {
        const e = u;
        l.customizeHooks({
            bufferTracker: e,
            videoBufferCheck() {
                t.events.on(g.BUFFER_STARTED, () => {
                    y && (Z || G || (G = !0, e.trackBufferStart(l.logBufferStart, {
                        lower_profile_available: t.backbone.isLowerProfileAvailable
                    })))
                }), t.events.on(g.BUFFER_ENDED, () => {
                    y && G && (G = !1, e.trackBufferEnd(l.logBufferEnd, {
                        cdn_data: Y
                    }), e.resetLastBufferTime())
                })
            },
            addEventData(e) {
                const t = J;
                switch (J = !1, e) {
                    case Ra.VIDEO_START_TIME:
                        return j;
                    case Ra.VIDEO_SEEK:
                        const e = K;
                        return K = null, e;
                    case Ra.VIDEO_PLAYED:
                    case Ra.VIDEO_PAUSED:
                        return {
                            api_call: t
                        }
                }
                return null
            }
        }), l.initHooks()
    }

    function de(n, r = {}) {
        (function(e) {
            var n, i, o, r;
            switch (e) {
                case Ra.VIDEO_SEEK:
                case Ra.VIDEO_SEEKED:
                    return (null == (n = t.config.embed) ? void 0 : n.loop) || (null == (i = t.config.embed) || null == (o = i.settings) ? void 0 : o.background);
                case Ra.VIDEO_PLAYBACK_RATE_CHANGED:
                    return null == (r = t.config.video.live_event) ? void 0 : r.low_latency;
                case Ra.VIDEO_PLAYBACK_ERROR && (null == e ? void 0 : e.error_type) === g.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED:
                    return Co(.1);
                default:
                    return !1
            }
        })(n) || ((r = Object.assign(l ? l.globalProperties() : {}, Object.assign(function() {
            var e, n, r, a, s;
            const l = {
                autoplay: 1 === t.config.embed.autoplay,
                background: !!t.config.embed.settings.background,
                clip_id: t.config.video.id,
                context: t.config.embed.context,
                device_pixel_ratio: window.devicePixelRatio || 1,
                drm: !!t.config.request.drm,
                embed: !t.config.embed.on_site,
                is_mod: !!t.config.user.mod,
                is_spatial: !(!o.spatialPlayback || !t.config.video.spatial),
                looping: !!t.config.embed.loop,
                owner_id: null == (e = t.config.video) || null == (n = e.owner) ? void 0 : n.id,
                product: no(t.config),
                referrer: t.config.request.referrer,
                session_id: t.config.request.session,
                version: Tr(t.config),
                version_backend: t.config.request.build.backend,
                viewer_id: null == (r = t.config.user) ? void 0 : r.id,
                viewer_team_id: null == (a = t.config.user) ? void 0 : a.team_id,
                viewer_team_origin_user_id: null == (s = t.config.user) ? void 0 : s.team_origin_user_id,
                vuid: pr("vuid"),
                fps: t.config.video.fps
            };
            var c;
            return t.config.video.owner && (l.account_type = t.config.video.owner.account_type), t.config.embed.api && (l.api_version = t.config.embed.api), t.config.embed.app_id && (l.app_id = String(t.config.embed.app_id)), t.config.video.privacy && (l.privacy = t.config.video.privacy), i.get(Ko) && (l.live_session_id = null == (c = t.config.video.live_event) ? void 0 : c.id), t.config.video.webinar && (l.webinar_uuid = t.config.video.webinar.id), l
        }(), function() {
            var n, i;
            const o = t.backbone.video ? t.backbone.video.currentFile : {},
                r = function() {
                    const n = {},
                        i = Un(),
                        o = se("asc"),
                        r = "MediaSourceScanner" === t.backbone.currentScannerName,
                        a = "HTMLScanner" === t.backbone.currentScannerName,
                        s = "HLSLiveScanner" === t.backbone.currentScannerName;
                    let l = [];
                    a && (l = d(t.config, "request.files.progressive") || d(t.config, "request.files.hls") || []), r && (l = d(t.config, "request.files.dash.streams", [])), s && (l = t.backbone.video.currentFile.mime === Lt.dashMpd ? d(t.config, "request.files.dash.streams", []) : d(t.config, "request.files.hls.streams", []));
                    const c = Array.from(l).sort(o).map(e => e.profile);
                    let u = -1,
                        p = 0,
                        _ = null;
                    if (Object.keys(L).forEach(e => {
                            const t = c.indexOf(parseInt(e, 10));
                            t > u && (u = t);
                            const n = L[e].reduce((e, t) => ((t.end || i) - t.start) / 1e3 + e, 0);
                            n > p && (p = n, _ = e)
                        }), n.highest_profile = c[u], n.highest_available_profile = c[c.length - 1], n.most_used_profile = _, (r || s) && P) {
                        n.max_speed = Math.round(Math.max.apply(Math, e(P))) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, e(P))) / 1e3;
                        const t = P.reduce((e, t) => e + t, 0);
                        n.average_speed = Math.round(t / P.length) / 1e3
                    }
                    return n
                }();
            let {
                id: a = 0,
                mime: s = Lt.h264,
                metadata: {
                    profile: l = null
                } = {}
            } = o, c = !1, u = !1;
            switch (s) {
                case Lt.dash:
                    0 === o.restrictedStreamIndexes.length && (c = !0), d(t.config, "request.files.dash.separate_av") && (u = !0), l = w ? w.profile : null;
                    break;
                case Lt.hls:
                    c = !0
            }
            let p = {
                audio_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "audio") / 1e3,
                auto: c,
                average_speed: r.average_speed || 0,
                cdn: o.metadata ? o.metadata.cdn : "akamai",
                delivery: "live" !== Ut[s] ? Ut[s] : "dash",
                display: t.expose.pictureInPicture ? "pip" : t.expose.fullscreen ? "fs" : null,
                dropped_frame_percent: q,
                event_time: m + Fn(b),
                fullscreen: V,
                picture_in_picture: U,
                highest_available_profile: r.highest_available_profile ? String(r.highest_available_profile) : null,
                highest_profile: r.highest_profile ? String(r.highest_profile) : null,
                max_speed: isFinite(r.max_speed) ? r.max_speed : 0,
                mime: o.mime || null,
                min_speed: isFinite(r.min_speed) ? r.min_speed : 0,
                most_used_profile: r.most_used_profile ? String(r.most_used_profile) : null,
                profile_id: l ? String(l) : null,
                codec: z(w) ? "" : Na(w.codecs),
                audio_codec: Ma(null == (n = t.backbone) || null == n.getCurrentStream || null == (i = n.getCurrentStream("audio")) ? void 0 : i.codecs) || null,
                quality: w ? w.quality : null,
                quality_downswitch_count: H,
                quality_upswitch_count: F,
                separate_av: u,
                target_profile_id: X,
                video_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "video") / 1e3,
                video_duration: mt(t.config.video.duration)
            };
            if (t.backbone.isLive && (void 0 !== t.backbone.latency && (p.latency = t.backbone.latency), void 0 !== t.backbone.lowLatencyMode && (p.is_low_latency = t.backbone.lowLatencyMode)), t.config.video.ecdn) {
                const e = t.config.video.ecdn.ecdn_provider,
                    {
                        ecdnBytesByCdn: n,
                        ecdnBytesPeered: i,
                        ecdnPeers: o
                    } = ho(e);
                p.ecdn = !0, p.ecdn_provider = e, p.ecdn_bytes_via_cdn = n, p.ecdn_bytes_via_peering = i, p.ecdn_peers = o
            }
            return p
        }(), {
            ab_tests: t.abTests
        }), r)).name = n, t.events.fire(Bt._logMetric, {
            name: n,
            data: r
        }), s.log(r).catch(e => {}))
    }

    function ue(e, t = {
        final: !0
    }, n = null) {
        const i = {
            error_type: e,
            error_reason: n
        };
        l.handleExternalError(i, t)
    }
    b = Hn(), m = t.config.request.timestamp, t.config.request.drm, s = new c(function() {
        const e = `?beacon=1&session-id=${t.config.request.session}`;
        return t.config.request.urls.fresnel + e
    }()), t.events.on(Bt._error, ue), t.events.on(St._reset, (function() {
        N = !1
    })), t.events.on(St._seek, (function() {
        Z = !0
    })), t.events.on(Bt._didEnterFullscreen, (function() {
        V = !0, de(Ra.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(Bt._didExitFullscreen, (function() {
        V = !1, de(Ra.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(h.ENTER_PICTURE_IN_PICTURE, (function() {
        U = !0, de(Ra.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(h.LEAVE_PICTURE_IN_PICTURE, (function() {
        U = !1, de(Ra.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(Bt._configChanged, (function() {
        m = t.config.request.timestamp, b = Hn(), y = !1, E = !1, C = !1, T = "auto", w = {}, L = {}, S = null, A = null, k = null, P = [], I = null, R = {}, N = !1, V = !1, F = 0, H = 0, q = 0, Y = null, X = null, Q = 0, t.config.request.drm, l && (l.reset(), ne())
    })), t.events.on(Bt._nudgeAttempted, (function() {
        K = {
            seek_type: "nudge"
        }
    })), t.events.on(Bt._scrubbingStarted, (function(e) {
        const t = null == e ? void 0 : e.seekType;
        K = {
            seek_type: t
        }
    })), t.events.on(Bt._chapterSeek, (function(e) {
        K = {
            seek_type: `chapter-${e}`
        }
    })), t.events.on(Bt._interactiveSeekCall, (function(e) {
        K = {
            seek_type: e.type
        }
    })), t.events.on(Bt._interactiveMarkerClicked, (function(e) {
        K = {
            seek_type: e.type,
            seek_action: e.action
        }
    })), t.events.on(f, (function() {
        N || Do.isCastConnected || (t.performDelegateAction(xt, (e, t = {}) => {
            N = !0, v.then(() => l.logStartRequest()).catch(() => {})
        }), Da(t.config, "chunk_logging").group && t.config.request.urls.fresnel_manifest_url && function(e, t, n, i) {
            const o = Date.now(),
                r = [{
                    uuid: ft(),
                    created_at: o,
                    event: {
                        name: "session_manifest",
                        version: 1,
                        ts_ms: o,
                        fields: {
                            sessionID: t,
                            manifest: n
                        }
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new c(e).logRequestPromiseWithUrl(e, JSON.stringify(r), !0)
        }(t.config.request.urls.fresnel_manifest_url + "?beacon=1", t.config.request.session, t.backbone.manifest, Tr(t.config)))
    })), t.events.on(Bt._overlayOpened, (function(e) {
        "email-capture" === e && de(Ra.SLATE_DISPLAYED, {
            slate_type: "email"
        }), "interactive" === e && de(Ra.SLATE_DISPLAYED, {
            slate_type: "interactive"
        })
    })), t.events.on(Bt._playbackRateChanged, (function(e, t) {
        de(Ra.VIDEO_PLAYBACK_RATE_CHANGED, {
            previous_playback_rate: t
        })
    })), t.events.on(St._changeQuality, (function(e) {
        t.backbone.video.currentFile.mime === Lt.dash && ("auto" === e || E ? "auto" === e && E && !C && (de(Ra.VIDEO_SWITCH_BACK_TO_AUTO, {
            quality: T,
            auto: 1
        }), C = !0) : (de(Ra.VIDEO_SWITCH_FROM_AUTO, {
            quality: e,
            auto: 0
        }), E = !0), T = e)
    })), t.events.on(St._turnCaptionsOn, (function(e) {
        I !== e && (I = e, de(Ra.CAPTIONS_ENABLED, {
            captions_id: String(e)
        }))
    })), t.events.on(St._turnCaptionsOff, (function() {
        I && (I = null, de(Ra.CAPTIONS_DISABLED))
    })), t.events.on(No.connected, (function() {
        de(Ra.CHROMECAST_CONNECTED)
    })), t.events.on(No.disconnected, (function() {
        de(Ra.CHROMECAST_DISCONNECTED)
    })), t.events.on(g.STREAM_CHANGE, (function(e, t, n, i) {
        var o;
        w = e;
        const r = e.profile ? e.profile : e.id,
            a = Un();
        if (L[r] = L[r] || [], S) {
            const e = L[S].length - 1;
            L[S][e] && (L[S][e].end = a)
        }
        A && (n[t].bitrate > A ? F += 1 : H += 1), L[r].push({
            start: a
        }), R[r] = {
            bitrate: n[t].bitrate,
            width: n[t].width,
            height: n[t].height
        };
        let s = {
            previous_audio_bitrate: k / 1e3,
            previous_video_bitrate: A / 1e3,
            previous_profile_id: String(S),
            reason: null == i ? void 0 : i.reasonForSwitch
        };
        r.toString() === (null == (o = ee) ? void 0 : o.profile_id) && (ee.headers.x_vim_cachebc || ee.headers.x_cache) && (s.cache_hit = co(ee.headers)), de(Ra.VIDEO_STREAM_CHANGE, s), S = r, A = n[t].bitrate, k = n[t].audioBitrate
    })), t.events.on(g.STREAM_TARGET_CHANGE, (function(e) {
        e && (X = String(e.profile || "") || null)
    })), t.events.on(h.PLAYING, (function() {
        Z = !1
    })), t.events.once(Bt._firstTimeUpdate, (function() {
        y = !0
    })), t.events.on(Bt._adBuffering, (function() {
        de(Ra.AD_BUFFERING)
    })), t.events.on(Bt._adComplete, (function() {
        de(Ra.AD_COMPLETE)
    })), t.events.on(Bt._adClicked, (function() {
        de(Ra.AD_CLICKED)
    })), t.events.on(Bt._adError, (function(e) {
        de(Ra.AD_ERROR, {
            error_type: e.errorType,
            error_reason: e.errorReason
        })
    })), t.events.on(Bt._adPaused, (function() {
        de(Ra.AD_PAUSED)
    })), t.events.on(Bt._adResumed, (function() {
        de(Ra.AD_RESUMED)
    })), t.events.on(Bt._adStarted, (function(e) {
        de(Ra.AD_STARTED, {
            startup_duration: e.time ? mt(e.time / 1e3, 2) : null
        })
    })), t.events.on(Bt._adSkipped, (function() {
        de(Ra.AD_SKIPPED)
    })), t.events.on(Bt._pausedForAd, (function() {
        o.iPhone && l.setDisplayContext(1)
    })), t.events.on(Bt._resumedAfterAd, (function() {
        o.iPhone && l.setDisplayContext(0)
    })), t.events.on(Bt._webinarRegistrantBlocked, (function() {
        de(Ra.WEBINAR_REGISTRANT_BLOCKED)
    })), t.events.on(Bt._webinarRegistrantUnblocked, (function() {
        de(Ra.WEBINAR_REGISTRANT_UNBLOCKED)
    })), t.events.on(g.DROPPED_FRAMES, (function(e) {
        let t = e.dropped / e.total * 100;
        q = Math.round(100 * t) / 100
    })), t.events.on(g.BANDWIDTH, (function({
        speed: e
    }) {
        P.push(e), P.length > 500 && P.shift()
    })), t.events.on(g.MANIFEST_TIMEOUT, (function() {
        de(Ra.VIDEO_MANIFEST_TIMEOUT)
    })), t.events.on(g.MANIFEST_LOADED, (function() {
        de(Ra.VIDEO_MANIFEST_LOADED)
    })), t.events.on(g.DOWNLOAD_END, a), t.events.on(g.DOWNLOAD_TIMEOUT, (function() {
        de(Ra.DOWNLOAD_TIMEOUT)
    })), t.events.on(g.DRM_KEY_SWITCH, (function() {
        de(Ra.DRM_KEY_SWITCH)
    })), t.events.on(g.SCANNER_CHANGE, (function() {
        Y = null
    })), t.events.on(g.AV_DURATION_MISMATCH, (function(e) {
        de(Ra.VIDEO_DURATION_MISMATCH, {
            duration_difference: Math.round(100 * e) / 100
        })
    })), t.events.on(g.QUOTA_EXCEEDED_ERROR, (function({
        buffered: e
    }) {
        let t = {
            error_type: g.QUOTA_EXCEEDED_ERROR
        };
        t.buffered = mt(re(0, e), 2), t.bytes_loaded = Q, de(Ra.VIDEO_PLAYBACK_ERROR, t)
    })), t.events.on(g.DROPPED_FRAME_PERCENT_EXCEEDED, (function() {
        let e = {
            error_type: g.DROPPED_FRAME_PERCENT_EXCEEDED
        };
        de(Ra.VIDEO_PLAYBACK_ERROR, e)
    })), t.events.on(g.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, (function({
        incompatibleStreams: e,
        incompatibleStreamsAttributes: t
    }) {
        const n = ["codecs", "bitrate", "framerate", "quality", "width", "height", "mime_type"];
        e.forEach((e, i) => {
            const o = n.reduce((t, n) => (t.push(e[n]), t), []).concat(t[i].join(",")).join("|"),
                r = {
                    error_type: g.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED,
                    error_reason: o
                };
            de(Ra.VIDEO_PLAYBACK_ERROR, r)
        })
    })), t.events.on(D.MEDIASESSION_PLAY, (function() {
        de(Ra.MEDIASESSION_PLAY)
    })), t.events.on(D.MEDIASESSION_PAUSE, (function() {
        de(Ra.MEDIASESSION_PAUSE)
    })), t.events.on(D.MEDIASESSION_SEEK_FORWARD, (function() {
        de(Ra.MEDIASESSION_SEEK_FORWARD)
    })), t.events.on(D.MEDIASESSION_SEEK_BACKWARD, (function() {
        de(Ra.MEDIASESSION_SEEK_BACKWARD)
    })), t.events.on(Vt._seek, (function() {
        K = {
            seek_type: "api"
        }
    })), t.events.on(Vt._play, (function() {
        J = !0
    })), t.events.on(Vt._pause, (function() {
        J = !0
    })), t.events.on(x.WEBVR_ENTER, (function() {
        de(Ra.ENTER_WEBVR, !0)
    })), t.events.on(x.WEBVR_EXIT, (function() {
        de(Ra.EXIT_WEBVR, !0)
    })), t.events.on(B.BRAIN_ML_MODEL_INPUTS, (function(e) {
        var n;
        (null == (n = e.geolocation) ? void 0 : n.length) && e.geolocation[0].length ? e.geolocation = e.geolocation[0][0] : e.geolocation = "", t.config.request.urls.fresnel_mimir_inputs_url && function(e, t, n, i) {
            const o = {
                    chunk_request_id: n.chunkRequestID,
                    duration: n.duration,
                    available_qualities: n.availableQualities,
                    next_chunk_sizes: n.nextChunkSizes,
                    last_buffer_sizes: n.lastBufferSizes,
                    last_chunk_download_times: n.lastChunkDownloadTimes,
                    last_chunk_sizes: n.lastChunkSizes,
                    last_chunk_qualities: n.lastChunkQualities,
                    num_remaining_chunks: n.numRemainingChunks,
                    last_playback_heads: n.lastPlaybackHeads,
                    geolocation: n.geolocation,
                    session_id: t
                },
                r = Date.now(),
                a = [{
                    uuid: ft(),
                    created_at: r,
                    event: {
                        name: "mimir_inputs",
                        version: 1,
                        ts_ms: r,
                        fields: o
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new c(e).logRequestPromiseWithUrl(e, JSON.stringify(a), !0)
        }(t.config.request.urls.fresnel_mimir_inputs_url + "?beacon=1", t.config.request.session, e, Tr(t.config))
    })), t.events.on(M.STALL_JUMP, (function({
        msg: e
    }) {
        ue("livestall", {
            final: !1
        }, e)
    })), t.events.on(M.LOW_LATENCY_FALLBACK, (function({
        msg: e
    }) {
        ue("livefallback", {
            final: !1
        }, e)
    })), v = new Promise((e, n) => {
        var i;
        (null == (i = t.backbone) ? void 0 : i.video) && e(), t.events.on(O, e)
    }), v.then(te).catch(() => {}), t.events.on(Bt._swapVideo, te), ie.getFirstConsistentlyInteractive().then(e => {
        mt(e)
    }).catch(() => {})
}

function Ba(e) {
    let t, i, o = e.config.ott || {};
    const r = o.analytics_url || "https://collector.vhx.tv/events.gif",
        a = new c(r),
        s = K((function() {
            u("timeupdate")
        }), 1e4, {
            leading: !1
        }),
        l = K((function() {
            u("seeking")
        }), 500);

    function d() {
        o = e.config.ott || {}, i = !1, t = !1
    }

    function u(i, s) {
        (s = Object.assign({}, s, {
            name: o.video_title,
            user_id: o.viewer_user_id,
            user_email: o.viewer_user_email,
            site_id: o.site_id,
            user_agent: navigator.userAgent,
            url: top === self ? window.location.href : document.referrer,
            referrer: e.config.request.referrer,
            session_id: e.config.request.session,
            device: "html5",
            device_id: null,
            collection_id: o.collection_id,
            product_id: o.product_id,
            platform: o.platform,
            platform_id: null,
            platform_version: o.platform_version
        }, {
            type: "video",
            video_id: o.video_id,
            current_src: e.backbone.currentFile.src,
            current_subtitle: "none",
            current_type: o.video_content_type,
            duration: o.video_duration,
            is_drm: e.config.request.drm ? 1 : 0,
            is_fullscreen: t ? 1 : 0,
            is_trailer: o.is_trailer ? 1 : 0,
            is_chromecast: Do.isCastConnected ? 1 : 0,
            is_live: e.config.video.live_event ? 1 : 0,
            seconds: 10,
            timecode: e.currentTime
        })).name = i, void 0 === s.timestamp && (s.timestamp = Math.round(.001 * Date.now()));
        const l = n(r, s);
        return a.logRequestPromiseWithUrl(l, {}, !0, "GET").catch(e => {})
    }

    function p() {
        e.events.on(h.ENDED, _), e.events.on(h.ERROR, v), e.events.on(h.PAUSE, m), e.events.on(h.PLAY, f), e.events.on(h.TIME_UPDATE, s), e.events.on(h.SEEKING, l), e.events.on(h.SEEKED, g), e.events.on(h.WAITING, b), e.events.on(Bt._didEnterFullscreen, y), e.events.on(Bt._didExitFullscreen, E), e.events.on(Bt._adComplete, C), e.events.on(Bt._adClicked, T), e.events.on(Bt._adError, w), e.events.on(Bt._adStarted, L), e.events.on(Bt._adSkipped, S)
    }

    function _() {
        s.cancel(), u("ended")
    }

    function v() {
        s.cancel(), u("error")
    }

    function m() {
        s.cancel(), u("pause")
    }

    function f() {
        if (!i) return i = !0, void u("firstplay");
        u("play")
    }

    function g() {
        l.cancel(), u("seeked")
    }

    function b() {
        u("waiting")
    }

    function y() {
        t = !0
    }

    function E() {
        t = !1
    }

    function C() {
        u(Ra.AD_COMPLETE)
    }

    function T() {
        u(Ra.AD_CLICKED)
    }

    function w() {
        u(Ra.AD_ERROR)
    }

    function L() {
        u(Ra.AD_STARTED)
    }

    function S() {
        u(Ra.AD_SKIPPED)
    }
    e.events.on(Bt._configChanged, d), d(), e.config.ott ? p() : new Promise((t, n) => {
        e.ottVideoMetadata ? t() : e.events.on(Bt._ottMetadataSet, e => {
            t()
        })
    }).then(() => {
        o = e.ottVideoMetadata, p()
    }).catch(e => {})
}

function Va(e, t) {
    let n, i, r, a, s, l, c, d, u, p, _, v, m = !1;
    const g = E();
    let b = {};

    function y() {
        i && (N(), i = null), a && (a.destroy(), a = null), r && clearInterval(r), s = null, l = !1, c = !1, u = !1, d = !1, p = !1, m = !1, v = new Promise((e, t) => {
            _ = e
        }), e.events.once(f, () => {
            p = !0
        }), e.events.on(h.ERROR, (function(e) {
            !e || "NotAllowedError" !== e.name && "AbortError" !== e.name || (p = !1)
        })), n = document.querySelector(".vp-ads-wrapper"), n || (n = document.createElement("div"), n.classList.add("vp-ads-wrapper"), document.querySelector(".player").appendChild(n), n.innerHTML = sa.render("adcountdown")), i = n.querySelector(".vp-ads-tag"), b = {
            adCode: e.config.request.ads.adcode || null,
            adUnit: e.config.request.ads.adunit || null,
            adUrl: e.config.request.ads.adurl || null,
            videoPlayer: e.backbone,
            width: {
                linear: 488,
                nonlinear: 488
            },
            height: {
                linear: 252,
                nonlinear: 150
            }
        }, a = new de(n, b), a.on(ue.ADS_MANAGER_LOADED, () => {
            a.on(ue.AD_BUFFERING, C), a.on(ue.AD_COMPLETE, w), a.on(ue.AD_CLICK, T), a.on(ue.AD_ERROR, L), a.on(ue.AD_STARTED, S), a.on(ue.AD_SKIPPED, A), a.on(ue.ALL_ADS_COMPLETED, k), a.on(ue.CONTENT_PAUSE_REQUESTED, P), a.on(ue.CONTENT_RESUME_REQUESTED, I),
                function() {
                    if (!p) {
                        if (m) return;
                        e.events.once(f, () => {
                            _(), p = !0
                        })
                    }
                    v.then(D).catch(e => {}), e.events.on(h.ENDED, () => {
                        m || (l = !0, a.setContentComplete())
                    })
                }(), e.store.watch("ui.player.width", x), e.events.on(Bt._didEnterFullscreen, x, !0), e.events.on(Bt._didExitFullscreen, x, !1), p && _()
        })
    }

    function C() {
        c && e.events.fire(Bt._adBuffering)
    }

    function T() {
        e.events.fire(Bt._adClicked)
    }

    function w() {
        o.iPhone && e.backbone.addVideoEventListeners(), r && clearInterval(r), c = !1, e.events.fire(Bt._adComplete)
    }

    function L(t) {
        const n = {
            errorType: t.o,
            errorReason: t.l
        };
        e.events.fire(Bt._adError, n), "adPlayError" === n.errorType && e.events.fire(Bt._resumedAfterAd)
    }

    function S(t) {
        o.iPhone && e.backbone.removeVideoEventListeners();
        let i = t.getAd();
        i.isLinear() && (r = setInterval(() => {
            let e = "AD " + function(e) {
                if (e < 0) return "00:00";
                let t = Math.floor(e / 60),
                    n = Math.round(e % 60);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, t + ":" + n
            }(a.remainingTime);
            n.querySelector(".vp-ads-countdown").innerHTML = e
        }, 1e3), setTimeout(R, 1e3)), c = !0;
        let l = {
            type: i.isLinear() ? "linear" : "nonlinear"
        };
        s && (l.time = Date.now() - s, s = null), e.events.fire(Bt._adStarted, l)
    }

    function A(t) {
        e.events.fire(Bt._adSkipped, t)
    }

    function k(t) {
        u = !0, o.iPhone || a.destroy(), e.events.fire(Bt._allAdsCompleted, t)
    }

    function P() {
        e.events.fire(Bt._pausedForAd), s = Date.now(), l || (d = !0, e.backbone.paused ? e.events.once(h.PLAYING, () => {
            e.backbone.pause()
        }) : e.backbone.pause())
    }

    function I() {
        N(), e.events.fire(Bt._resumedAfterAd), o.iPhone && u && a.destroy(), l || O()
    }

    function O() {
        d = !1, e.backbone.play()
    }

    function R() {
        i = n.querySelector(".vp-ads-tag"), i.classList.remove("hidden"), i.removeAttribute("hidden")
    }

    function N() {
        i.classList.add("hidden"), i.setAttribute("hidden", "")
    }

    function M() {
        return {
            width: t.getBoundingClientRect().width,
            height: t.getBoundingClientRect().height
        }
    }

    function D() {
        const {
            width: t,
            height: n
        } = M();
        try {
            a.start(t, n)
        } catch (i) {
            l && e.events.fire(Bt._adComplete), d && O()
        }
    }

    function x(e) {
        const {
            width: t,
            height: n
        } = M();
        a.resize(t, n, e)
    }
    const B = {
        pause: () => (e.events.fire(Bt._adPaused), a.pause()),
        play: () => (e.events.fire(Bt._adResumed), a.play()),
        get volume() {
            return a.volume
        },
        set volume(e) {
            a.volume = e
        },
        toggleCastingState(e) {
            m = !!e, m && a.destroy()
        },
        events: g
    };
    return y(), e.events.on(Bt._configChanged, y), B
}
const Ua = ["clip_id", "profile_id", "player_size", "dropped_frames", "total_frames", "bandwidth", "markers", "streams", "files", "video_dims", "min_bandwidth", "max_badwidth", "buffer_occupancy", "live_latency", "scanner", "vr_headset"];
let Fa = function() {
        function e(e) {
            this._player = e, this._seriesStore = {}, this._latencyInterval = null, this._clearAllFields(), this._attachEventHandlers(), this._watchPlayerSize(), this._setDefaults()
        }
        var t = e.prototype;
        return t.reset = function() {
            this._clearAllFields(), this._setDefaults(), this._player.events.fire(Bt._debugDataChange)
        }, t._setToSeries = function(e, t) {
            return this._seriesStore[e] = [t], this._player.events.fire(Bt._debugDataChange), this._seriesStore[e]
        }, t._addToSeries = function(e, t) {
            return this._seriesStore[e].push(t), this._seriesStore[e].length > 300 && this._seriesStore[e].splice(0, 25), this._player.events.fire(Bt._debugDataChange), this._seriesStore[e]
        }, t.getCurrent = function(e) {
            return this._seriesStore[e].slice(-1)[0]
        }, t.getSeries = function(e) {
            return this._seriesStore[e]
        }, t._onLogMetric = function(e = {}) {
            const t = e.name,
                n = v({}, e.data),
                i = this._filterMetricData(t, n);
            this._addMarker(t, t, i)
        }, t._filterMetricData = function(e, t) {
            if (e === Ra.CHUNK_DOWNLOADED) {
                let e = {};
                return e.host = t.host, e.duration = mt(t.duration, 2), e.size = t.size, e.index = t.index, e.profile_id = t.profile_id, e.quality = t.quality, e.buffered = mt(t.buffered, 2), e.ttfb = mt(t.ttfb, 2), e.extraContext = t.extraContext, e.headers = pe(t.headers, ["x_vim_cachebc", "x_cache", "akamai_edge_ip", "akamai_request_bc", "x_akamai_request_id", "ak_reference_id", "akamai_grn", "content_type"]), e.cache_hit = co(e.headers), e
            }
            if (e === Ra.VIDEO_PLAYBACK_ERROR || e === Ra.VIDEO_LOAD_FAILURE || e === Ra.VIDEO_START_FAILURE || e === Ra.VIDEO_READY) return t;
            if (void 0 !== t.autoplay && void 0 !== t.looping) {
                let e = {};
                return e.cdn = t.cdn, e.quality = t.quality, e
            }
            return t
        }, t._addMarker = function(e, t, n = {}) {
            const i = this._player.backbone.currentTime,
                o = Date.now(),
                r = mt(re(i, this._player.backbone.buffered), 2);
            this._addToSeries("markers", {
                type: e,
                title: t,
                vt: i,
                t: o,
                bt: r,
                data: n
            })
        }, t._attachEventHandlers = function() {
            this._player.events.on(Bt._configChanged, () => {
                this.reset()
            }), this._player.events.on(g.BANDWIDTH, this._onBandwidthChange.bind(this)), this._player.events.on(g.BUFFER_OCCUPANCY, this._onBufferOccupancyChange.bind(this)), this._player.events.on(g.CURRENT_FILE_CHANGE, this._onFileChange.bind(this)), this._player.events.on(g.DROPPED_FRAMES, this._onDroppedFrames.bind(this)), this._player.events.on(g.SCANNER_CHANGE, this._onScannerChange.bind(this)), this._player.events.on(g.STREAM_CHANGE, this._onStreamChange.bind(this)), this._player.events.on(g.STREAM_CHANGE_START, this._onStreamChangeStart.bind(this)), this._player.events.on(h.TIME_UPDATE, this._onTimeUpdate.bind(this)), this._player.events.on(x.WEBVR_HARDWARE_AVAILABLE, this._onVRHeadsetAvailble.bind(this)), this._player.events.on(Bt._logMetric, this._onLogMetric.bind(this)), this._player.events.on(M.BUFFER_GAP_JUMP_PREVENT, this._onBufferGapJumpPrevent.bind(this)), this._player.events.on(M.BUFFER_GAP_JUMP, this._onBufferGapJump.bind(this)), this._player.events.on(M.STALL_JUMP, this._onStallJump.bind(this))
        }, t._onVRHeadsetAvailble = function(e) {
            e.displayName && this._setToSeries("vr_headset", e.displayName)
        }, t._setLatencyInterval = function() {
            this._latencyInterval = setInterval(() => {
                const e = this._player.backbone.buffered,
                    t = this._player.backbone.videoElement;
                if (e && e.length && t && t.currentTime) {
                    const e = this._player.backbone.latency;
                    this._setToSeries("live_latency", e)
                } else this._setToSeries("live_latency", 0)
            }, 500)
        }, t._removeLatencyInterval = function() {
            clearInterval(this._latencyInterval)
        }, t._watchPlayerSize = function() {
            this._player.store.watch("ui.player.boundingRect", e => {
                const t = this.getCurrent("video_dims"),
                    n = this._getVideoDimensionsString(e);
                this._addToSeries("video_dims", n);
                const i = t ? `Resized from ${t} to ${n}` : `Resized to ${n}`;
                this._addMarker("resize", i)
            })
        }, t._getVideoDimensionsString = function(e) {
            const t = `${Math.round(e.width)}px`,
                n = `${Math.round(e.height)}px`,
                i = window.devicePixelRatio && window.devicePixelRatio > 1 ? `@${mt(window.devicePixelRatio,3)}x` : "";
            return t && n ? `${parseInt(t,10)}×${parseInt(n,10)} ${i}` : ""
        }, t._clearAllFields = function() {
            this._seriesStore = Ua.reduce((e, t) => (e[t] = [], e), {})
        }, t._setDefaults = function() {
            const e = this._player.backbone.currentFile;
            this._addToSeries("files", e), this._addToSeries("scanner", this._player.backbone.currentScannerName), "HLSLiveScanner" === this._player.backbone.currentScannerName && this._setLatencyInterval(), this._setToSeries("min_bandwidth", 0), this._setToSeries("max_badwidth", 0);
            const t = this._player.store.get("ui.player.boundingRect"),
                n = this._getVideoDimensionsString(t);
            this._addToSeries("video_dims", n)
        }, t._onBandwidthChange = function(e) {
            const t = Math.round(100 * e.speed) / 100;
            this._addToSeries("bandwidth", {
                videoTime: this._player.backbone.currentTime,
                time: Date.now(),
                value: t
            });
            let n = this.getCurrent("max_badwidth"),
                i = this.getCurrent("min_bandwidth");
            (!i || t < i) && this._setToSeries("min_bandwidth", t), (!n || t > n) && this._setToSeries("max_badwidth", t)
        }, t._onDroppedFrames = function(e) {
            const {
                dropped: t,
                total: n
            } = e;
            this._setToSeries("total_frames", n), this._setToSeries("dropped_frames", t)
        }, t._onSeeked = function() {
            this._addMarker("seeked", `Seeked to ${this._player.backbone.currentTime}`)
        }, t._onEnded = function() {
            this._addMarker("ended", "Ended")
        }, t._onStreamChangeStart = function({
            previousStreamIndex: e,
            index: t,
            streams: n
        }) {
            const i = n[t],
                o = n[e],
                r = o ? o.bitrate : null;
            if (r !== i.bitrate && null !== r) {
                const e = this._getResolutionString(o),
                    t = this._getResolutionString(i);
                i.bitrate < r ? this._addMarker("downswitch", `Starting Downswitch from ${e} to ${t}`) : i.bitrate > r && this._addMarker("upswitch", `Starting Upswitch from ${e} to ${t}`)
            }
        }, t._onStreamChange = function(e, t, n) {
            var i, o, r, a;
            const s = n[t],
                l = this._getResolutionString(s),
                c = Na(s.codecs),
                d = null == (i = this._player.backbone) || null == i.getCurrentStream ? void 0 : i.getCurrentStream("audio"),
                u = Ma(null == d ? void 0 : d.codecs),
                p = `${c}${u?` / ${u}`:""}`,
                _ = null == (o = this._player.backbone) ? void 0 : o.telecine.getEffectByName("AmbisonicEffect");
            this._addMarker("switchcomplete", `Completed switch to ${l}`), this._addToSeries("streams", {
                profile: void 0 !== e ? e.profile : null,
                quality: void 0 !== e ? e.quality : `${s.height}p`,
                bitrate: s.bitrate,
                ambisonicConnected: null == _ ? void 0 : _.connected,
                ambisonicOrder: null == d ? void 0 : d.ambisonic_order,
                audioBitrate: null == d ? void 0 : d.bitrate,
                audioChannels: null !== (r = null !== (a = null == d ? void 0 : d.channels) && void 0 !== a ? a : s.channels) && void 0 !== r ? r : void 0,
                framerate: s.framerate,
                height: s.height,
                width: s.width,
                id: s.id,
                codec: p
            })
        }, t._onFileChange = function() {
            const e = this.getCurrent("files"),
                t = this._player.backbone.currentFile;
            this._addToSeries("files", t);
            const n = t.metadata.cdn,
                i = e ? e.metadata.cdn : null,
                o = e ? Ut[e.mime] : null,
                r = Ut[t.mime];
            let a = `CDN to ${n}/${r}`;
            i && (a = `CDN from ${i}/${o} to ${n}/${r}`), this._addMarker("filechange", a)
        }, t._onBufferOccupancyChange = function(e) {
            const t = Math.round(1e3 * e) / 1e3;
            this._addToSeries("buffer_occupancy", {
                videoTime: this._player.backbone.currentTime,
                time: Date.now(),
                value: t
            })
        }, t._onScannerChange = function() {
            const e = this.getCurrent("scanner"),
                t = this._player.backbone.currentScannerName;
            this._setToSeries("scanner", t), e && this._addMarker("scannerchange", `Scanner change to ${t}`), "HLSLiveScanner" === t ? this._setLatencyInterval() : this._removeLatencyInterval()
        }, t._onBufferGapJump = function(e) {
            this._addMarker("buffergapjump", e.msg)
        }, t._onBufferGapJumpPrevent = function(e) {
            this._addMarker("buffergapjumpprevent", e.msg)
        }, t._onStallJump = function(e) {
            this._addMarker("stalljump", e.msg)
        }, t._onStalled = function() {
            this._addMarker("stalled", "Stalled")
        }, t._getResolutionString = function(e) {
            return `${e.width}×${e.height}@${Math.round(e.framerate)} ${Math.round(e.bitrate/1e3).toLocaleString()} Kbps`
        }, t._onTimeUpdate = function() {
            this._player.events.fire(Bt._debugDataChange)
        }, e
    }(),
    Ha = function() {
        function e(e) {
            this._player = e, this._currentFragment = null, this._attachEventHandlers()
        }
        var t = e.prototype;
        return t._attachEventHandlers = function() {
            this._player.events.on(St._reset, () => {
                this.reset()
            })
        }, t._getFragment = function(e, t, n) {
            if (z(n)) return {
                startTime: 0,
                endTime: t,
                duration: t
            };
            const i = 1e3 * e,
                o = n.findIndex((e, t) => {
                    const o = n[t + 1],
                        r = t === n.length - 1;
                    return e <= i && (i < o || r)
                }),
                r = o === n.length - 1,
                a = n[o] / 1e3,
                s = n[o + 1],
                l = r ? t : (s - 1) / 1e3;
            return {
                startTime: a,
                endTime: l,
                duration: l - a
            }
        }, t._handleTimeUpdate = function({
            currentTime: e,
            duration: t
        }) {
            this.checkForNewFragment(e, t)
        }, t.checkForNewFragment = function(e, t) {
            if (!(this._currentFragment && this._currentFragment.startTime <= e && e <= this._currentFragment.endTime)) {
                var n;
                const i = null == (n = this._player.config.embed.interactive) ? void 0 : n.fragments;
                this._currentFragment = this._getFragment(e, t, i), this._player.events.fire(Bt._fragmentChanged)
            }
        }, t.reset = function() {
            var e;
            this._currentFragment = null, this._player.events.off(h.TIME_UPDATE, this._handleTimeUpdate.bind(this));
            const t = this._player.config.video.duration;
            !z(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) && (this.checkForNewFragment(0, t), this._player.events.on(h.TIME_UPDATE, this._handleTimeUpdate.bind(this)))
        }, b(e, [{
            key: "firstFragmentDuration",
            get: function() {
                var e;
                const t = null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments;
                return !z(t) && t.length > 1 ? (t[1] - 1) / 1e3 : this._player.config.video.duration
            }
        }, {
            key: "currentFragment",
            get: function() {
                var e;
                return z(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) ? {
                    startTime: 0,
                    endTime: this._player.config.video.duration,
                    duration: this._player.config.video.duration
                } : this._currentFragment
            }
        }]), e
    }();
var qa;
! function(e) {
    e.FIRST_INPUT_DELAY = "firstInputDelay", e.CUMULATIVE_LAYOUT_SHIFT = "cumulativeLayoutShift", e.LARGEST_CONTENTFUL_PAINT = "largestContentfulPaint"
}(qa || (qa = {}));
const Wa = 4e-4 / Object.keys(qa).length,
    $a = {};

function Ya() {}

function Ga(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}
const za = Ga((function(e) {
        const {
            events: t
        } = e;
        return new Promise(n => {
            t.on(Bt._parentUrlAvailable, (function(i) {
                const {
                    config: o,
                    backbone: r
                } = e, {
                    video: a,
                    embed: s
                } = o, {
                    startTime: l,
                    endTime: c
                } = function(e, t, n, i) {
                    const o = function(e, t) {
                        return Ti(Ei(e, "chapter", t))
                    }(e, t);
                    let r, a;
                    return o ? ({
                        startTime: r,
                        endTime: a
                    } = Ka(o, n, i)) : (r = function(e, t) {
                        return Ti(Ei(e, "t", t))
                    }(e, t), a = function(e, t) {
                        return Ti(Ei(e, "end", t))
                    }(e, t)), ({
                        startTime: r,
                        endTime: a
                    } = Xa(r, a, n)), {
                        startTime: r,
                        endTime: a
                    }
                }(i, a.id, a.duration, s.chapters);
                n({
                    startTime: l,
                    endTime: c
                }), null !== l && r.currentTime !== l && t.fire(St._setTime, l, l / r.duration)
            }))
        })
    })),
    ja = Ga((function(e) {
        var t, n;
        if (null == (t = e.config) || null == (n = t.video) ? void 0 : n.live_event) return;
        const {
            video: i,
            embed: o
        } = e.config;
        let {
            startTime: r,
            endTime: a
        } = function(e, t, n) {
            const i = function(e, t) {
                const n = new RegExp(`[?&]vimeo_t_${t}=([^&#]*)`).exec(e.href);
                let i;
                return n && (i = decodeURI(n[1])), i ? `#t=${i}` : e.hash
            }(document.location, e);
            let o = function(e) {
                    var t;
                    let n = e.match(/\ba?t=([0-9hms:]+)/);
                    null !== n && (e = n[1]);
                    let i = !1,
                        o = 0,
                        r = 0,
                        a = 0;
                    return n = e.match(/^([0-9]+)$/), (null == (t = n) ? void 0 : t.length) && (i = !0, a = n[1]), !1 === i && (n = e.match(/^(?:([0-9]+)h)?(?:([0-9]+)m)?(?:([0-9]+)s)?/), null !== n && "" !== n[0] && (i = !0, [, o = 0, r = 0, a = 0] = n)), !1 === i && (n = e.match(/^([0-9:]+)/), null !== n && (i = !0, [a, r = 0, o = 0] = e.split(":").reverse())), i ? 60 * parseInt(o, 10) * 60 + 60 * parseInt(r, 10) + parseInt(a, 10) : null
                }(i),
                r = function(e) {
                    var t;
                    return Ti(Ci(null == (t = document.location.hash) ? void 0 : t.replace("#", ""), "end"))
                }();
            const a = function(e) {
                var t;
                return Ti(Ci(null == (t = document.location.hash) ? void 0 : t.replace("#", ""), "chapter"))
            }();
            if (null !== o && function(e) {
                    var t; - 1 !== e.indexOf("at=") && (null == (t = history) ? void 0 : t.replaceState) && history.replaceState("", "", window.location.pathname + window.location.search)
                }(i), a) {
                const e = Ka(a, t, n);
                e && (o = e.startTime, r = e.endTime)
            }
            return ({
                startTime: o,
                endTime: r
            } = Xa(o, r, t)), {
                startTime: o,
                endTime: r
            }
        }(i.id, i.duration, o.chapters);

        function s(t, n) {
            null !== t && (e.startTime = dt(t, 0, i.duration)), null !== n && (e.endTime = n, function({
                player: e,
                startTime: t,
                endTime: n,
                loop: i = !1
            }) {
                const {
                    events: o,
                    config: r
                } = e;
                (function() {
                    ! function(e, t, n) {
                        var i;
                        e.embed.interactive = null !== (i = e.embed.interactive) && void 0 !== i ? i : {
                            markers: 0
                        }, e.embed.interactive.fragments = [1e3 * t, 1e3 * n]
                    }(r, t, n);
                    const i = n - t,
                        o = {
                            duration: i,
                            endTime: n,
                            startTime: t
                        },
                        a = {
                            get currentFragment() {
                                return o
                            },
                            firstFragmentDuration: i,
                            checkForNewFragment: di,
                            reset: di
                        };
                    e.overrideFragmentsHandler(a)
                })(), o.on(h.TIME_UPDATE, (function({
                    currentTime: o
                }) {
                    o >= n && (i ? e.backbone.currentTime = t : e.backbone.pause())
                })), o.on(Bt._playButtonPressed, (function() {
                    e.backbone && e.backbone.currentTime >= n && (e.backbone.currentTime = t)
                })), o.on(Bt._configChanged, (function(t) {
                    t && e.restoreLastFragmentsHandler()
                }))
            }({
                player: e,
                startTime: null != t ? t : 0,
                endTime: n,
                loop: o.loop
            }))
        }
        return s(r, a),
            function(t) {
                var n = function() {
                    if (null === r && null === a) return function(e, t, n) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(za(e), (function(e) {
                        ({
                            startTime: r,
                            endTime: a
                        } = e), s(r, a)
                    }))
                }();
                if (n && n.then) return n.then(Ya)
            }()
    }));

function Ka(e, t, n) {
    const i = function(e, t, n = [], i = 0) {
        const o = n.sort((e, t) => e.timecode - t.timecode),
            r = o.findIndex(t => t.id === e),
            a = o[r],
            s = o[r + 1];
        if (a) return l(l({}, a), {}, {
            endTime: s ? s.timecode - i : t
        })
    }(e, t, n, .25);
    let o;
    return i && (o = {
        startTime: i.timecode,
        endTime: i.endTime
    }), o
}

function Xa(e, t, n) {
    let i = e,
        o = t;
    return i && (i = Math.max(i, 0)), o && (o = Math.min(o, n), i ? i > o && (i = null, o = null) : i = 0), {
        startTime: i,
        endTime: o
    }
}

function Za({
    element: t,
    delegate: n = {},
    cssLoadedPromise: i = Promise.resolve(null),
    name: r = null
}) {
    fe.set(wo);
    let a = !1;
    const s = he(ra, be(e => (...t) => {
            const n = e.apply(void 0, t),
                i = it();

            function o(e, t) {
                return (e = [].concat(e)).map(e => t(n.createGetter(e)))
            }
            return l(l({}, n), {}, {
                watch: function(e, t) {
                    return o(e, e => {
                        let o = i.get({
                            selector: e,
                            listener: t
                        });
                        if (!o) {
                            const r = function(e, t) {
                                let i = e(n.getState());
                                return n.subscribe((function() {
                                    let o = e(n.getState());
                                    if (i !== o) {
                                        let e = i;
                                        i = o, t(i, e, n.getState())
                                    }
                                }))
                            }(e, t);
                            o = i.insert({
                                selector: e,
                                listener: t,
                                unsubscribe: r
                            })
                        }
                        return o.unsubscribe
                    })
                },
                unwatch: function(e, t) {
                    return o(e, e => {
                        const n = i.get({
                            selector: e,
                            listener: t
                        });
                        return n && n.unsubscribe()
                    })
                }
            })
        }, function(e = {}) {
            return t => (...n) => {
                const i = t.apply(void 0, n);

                function o() {
                    return e
                }
                const r = W(e => {
                    if ($(e)) return e;
                    const t = d(o(), e);
                    return $(t) ? t : t => d(t, e)
                });
                return l(l({}, i), {}, {
                    getSelectors: o,
                    createGetter: r,
                    get: function(e, t) {
                        let n = (e = r(e))(i.getState());
                        return void 0 !== t && (n = Y(n, t)), n
                    }
                })
            }
        }(aa), ge.apply(void 0, []))),
        u = new Map,
        p = E(),
        v = new So({
            events: p
        }),
        m = ft();
    t.classList.add(`player-${m}`), t.classList.add("loading"), t.id || (t.id = `player${m}`), t.innerHTML = sa.render("outer", {
        strings: {
            back: "Back",
            close: "Close overlay"
        }
    });
    const f = t.querySelector(".vp-telecine");
    if (o.iOS) {
        const e = document.createElement("video");
        f.appendChild(e);
        try {
            e.setAttribute("muted", ""), e.setAttribute("playsinline", ""), e.load()
        } catch (ke) {
            wo.captureException(ke)
        }
    }
    let b, y, C, T, w, L = null,
        S = null,
        A = null,
        k = null,
        P = null,
        I = null,
        O = null,
        R = null,
        N = null,
        M = [],
        D = null,
        x = null,
        B = {};
    const V = new Promise((e, t) => {
        w = e
    }).then(() => (p.fire(Bt._ready), null));
    let U = {
        get config() {
            return v.config
        },
        set config(e) {
            v.config = e
        },
        get delegate() {
            return n
        },
        set delegate(e) {
            n = e
        },
        ready(e) {
            if (!e) return V;
            V.then(() => e()).catch(e => {
                wo.captureException(e)
            })
        },
        get sessionId() {
            return v.config.request.session
        },
        get name() {
            return r
        },
        get startTime() {
            return D
        },
        set startTime(e) {
            D = e
        },
        get endTime() {
            return x
        },
        set endTime(e) {
            x = e
        }
    };

    function F(e) {
        var t;
        const {
            old: n,
            loaded: i
        } = e;
        if (function(e, t) {
                var n;
                null == (n = t.request) || n.ab_tests
            }(0, i), (null == (t = i.request) ? void 0 : t.urls.js) && Ee(i.request.urls.js), window.parent !== window) {
            var o;
            let e = "Private Video on Vimeo";
            i.view !== Ft.main && i.view !== Ft.privateUnlocked && i.view !== Ft.webinarUnlocked || (e = `${i.video.title} from ${i.video.owner.name} on Vimeo`), document.title = e, (null == (o = history) ? void 0 : o.replaceState) && i.video && n && history.replaceState({
                id: i.video.id
            }, "", `/video/${i.video.id}${window.location.search}`)
        }
        if (i.view !== Ft.main && i.view !== Ft.privateUnlocked && i.view !== Ft.webinarUnlocked) throw new Error(`Config not authorized: ${i.view}`);
        ! function(e, t) {
            (null == e ? void 0 : e.embed) && (null == t ? void 0 : t.embed) && [
                ["color", Gt],
                ["color_one", Yt],
                ["color_two", Gt],
                ["color_three", zt],
                ["color_four", jt]
            ].forEach(([n, i]) => {
                t.embed[n] && e.embed[n] !== t.embed[n] && p.fire(St._changeColor, t.embed[n], i)
            })
        }(n, i), k && k.reset();
        let r = !n || !n.video || n.video.id !== i.video.id || n.video.version.current !== i.video.version.current;
        return b = null, C = L, p.fire(St._reset), s.dispatch(Vo(i)), p.fire(Bt._configChanged, r, i), e
    }

    function H(e) {
        if ("opacity" === e.propertyName) {
            const e = document.querySelector(".vp-placeholder");
            e && (Te(e).off("transitionend", H), e.parentNode.removeChild(e))
        }
    }

    function q() {
        ! function() {
            const e = document.querySelector(".vp-placeholder");
            e && (Te(e).on("transitionend", H), e.classList.add("vp-placeholder-fadeout"))
        }(), t.classList.remove("loading"), w()
    }

    function G(e) {
        return i.then(() => {
            if (K(e), S && S.resetThumbnail(), "function" != typeof B.authorizationHandler) throw new Error("Config was not authorized.");
            return B.authorizationHandler(q)
        }).then(e => (v.config = e, b = null, s.dispatch(Vo(v.config)), p.fire(St._reset), p.fire(Bt._configChanged, !0, v.config), e))
    }

    function z() {
        a || (p.on(Bt._userLogIn, (function(e) {
            v.reload().then(t => {
                if (!v.config.user.logged_in) return p.fire(Bt._loginFailure), t;
                switch (p.fire(Bt._userLoggedIn, e), e) {
                    case "like":
                        v.config.user.liked && p.fire(Bt._liked);
                        break;
                    case "watch-later":
                        v.config.user.watch_later && p.fire(Bt._addedToWatchLater);
                        break;
                    case "private":
                        p.fire(Bt._privateUnlocked, t.loaded)
                }
                return t
            }).catch(e => {
                wo.captureException(e)
            })
        })), p.on(Bt._userLoggedOut, () => {
            v.reload().catch(e => {
                wo.captureException(e)
            })
        }), a = !0)
    }

    function j(e) {
        ja(e), z(),
            function(e) {
                S = new Qo(e, s, t.querySelector(".vp-preview")), p.on([g.BUFFER_ENDED, h.PLAYING], () => {
                        S.hide()
                    }), L = new ye(f, v.config), C = L, O = new Fa(e), new Cr(e, s, t.querySelector(".vp-video-wrapper")), X(e), e.doNotTrackEnabled || (v.config.request.urls.test_imp && function(e, t) {
                        if (!e.config.request.ab_tests) return;
                        const n = new c(t);
                        for (const i in e.config.request.ab_tests) {
                            const t = e.config.request.ab_tests[i];
                            if (!t.track) continue;
                            const o = {
                                session_id: e.config.request.session,
                                test_id: i,
                                test_group: String(t.group)
                            };
                            n.log(o, !0, !1).catch(e => {})
                        }
                    }(e, `${v.config.request.urls.test_imp}?beacon=1`), new xa(e, t, s, v.config.request.urls.fresnel), new Sa(e), new Sr(e, s), new Ba(e), function(e) {
                        function t(t) {
                            return function({
                                value: n
                            }) {
                                $a[t] || ($a[t] = !0, function(t, n) {
                                    Pa(ha.PLAYER_PERFORMANCE_MEASUREMENT, e.config, {
                                        measurement_type: t,
                                        measurement_value: n
                                    })
                                }(t, n))
                            }
                        }
                        Math.random() <= Wa && (_e(t(qa.FIRST_INPUT_DELAY)), ve(t(qa.CUMULATIVE_LAYOUT_SHIFT)), me(t(qa.LARGEST_CONTENTFUL_PAINT)))
                    }(e)), k = new hr(e),
                    function(e) {
                        if (!Qi(e.config)) return;
                        const n = new Mo({
                            textAlert: new Oa(t),
                            player: e
                        });
                        Do.init({
                            chromecastPlayer: n
                        }), Do.on([No.error, No.mediaLoadedFailed], e => {
                            wo.captureException(e)
                        })
                    }(e), K(e)
            }(e)
    }

    function K(e) {
        A || (A = new Ia(e), la(U, A), Ce.set(wo))
    }

    function X(e) {
        const n = v.config.request.ads;
        n && (n.adcode && n.adunit || n.adurl) && (P = new Va(e, t.querySelector(".vp-video-wrapper")), p.on(Bt._pausedForAd, () => {
            C = P, p.fire(Bt._displayContextChanged)
        }), p.on(Bt._resumedAfterAd, () => {
            C = L, p.fire(Bt._displayContextChanged)
        }), Do && (Do.on(No.connected, () => {
            P.toggleCastingState(!0)
        }), Do.on(No.disconnected, () => {
            P.toggleCastingState(!1)
        })))
    }

    function Z(e, t) {
        let n = e;
        return isNaN(e) && "string" != typeof e || (n = _t(pt(e), e, t)), n
    }
    let J = {
        get store() {
            return s
        },
        get config() {
            return v.config
        },
        get element() {
            return t
        },
        get events() {
            return p
        },
        get uuid() {
            return m
        },
        get expose() {
            return U
        },
        get backbone() {
            return L
        },
        get adHandler() {
            return P
        },
        get displayContext() {
            return C
        },
        get preview() {
            return S
        },
        get doNotTrackEnabled() {
            return v.config.embed.dnt || v.config.request.flags.dnt
        },
        get playLoggingEnabled() {
            return v.config.embed.log_plays && v.config.request.flags.plays
        },
        get currentTime() {
            return Do.isCastConnected ? Do.chromecastPlayer.currentTime : L.currentTime
        },
        get debugCollector() {
            return O
        },
        overrideFragmentsHandler(e) {
            N = R, R = e, p.fire(Bt._fragmentChanged)
        },
        restoreLastFragmentsHandler() {
            R = N, p.fire(Bt._fragmentChanged)
        },
        get fragmentsHandler() {
            return R
        },
        get ottVideoMetadata() {
            return I
        },
        get abTests() {
            return M
        },
        set ottVideoMetadata(e) {
            I = e
        },
        addABTest(e) {
            M.push(e)
        },
        init: (e, n) => y || (R = new Ha(J), new ca(J, s, t), B = n, y = v.load(e).then(F).catch(e => (z(), G(J))).then(() => "function" == typeof B.initializationHandler ? Promise.resolve(n.initializationHandler()) : null).then(() => (j(J), "function" == typeof B.postInitializationHandler ? Promise.resolve(n.postInitializationHandler()) : null)).then(() => Promise.all([S.thumbnailPromise, i])).then(q).then(() => (wo.setUp(J), null)).catch(e => {
            wo.captureException(e)
        }), y),
        loadVideo(e, n) {
            if (T === e && b) return b;
            if (S && S.resetThumbnail(), null == n ? void 0 : n.video_version) {
                let e = v.config.video.version.available;
                if (!e || !Array.isArray(e)) return Promise.reject("No available video versions");
                if (e = e.map(e => e.id), -1 === e.indexOf(n.video_version)) return Promise.reject("Invalid version id specified")
            }
            p.fire(Bt._loadVideo), T = e, t.classList.add("loading");
            const i = Z(e, n),
                o = u.get(i);
            return e = o ? o._config.loaded : e, b = v.load(e, n).then(e => {
                if (o) {
                    const e = L.element;
                    L = o._backbone, L.element.style.visibility = "visible", e.parentNode.replaceChild(L.element, e), p.fire(Bt._swapVideo)
                }
                return e = F(e), P || X(J), e
            }).catch(e => G(J)).then(e => {
                let t = S.loadThumbnail();
                return Promise.resolve(t)
            }).then(q), b
        },
        preloadVideo(e, t, n) {
            const i = Z(t, n),
                o = u.get(i);
            return o ? Promise.resolve(o) : new So({
                events: p
            }).load(t, n).then(t => {
                t.loaded.preload = !0;
                const n = L.element.cloneNode(!1);
                n.style.visibility = "hidden", L.element.parentNode.insertBefore(n, L.element);
                const o = new ye(n, t.loaded);
                o.loadVideo(t.loaded), o.preload = e;
                const r = {
                    _backbone: o,
                    _config: t
                };
                return u.set(i, r), r
            })
        },
        performDelegateAction(t, i = (() => {}), o = []) {
            var r, a;
            let s;
            var l;
            null != (r = n) && r[t.will] && (s = (l = n)[t.will].apply(l, [v.config.video.id].concat(e(o))), !1 === s) || (i.apply(void 0, [v.config.video.id].concat(e(o), [s])), (null == (a = n) ? void 0 : a[t.did]) && n[t.did]())
        },
        ready: () => V,
        verifyConfig: () => v.verify(),
        loadConfigRequestObject: () => v.loadRequest().then(e => {
            const t = l(l({}, v.config), {}, {
                request: e
            });
            return F({
                old: v.config,
                loaded: t
            })
        }).catch(e => G(J)),
        updatePhpTokens: () => new Promise((e, t) => {
            const {
                vimeo_api_client_token: n,
                vimeo_api_interaction_tokens: i,
                vimeo_live_client_token: o,
                vimeo_bucketed_live_client_token: r
            } = v.config.user;
            let a = !1;
            if (n) try {
                a = qn(JSON.parse(atob(n.split(".")[1])).exp) >= 0
            } catch (ke) {
                return void t(new Error("Failed to parse PHP client token expiration"))
            }
            if (i) try {
                const e = JSON.parse(atob(i.likes.split(".")[1])).exp,
                    t = JSON.parse(atob(i.watch_later.split(".")[1])).exp,
                    n = JSON.parse(atob(i.following.split(".")[1])).exp;
                a = qn(e) >= 0 || qn(t) >= 0 || qn(n) >= 0
            } catch (ke) {
                return void t(new Error("Failed to parse PHP interaction tokens expiration"))
            }
            if (o) try {
                a = qn(JSON.parse(atob(o.split(".")[1])).exp) >= 0
            } catch (ke) {
                return void t(new Error("Failed to parse PHP Live token expiration"))
            }
            if (r) try {
                a = qn(JSON.parse(atob(r.split(".")[1])).exp) >= 0
            } catch (ke) {
                return void t(new Error("Failed to parse PHP Live token expiration"))
            }
            if (a) {
                const {
                    signature: n,
                    session: i,
                    timestamp: o,
                    expires: r
                } = v.config.request, a = `https://${v.config.player_url}/video/${v.config.video.id}/token/refresh?signature=${n}&session=${i}&time=${o}&expires=${r}`;
                _(a, {
                    withCredentials: !0
                }).json().then(t => (v.config.user.vimeo_api_client_token = t ? t.vimeo_api_client_token : null, v.config.user.vimeo_api_interaction_tokens = t ? t.vimeo_api_interaction_tokens : null, v.config.user.vimeo_live_client_token = t ? t.vimeo_live_client_token : null, v.config.user.vimeo_bucketed_live_client_token = t ? t.vimeo_bucketed_live_client_token : null, e())).catch(e => {
                    wo.captureBreadcrumb("Failed to refresh JWT token", {}, "auth", "error"), t(e)
                })
            } else e()
        })
    };
    return J
}
let Ja = function() {
    function e(e, t, n = 1) {
        E(this), this.version = n, this.visible = !1;
        var i = this._wrap = document.createElement("div");
        i.classList.add("compass-wrapper"), i.innerHTML = sa.render("compass", {
            version: n,
            label: "Reset view"
        }), i.classList.add("cloaked"), e.appendChild(i), t && i.addEventListener("click", t), this._layerSlice = i.querySelector(".compass-slice"), this._lineSlice = i.querySelector(".compass-line");
        const o = () => {
                this._mouseIn = !0
            },
            r = e => () => {
                setTimeout(() => {
                    this._mouseIn || (this.fade(), this._mouseIn = !1)
                }, e)
            };
        Te(this._wrap).on("mousein", o).on("pointerin", o).on("mouseout", r(1e3)).on("pointerout", r(1e3)), r(2500)()
    }
    var t = e.prototype;
    return t.setAngle = function(e, t) {
        this._animationFrame && window.cancelAnimationFrame(this._animationFrame);
        let n = 0;
        1 === this.version ? n = -45 : 2 === this.version && (n = -30);
        const i = `${n+t}`,
            o = (e + 85) / 170;
        this._animationFrame = window.requestAnimationFrame(() => {
            this._layerSlice.setAttribute("transform", `rotate(${i}, 18, 18)`), this._lineSlice && this._lineSlice.setAttribute("d", this._getLinePath(o, 18))
        })
    }, t._getLinePath = function(e, t) {
        const n = 2 * t - Math.round(2 * t * e),
            i = (2 * t - 2 * Math.sqrt(2 * n * t - Math.pow(n, 2))) / 2;
        return `M${i+5},${n} L${2*t-i-5},${n} z`
    }, t.reveal = function() {
        this._wrap.classList.remove("cloaked"), window.requestAnimationFrame(() => {
            this._wrap.classList.add("in")
        }), this.visible = !0
    }, t.fade = function() {
        this._wrap.classList.add("fade"), this.visible = !0
    }, t.hide = function() {
        this._wrap.classList.remove("in"), this._wrap.classList.remove("fade"), this._wrap.classList.add("leaving");
        const e = () => {
            "opacity" === event.propertyName && (this._wrap.classList.remove("leaving"), this._wrap.classList.add("cloaked"), this.visible = !1), Te(this._wrap).off("transitionend", e)
        };
        Te(this._wrap).on("transitionend", e)
    }, t.updatePosition = function(e) {
        if (!e) return;
        const t = st(e);
        return t.height < 265 ? (this._wrap.classList.remove("align-bottom"), void this._wrap.classList.add("hidden")) : t.height < 336 ? (this._wrap.classList.remove("hidden"), void this._wrap.classList.add("align-bottom")) : (this._wrap.classList.remove("hidden"), void this._wrap.classList.remove("align-bottom"))
    }, t.getWrapper = function() {
        return this._wrap
    }, e
}();

function Qa(e, t, n) {
    var i = null,
        r = o.touch ? 4500 : 2e3,
        a = !0,
        s = !0,
        l = !1,
        c = null,
        d = null,
        u = [],
        p = !1,
        _ = null,
        v = null,
        m = null,
        b = !0,
        y = !1,
        E = !1,
        C = !1,
        T = !1,
        w = !1;
    let L, S;
    var A = n.querySelector(".vp-target"),
        k = n.querySelector(".vp-controls");
    let I = n.querySelector('button[class*="_playButton_"]');
    var O = n.querySelector(".vp-title"),
        R = n.querySelector(".vp-video");
    let N = n.querySelector(".vp-sidedock"),
        M = n.querySelectorAll(".vp-menu"),
        D = n.querySelector(".vp-ads-wrapper");
    const B = e.config.embed.autoplay && e.config.request.flags.autohide_controls,
        V = o.touch ? 300 : 0;
    let U = null;
    const F = Da(e.config, "webvr").group || !1;

    function H() {
        clearTimeout(i), i = null
    }

    function q() {
        "preact-menu" !== m && (m && m.isNewMenu && m.isFullwidth() || w && (clearTimeout(i), i = setTimeout(() => $(!1, !0), r)))
    }

    function W() {
        ee.element && ee.element.classList.contains("js-player-fullscreen") && (l || (n.classList.add("player-cursor-hide"), s = !0, l = !0))
    }

    function $(t, i) {
        var r, l, c;
        if ("preact-menu" === m && i) return;
        if (m && m.isNewMenu && m.isFullwidth()) return;
        if (!y && !b && !n.classList.contains("player-ad")) return;
        if (C) return;
        H(), k = te(), I = ne(), N = Q(), M = n.querySelectorAll(".vp-menu");
        const d = document.activeElement && document.body.classList.contains("showfocus") && ((null == (r = N) ? void 0 : r.contains(document.activeElement)) || (null == (l = k) ? void 0 : l.contains(document.activeElement)) || (null == (c = I) ? void 0 : c.contains(document.activeElement))),
            u = document.activeElement && "preact-menu" === m && Array.from(M).find(e => null == e ? void 0 : e.contains(document.activeElement));
        d || u || (e.events.fire(t ? Bt._mousedOut : Bt._mouseTimeout), s = !0, o.spatialPlayback && e.config.video.spatial || (A.classList.add("hidden"), A.setAttribute("hidden", "")), a = !0, W())
    }

    function Y() {
        q(), T || y && b && !n.classList.contains("player-ad") || (e.events.fire(Bt._mousedOver), A.classList.remove("hidden"), A.removeAttribute("hidden"))
    }

    function G() {
        y || b ? n.removeAttribute("tabindex") : y || b || E || n.setAttribute("tabindex", "0")
    }

    function z() {
        e.events.on([h.TIME_UPDATE, h.SEEKED], (function t({
            currentTime: n
        }) {
            n >= 1.75 && null === i && (e.events.fire(Bt._targetTimeReached), e.events.off([h.TIME_UPDATE, h.SEEKED], t))
        }))
    }

    function j() {
        R.classList.remove("threesixty-video"), e.element.classList.remove("grabbable"), e.element.classList.remove("grabbing"), c && c.hide()
    }

    function K() {
        u.forEach(e => clearTimeout(e)), u = []
    }

    function X(e) {
        e && (e.classList.remove("cloaked"), window.requestAnimationFrame(() => {
            e.classList.add("in")
        }))
    }

    function Z(e) {
        e && (e.classList.add("leaving"), window.requestAnimationFrame(() => {
            Te(e).on("transitionend", (function t(n) {
                "opacity" === n.propertyName && (e.classList.remove("in"), e.classList.remove("leaving"), e.classList.add("cloaked"), Te(e).off("transitionend", t))
            }))
        }))
    }

    function J(e) {
        N = Q(), st(N).width > 60 ? e.classList.add("vp-alert-bumpdown") : e.classList.remove("vp-alert-bumpdown")
    }

    function Q() {
        return N || (N = n.querySelector(".vp-sidedock"), N)
    }

    function te() {
        return k || (k = n.querySelector(".vp-controls"))
    }

    function ne() {
        return I || (I = n.querySelector('button[class*="_playButton_"]'), I)
    }
    return function() {
            var t = !0;

            function i() {
                Y()
            }

            function d(i) {
                var c;
                if (r = 2e3, s) s = !1;
                else if (void 0 === L || void 0 === S || i.screenX !== L || i.screenY !== S)
                    if (L = i.screenX, S = i.screenY, l && (n.classList.remove("player-cursor-hide"), l = !1), 0 !== i.screenX && i.screenX !== screen.width - 1 && 0 !== i.screenY && i.screenY !== screen.height - 1) {
                        if (t = !0, o.spatialPlayback && (null == (c = e.config.video) ? void 0 : c.spatial)) {
                            const t = st(e.element),
                                n = i.clientX - t.left,
                                o = i.clientY - t.top,
                                r = 180,
                                a = o > e.element.clientHeight - 55,
                                s = n > e.element.clientWidth - 45 && o < r;
                            if (p || !a && !s) return
                        }
                        a && Y(), q()
                    } else H(), W(), t && ($(!0), t = !1)
            }

            function u(e) {
                var t;
                D = D || (D = n.querySelector(".vp-ads-wrapper"), D), null != (t = D) && t.contains(e.target) || $(!0)
            }

            function _(e) {
                var t, n, i;
                k = te(), N = Q(), I = ne();
                var o = (null == (t = k) ? void 0 : t.contains(e.target)) || (null == (n = N) ? void 0 : n.contains(e.target)) || (null == (i = I) ? void 0 : i.contains(e.target));
                let r = c && c.getWrapper().contains(e.target);
                y && b || r ? o || !y && !b || $(!0) : (clearTimeout(U), U = setTimeout(Y, V))
            }

            function v(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return d(e)
            }
            o.pointerEvents ? Te(n).on("pointerenter", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return r = 2e3, i();
                r = 4500, _(e)
            })).on("pointermove", v).on("pointerleave", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return u(e)
            })) : Te(n).on("touchmove", (function() {
                r = 4500, q()
            })).on("touchend", _).on("mouseenter", i).on("mousemove", d).on("mouseleave", u), e.events.on(Bt._didEnterFullscreen, (function() {
                o.pointerEvents ? Te(ee.element).on("pointermove", v) : Te(ee.element).on("mousemove", d)
            })), e.events.on(Bt._didExitFullscreen, (function() {
                o.pointerEvents ? Te(ee.element).off("pointermove", v) : Te(ee.element).off("mousemove", d)
            }))
        }(), e.events.on(h.PLAY, (function(e) {
            B || 0 === e || Y()
        })).on(Bt._paused, Y).on([g.BUFFER_ENDED, h.SEEKED, Bt._scrubbingEnded, Bt._volumeChanged, Bt._menuPanelOpened], q).on(f, (function() {
            w = !0
        })), e.events.on(Bt._menuVisibilityChanged, (function(e) {
            e && q()
        })), e.events.on(Bt._overlayOpened, G).on(Bt._controlBarVisibilityChanged, (function(e) {
            b = e, G()
        })).on(Bt._sidedockVisibilityChanged, (function(e) {
            y = e, G()
        })), e.events.on(Bt._outroDisplayed, (function() {
            C = !0, Y()
        })).on(Bt._outroHidden, (function() {
            C = !1
        })),
        function() {
            var i = !1,
                r = 0;
            e.events.on(Bt._menuVisibilityChanged, (function(e, t) {
                m = "preact-menu" === e ? e : e ? t : null
            })), Te(n).on(o.pointerEvents ? "pointerup" : "click", (function(i) {
                if (m) return;
                if (2 === i.button) return;
                if (!i.target.classList) return;
                if (! function(e) {
                        var t, i;
                        return N = Q(), O = O || (O = n.querySelector(".vp-title")), (e.classList.contains("vp-title") || e.classList.contains("vp-target") || (null == (t = O) ? void 0 : t.contains(e.parentNode)) && "HEADER" === e.parentNode.tagName || R.contains(e)) && !(null == (i = N) ? void 0 : i.contains(e))
                    }(i.target)) return;
                var a = ("pointerup" === i.type || "MSPointerUp" === i.type) && "mouse" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_MOUSE;
                const s = w && o.spatialPlayback && e.config.video.spatial && d;
                if (o.touch || a) {
                    const t = !o.mobileAndroid;
                    if (!s) {
                        if (w && t) return;
                        return void e.events.fire(Bt._playButtonPressed)
                    }
                }
                1 == ++r && setTimeout((function() {
                    if (s) {
                        let t = v && v.x === i.clientX && v.y === i.clientY;
                        return 1 === r && t && !o.mobileAndroid && e.events.fire(e.backbone.paused ? Bt._playButtonPressed : Bt._pauseButtonPressed), 1 !== r && e.backbone.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(r = 0)
                    }
                    if (1 === r) {
                        if (t.get(Ho) && !t.get(zo) && !t.get(Xo)) return;
                        e.events.fire(e.backbone.paused ? Bt._playButtonPressed : Bt._pauseButtonPressed)
                    } else e.events.fire(Bt._fullscreenButtonPressed);
                    r = 0
                }), 200)
            })), Te(n).on("mousedown", ".vp-video-wrapper", (function(e) {
                var t;
                if (!i) return A.classList.remove("hidden"), A.removeAttribute("hidden"), 2 !== e.button && document.createEvent && ((t = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), A.dispatchEvent(t)), !1
            })).on("contextmenu", ".vp-video", (function(e) {
                return A.classList.remove("hidden"), A.removeAttribute("hidden"), !1
            })), e.events.on(St._toggleNativeControls, (function(e) {
                if (e) return i = !0, void A.classList.add("hidden");
                i = !1, A.classList.remove("hidden")
            }))
        }(),
        function() {
            var t, i;
            o.touch || (Te(n).on("focus", "a, button, input, [tabindex]", (function() {
                i = this, clearTimeout(t), t = null, document.activeElement === this && Y()
            })), Te(n).on("blur", "a, button, input, [tabindex]", (function() {
                document.activeElement === this && (t = setTimeout($, 50))
            })), n.addEventListener("focus", (function(e) {
                Y(), i && i.focus()
            }), !1), e.events.on(Bt._overlayOpened, (function() {
                E = !0, n.removeAttribute("tabindex")
            })), e.events.on(Bt._overlayClosed, (function() {
                E = !1, G()
            })))
        }(), e.events.on(Bt._didEnterFullscreen, (function(e) {
            W(), d && d.adjustRenderSize(), C && Y()
        })).on(Bt._didExitFullscreen, (function(e) {
            a = !0, d && d.adjustRenderSize(), e ? $() : (Y(), H())
        })), z(), e.events.on(St._reset, (function() {
            a = !0, s = !0, b = !0, y = !1, T = !1, w = !1, z(), H()
        })), e.events.on(St._attachSpatialPlaybackEvents, (function() {
            const t = e => (...t) => {
                    d && e.apply(void 0, t)
                },
                i = t(t => {
                    const n = e.element.classList.contains("webvr");
                    d && n && d.toggleVR()
                }),
                r = t(t => {
                    d.isVRPresenting ? setTimeout(() => {
                        e.events.fire(x.WEBVR_ENTER)
                    }, 100) : setTimeout(() => {
                        e.events.fire(x.WEBVR_EXIT)
                    }, 100)
                });
            e.events.on(St._revealSpatialControls, t(() => {
                const t = e.element.classList.contains("webvr");
                t || e.element.classList.add("grabbable"), c && c.updatePosition(e.element), !c || c.visible || t || c.reveal()
            })), e.events.on(Bt._ended, t(() => {
                j(), o.webvr && d.isVRPresenting && F && d.toggleVR()
            })), e.events.on(x.CAMERA_UPDATE, t(e => {
                c && c.setAngle(e.pitch, e.yaw)
            })), e.events.on(f, t(() => {
                e.config.video.spatial ? function() {
                    function t(e) {
                        _ && (_.innerHTML = sa.render("threesixty_reminder", e))
                    }
                    let i = e.backbone.getEffectByName("ThreeSixtyEffect");
                    e.config.embed.settings.spatial_compass ? (c || (c = new Ja(e.element.querySelector(".vp-controls-wrapper"), () => {
                            i.snapToCenter()
                        })), c.updatePosition(e.element), c.reveal()) : c && c.hide(), e.events.once(Bt._firstTimeUpdate, () => {
                            const n = e.config.embed.cards;
                            (null == n ? void 0 : n.length) && n[0].timecode < 15 || (u.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Click and drag to look around"
                                }), J(_), X(_), setTimeout(() => Z(_), 3e3)
                            }, 7e3)), o.android || u.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Use arrow keys to see more"
                                }), J(_), X(_), setTimeout(() => Z(_), 3e3)
                            }, 14e3)))
                        }),
                        function() {
                            const e = n;
                            if (_) return;
                            let t = _ = document.createElement("div");
                            t.classList.add("cloaked"), t.classList.add("vp-alert-round"), t.classList.add("vp-alert-round--top"), t.classList.add("vp-alert-round--threesixty"), e.appendChild(t)
                        }()
                }() : !e.config.video.spatial && c && (j(), K())
            })), (o.webvr || o.stereoscopic || o.webxr) && (o.webvr && window.addEventListener("vrdisplaypresentchange", r, !1), e.events.on(Bt._stereoscopicButtonPressed, t(() => {
                K(), o.webvr && d.hasVRHeadset && F ? d.toggleVR() : e.events.fire(Bt._showAndroidVRDeepLink)
            })), e.events.on(x.WEBVR_HARDWARE_AVAILABLE, t(e => {
                const t = n.querySelector(".stereoscopic");
                t && t.classList.contains("off") && F && t.classList.remove("off")
            })), e.events.on(x.WEBVR_ENTER, t(t => {
                window.addEventListener("vrdisplaydisconnect", i, !1), window.addEventListener("vrdisplaydeactivate", i, !1), c && c.hide(), e.element.classList.remove("grabbable"), e.element.classList.add("webvr"), d.isUserInteracting = !1
            })), e.events.on(x.WEBVR_EXIT, t(t => {
                window.removeEventListener("vrdisplaydisconnect", i), window.removeEventListener("vrdisplaydeactivate", i), c && c.reveal(), e.element.classList.add("grabbable"), e.element.classList.remove("webvr"), d.isUserInteracting = !0
            })));
            let a = null;
            const s = t(t => {
                    const n = e.element.classList.contains("webvr");
                    p || n || (p = !0, t.preventDefault(), e.element.classList.add("grabbing"), v = {
                        x: t.clientX,
                        y: t.clientY
                    }, d.makeContact(v))
                }),
                l = t(t => {
                    const n = e.element.classList.contains("webvr");
                    p && !n && (K(), d.move({
                        x: t.clientX,
                        y: t.clientY
                    }))
                }),
                m = t(t => {
                    const n = e.element.classList.contains("webvr");
                    p && !n && (e.element.classList.remove("grabbing"), d.releaseContact(!1), p = !1)
                }),
                h = t(t => {
                    t.preventDefault(), e.element.classList.contains("webvr") || (d.isUserInteracting || (d.isUserInteracting = !0), null !== a && clearTimeout(a), K(), a = setTimeout(() => {
                        e.element.classList.remove("player-cursor-hide"), e.element.classList.add("grabbable"), d.isUserInteracting = !1
                    }, 500), e.element.classList.add("player-cursor-hide"), e.element.classList.remove("grabbable"), d.moveWheel({
                        x: t.deltaX,
                        y: t.deltaY
                    }))
                }),
                g = t(e => {
                    p || (p = !0, d.makeContact({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                b = t(e => {
                    p && (e.preventDefault(), K(), d.move({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                y = t(e => {
                    d.releaseContact(!0), p = !1
                }),
                E = t(e => {
                    p || K(), d.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)
                }),
                C = t(t => {
                    p = !1, e.element.classList.remove("grabbing"), d.abandonMotion()
                });
            e.events.on(f, () => {
                o.android && d && window.addEventListener("deviceorientation", E, !1)
            }), e.events.once(f, () => {
                e.store.watch("ui.player.boundingRect", () => {
                    c && c.updatePosition(e.element), d && d.adjustRenderSize(), p = !1
                }), o.pointerEvents ? (Te(A).on("pointerdown", s), window.addEventListener("pointermove", l), window.addEventListener("pointerup", m), window.addEventListener("pointerleave", C)) : (Te(A).on("mousedown", s).on("wheel", h), window.addEventListener("touchstart", g, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchmove", b, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchend", y, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("mousemove", l), window.addEventListener("mouseup", m), window.addEventListener("mouseleave", C))
            })
        })), e.events.on(P, e => {
            j(), d = e, K()
        }), e.events.on(Bt._nudgeAttempted, () => {
            T = !0, clearTimeout(U), U = null
        }), e.events.on(Bt._nudgeEnded, () => {
            T = !1
        }), {}
}
let es = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentTitle = this.alertTextElement.querySelector(".vp-live-start-time-title"), this.alertContentTime = this.alertTextElement.querySelector(".vp-live-start-time-body"), this.alertContentFooter = this.alertTextElement.querySelector(".vp-live-start-time-footer")
    }
    var t = e.prototype;
    return t.show = function(e = "", t = "", n = "") {
        this.alertContentTitle.innerHTML = e, this.alertContentTime.innerHTML = t, this.alertContentFooter.innerHTML = n, this.alertContentTitle.classList.remove("hidden"), this.alertContentTime.classList.remove("hidden"), this.alertContentFooter.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentTitle.classList.add("hidden"), this.alertContentTime.classList.add("hidden"), this.alertContentFooter.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
let ts = function() {
    function e(e, t, n) {
        this.textAlert = new Oa(e), this.timeAlert = new es(e), this.player = t, this.store = n, this.startTime = new Date(this.store.get(Wo, null)), this._disabled = !1, this._setUpLiveEvents(), this._checkStatus()
    }
    var t = e.prototype;
    return t.disable = function() {
        this.hide(), this._disabled = !0
    }, t.hide = function() {
        this.textAlert.hide(), this.timeAlert.hide()
    }, t._checkStatus = function() {
        (this.store.get(Yo) || this.store.get(Go)) && this._onLiveEventActive(), this.store.get(jo) && this._onLiveStreamEnded()
    }, t._setUpLiveEvents = function() {
        this.player.events.on(M.EVENT_ACTIVE, this._onLiveEventActive.bind(this)), this.player.events.on(M.STREAM_ONLINE, this._onLiveStreamOnline.bind(this)), this.player.events.on(M.STREAM_OFFLINE, this._onLiveStreamOffline.bind(this)), this.player.events.on(M.SETTINGS_UPDATED, this._onLiveSettingsUpdate.bind(this)), this.player.events.once(M.EVENT_ENDED, this._onLiveStreamEnded.bind(this)), this.player.events.on(Bt._webinarRegistrantBlocked, this._onLiveStreamEnded.bind(this)), this.player.events.on(Bt._webinarRegistrantUnblocked, this._onLiveStreamOnline.bind(this))
    }, t._onLiveSettingsUpdate = function(e, t) {
        "event_schedule" === e && this.store.dispatch(Uo({
            eventSchedule: t
        })), "hide_live_label" === e && this.store.dispatch(Uo({
            hideLiveLabel: t
        }))
    }, t._onLiveEventActive = function() {
        this._setLiveEventSchedule(this.store.get(Zo))
    }, t._displayTimeAlert = function() {
        const e = this._timeToDisplayText(this.player.config.request.lang);
        this.timeAlert.show(e[0], e[1], e[2]), !this.store.get(Yo) && !this.store.get(Go) || this._disabled || setTimeout(this._checkStatus.bind(this), 1e3)
    }, t._timeToEventStart = function() {
        return this.startTime - new Date
    }, t._timeToDisplayText = function(e) {
        const t = this._timeToEventStart(),
            n = Math.ceil(t / 1e3).toFixed(0),
            i = Math.ceil(t / 6e4).toFixed(0),
            o = Math.ceil(t / 36e5).toFixed(0),
            r = Math.ceil(t / 864e5).toFixed(0),
            a = (new Date).toDateString() === this.startTime.toDateString();
        if (r > 1 || !a) return ("This event is scheduled for\n" + new Intl.DateTimeFormat(e, {
            month: "long",
            day: "numeric"
        }).format(this.startTime) + "\nat " + new Intl.DateTimeFormat(e, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(this.startTime)).split("\n");
        if (o > 1 && a) return ("This event is scheduled for\nToday\nat " + new Intl.DateTimeFormat(e, {
            hour: "numeric",
            minute: "numeric"
        }).format(this.startTime)).split("\n");
        let s;
        const l = i > 1;
        return s = l ? "minutes" : n > 1 ? "seconds" : "second", ("This event will start in\n" + (l ? i : n) + " " + s).split("\n")
    }, t._onLiveStreamOnline = function() {
        this.hide()
    }, t._onLiveStreamOffline = function() {
        var e;
        null != (e = this.player.config.video.live_event) && e.dvr && !this.player.backbone.atLiveEdge || (this.textAlert.show("Live stream offline"), o.iOS && ee.element && (this.player.events.fire(Bt._willExitFullscreen), ee.exit()))
    }, t._onLiveStreamEnded = function() {
        var e;
        null != (e = this.player.config.video.live_event) && e.dvr && 0 !== this.player.backbone.currentTime || this.textAlert.show("Live event ended")
    }, t._setLiveEventSchedule = function(e) {
        e ? this._timeToEventStart() > 0 ? (this.textAlert.hide(), this._displayTimeAlert()) : (this.timeAlert.hide(), this.textAlert.show("This event hasn't started yet")) : (this.timeAlert.hide(), this.textAlert.hide())
    }, e
}();

function ns(e, t) {
    var n, i = t.querySelector(".vp-notification");

    function r(e, r) {
        if (null !== t.parentElement.offsetParent) {
            t.classList.remove("hidden"), t.removeAttribute("hidden"), t.setAttribute("data-name", e);
            var s = function(e) {
                    var n = "watchlater" === e || "unwatchlater" === e ? .5 : .4,
                        i = t.clientHeight;
                    return t.clientHeight > t.clientWidth && (i = t.clientWidth), {
                        height: Math.round(i * n),
                        width: Math.round(i * n * 1.6)
                    }
                }(e),
                l = "width:" + s.width + "px;height:" + s.height + "px";
            i.style.cssText = l, i.innerHTML = r, "watchlater" !== e && "unwatchlater" !== e || function(e, t) {
                var n = e.querySelector(".hour-hand"),
                    i = e.querySelector(".minute-hand");
                if (n && i) {
                    var r = t ? 1 : -1,
                        a = new Date,
                        s = Math.abs(a.getHours() - 12),
                        l = a.getMinutes(),
                        c = l / 60 * 360 - 135,
                        d = s / 12 * 360 + l / 60 * 5,
                        u = d + 45 * r,
                        p = c + 540 * r;
                    n.style[o.transformProperty] = "rotate(" + d + "deg)", i.style[o.transformProperty] = "rotate(" + c + "deg)", window.requestAnimationFrame((function() {
                        e.classList.add("animate"), o.browser.firefox || o.browser.opera || window.requestAnimationFrame((function() {
                            n.style[o.transformProperty] = "rotate(" + u + "deg)", i.style[o.transformProperty] = "rotate(" + p + "deg)"
                        }))
                    }))
                }
            }(i, "watchlater" === e), clearTimeout(n), t.classList.remove("animate"), window.requestAnimationFrame((function() {
                t.classList.remove("invisible"), n = setTimeout(a, 750)
            }))
        }
    }

    function a() {
        t.classList.add("animate"), t.classList.add("invisible")
    }

    function s() {
        t.classList.remove("animate"), t.classList.remove("invisible"), t.classList.add("hidden"), t.setAttribute("hidden", ""), t.removeAttribute("data-name"), i.innerHTML = "", i.classList.remove("filled"), i.classList.remove("animate"), e.events.fire(Bt._notificationHidden)
    }
    return Te(t).on("transitionend", (function(e) {
        i.contains(e.target) && "height" === e.propertyName ? setTimeout(a, 100) : e.target === t && "opacity" === e.propertyName && window.requestAnimationFrame(s)
    })), e.events.on(Bt._liked, (function(e) {
        e || r("like", sa.render("icon_heart"))
    })), e.events.on(Bt._unliked, (function(e) {
        e || r("unlike", sa.render("icon_broken_heart"))
    })), e.events.on(Bt._addedToWatchLater, (function(e) {
        e || r("watchlater", sa.render("icon_clock"))
    })), e.events.on(Bt._removedFromWatchLater, (function(e) {
        e || r("unwatchlater", sa.render("icon_clock"))
    })), e.events.fire(Bt._notificationModuleReady), {}
}

function is(e, t, n, i) {
    var o = !1;
    i = "function" == typeof t ? n : i, n = "function" == typeof t ? t : n;
    var r = function(e) {
            var t = !0;
            if (e.changedTouches) {
                var r = e.changedTouches[0].pageX - window.pageXOffset,
                    a = e.changedTouches[0].pageY - window.pageYOffset,
                    s = document.elementFromPoint(r, a);
                null !== s && this.contains(s) && (t = n.call(this, e))
            }
            return "function" == typeof i && i.call(this, e), o = !0, t
        },
        a = function(e) {
            if (!o) return n.call(this, e);
            o = !1
        };
    (t = "function" == typeof t ? null : t) ? Te(e).on("click", t, a).on("touchend", t, r): Te(e).on("click", a).on("touchend", r)
}

function os(t, n) {
    const i = E();
    let r = !1,
        a = !1;

    function s(e) {
        ut(e, "facebook", {
            width: 580,
            height: 400
        })
    }

    function l(e) {
        ut(e, "twitter", {
            width: 550,
            height: 420
        })
    }

    function c(e) {
        ut(e, "tumblr", {
            width: 540,
            height: 600
        })
    }

    function d(e) {
        const n = t.element.querySelector(".vp-outro-wrapper");
        return "player_embed" + (n && n.classList.contains("in") ? "_end_screen" : "_share_overlay") + (e ? "_button" : "_keyboard")
    }
    let u = {
        get events() {
            return i
        },
        setup() {
            var i;
            n.classList.remove("vp-share-embed-active", "vp-share-embed-only"), (null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only) && n.classList.add("vp-share-embed-only");
            const o = n.querySelector(".js-embedCopy");
            o && (o.style.width = function(t, n, i = 2) {
                n = Object.keys(n).map(e => n[e]);
                const o = t.cloneNode();
                o.style.visibility = "hidden", o.style.padding = 0, t.parentElement.appendChild(o);
                let r = n.map(e => (o.innerText = e, o.clientWidth));
                const a = Math.max.apply(Math, e(r)),
                    s = window.getComputedStyle(t),
                    l = parseFloat(s.fontSize);
                return t.parentElement.removeChild(o), `${(a+i)/l}em`
            }(o, ["Copy", "Copied!"])), t.events.on(Bt._facebookButtonPressed, s).on(Bt._twitterButtonPressed, l).on(Bt._tumblrButtonPressed, c)
        },
        destroy() {
            t.events.off(Bt._facebookButtonPressed, s).off(Bt._twitterButtonPressed, l).off(Bt._tumblrButtonPressed, c)
        },
        getShareData(e = {}, n) {
            var i, a;
            const s = t.config.video.title,
                l = t.config.video.owner.name,
                c = t.config.video.share_url;
            r = document.queryCommandSupported && document.queryCommandSupported("copy");
            const d = t.config.video.unlisted_hash ? `?h=${t.config.video.unlisted_hash}` : "";
            return e.template = sa.render("share", {
                url: t.config.video.url,
                shareUrl: c,
                playerShareUrl: `https://${t.config.player_url}/video/${t.config.video.id}/share`,
                unlistedHashParam: d,
                title: s,
                owner: l,
                embed: "public" === t.config.video.embed_permission && t.config.embed.settings.embed,
                embedOnly: null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only,
                embedCode: we(t.config.video.embed_code),
                copyButton: r,
                customizeEmbed: !!t.config.video.url,
                readOnly: !o.touch,
                facebookIcon: sa.render("icon_facebook", {
                    title: "Share on Facebook"
                }),
                twitterIcon: sa.render("icon_twitter", {
                    title: "Share on Twitter"
                }),
                tumblrIcon: sa.render("icon_tumblr", {
                    title: "Share on Tumblr"
                }),
                emailIcon: sa.render("icon_mail", {
                    title: "Share via Email"
                }),
                embedIcon: sa.render("icon_embed", {
                    title: "Get embed code"
                }),
                strings: {
                    share: "Share",
                    emailSubject: "Check out “" + s + "” from " + l + " on Vimeo",
                    emailBody: "Check out “" + s + "” from " + l + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + c + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com.",
                    embedTitle: "Embed",
                    embedSubtitle: "Add this video to your site with the embed code below.",
                    copy: "Copy",
                    copySuccess: "Copied!",
                    customize: `<a href="${t.config.video.url}#embed" target="_blank" rel="noopener" aria-describedby="new-window">` + "Customize this embed</a> on Vimeo"
                }
            }), e._firstFocusElement = ".js-facebook", (null == (a = t.config.embed.settings.share) ? void 0 : a.embed_only) && (e.wrapperClass = "embed-only", e._firstFocusElement = ".js-embed-input"), e
        },
        showShareView() {
            n.querySelector(".js-share-screen").classList.remove("cloaked"), n.classList.remove("vp-share-embed-active"), i.fire(Bt._shareViewShown)
        },
        showEmbedView() {
            t.config.embed.settings.share.embed_only || (n.querySelector(".js-embed-screen").classList.remove("cloaked"), n.classList.add("vp-share-embed-active")), i.fire(Bt._embedViewShown)
        },
        buildBPLocationString: d
    };
    return function() {
        var e;
        Te(n).on("transitionend", ".js-share-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Bt._embedViewEnd), this.classList.add("cloaked"))
        })).on("transitionend", ".js-embed-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Bt._shareViewEnd), this.classList.add("cloaked"), vt(n))
        })).on(["copy", "cut"], "input[name=embed_code]", (function() {
            Pa(ha.COPY_VIDEO_EMBED_CODE, t.config, {
                location: d(a),
                path: window.location.pathname
            }), a = !1, t.events.fire(Bt._embedCodeCopied)
        })), is(n, ".js-facebook", (function() {
            return t.events.fire(Bt._facebookButtonPressed, this.href), rt(), !1
        })), is(n, ".js-twitter", (function() {
            return t.events.fire(Bt._twitterButtonPressed, this.href), rt(), !1
        })), is(n, ".js-tumblr", (function() {
            return t.events.fire(Bt._tumblrButtonPressed, this.href), rt(), !1
        })), is(n, ".js-email", (function() {
            return t.events.fire(Bt._emailButtonPressed), window.top.location = this.href, rt(), !1
        })), is(n, ".js-embed", (function() {
            return t.events.fire(Bt._embedButtonPressed), u.showEmbedView(), rt(), !1
        })), is(n, ".js-embedCopy", (function() {
            if (r) {
                n.querySelector("input[name=embed_code]").select(), a = !0;
                try {
                    document.execCommand("copy") && function() {
                        t.events.fire(Bt._embedCodeCopied);
                        var i = n.querySelector(".js-embedCopy");
                        i.innerHTML = i.getAttribute("data-success-label"), clearTimeout(e), e = setTimeout((function() {
                            i.innerHTML = i.getAttribute("data-label")
                        }), 2e3)
                    }()
                } catch (ke) {
                    a = !1
                }
                return document.activeElement.blur(), !1
            }
        })), o.touch ? Te(n).on("focus", "input[name=embed_code]", (function() {
            var e = this;
            setTimeout((function() {
                e.setSelectionRange(0, 9999), e.setAttribute("readonly", "readonly")
            }), 0)
        })).on("blur", "input", (function() {
            this.removeAttribute("readonly")
        })) : Te(n).on("click", "input[name=embed_code]", (function() {
            this.setSelectionRange(0, 9999)
        }))
    }(), u
}

function rs(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var i = Promise.resolve(e());
        return t ? i.then(t) : i
    } catch (ke) {
        return Promise.reject(ke)
    }
}

function as() {}

function ss(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}

function ls(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function cs(e, t, n) {
    const i = ss((function() {
            return u = !0, s === $t.BEGINNING ? (c.innerHTML = "", void e.events.fire(St._reset)) : function(e, t) {
                var n = function() {
                    if (L()) return rs(r, (function() {
                        i()
                    }))
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                let i = function() {
                    if ([$t.VIDEOS, $t.THREEVIDEOS, $t.PROMOTED].includes(s)) {
                        var t;
                        if (0 === ((null == (t = d) ? void 0 : t.contexts) || []).reduce((function(e, t) {
                                return e + t.videos.length
                            }), 0)) return null;
                        d.showFollowButton = !e.config.user.owner && e.config.user.logged_in, d.strings = {
                            follow: "Follow",
                            following: "Following",
                            unfollow: "Unfollow"
                        }
                    }
                    return d && (d.target = !e.config.embed.on_site), C = s, [$t.THREEVIDEOS, $t.PROMOTED].includes(s) && (C = $t.VIDEOS), sa.render("outro_" + C, d)
                }();
                i && (c.innerHTML = i, c.setAttribute("data-type", C), n.classList.remove("hidden"), n.removeAttribute("hidden"), p = !0, [$t.VIDEOS, $t.THREEVIDEOS].includes(s) ? function() {
                    const e = document.querySelector(".js-outro-followWrap");
                    if (e) {
                        const t = window.getComputedStyle(e),
                            n = parseFloat(t.fontSize);
                        e.style.width = `${e.clientWidth/n}em`
                    }
                }() : s === $t.LINK ? (t.watch("ui.outro.isLinkTitleVisible", A), t.watch("ui.outro.isLinkDescriptionVisible", k), A(t.get("ui.outro.isLinkTitleVisible")), k(t.get("ui.outro.isLinkDescriptionVisible"))) : s === $t.SHARE && function() {
                    const e = n.querySelector(".js-outro-content"),
                        t = a.getShareData();
                    e.innerHTML = t.template, a.setup()
                }(), window.requestAnimationFrame((function() {
                    window.requestAnimationFrame((function() {
                        n.classList.add("in"), I()
                    }))
                })))
            }))
        })),
        r = ss((function() {
            if (e.config.embed.outro === $t.VOD) return s = $t.VOD, void(d = S(s));
            g = !0;
            const t = e.config.embed.email_capture_form || e.config.embed.email || {},
                n = e.config.video.unlisted_hash ? `h=${e.config.video.unlisted_hash}&` : "",
                i = `https://${e.config.player_url}/video/${e.config.video.id}/outro?${n}on_site=${e.config.embed.on_site}&type=${e.config.embed.outro}&email=${t?1:0}`;
            return function(e) {
                if (e && e.then) return e.then(as)
            }(function(t, n) {
                try {
                    var o = ls(_(i, {
                        withCredentials: !0
                    }), (function(t) {
                        return ls(t.json(), (function(t) {
                            s = t.type, (d = S(s, t.data)) && (d.bgimage && Po(d.bgimage), d.contexts && d.contexts.forEach(e => {
                                e.videos.forEach(e => {
                                    Po(e.thumbnail)
                                })
                            })), da(e.config.video.owner) && function(t, n) {
                                [$t.VIDEOS, $t.THREEVIDEOS, $t.PROMOTED].includes(t) && n.contexts && n.contexts.forEach(t => {
                                    t.videos.reduce((t, n) => t.then(function(t) {
                                        return () => e.preloadVideo("auto", t.id, {
                                            autoplay: !0
                                        }).catch(e => {})
                                    }(n)), Promise.resolve())
                                })
                            }(s, d)
                        }))
                    }))
                } catch (ke) {
                    return
                }
                return o && o.then ? o.then(void 0, n) : o
            }(0, (function(e) {})))
        }));
    var a, s, l, c = n.querySelector(".vp-outro"),
        d = null,
        u = !1,
        p = !1,
        v = !1,
        m = !1,
        g = !1,
        b = y(I, 250);
    let E = !1,
        C = null,
        T = e.config.request.ads instanceof Object,
        w = !1;
    const L = () => !g && null === d && !e.config.embed.loop;

    function S(t, n = {}) {
        const {
            width: i,
            height: r
        } = Ao(e.element.clientWidth * o.devicePixelRatio, e.element.clientHeight * o.devicePixelRatio);
        if (n.img_base && (n.bgimage = ko({
                width: i,
                height: r,
                baseUrl: n.img_base
            })), t === $t.VOD) {
            const t = void 0 !== e.config.video.vod.is_preorder ? e.config.video.vod.is_preorder : !!e.config.video.vod.date_available,
                i = e.config.video.vod.is_coming_soon,
                o = e.config.video.vod.date_available_formatted_datetime || e.config.video.vod.date_available;
            let r = "Coming soon to Vimeo On Demand.";
            i && o && (r = "Coming soon to Vimeo On Demand on " + o + "."), t && (r = "Pre-order now. Watch on " + o + "."), n = {
                purchased: e.config.user.purchased,
                title: e.config.video.vod.feature_title,
                url: e.config.video.vod.url,
                currency: e.config.request.currency,
                countries: e.config.video.vod.countries,
                country: e.config.request.country,
                buttons: e.config.video.vod.purchase_options,
                translationMap: e.config.request.dynamic_translation_map,
                isPreorder: t,
                isComingSoon: i,
                releaseDate: o,
                strings: {
                    watch: t ? "Watch on " + o : "Watch Now",
                    preRelease: r
                }
            }
        }
        return [$t.VIDEOS, $t.THREEVIDEOS, $t.PROMOTED].includes(t) && (e.config.user.following = n.following, (n = {
            contexts: Array.isArray(n) ? n : [n],
            owner: e.config.video.owner.id,
            bgimage: n.bgimage,
            following: n.following
        }).contexts && n.contexts.forEach(e => {
            e.videos.forEach(t => {
                if (t.fullTitle = t.title, t.byline = "", t.owner.id !== n.owner && (t.fullTitle = t.title + " from " + t.owner.name, t.byline = "from " + t.owner.name), t.thumbnail_base) {
                    const n = Math.round(i / e.videos.length);
                    t.thumbnail = ko({
                        width: n,
                        height: Math.round(n / 1.778),
                        baseUrl: t.thumbnail_base
                    })
                }
            })
        })), t === $t.LINK && (n.url = bi(n.url), n.url2 = bi(n.url2)), t === $t.SHARE && (n.strings = {
            back: "Back"
        }), n
    }

    function A(e) {
        c.classList.toggle("vp-outro--link-medium", e)
    }

    function k(e) {
        c.classList.toggle("vp-outro--link-large", e)
    }

    function P() {
        if (p) return a.destroy(), u = !1, v = !1, p = !1, void window.requestAnimationFrame((function() {
            n.classList.remove("in"), e.events.fire(Bt._outroHidden), R()
        }));
        u && (u = !1, e.events.fire(Bt._outroHidden))
    }

    function I() {
        var t;
        if (!v && n.clientWidth) {
            Te(window).off("resize", b), v = !0;
            var i = [];
            (null == (t = d) ? void 0 : t.contexts) && d.contexts.forEach(e => {
                e.videos && e.videos.forEach(e => {
                    var t = e.id,
                        n = c.querySelector('[data-video-id="' + t + '"]');
                    n && n.clientWidth > 0 && i.push(t)
                })
            }), e.events.fire(Bt._outroDisplayed, i)
        }
    }

    function O() {
        const t = e.config.embed.email_capture_form || e.config.embed.email || {};
        "after-video" !== t.position && "after" !== t.position || E ? e.events.fire(St._showOutro) : (E = !0, l = setTimeout(() => {
            e.events.fire(Bt._showEmailCaptureForm), e.events.once(Bt._emailCaptureEnd, () => {
                e.events.fire(St._showOutro)
            })
        }, 250))
    }

    function R() {
        Te(window).off("resize", b), Te(window).on("resize", b)
    }
    return e.events.on(f, (function() {
        [$t.NOTHING, $t.BEGINNING, $t.EMAIL].includes(e.config.embed.outro) && (s = e.config.embed.outro, d = !1)
    })), e.events.on(Bt._allAdsCompleted, () => {
        w = !0
    }), e.events.on(h.TIME_UPDATE, ss((function({
        currentTime: e,
        duration: t
    }) {
        return m = !1, E = !1,
            function(n) {
                var i = function() {
                    if (e >= t - 10 && L()) return rs(r, (function() {
                        m && O()
                    }))
                }();
                if (i && i.then) return i.then(as)
            }()
    }))), e.events.on(Bt._ended, () => {
        if (m = !0, T && !w) return e.events.once(Bt._allAdsCompleted, O), void(T = !1);
        O()
    }), e.events.on(Bt._loadVideo, () => {
        clearTimeout(l)
    }), e.events.on(Bt._webinarRegistrantBlocked, () => {
        e.config.video.webinar && clearTimeout(l)
    }), e.events.on(St._showOutro, (function(t, n) {
        e.performDelegateAction(Dt, () => {
            t && (s = t, d = null, g = !1), n && n.data && (d = S(t, n.data)), i()
        })
    })), Te(n).on("click", ".js-videoLink", (function(t) {
        const n = parseInt(this.getAttribute("data-video-id"), 10);
        e.events.fire(Bt._outroVideoPressed, n);
        const i = Ji(e.config),
            o = [Ui.SINGLE_VIDEO_VIEW_MANAGE, Ui.SINGLE_VIDEO_VIEW_RECIPIENT].includes(i);
        da(e.config.video.owner) && !o && (t.preventDefault(), e.loadVideo(n, {
            autoplay: !0
        }))
    })), Te(n).on("click", ".js-cta", (function(t) {
        e.events.fire(Bt._outroCtaPressed, this.href)
    })), Te(n).on("click", ".js-link", (function(t) {
        e.events.fire(Bt._outroLinkPressed, this.href)
    })), Te(n).on("click", ".js-imageLink", (function(t) {
        e.events.fire(Bt._outroImagePressed, this.href)
    })), Te(n).on("transitionend", (function(e) {
        n.classList.contains("in") || (n.classList.add("hidden"), n.setAttribute("hidden", ""))
    }), !1), e.events.on([St._hideOutro, St._reset, h.PLAY, h.SEEKED, Bt._scrubbingStarted], P), e.events.on(Bt._outroDisplayed, (function() {
        e.element.classList.add("player-outroVisible")
    })).on(Bt._outroHidden, (function() {
        e.element.classList.remove("player-outroVisible")
    })), is(n, ".js-outro-follow", (function() {
        e.events.fire(Bt._followButtonPressed)
    })), Te(n).on("mouseleave", ".js-outro-follow", (function(e) {
        const t = document.querySelector(".js-outro-follow");
        t && t.classList.remove("vp-outro-follow--activated")
    })), e.events.on(Bt._followed, (function() {
        const e = document.querySelector(".js-outro-follow");
        e && (e.setAttribute("aria-pressed", !0), e.classList.add("vp-outro-follow--activated"))
    })), e.events.on(Bt._unfollowed, (function() {
        const e = document.querySelector(".js-outro-follow");
        e && e.setAttribute("aria-pressed", !1)
    })), e.events.on(St._showOverlay, (function() {
        setTimeout((function() {
            n.classList.add("hidden")
        }), 150)
    })), e.events.on(Bt._overlayClosed, (function() {
        n.classList.contains("in") && n.classList.remove("hidden")
    })), e.events.on(St._reset, (function() {
        d = null, g = !1, T = e.config.request.ads instanceof Object
    })), is(n, ".js-vod-button", (function() {
        var t = this.getAttribute("data-product-id");
        return e.events.fire(Bt._vodButtonPressed, t), !1
    })), is(n, ".js-vod-watch", (function() {
        if (!("date_available" in e.config.video.vod)) return P(), e.events.fire(Bt._vodButtonPressed), !1
    })), c && ((a = new os(e, c)).events.on(Bt._embedViewShown, (function() {
        e.config.embed.settings.share.embed_only || (n.querySelector(".js-back").classList.remove("cloaked"), n.classList.add("embed-active"))
    })).on(Bt._shareViewShown, (function() {
        n.classList.remove("embed-active")
    })), is(n, ".js-back", (function() {
        return a.showShareView(), !1
    })), a.events.on(Bt._shareViewEnd, (function() {
        n.querySelector(".js-back").classList.add("cloaked")
    }))), R(), {}
}
let ds = 0;

function us(e = "b") {
    return `${e}${++ds}`
}
us(), us(), us(), us(), us(), us(), us(), us();
const ps = us(),
    _s = us(),
    vs = us(),
    ms = us(),
    fs = us(),
    hs = us(),
    gs = us(),
    bs = us(),
    ys = us(),
    Es = us(),
    Cs = us();
var Ts = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: ps,
        TELECINE_READY: _s,
        TELECINE_VIDEO_INIT: vs,
        PLAY_INITIATED: ms,
        QUALITY_CHANGED: fs,
        FORCED_QUALITY: hs,
        CUE_CHANGED: gs,
        CAPTIONS_CHANGED: bs,
        SPATIAL_PLAYBACK_TOGGLED: ys,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: Es,
        HLS_QUALITY_CHANGED: Cs
    }),
    ws = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
l(l(l(l(l(l(l(l(l({}, h), g), Le), ws), x), N), D), B), Ts);
const Ls = l(l({}, Le), ws);

function Ss(e, t = null) {
    return "after-video" === (t = t || e.position) || "after" === t
}

function As(e) {
    return ko({
        height: 72 * o.devicePixelRatio,
        width: 640 * o.devicePixelRatio,
        baseUrl: e
    })
}
let ks = function() {
    function e(e) {
        this.element = e, this.cachedElements = {}
    }
    var t = e.prototype;
    return t.getElement = function(e) {
        return this.cachedElements[e] || (this.cachedElements[e] = this.element.querySelector(e)), this.cachedElements[e]
    }, t.removeElement = function(e) {
        this.getElement(e) && (this.cachedElements[e].remove(), this.cachedElements[e] = null)
    }, t.updateAll = function(e, t) {
        this.updateTitle(e.text || e.custom_message), this.updateSkipBtn(e.allow_skip || e.skippable, e.position), this.updatePrivacyPolicy(e.privacy_policy), this.updateCustomLogo(e.custom_logo), this.updateFields(e.custom_fields, t)
    }, t.updateTitle = function(e) {
        const t = this.getElement(".vp-email-capture-title");
        e && t ? t.textContent = Vs(e) : !e && t && (t.textContent = "")
    }, t.updateSkipBtn = function(e, t) {
        const n = this.getElement(".vp-email-capture-form-button--cancel");
        if (e && n) n.value = Ss(null, t) ? "Skip" : "Skip to video";
        else if (e && !n) {
            const e = this.getElement(".vp-email-capture-form-skip");
            let n = sa.render("email_capture_skip", {
                position: t,
                skipText: "Skip",
                skipToVideoText: "Skip to video",
                positionIsAfter: Ss(null, t)
            });
            e.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-form-button--cancel")
    }, t.updatePrivacyPolicy = function(e) {
        const t = this.getElement(".vp-email-capture-privacy-policy");
        if (e && t) t.href = encodeURI(e);
        else if (e && !t) {
            const t = this.getElement(".vp-email-capture-disclaimer-wrapper"),
                n = sa.render("email_capture_privacy_policy", {
                    text: "Privacy policy",
                    url: e
                });
            t.insertAdjacentHTML("beforeend", n)
        } else !e && t && this.removeElement(".vp-email-capture-privacy-policy")
    }, t.updateCustomLogo = function(e) {
        const t = this.getElement(".vp-email-capture-title-logo-wrap"),
            n = this.getElement(".vp-email-capture-logo");
        if (e && n) n.src = As(e);
        else if (e && !n && t) {
            const n = sa.render("email_capture_logo", {
                url: As(e)
            });
            t.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-logo")
    }, t.updateFields = function(e, t) {
        if (e) {
            let n = this.getElement(".vp-email-capture-form-fields-slider").children;
            n.length && Array.from(n).forEach(t => {
                e.some(e => t.dataset.id === String(e.id)) || t.remove()
            }), e.forEach(e => {
                this.updateField(e, t)
            })
        }
        t()
    }, t.updateField = function(e) {
        const {
            id: t,
            position_in_form: n
        } = e, i = this.getElement(".vp-email-capture-form-fields-slider");
        let o = this.element.querySelector(`[for=custom-field-${t}]`),
            r = this.element.querySelector(`#custom-field-${t}`);
        if (o && r) {
            let t = r.parentElement,
                o = i.children;
            const s = Array.from(o).indexOf(t),
                l = sa.render("email_capture_field", {
                    field: e
                });
            var a = document.createElement("div");
            a.innerHTML = l, i.children[s].replaceWith(a.children[0]), s !== n && i.insertBefore(o[s], o[n])
        } else {
            const t = sa.render("email_capture_field", {
                field: e
            });
            n === i.children.length ? i.insertAdjacentHTML("beforeend", t) : i.children[n].insertAdjacentHTML("beforebegin", t)
        }
    }, t.updateWebinarStartTime = function(e, t) {
        const n = this.getElement(".vp-email-capture-wrapper"),
            i = n.querySelectorAll(".vp-email-capture-start-time"),
            o = Yn(new Date(e), t);
        if (e && i.length) Array.from(i).forEach(e => {
            e.textContent = o
        });
        else if (e && !i.length) {
            const e = this.getElement(".vp-email-capture-title-logo-wrap"),
                t = n.querySelectorAll(".vp-email-capture-thank-you-title");
            let i = sa.render("email_capture_start_time", {
                startTime: o
            });
            e.insertAdjacentHTML("afterbegin", i), Array.from(t).forEach(e => {
                i = sa.render("email_capture_start_time", {
                    startTime: o
                }), e.insertAdjacentHTML("afterbegin", i)
            })
        } else !e && i.length && Array.from(i).forEach(e => {
            e.parentNode.removeChild(e)
        })
    }, t.clearCachedElements = function() {
        this.cachedElements = {}
    }, e
}();

function Ps(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Is(e, t) {
    try {
        var n = e()
    } catch (ke) {
        return t(ke)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function Os() {}
const Rs = "vp-email-capture-form-dropdown-option-active";

function Ns(e) {
    if (e && e.then) return e.then(Os)
}

function Ms(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}
const Ds = {
    skip_to_video: "Skip to video",
    skip: "Skip",
    next: "Next",
    back: "Back",
    submit: "Submit",
    disclaimer: "Share your information with the owner of this video",
    privacy_policy: "Privacy policy",
    thank_you: "Thank you!",
    video_starts: "Video starts in",
    successful: "Your information was successfully submitted.",
    step: "Step",
    of: "of",
    aria_label: "Email capture form",
    webinar: {
        disclaimer: 'I agree that the host will see my viewing activities for this webinar, and I agree to <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/terms" target="_blank" rel="noopener">Vimeo\'s Terms of Service</a> and <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>',
        host_privacy_policy: "and the webinar host's Privacy Policy",
        reg_full: "Sorry, registration is full.",
        reg_login_title: "Enter your email to see if you’re registered",
        reg_thank_you: "Thanks for registering!",
        reg_thank_you_subtitle: "Check your email for your registration confirmation. We'll also send you a reminder and a link to the event 24 hours before it begins.",
        reg_bypass: "Already registered?",
        reg_go_back: "Register for this event",
        login_thank_you: "Great news! You’re already registered.",
        login_thank_you_subtitle: "Check your email for your registration confirmation.",
        email_not_valid: "Email address not valid. Please try another email address.",
        email_not_registered: "Email not registered for this event",
        opt_in: "Opt into emails from this event host",
        event_is_live: "This event is live",
        unscheduled: "Unscheduled",
        add_to_calendar: "Add to calendar",
        opt_in_error: "Opting in is required to register for this webinar.",
        opt_in_login_error: "Opting in is required to check your registration status."
    }
};

function xs(e = []) {
    return e.map(e => l(l({}, e), {}, {
        field_label: Bs(e.field_name)
    })).sort((e, t) => e.position_in_form - t.position_in_form)
}

function Bs(e) {
    switch (e) {
        case "Email address":
            return "Email address";
        case "First name":
            return "First name";
        case "Last name":
            return "Last name";
        default:
            return e
    }
}

function Vs(e) {
    switch (e) {
        case "Sign up for our mailing list":
            return "Sign up for our mailing list";
        case "Register to watch live":
            return "Register to watch live";
        default:
            return e
    }
}

function Us(e, t, n) {
    var i, o, r, a;
    const s = Ms((function() {
            vt(n);
            const i = X(b),
                {
                    timestamp: o,
                    expires: r
                } = e.config.request;

            function a(t) {
                k.classList.remove("loading"), 3152 === (null == t ? void 0 : t.error_code) ? G(!1) : (w.setCustomValidity("Uh oh. There was a problem. Please try again."), w.setAttribute("aria-invalid", "true"), e.events.fire(Bt._emailCaptureFailure), U())
            }
            const s = `https://${e.config.player_url}/video/${e.config.video.id}/webinar/login?context=${encodeURIComponent(p)}&time=${o}&expires=${r}`;
            return k.classList.add("loading"), Ns(Is((function() {
                return Ps(_(s, {
                    method: "POST",
                    body: i,
                    headers: {
                        "Content-type": "application/json"
                    },
                    withCredentials: !0
                }), (function(n) {
                    return Ps(n.json(), (function(n) {
                        ! function(n) {
                            t.dispatch(Lr(!0, n.video.webinar.registrant)), e.events.fire(Bt._webinarFormSuccess, n), u ? (Y(), e.events.fire(Bt._playButtonPressed)) : G(!1)
                        }(n)
                    }))
                }))
            }), (function(e) {
                return Ns(Is((function() {
                    return Ps(e.response.json(), (function(e) {
                        a(e)
                    }))
                }), (function() {
                    a()
                })))
            })))
        })),
        l = Ms((function() {
            vt(n);
            const i = X(b, {
                    isRegistration: !0
                }),
                {
                    timestamp: o,
                    expires: r
                } = e.config.request;

            function a(t) {
                k.classList.remove("loading"), 3152 === (null == t ? void 0 : t.error_code) ? G(!0) : 3158 === (null == t ? void 0 : t.error_code) ? j() : (w.setCustomValidity("Uh oh. There was a problem. Please try again."), w.setAttribute("aria-invalid", "true"), e.events.fire(Bt._emailCaptureFailure), U())
            }
            const s = `https://${e.config.player_url}/video/${e.config.video.id}/webinar/registration?context=${encodeURIComponent(p)}&time=${o}&expires=${r}`;
            return k.classList.add("loading"), Ns(Is((function() {
                return Ps(_(s, {
                    method: "PUT",
                    body: i,
                    headers: {
                        "Content-type": "application/json"
                    },
                    withCredentials: !0
                }), (function(n) {
                    return Ps(n.json(), (function(n) {
                        ! function(n) {
                            t.dispatch(Lr(!0, n.video.webinar.registrant)), e.events.fire(Bt._webinarFormSuccess, n), u ? (Y(), e.events.fire(Bt._playButtonPressed)) : G(!0)
                        }(n)
                    }))
                }))
            }), (function(e) {
                return Ns(Is((function() {
                    return Ps(e.response.json(), (function(e) {
                        a(e)
                    }))
                }), (function() {
                    a()
                })))
            })))
        })),
        c = E(),
        d = !z(null == (i = e.config.video.webinar) ? void 0 : i.registration_form),
        u = "started" === (null == (o = e.config.video.webinar) ? void 0 : o.status),
        p = e.config.embed.context,
        v = ["Vimeo\\Controller\\VideoSettings\\ServiceController.getInteractions", "Vimeo\\Controller\\Api\\Resources\\Webinar\\WebinarController."].includes(p);
    let m, f, h, g, b, y, C, T, w, L, S, A, k, P, I, O, R = new ks(n),
        N = !1,
        M = !1,
        D = V(e.config),
        x = null == (r = D) || null == (a = r.custom_fields) ? void 0 : a[C - 1],
        B = e.config.view === Ft.webinarFull;

    function V(e) {
        var t, n, i;
        return d ? (null == (i = e.video.webinar) ? void 0 : i.registration_form) || {} : (null == (t = e.embed) ? void 0 : t.email_capture_form) || (null == (n = e.embed) ? void 0 : n.email) || {}
    }

    function U() {
        var e;
        const t = S.querySelector(".vp-validation-bubble-message"),
            n = null == (e = x) ? void 0 : e.field_type;
        t.innerHTML = w.validationMessage || ("dropdown" === n ? "This field is required." : "There is an error with this input."), S.classList.remove("hidden"), S.classList.remove("vp-validation-bubble-animate"), window.requestAnimationFrame((function() {
            S.classList.add("vp-validation-bubble-animate")
        })), w.focus()
    }

    function F() {
        T.classList.add("vp-email-capture-input-invalid"), U()
    }

    function H() {
        S.classList.remove("vp-validation-bubble-animate"), T.classList.remove("vp-email-capture-input-invalid"), A && (I.classList.remove("vp-webinar-compliance-checkbox-invalid"), A.classList.remove("vp-opt-in-bubble-animate"), A.classList.add("hidden"))
    }
    const q = ({
        target: e
    }) => {
        e === h && (h.removeEventListener("transitionend", q), w.focus())
    };

    function W(e, t = !0) {
        var i, o;
        const r = n.querySelector(".vp-email-capture-disclaimer-wrapper"),
            a = n.querySelector(".vp-email-capture-current-step"),
            s = n.querySelector(".vp-email-capture");
        T && (T.setAttribute("aria-hidden", !0), w.tabIndex = -1), C && (!f && !v || v) && (f = st(m).height), C = e, x = null == (i = D) || null == (o = i.custom_fields) ? void 0 : o[C - 1], T = g[C - 1], w = b[C - 1], T && w && (T.setAttribute("aria-hidden", !1), w.tabIndex = 0), window.requestAnimationFrame(() => {
                h.style.transform = `translateY(-${f*(C-1)}px)`, a.textContent = C, L.style.width = `${C/g.length*100}%`
            }), t && h.addEventListener("transitionend", q), s.classList.toggle("vp-email-capture-first-step", 1 === C), d && (r.classList.toggle("hidden", C < g.length), M ? r.classList.add("vp-email-capture-login-disclaimer-wrapper") : (P.classList.toggle("hidden", C === g.length), r.classList.remove("vp-email-capture-login-disclaimer-wrapper"))),
            function() {
                const e = n.querySelector(".vp-email-capture-form-button--back"),
                    t = n.querySelector(".vp-email-capture-form-button--next");
                1 === C && (y.classList.remove("half"), e.classList.remove("show"), e.classList.add("hidden"), e.tabIndex = -1), C > 1 && (y.classList.add("half"), e.classList.remove("hidden"), e.tabIndex = 0, e.setAttribute("aria-hidden", !1), window.requestAnimationFrame(() => {
                    e.classList.add("show")
                })), C < g.length ? (t.tabIndex = 0, t.setAttribute("aria-hidden", !1), k.tabIndex = -1, k.setAttribute("aria-hidden", !0), y.classList.remove("showSubmitBtn")) : (k.tabIndex = 0, k.setAttribute("aria-hidden", !1), t.tabIndex = 1, t.setAttribute("aria-hidden", !0), y.classList.add("showSubmitBtn"))
            }()
    }

    function $() {
        if (!w.required) return !0;
        var e;
        if (d && "dropdown" === (null == (e = x) ? void 0 : e.field_type)) return !(x.required && !w.value.length && (w.setCustomValidity("This field is required."), 1));
        return "email" !== w.type || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(w.value) ? !(w.checkValidity && !w.checkValidity() && ((w.validity.valueMissing || w.validity.typeMismatch) && w.setCustomValidity("This field is required."), w.validity.typeMismatch && w.setCustomValidity("Please enter a valid response."), 1)) : (w.setCustomValidity("Please enter a valid email address."), !1)
    }
    const Y = () => {
        Te(n).off(["click", "touchend"], ".vp-email-capture-form-button--cancel"), Te(n).off(["click", "keydown"], ".vp-email-capture-form-button--next"), Te(n).off(["click", "keydown"], ".vp-email-capture-form-button--back"), Te(n).off(["click"], ".vp-email-capture-form-button--submit"), Te(n).off(["keyup", "blur"], ".vp-email-capture-form-button--next-submit-wrapper"), Te(n).off("click", ".vp-email-capture-wrapper"), Te(n).off(["keyup", "input", "focus", "blur"], ".vp-email-capture-form-input"), Te(n).off("submit", ".vp-email-capture-form"), Te(n).off(["keyup", "click", "focus", "blur"], ".vp-disclaimer-checkbox"), Te(window).off("resize"), N = !1, c.fire(Bt._emailCaptureEnd)
    };

    function G(t = !0) {
        let i;
        const o = n.querySelector(".vp-email-capture");
        i = t ? n.querySelector(".vp-email-capture-reg-thank-you") : n.querySelector(".vp-email-capture-login-thank-you"), o.classList.add("hidden"), i.classList.remove("hidden"), e.events.once(Ls.EVENT_STARTED, () => {
            Y()
        })
    }

    function j(e = !1) {
        const t = n.querySelector(".vp-email-capture"),
            i = n.querySelector(".vp-email-capture-reg-full");
        e ? (t.classList.remove("hidden"), i.classList.add("hidden")) : (t.classList.add("hidden"), i.classList.remove("hidden")), B = !0
    }

    function K() {
        function t(t) {
            k.classList.remove("loading"), w.setCustomValidity("Uh oh. There was a problem. Please try again."), w.setAttribute("aria-invalid", "true"), e.events.fire(Bt._emailCaptureFailure), U()
        }
        k.classList.add("loading"),
            function(i, o) {
                vt(n);
                const r = Array.from(b),
                    a = new XMLHttpRequest,
                    {
                        referrer: s,
                        signature: l,
                        timestamp: c,
                        expires: d
                    } = e.config.request,
                    u = `https://${e.config.player_url}/video/${e.config.video.id}/submit-email?signature=${l}&time=${c}&expires=${d}&referrer=${s}`;
                a.open("POST", u + window.location.search, !0);
                const p = {};
                r.forEach(e => {
                    p[e.name] = e.value
                });
                const _ = JSON.stringify(p);
                a.setRequestHeader("Content-Type", "application/json"), a.withCredentials = !0, a.timeout = 3e3, a.onload = function() {
                    var i;
                    try {
                        i = JSON.parse(a.responseText)
                    } catch (ke) {}! function(i, o) {
                        !1 !== i ? (e.config.embed.email_capture_form = null, e.config.embed.email = null, e.events.fire(Bt._emailCaptureSuccess), function() {
                            const e = n.querySelector(".vp-email-capture"),
                                t = n.querySelector(".vp-email-capture-thank-you");
                            e.classList.add("hidden"), t.classList.remove("hidden"), window.requestAnimationFrame(() => {
                                const e = n.querySelector(".vp-email-capture-video-countdown-timer"),
                                    i = n.querySelector(".vp-email-capture-video-countdown-meter");
                                t.classList.add("in"), e && (i.classList.add("vp-email-capture-video-countdown-meter--active"), e.textContent = 3);
                                let o = 2;
                                const r = setInterval(() => {
                                    o <= 0 ? (Y(), clearInterval(r)) : (e && (e.textContent = o), o -= 1)
                                }, 1e3)
                            })
                        }()) : t(o.status)
                    }(i, a)
                }, a.onerror = function(e) {
                    o(e)
                }, a.send(_)
            }(0, t)
    }

    function X(e, t = {}) {
        const n = {},
            {
                isRegistration: i
            } = t;
        if (Array.from(e).forEach(e => {
                const t = e.name,
                    i = e.value;
                switch (t) {
                    case "email":
                        n.email = i;
                        break;
                    case "First name":
                        n.first_name = i;
                        break;
                    case "Last name":
                        n.last_name = i;
                        break;
                    default:
                        n.data || (n.data = {}), n.data[t] = i
                }
            }), i) {
            let e;
            const {
                timeZone: t
            } = (new Intl.DateTimeFormat).resolvedOptions();
            n.time_zone = t;
            try {
                e = fa() && (() => {
                    try {
                        return window.parent.origin === window.origin
                    } catch (e) {
                        return !1
                    }
                })() ? yi(window.top.location.href) ? window.top.location.href : window.location.href : window.location.href ? window.location.href : document.referrer
            } catch (ke) {
                e = ""
            }
            e && (n.webinarRegistrantSource = {
                metadata: {
                    url: e
                },
                type: "Player"
            })
        }
        return JSON.stringify(n)
    }
    const Z = e => $() ? (H(), W(C + 1), !0) : (F(), !1),
        J = () => {
            var t, i;
            return C === g.length && (d && !O.getAttribute("checked") ? (O.classList.add("vp-disclaimer-checkbox-invalid"), n.querySelector(".vp-opt-in-bubble-message").innerText = M ? Ds.webinar.opt_in_login_error : Ds.webinar.opt_in_error, A.classList.remove("hidden"), A.classList.remove("vp-opt-in-bubble-animate"), window.requestAnimationFrame((function() {
                A.classList.add("vp-opt-in-bubble-animate")
            })), I.classList.add("vp-webinar-compliance-checkbox-invalid"), O.focus(), !1) : $() ? ((function(e, t = null) {
                return "before-video" === (t = t || e.position) || "before" === t
            }(D) && !e.config.video.live_event || "started" === (null == (t = e.config.video.live_event) ? void 0 : t.status)) && (e.events.fire(Bt._playButtonPressed), e.events.fire(Bt._pauseButtonPressed)), H(), e.events.fire(Bt._emailCaptureSubmitted), d ? M ? s() : l() : (K(), (Ss(D) || e.config.video.live_event) && "started" !== (null == (i = e.config.video.live_event) ? void 0 : i.status) || e.events.fire(Bt._playButtonPressed)), !1) : (F(), !1))
        };

    function Q(e) {
        M = e;
        let t = D.custom_fields;
        M && (t = [{
                field_name: "Email address",
                required: 1,
                position_in_form: 0,
                id: 1,
                locked: 1
            }]),
            function(e) {
                const t = sa.render("email_capture_fields", {
                    customFields: xs(e),
                    strings: Ds
                });
                document.querySelector(".vp-email-capture-form-fields-slider").innerHTML = t, n.querySelector(".vp-email-capture-total-steps").innerText = e.length, g = n.querySelectorAll(".vp-email-capture-form-custom-field"), b = n.querySelectorAll(".vp-email-capture-form-input"), T = g[C - 1], w = b[C - 1], f = null, oe(), W(C > g.length ? g.length : C, !1)
            }(t), P.innerHTML = sa.render("webinar_registration_bypass_btn", {
                showWebinarLogin: M,
                regBypass: Ds.webinar.reg_bypass,
                regGoBack: Ds.webinar.reg_go_back,
                registrationFull: B
            });
        let i = M ? Ds.webinar.reg_login_title : D.custom_message;
        document.querySelector(".vp-email-capture-title").innerHTML = sa.render("email_capture_title", {
            title: i
        }), H(), B && j(M), M || ne()
    }
    const ee = () => {
            const e = n.querySelectorAll(".vp-email-capture-form-dropdown-options"),
                t = n.querySelector(".vp-email-capture-form-custom-field");
            e.forEach(e => {
                if ((null == t ? void 0 : t.offsetWidth) && e) {
                    const n = `${Math.ceil(.85*t.offsetWidth)}px`;
                    e.style.width !== n && (e.style.width = n)
                }
            })
        },
        te = e => {
            const t = n.querySelector(`.vp-email-capture-form-dropdown-${e}`),
                i = n.querySelector(`#custom-field-${e}`),
                o = n.querySelector(".vp-email-capture-dropdown-overlay"),
                r = n.querySelector(`#custom-field-options-overlay-${e}`),
                a = n.querySelector(`#custom-field-options-${e}`),
                s = null == a ? void 0 : a.querySelectorAll(".vp-email-capture-form-dropdown-option");
            if (!(i && o && a && s && r)) return;
            let l = -1,
                c = !1;
            ee();
            const d = (e, t) => {
                    for (let n = 0; n < e.length; n++) e[n].classList.remove(t)
                },
                u = (e, t) => {
                    d(e, t), e[l].classList.add(t), e[l].focus()
                },
                p = () => {
                    c && (c = !1, o.classList.remove("active"), o.setAttribute("aria-expanded", "false"), o.removeChild(a), r.appendChild(a), w.focus(), w.readOnly = !0)
                },
                _ = (e, t) => {
                    ! function(e) {
                        e.forEach((function(e) {
                            e.classList.remove("selected")
                        }))
                    }(s), 0 !== t || x.required ? (i.value = e.innerText, T.classList.add("active"), e.classList.add("selected")) : (i.value = "", T.classList.remove("focus"), T.classList.remove("active")), p()
                },
                v = () => {
                    var e;
                    S.classList.add("hidden"), T.classList.remove("vp-email-capture-input-invalid"), o.classList.contains("active") ? (i.value.length ? T.classList.add("focus") : T.classList.remove("focus"), o.classList.remove("active"), o.removeChild(a), r.appendChild(a)) : (o.classList.add("active"), o.appendChild(a), null == (e = s[0]) || e.focus()), c = !0, w.readOnly = !0, o.setAttribute("aria-expanded", "true");
                    const t = Array.from(s).findIndex(e => e.classList.contains("selected"));
                    l = t < 0 ? 0 : t, u(s, Rs)
                },
                m = e => {
                    (null == a ? void 0 : a.contains(e.target)) || p()
                };
            o.removeEventListener("click", m), o.addEventListener("click", m), t.removeEventListener("click", v), t.addEventListener("click", v);
            const f = e => {
                if (c && s.length > 0) {
                    switch (e.code) {
                        case "Escape":
                            p();
                            break;
                        case "ArrowUp":
                            l--, l < 0 && (l = s.length - 1), u(s, Rs);
                            break;
                        case "ArrowDown":
                        case "Tab":
                            l++, l > s.length - 1 && (l = 0), u(s, Rs);
                            break;
                        case "Enter":
                        case "Space":
                            d(s, Rs), l > -1 && (s[l].click(), l = -1)
                    }
                    e.preventDefault()
                }
            };
            a.removeEventListener("keydown", f), a.addEventListener("keydown", f);
            const h = e => {
                c || "Enter" !== e.code && "Space" !== e.code || (v(), e.preventDefault(), e.stopPropagation())
            };
            i.removeEventListener("keydown", h), i.addEventListener("keydown", h), s.forEach((function(e, t) {
                const n = () => {
                        _(e, t)
                    },
                    i = n => {
                        "Enter" === n.key && _(e, t)
                    };
                e.removeEventListener("click", n), e.addEventListener("click", n), e.removeEventListener("keydown", i), e.addEventListener("keydown", i)
            }))
        };

    function ne() {
        D.custom_fields.forEach(e => {
            "dropdown" === e.field_type && te(e.id)
        })
    }
    let ie = {
        get events() {
            return c
        },
        getData(t = {}, n = {}) {
            var i;
            D = V(e.config);
            const o = n.custom_logo || D.custom_logo,
                r = n.custom_fields || D.custom_fields || [{
                    field_name: "Email address",
                    required: 1,
                    position_in_form: 0,
                    id: 1,
                    locked: 1
                }, {
                    field_name: "Name",
                    required: 0,
                    position_in_form: 1,
                    id: 2,
                    static_field: 1
                }];
            r.sort((e, t) => e.position_in_form - t.position_in_form);
            const a = n.privacy_policy || D.privacy_policy,
                s = (null == (i = e.config.video.webinar) ? void 0 : i.scheduled_start_time) || null,
                l = s ? Yn(new Date(s), e.config.request.lang) : "";
            return t.template = sa.render("email_capture", {
                allowSkip: n.allow_skip || D.skippable || D.allow_skip,
                customLogo: o ? As(o) : null,
                text: Vs(n.text || D.custom_message || D.text),
                customFields: xs(r),
                privacyPolicy: a,
                positionIsAfter: Ss(D),
                strings: Ds,
                showWebinarForm: d,
                showWebinarLogin: M,
                webinarStartTime: l,
                isWebinarStarted: u,
                registrationFull: n.registration_full || B
            }), R.clearCachedElements(), t._firstFocusElement = ".vp-email-capture-form-input", t.modal = !0, t.logo = !1, t.preventBackgroundClose = !0, t.noblur = n.noblur, t.nofocus = n.nofocus, t
        }
    };

    function oe() {
        const e = n.querySelector(".locked_field"),
            t = n.querySelectorAll(".static_field");
        e && (e.type = "email", e.name = "email"), t && Array.from(t).forEach(e => {
            "Name" === e.name && (e.name = "name")
        })
    }
    return e.events.on(Bt._overlayOpened, i => {
                if ("email-capture" === i) {
                    if (m = n.querySelector(".vp-email-capture-form-fields-wrapper"), h = n.querySelector(".vp-email-capture-form-fields-slider"), g = n.querySelectorAll(".vp-email-capture-form-custom-field"), b = n.querySelectorAll(".vp-email-capture-form-input"), y = n.querySelector(".vp-email-capture-form-button--next-submit-wrapper"), L = n.querySelector(".vp-email-capture-progress-meter"), S = n.querySelector(".vp-validation-bubble"), A = n.querySelector(".vp-opt-in-bubble"), k = n.querySelector(".vp-email-capture-form-button--submit"), P = document.querySelector(".vp-email-capture-reg-bypass-wrapper"), I = document.querySelector(".vp-webinar-compliance-checkbox-border"), O = n.querySelector(".vp-disclaimer-checkbox"), O) {
                        const e = function(e) {
                                return `${(e=(e=(e=e.replace(/"/g,"'")).replace(/>\s{1,}</g,"><")).replace(/\s{2,}/g,"")).replace(/[\r\n%#()<>?\\[\\\]^` { |
                                }] / g,
                            encodeURIComponent)
                }
                `}(sa.render("icon_check"));O.style.backgroundImage=`
                url("data:image/svg+xml;,${e}")
                `}oe(),W(1,!1),function(){var i;if(N)return;t.watch("ui.player.breakpoint",()=>{f=st(m).height,window.requestAnimationFrame(()=>{h.style.transform=`
                translateY(-$ {
                        f * (C - 1)
                    }
                    px)
                `})});let o=!1;is(n,".vp-email-capture-form-button--cancel",()=>{var t;Y(),(Ss(D)||e.config.video.live_event)&&"started"!==(null==(t=e.config.video.live_event)?void 0:t.status)||e.events.fire(Bt._playButtonPressed)}),Te(n).on("click",".vp-email-capture-form-button--next",Z),Te(n).on("click",".vp-email-capture-form-button--back",e=>{H(),W(C-1)}),Te(n).on("keyup",".vp-email-capture-form-button--next-submit-wrapper",e=>{y.classList.add("showfocus")}),Te(n).on("blur",".vp-email-capture-form-button--next-submit-wrapper",e=>{y.classList.remove("showfocus")}),Te(n).on("click",".vp-email-capture-wrapper",()=>{y.classList.remove("showfocus"),w.classList.remove("showfocus")}),Te(n).on("keydown",".vp-email-capture-form-button--back",e=>{o=!0}),Te(n).on("keydown",".vp-email-capture-form-button--next",e=>{o=!0}),Te(n).on("keyup",".vp-email-capture-form-input",e=>{var t;"dropdown"!==(null==(t=x)?void 0:t.field_type)&&("Enter"===e.key&&C<g.length&&!o&&Z(),9!==e.which||w.classList.contains("showfocus")||w.classList.add("showfocus"),o=!1)}),Te(n).on("submit",".vp-email-capture-form",e=>!1),Te(n).on("click",".vp-email-capture-form-button--submit",J),Te(n).on("input",".vp-email-capture-form-input",()=>{w.value.length?(T.classList.add("active"),w.setCustomValidity(""),$()&&H()):T.classList.remove("active")}),Te(n).on("focus",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");if(null==e?void 0:e.classList.contains("active")){const t=x.id,i=n.querySelector(`#
                custom - field - options - overlay - $ {
                    t
                }
                `),o=n.querySelector(`#
                custom - field - options - $ {
                    t
                }
                `);e.classList.remove("active"),e.removeChild(o),i.appendChild(o)}T.classList.add("focus")}),Te(n).on("blur",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");e&&e.classList.contains("active")||T.classList.remove("focus"),w.value.length?T.classList.add("active"):T.classList.remove("active")}),Te(n).on("focus",".vp-disclaimer-checkbox",()=>{I.classList.add("showFocus")}),Te(n).on("blur",".vp-disclaimer-checkbox",()=>{I.classList.remove("showFocus")}),Te(n).on("click",".vp-disclaimer-checkbox",()=>{if(O.getAttribute("checked"))return O.removeAttribute("checked"),void H();O.setAttribute("checked","checked"),H()}),d&&(Te(n).on("click",".vp-email-capture-reg-bypass",()=>{Q(!0)}),Te(n).on("click",".vp-email-capture-reg-go-back",()=>{Q(!1)})),null==(i=D.custom_fields)||i.forEach(e=>{"dropdown"===e.field_type&&Te(window).on("resize",ee)}),N=!0}(),d&&ne()}}),d&&e.events.on(St._updateWebinarStartTime,t=>{R.updateWebinarStartTime(t,e.config.request.lang)}),e.events.on(St._setActivePage,e=>{W(e,!1)}),e.events.on(St._updateEmailCapture,e=>{if(!n.querySelector(".vp-email-capture-form"))return;d&&M&&Q(!1);const t=Object.assign(e,{custom_fields:xs(e.custom_fields)});R.updateAll(t,()=>{const e=n.querySelector(".vp-email-capture-form-fields-slider").children;e.length&&Array.from(e).forEach(e=>{"dropdown"===e.dataset.type&&te(e.dataset.id)}),g=n.querySelectorAll(".vp-email-capture-form-custom-field"),b=n.querySelectorAll(".vp-email-capture-form-input"),n.querySelector(".vp-email-capture-total-steps").innerText=g.length,T=g[C-1],w=b[C-1],W(C>g.length?g.length:C,!1)})}),e.events.on(Bt._configChanged,()=>{const n=V(e.config);t.get(Mr)||!z(D)&&!z(n)&&D.id===n.id||e.events.fire(St._hideOverlay,{name:"email-capture",unmakeModal:!0})}),ie}var Fs;!function(e){e.NOT_LOGGED_IN="not_logged_in",e.LOGGED_IN_STORAGE_ACCESS_REQUIRED="logged_in_storage_access_required",e.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED="storage_access_granted_login_unconfirmed",e.ALL_ACCESS_ATTEMPTS_FAILED="all_access_attempts_failed"}(Fs||(Fs={}));var Hs=Fs;function qs(e,i,r){var a,s,l,c=r.querySelector(".vp-overlay-cell"),d=r.querySelector(".vp-overlay"),u=r.querySelector(".vp-overlay-icon-wrapper"),p=u.querySelector(".vp-overlay-icon"),_=r.querySelector(".vp-overlay-logo"),v=!1,m=null,f=null;const g=new os(e,d),b=new Us(e,i,d);let y=!1,E=!1,C=Qt.POPUP;function T(){var e=st(r),t=st(d),n=st(_),i=t.bottom+(e.height-t.bottom)/2;return e.height-i-n.height/2+"px"}function w(){var e=st(r),t=st(d),n=st(u),i=e.height/2,o=e.height-(e.bottom-t.bottom)/2;return{top:i-n.height/2+"px",transform:"translateY("+(o-i)+"px)"}}function L(t,n){r.setAttribute("data-name",t),d.innerHTML=n.template,o.iOS&&ee.element&&(e.events.fire(Bt._willExitFullscreen),ee.exit()),n.noblur||rt(l=document.activeElement),n.modal&&(r.classList.add("modal"),r.setAttribute("data-modal","true")),n.preventBackgroundClose&&r.setAttribute("data-background-close","false"),n.wrapperClass&&r.classList.add(n.wrapperClass),n.icon.type&&(n.logo?(_.classList.remove("hidden"),u.classList.add("cloaked"),window.requestAnimationFrame((function(){_.innerHTML=sa.render("logo"),_.style.bottom=T()}))):u.classList.remove("cloaked"),u.classList.remove("hidden"),p.innerHTML=n.icon.html,window.requestAnimationFrame((function(){var e=w();u.style.top=e.top,u.style[o.transformProperty]=e.transform})),r.setAttribute("data-icon",n.icon.type),u.setAttribute("data-icon",n.icon.type),p.setAttribute("data-icon",n.icon.type)),r.classList.add("invisible"),r.classList.remove("hidden"),r.removeAttribute("hidden"),r.classList.remove("out"),r.classList.add("in"),f=n,m=t,v=!0,e.events.fire(Bt._overlayOpened,t),e.element.classList.add("player-overlayVisible"),window.requestAnimationFrame((function(){r.classList.remove("invisible"),!n.nofocus&&e.element.contains(l)&&function(e){if(e){const t=r.querySelector(e);t&&t.focus()}}(n._firstFocusElement),window.requestAnimationFrame((function(){d.classList.add("in"),c.classList.add("in")}))}))}function S(){d.classList.remove("in"),d.classList.add("out")}function A(t){if("true"!==r.getAttribute("data-modal")&&v){r.removeAttribute("data-background-close"),c.classList.remove("in"),c.classList.add("out"),S(),r.classList.remove("in"),r.classList.add("out"),clearTimeout(a),a=setTimeout(k,200),(null==t?void 0:t.preventDefault)&&t.preventDefault();var n=r.querySelector(".js-back");n&&n.classList.add("cloaked"),g.destroy(),e.events.fire(Bt._overlayClosed,m),e.element.classList.remove("player-overlayVisible"),v=!1,m=null,f=null,window.requestAnimationFrame((function(){l&&(at(l),l=null)}))}}function k(){v||(r.setAttribute("hidden",""),r.removeAttribute("data-name"),r.removeAttribute("data-icon"),r.classList.add("hidden"),r.classList.remove("out"),r.classList.remove("embed-active"),r.classList.remove("modal"),r.classList.remove("embed-only"),c.classList.remove("out"),c.classList.remove("in"),u.removeAttribute("data-icon"),u.classList.add("hidden"),u.classList.remove("animate"),p.removeAttribute("data-icon"),p.innerHTML="",_.classList.add("hidden"),d.classList.remove("out"),d.innerHTML="",e.events.fire(Bt._overlayCleared))}function P(){r.classList.remove("modal"),r.setAttribute("data-modal","false")}function I(e){if("yes"===e.form.getAttribute("data-bubble")){e.form.setAttribute("data-bubble","no");var t=r.querySelector(".vp-validation-bubble");t.querySelector(".vp-validation-bubble-message").innerHTML=e.validationMessage||"There is an error with this input.";var n=st(e),i=st(e.form);t.style.left=n.left-i.left+"px",t.style.top=n.height+1+"px",t.classList.remove("hidden"),e.focus(),window.requestAnimationFrame((function(){t.classList.add("vp-validation-bubble-animate")})),O()}}function O(e){var t=r.querySelector(".vp-validation-bubble");if(t){if(e)return clearTimeout(s),void t.classList.remove("vp-validation-bubble-animate");clearTimeout(s),s=setTimeout((function(){t.classList.remove("vp-validation-bubble-animate")}),5e3)}}function R(e){var t=r.querySelector("input[type=password]");return t.form.classList.contains("submitted")?(t.setAttribute("aria-invalid","false"),t.setCustomValidity(""),t.checkValidity&&!t.checkValidity()?(t.setAttribute("aria-invalid","true"),t.validity.valueMissing&&t.setCustomValidity("Please enter the password."),e||I(t),!1):(O(!0),!0)):null}function N(){p.classList.add("open")}function D(){p.classList.add("pulled-back")}function x(t,n={}){t.icon={type:"lock",html:sa.render("icon_lock")},t._firstFocusElement=".js-login",t.modal=!0,t.logo=!0;const{loginText:i,buttonTarget:o}=((e=Hs.NOT_LOGGED_IN)=>{const t={loginText:to()?{title:"Sign in to Vimeo to watch this video",subtitle:"You may need to allow cookies first. If asked, select <b>Allow</b> to continue.",buttonText:"Sign in"}:{title:"Sign in to Vimeo",subtitle:"This video is private. Sign in to watch.",buttonText:"Sign in"}};switch(e){case Hs.LOGGED_IN_STORAGE_ACCESS_REQUIRED:t.loginText={title:"Allow cookies",subtitle:"Your browser will ask if you want to allow cookies. Select <b>Allow</b> to continue.",buttonText:"Continue"};break;case Hs.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED:t.loginText={title:"Continue to sign in",subtitle:"You may now sign in to watch this video.",buttonText:"Continue"};break;case Hs.ALL_ACCESS_ATTEMPTS_FAILED:t.loginText={title:"Video unavailable",subtitle:"Try watching on vimeo.com.",buttonText:"Watch on Vimeo"},t.buttonTarget=Qt.ON_SITE}return t})(n.loginState);return t.template=sa.render("private_locked",{action:`
                https: //${e.config.vimeo_url}/log_in`,strings:i}),C=null!=o?o:C,t}function B(){const t=e.config.embed.email_capture_form||e.config.embed.email||{};if(e.backbone){const n=t.timecode||0;y=e.backbone.currentTime>n}("before-video"===t.position||"before"===t.position)&&!y&&V()}function V(){i.get("ui.overlay.isEmailCaptureVisible")?e.events.fire(St._showOverlay,"email-capture"):E=!0}return e.events.on(St._hideOverlay,(function(e={}){e.name&&m!==e.name||(e.unmakeModal&&P(),A())})),e.events.on(St._showOverlay,(function(t,n={}){var i=function(){var i={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};switch(t){case"help":return m=t,void(v=!0);case"share":return L(t,g.getShareData(i,n)),void g.setup();case"private-locked":return void L(t,x(i));case"password":return void L(t,function(t){return t.icon={type:"lock",html:sa.render("icon_lock")},t.template=sa.render("password",{action:`https://${e.config.player_url}/video/${e.config.video.id}/check-password?referrer=${e.config.request.referrer}`,strings:{title:"Password Required",subtitle:"If you’ve got it, enter it below.",password:"Password",watch:"Watch Video"}}),t._firstFocusElement=".js-password",t.modal=!0,t.logo=!!e.config.embed.settings.logo,t}(i));case"error":return void L(t,function(e,t){return e.template=sa.render("error",{title:t.title,message:t.message,aria_label:"Error"}),e._firstFocusElement=".js-close",e.modal=!!t.modal,e.logo=!!t.logo,t.icon&&"lock"===t.icon&&(e.icon={type:"lock",html:sa.render("icon_lock")}),e}(i,n));case"email-capture":return void L(t,b.getData(i,n));case"app-redirect":return void L(t,function(t,{redirectUrl:n,title:i,buttonText:o,ignoreText:r,bottomText:a,newWindow:s}={}){const l=ht(e.config.video.privacy,["disable","unlisted"]);return t.template=sa.render("app_redirect",{hideRedirectButton:l,redirectUrl:n,newWindow:s,strings:{title:i,buttonText:o,ignoreText:r,bottomText:a}}),t.modal=!1,t.logo=!1,t.preventBackgroundClose=!0,t}(i,n));case"webinar-confirmation":return void L(t,function(t){var n,i;const o=(null==(n=e.config.video.webinar)?void 0:n.scheduled_start_time)||null,r=o?Yn(new Date(o),e.config.request.lang):"",a=null==(i=e.config.video.webinar)?void 0:i.custom_logo;return t.template=sa.render("webinar_confirmation",{customLogo:a?As(a):null,webinarStartTime:r,strings:{thank_you:Ds.webinar.login_thank_you,thank_you_subtitle:Ds.webinar.login_thank_you_subtitle}}),t.modal=!0,t}(i));case"webinar-blocked":L(t,function(e){return e.template=sa.render("webinar_ended",{strings:{title:"Live event ended"}}),e.modal=!0,e}(i))}};if(v&&!n.nohide)return"share"!==m&&"help"!==m||m!==t?(e.events.once(Bt._overlayCleared,i),P(),void A()):void A();i()})),e.events.on(St._updateOverlay,(function(e,t={}){const n={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};if("private-locked"===e){const{template:e}=x(n,t);d.innerHTML=e}})),Te(r).on("input","input",(function(){this.form.classList.add("interacted")})).on("transitionend",".vp-validation-bubble",(function(e){"opacity"===e.propertyName&&"0"===window.getComputedStyle(this,"").opacity&&this.classList.add("hidden")})),e.events.on([Bt._overlayCloseButtonPressed,h.PLAY],A),e.events.on(Bt._privateUnlocked,(function(){"private-locked"===m&&(P(),A())})),e.events.on(Bt._configChanged,(function(){"share"===m&&(f=g.getShareData({modal:!1,template:null,logo:!1,icon:{type:null,html:null}}),d.innerHTML=f.template,g.setup())})),Te(window).on("resize",(function(){if(v){_.style.bottom=T();var e=w();u.style.top=e.top,u.style[o.transformProperty]=e.transform}})),Te(r).on("transitionend",".vp-overlay-logo",(function(e){"opacity"===e.propertyName&&this.classList.contains("animate")&&(_.classList.add("hidden"),_.classList.remove("animate"))})),Te(r).on("transitionend",".vp-overlay-icon-wrapper",(function(e){e.propertyName.indexOf("transform")>-1&&(""===this.style[o.transformProperty]?(this.classList.remove("centered"),"lock"!==this.getAttribute("data-icon")||p.classList.contains("open")||p.querySelector("canvas")?D():setTimeout(N,100)):"translateY(-10px)"===this.style[o.transformProperty]&&(u.classList.add("centered"),u.style[o.transformProperty]=""))})),Te(r).on("transitionend",".vp-overlay-icon",(function(e){e.propertyName.indexOf("transform")>-1&&(this.classList.contains("out")?(P(),A()):this.classList.contains("pulled-back")?(p.classList.add("out"),p.classList.remove("pulled-back")):this.classList.contains("open")&&D())})),i.watch("ui.overlay.isEmailCaptureVisible",(function(t){!t&&v&&"email-capture"===m?(E=v,P(),A()):t&&E&&(E=!1,e.events.fire(St._showOverlay,"email-capture"))})),e.events.on(Bt._ready,B),e.events.on(Bt._configChanged,B),e.events.on(h.TIME_UPDATE,(function({currentTime:t=0}){const n=e.config.embed.email_capture_form||e.config.embed.email||{};("during-video"===n.position||"during"===n.position)&&(t<n.timecode&&(y=!1),t>=n.timecode&&!y&&(y=!0,V()))})),e.events.on(Bt._showEmailCaptureForm,(function(){V()})),b.events.on(Bt._emailCaptureEnd,()=>{e.events.fire(Bt._emailCaptureEnd),P(),A()}),g.events.on(Bt._embedViewShown,(function(){e.config.embed.settings.share.embed_only||(r.querySelector(".js-back").classList.remove("cloaked"),r.classList.add("embed-active"))})).on(Bt._shareViewShown,(function(){r.classList.remove("embed-active")})),is(r,".js-back",(function(){return g.showShareView(),!1})),g.events.on(Bt._shareViewEnd,(function(){r.querySelector(".js-back").classList.add("cloaked")})),o.stereoscopic&&(e.events.on(Bt._showAndroidVRDeepLink,(function(){e.events.fire(St._showOverlay,"app-redirect",{redirectUrl:e.doNotTrackEnabled?e.config.video.share_url:gr(e.config.video.id,"player-spatial-redirect"),title:"Headset viewing isn’t currently supported in your mobile browser.",buttonText:"Watch in the Vimeo app",ignoreText:null,bottomText:null,newWindow:!e.config.embed.on_site})})),Te(d).on("click",".app-redirect-ignore",(function(){A()})),Te(d).on("click","[data-new-window]",(function(e){return window.open(document.querySelector(".app-redirect-button").getAttribute("href")),!1}))),Te(d).on("click",".popup",(function(){if(C===Qt.POPUP&&e.events.fire(St._openPopup,"login-private-locked"),C===Qt.ON_SITE){const{video:t,vimeo_url:n}=e.config,i=`https://${n}/${t.id}`;window.open(i,"_blank")}return!1})),Te(d).on("click",".password input[type=submit]",(function(){this.form.classList.add("submitted"),this.form.setAttribute("data-bubble","yes"),R(!0)})).on("submit",".password form",(function(){return function(i){if(!R())return!1;var a=i.querySelector("input[type=password]"),s=i.querySelector("input[type=submit]");function l(e){s.classList.remove("loading"),a.setCustomValidity("Uh oh. There was a problem. Please try again."),a.setAttribute("aria-invalid","true"),I(a)}s.classList.add("loading"),function(e,i,o){vt(r);var a=Array.from(e.querySelectorAll("input")).map((function(e){return e.name?encodeURIComponent(e.name)+"="+encodeURIComponent(window.btoa(function(e){return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(e,t)=>String.fromCharCode("0x"+t))}(e.value))):encodeURIComponent(e.value)})).join("&"),s=new XMLHttpRequest;const l=n(e.action,t(window.location.search));s.open(e.method,l,!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.withCredentials=!0,s.timeout=3e3,s.onload=function(){var e;try{e=JSON.parse(s.responseText)}catch(ke){}i(e,s)},s.onerror=function(e){o(e)},s.send(a)}(i,(function(t,n){if(!1!==t){if(e.events.fire(Bt._passwordUnlocked,t),"icon-hidden"===window.getComputedStyle(c,":after").content)return P(),void A();_.classList.add("animate"),u.classList.remove("cloaked"),u.classList.add("animate"),window.requestAnimationFrame((function(){u.style[o.transformProperty]="translateY(-10px)"})),P(),S()}else l(n.status)}),l)}(this),!1})).on(["focus","input"],[".password input[type=email]",".password input[type=password]"],(function(){R()})),e.events.on(Bt._error,(function(t,n={modal:!0,final:!0}){if(!1===n.final)return;let i={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};if(i.modal=n.modal,i.template=sa.render("error",{title:n.title,message:n.message}),i._firstFocusElement=".js-close",v)return A(),void e.events.once(Bt._overlayCleared,()=>L(t,i));L(t,i)})),e.events.on(Bt._configChanged,(function(){window.requestAnimationFrame((function(){"email-capture"!==m&&"webinar-confirmation"!==m&&(P(),A())}))})),is(r,".js-close",(function(){e.events.fire(Bt._overlayCloseButtonPressed)})),Te(r).on(["click","touchend"],[".vp-overlay-content",".js-share",".vp-overlay-logo"],(function(e){e.stopPropagation()})).on(["click","touchend"],[".vp-overlay-cell","nav"],(function(){return"false"===r.getAttribute("data-background-close")||(e.events.fire(Bt._overlayCloseButtonPressed),!1)})),e.events.on(St._showOutro,(function(){r.classList.add("hidden")})),e.events.on(Bt._outroHidden,(function(){r.classList.contains("in")&&r.classList.remove("hidden")})),function(){var t;e.config.view!==Ft.webinarUnlocked||(null==(t=e.config.video.webinar)?void 0:t.status)||(e.events.fire(St._showOverlay,"webinar-confirmation"),e.events.once(M.EVENT_STARTED,()=>{e.events.fire(St._hideOverlay,{unmakeModal:!0})}))}(),e.events.fire(Bt._overlayModuleReady),{}}const Ws=["a",".button-link",".vp-overlay-wrapper .footnote.share a:hover",".menu li:hover",".menu li.active",".vp-outro-link:hover",".vp-outro-videosTitle a:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-share-footnote a:hover",".vp-panel-collapsible button.vp-panel-button:hover"],$s=["a:hover",".button-link:hover"],Ys=[".vp-overlay-wrapper .close:hover .fill",".vp-overlay-wrapper .back:hover .fill"],Gs=[".controls-outro a:hover .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill"],zs=[".vp-overlay .buttons li",".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',"li.vp-panel-item-on:before",".vp-share-buttons li","button.vp-share-embedCopy",".vp-outro-button","a.vp-outro-vodButton",".vp-email-capture-progress-meter",".vp-chapters-active-indicator"],js=["li.vp-panel-item-on:before"],Ks=[".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',".vp-share-footnote--embed a",".vp-outro-button",".vp-outro-button:hover",".vp-outro-wrapper .vp-outro-link:hover","button.vp-share-embedCopy",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-panel-collapsible button.vp-panel-button:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],Xs=['.vp-share-wrapper a[role="button"] .fill',".vp-outro-vodButton .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill"],Zs=["li.vp-panel-item-on:before"],Js=["li.vp-panel-item-on:before"],Qs=['.vp-overlay-wrapper .vp-overlay a[role="button"]',"button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],el=[".vp-share-button .fill",".vp-outro-vodButton .fill"],tl=["li.vp-panel-item-on:before",".vp-email-capture-form-fields-slider .vp-email-capture-form-custom-field.focus",".vp-email-capture-disclaimer-wrapper .vp-webinar-compliance-checkbox-border.showFocus"],nl=['.vp-overlay .vp-overlay-content input[type="submit"]:active','.vp-overlay a[role="button"]:active',".vp-outro-vodWrapper a.vp-outro-vodButton:active",".vp-email-capture-form-button--next:hover",".vp-email-capture-form-button--next:focus",".vp-email-capture-form-button--submit:hover",".vp-email-capture-form-button--submit:focus"],il=[".vp-email-capture-form-button--next",".vp-email-capture-form-button--submit"],ol=['.vp-overlay-wrapper .vp-overlay a[role="button"]',"button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],rl=[".vp-share-button .fill",".vp-outro-vodButton .fill"];function al(e,{uuid:t,id:n,isMobileDevice:i}){var o=null;function a(e,o){var r=`.player-${t} `,a=r+e.join(","+r);if(o){var s=`${n} `;a+=`,${s}${e.join(","+s)}`}return i&&(a=a.replace(/:hover/g,":active")),a.replace(/ &/g,"")}return e.events.on(St._changeColor,(n,i)=>{let s;const l=Xt[i],c=Kt[i];try{s=new r(n)}catch(u){s=new r(c)}if(i===Gt){let n=function(e){o?function(){for(;o.cssRules.length>0;)o.deleteRule(0)}():function(){var e=document.createElement("style");e.setAttribute("data-player",t),document.querySelector("head").appendChild(e),o=e.sheet}();var n=e.complement,i=new r(30,30,30,.9),s=new r(0,0,0,.15).overlayOn(e);i.contrast(n).ratio<3&&n.lighten(5,3,i);var l,c=e.lightness<40?e.clone().lighten(15,3,e):e.clone().darken(15,3,e),d=r.white.contrast(e).ratio<4.5?r.black:r.white;ot(a(tl),"border-color:"+s.hex,o),ot(a(Ws),"color:"+e.hex,o),ot(a(Gs),"fill:"+e.hex,o),ot(a(zs),"background-color:"+e.hex,o),ot(a(js),"border-color:"+e.hex,o),ot(a($s),"color:"+n.hex,o),ot(a(Ys),"fill:"+n.hex,o),ot(a(nl),"background-color:"+s.hex,o),e.luminance>.95&&(n=e.clone().darken(15,3,e),ot(a(Ks),"color:"+n.hex,o),ot(a(Xs),"fill:"+n.hex,o),ot(a(Zs),"background-color:"+n.hex,o),ot(a(Js),"border-color:"+n.hex,o),c=n.clone().darken(15,3,n)),e.yiq>175&&e.luminance<.95&&(l=c.clone().darken(15,3,c),ot(a(Qs),"color:"+c.hex,o),ot(a(el),"fill:"+c.hex,o));let u=new r(e.hex);return u.alpha=.8,ot(a(il),"background-color:"+u.rgba,o),ot(a(ol),"color:"+d.hex,o),ot(a(rl),"fill:"+d.hex,o),{main:e.hex,selected:c.hex,sidedockHover:l?c.hex:e.luminance>.95?n.hex:r.white.hex,sidedockSelected:e.luminance>.95?n.hex:e.hex,sidedockSelectedHover:l?l.hex:c.hex}}(s);e.config._colors=n}const d=si(n)?s.hexWithAlpha:s.hex;e.config.embed[l]=d.replace("#","")}),e.events.fire(St._changeColor,e.config.embed.color_one,Yt),e.events.fire(St._changeColor,e.config.embed.color_two||e.config.embed.color,Gt),e.events.fire(St._changeColor,e.config.embed.color_three,zt),e.events.fire(St._changeColor,e.config.embed.color_four,jt),{}}const sl={storageAccessRequired:to,requestCookieAccess:e=>new Promise((t,n)=>document.requestStorageAccess().then(()=>{eo("User granted storage access"),t(!0)},()=>{e(),eo("User storage access denied:"),t(!1)}).catch(n))};function ll(e){let t=null;return function(){const n=function({player:e,dependencies:t=sl}){const n={onLoginRequested:function(t){c=t,!i()||a?(d(),u()):(s++,o(d).then(t=>t?(a=!0,r||u(),void e.events.fire(Bt._userLogIn,"private")):void(m(1)?_(Hs.ALL_ACCESS_ATTEMPTS_FAILED):u())).catch(e=>{}))}},{storageAccessRequired:i,requestCookieAccess:o}=t;let r=!1,a=!1,s=0,l=0,c=di;function d(){r=!0,c()}function u(){e.events.once(Bt._loginFailure,p)}function p(){l++;const e=v();m()?_(Hs.ALL_ACCESS_ATTEMPTS_FAILED):_(!e&&r?Hs.LOGGED_IN_STORAGE_ACCESS_REQUIRED:Hs.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED)}function _(t){e.events.fire(St._updateOverlay,"private-locked",{loginState:t})}function v(){return s>=2}function m(e=2){const t=!i()&&r&&l>0,n=l>=e,o=v();return n&&o||t}return n}({player:e});e.events.on(St._openPopup,(function(i,o){let r=`https://${e.config.player_url}`,a=`${r}/video/${e.config.video.id}`;switch(i){case"login-like":t=ut(`${a}/login/like`,"login",{width:670,height:545}),e.events.fire(Bt._popupOpened,i);break;case"login-watch-later":t=ut(`${a}/login/watch-later`,"login",{width:670,height:545}),e.events.fire(Bt._popupOpened,i);break;case"login-private-locked":n.onLoginRequested((function(){t=ut(`${a}/login/private`,"login",{width:670,height:545}),e.events.fire(Bt._popupOpened,i)}));break;case"purchase":let s=`${r}/video/${e.config.video.vod.feature_id||e.config.video.id}/purchase/vod`;(null==o?void 0:o.productId)&&(s+=`/${o.productId}`),s+=`?referrer=${encodeURIComponent(e.config.request.referrer)}`,t=ut(s,"purchase",{width:790,height:670}),e.events.fire(Bt._popupOpened,i)}})),window.closePopup=function(n){if(t){try{t.close(),e.events.fire(Bt._popupClosed,n)}catch(ke){}t=null}}}(),e.config.embed.on_site||(window.confirmPurchase=function(t,n,i){n?e.loadVideo(t):i&&e.events.fire(Bt._playButtonPressed)}),e.config.embed.on_site||(window.confirmLoginAction=function(t,n){e.events.fire(Bt._userLogIn,n)}),{}}const cl={16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down",74:"j",75:"k",76:"l"},dl={106:"j",107:"k",108:"l"},ul=["up","down","left","right"],pl=["right","l"],_l=["left","j"],vl=[An.TRANSCRIPT_LIST];function ml(e,t,n){var i,r=!!e.config.embed.on_site,a=n.querySelector(".volume"),s=!1,l=null,c=!1,d=e.config.video.fps/5,u=Math.max(d,.618*e.config.video.duration),p=d,_=0,v=!1,m=K(E,80);function f(){return!r&&(e.config.view===Ft.main||e.config.view===Ft.privateUnlocked||e.config.view===Ft.webinarUnlocked)}function h(){s&&"help"===i&&e.events.fire(Bt._overlayCloseButtonPressed)}function g(e){return"number"!=typeof e.which&&(e.which=e.keyCode),e}function b(e){if("keypress"===e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return e.which in cl?cl[e.which]:String.fromCharCode(e.which).toLowerCase()}function y(t){if(e.config.embed.settings.background)return!0;var n=t.target||t.srcElement;return"INPUT"===n.tagName||"SELECT"===n.tagName||"TEXTAREA"===n.tagName||n.isContentEditable}function E(n,i){var o,r;const a=pl.includes(n);if(t.get(Ho))return;if((null==(o=e.backbone)||null==(r=o.telecine)?void 0:r.ended)&&a)return;v||(i&&!e.backbone.paused&&e.events.fire(Bt._pauseButtonPressed),e.events.fire(Bt._scrubbingStarted,{seekType:"keyboard",isFrameByFrame:i}),v=!0),function(e){var t=e,n=Math.ceil(d),i=Math.ceil(u-d);p=function(e,t,n,i){return e/=100,n*(--e*e*e+1)+t}(t,n,i)}(_),1==++_&&(p=5*e.config.video.fps);const s=i?1:p,l=a?s:-s,c=e.currentTime*e.config.video.fps;!function(t,n){const{startTime:i,endTime:o}=e.fragmentsHandler.currentFragment;let r=t/e.config.video.fps;r<i?r=i:r>=o?r=o-.001:e.events.fire(Bt._showNudgeNotification,{direction:r-e.currentTime>0?"forward":"backward",time:1!==_||n?null:5}),e.events.fire(St._seek,r)}((a?Math.ceil(c):Math.floor(c))+l,i)}function C(e){if("preact-menu"===l)return!1;var t=l.getTabIndexItems(),n=t.indexOf(document.activeElement),i="up"===e?n-1:n+1,o=null;return!(o=i>=t.length?t[0]:i<0?t[t.length-1]:t[i])||(o.focus(),!1)}function T(){if(l)return!0;if(t.get(Ho)&&!t.get(zo))return!0;if(!document.activeElement||document.activeElement===document.body){const t=e.backbone.paused?Bt._playButtonPressed:Bt._pauseButtonPressed;return e.events.fire(t),h(),!1}}function w(){const t=e.backbone.muted,n=e.backbone.volume;return t?(e.events.fire(St._changeMuted,!1),0===n&&e.events.fire(St._changeVolume,1)):t||0!==n?!t&&n>0&&e.events.fire(St._changeMuted,!0):e.events.fire(St._changeVolume,1),!1}function L(){return"preact-menu"!==l&&(l?(l.element.contains(document.activeElement)&&l.button.focus(),l.hide(),!1):s?(e.events.fire(Bt._overlayCloseButtonPressed),!1):void 0)}function S(){return!c&&("preact-menu"===l||(l?!l.element.contains(document.activeElement)||C("up"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("up"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(h(),e.events.fire(St._changeVolume,.05,!1,!0),!1)))}function A(){return!c&&("preact-menu"===l||(l?!l.element.contains(document.activeElement)||C("down"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("down"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(h(),e.events.fire(St._changeVolume,-.05,!1,!0),!1)))}function k(t,n){const r=ul.includes(n);if("preact-menu"===l)return!0;if(e.displayContext===e.adHandler)return!0;if(l)return!l.element.contains(document.activeElement)||!r||C("left"===n?"up":"down");if(s&&"help"!==i)return!0;if(h(),o.spatialPlayback&&e.config.video.spatial&&r)return e.backbone.getEffectByName("ThreeSixtyEffect").keyPress(n),!1;if(document.activeElement&&document.activeElement===a&&r){var c="left"===n?-.05:.05;return e.events.fire(St._changeVolume,c,!1,!0),!1}t.shiftKey||0===_?E(n,t.shiftKey):m(n,t.shiftKey)}return e.events.on(Bt._overlayOpened,(function(e){s=!0,i=e,"not-supported"!==e&&"email-capture"!==e||(r=!0)})),e.events.on(Bt._overlayClosed,(function(){s=!1,i=null})),e.events.on(Bt._menuVisibilityChanged,(function(e,t){l=e?t||e:null})),e.events.on(Bt._transcriptNavActive,(function(e){c=e})),e.events.on(Bt._configChanged,(function(e){e&&(r=!1)})),function(){const{like:n,watch_later:r,share:a}=e.config.embed.settings;var c={c:[Bt._ccButtonPressed,!0],h:[Bt._prefsButtonPressed,!0],T:Bt._transcriptKeyPressed,f:Bt._fullscreenButtonPressed,d:Bt._debugButtonPressed,k:T,j:k,l:k,m:w,space:T,up:S,down:A,left:k,right:k,esc:L,"?":[St._showOverlay,"help"]};function u(t){if(g(t),function(e){return!(e.ctrlKey||e.metaKey||e.altKey||"keypress"===e.type&&e.charCode in dl||(e.which in cl?"keydown"!==e.type:"keypress"!==e.type))}(t)&&!y(t)&&f()){var n=b(t);if(n in c){if("function"==typeof c[n]){if(!1===c[n](t,n)){var o;if(t.preventDefault(),vl.includes(null==(o=t.target)?void 0:o.id))return;t.stopPropagation()}return}if(!1===function(t){if(t=Array.isArray(t)?t:[t],s&&"help"===i){if(e.events.fire(Bt._overlayCloseButtonPressed),t[0]===St._showOverlay&&"help"===t[1])return!1;if(t[0]!==St._openVimeo)return setTimeout((function(){e.events.fire.apply(null,t)}),250),!1}return e.events.fire.apply(null,t),!1}(c[n])){var r;if(t.preventDefault(),vl.includes(null==(r=t.target)?void 0:r.id))return;t.stopPropagation()}}}}e.config.embed.on_site||(c.v=St._openVimeo),n&&(c.x=Bt._likeButtonPressed),r&&(c.w=Bt._watchLaterButtonPressed),a&&(c.s=Bt._shareButtonPressed),e.config.embed.keyboard&&(document.addEventListener("keydown",u,!1),document.addEventListener("keypress",u,!1),document.addEventListener("keyup",(function(n){if("preact-menu"!==l&&(g(n),!y(n)&&f())){var i=b(n);o.spatialPlayback&&e.config.video.spatial&&ul.includes(i)?e.backbone.getEffectByName("ThreeSixtyEffect").keyUp(i):t.get(Ho)||(_l.includes(i)||pl.includes(i))&&function(t){m.cancel(),p=d,_=0;var n=t.shiftKey;e.events.fire(Bt._scrubbingEnded,n),v=!1}(n)}}),!1))}(),e.events.on(Bt._becameActive,(function(){r=!1})).on(Bt._becameInactive,(function(){r=!0})),e.config.embed.on_site&&document.querySelector(".player")===n&&(r=!1),function(){let e,t=!1;document.body.addEventListener("keyup",e=>{9!==e.which||document.body.classList.contains("showfocus")||document.body.classList.add("showfocus")}),document.body.addEventListener("keydown",n=>{32!==n.which&&13!==n.which||(t=!0,clearTimeout(e),e=setTimeout(()=>{t=!1},200))}),document.body.addEventListener("click",e=>{t||document.body.classList.remove("showfocus")})}(),e.events.on(St._destroy,()=>{r=!0}),{pause:function(){r=!0},unpause:function(){r=!1}}}function fl(e,t,n){let i=n.USD;return t in n&&(i=n[t]),-1!==e.indexOf("${price}")?e.replace("${price}",i):-1!==e.indexOf("{PRICE}")?e.replace("{PRICE}",i):e}function hl(e,t){return void 0!==e&&void 0!==e[t]?e[t]:t}var gl=Object.freeze({__proto__:null,formatVodLabel:function(e,t,n,i){var o=i[t];return o?(o=fl(o=hl(e,o),n,i.prices),i.expires_in_duration_str&&(o=o.replace("{TIME}",i.expires_in_duration_str)),i.available_on_formatted&&(o=o.replace("{DATE}",i.available_on_formatted)),o):null},getDisplayPrice:fl,isAvailableInCountry:function(e,t){return!e||0===e.length||-1!==e.indexOf(t)},translateFromRequest:hl});function bl(){}let yl=function(){function e(e,t){this._player=e,this._store=t,this._playbackBlocked=!1,this._disabled=!1,this._setupPolling()}var t=e.prototype;return t.disable=function(){this._disabled=!0},t._blockRegistrant=function(){this._player.backbone.endLive(),this._player.events.fire(Bt._webinarRegistrantBlocked),this._player.events.fire(St._showOverlay,"webinar-blocked"),this._playbackBlocked=!0},t._unblockRegistrant=function(){this._player.backbone.reactivate(),this._player.events.fire(Bt._webinarRegistrantUnblocked),this._player.events.fire(St._hideOverlay,{unmakeModal:!0}),this._playbackBlocked=!1},t._pollRegistrantStatus=function(){try{const e=this,t=e._player.config.video.webinar.id,n=e._store.get(Dr),i=`https://${e._player.config.player_url}/video/${e._player.config.video.id}/webinar/${t}/registrant/${n}/status`;return function(e){if(e&&e.then)return e.then(bl)}(function(t,n){try{var o=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(_(i,{withCredentials:!0}).json(),(function(t){t.is_blocked&&!e._playbackBlocked?e._blockRegistrant():e._playbackBlocked&&!t.is_blocked&&e._unblockRegistrant()}))}catch(ke){return n(ke)}return o&&o.then?o.then(void 0,n):o}(0,(function(e){wo.captureException(e)})))}catch(ke){return Promise.reject(ke)}},t._shouldPoll=function(){return!!(this._player.config.video.webinar&&this._player.config.video.webinar.id&&"ended"!==this._player.config.video.webinar.status&&this._store.get(Dr))},t._setupPolling=function(){this._disabled||(this._shouldPoll()&&this._pollRegistrantStatus(),setTimeout(this._setupPolling.bind(this),this._playbackBlocked?6e4:3e4))},e}(),El=function(){function e(e,{displayTimeout:t=0,label:n="Alert"}={}){E(this),this._container=e,this._visible=!1,this._message=null,this._alert=null,this._alertLabel=n;const i=Math.round(t/1e3);0!==i&&(this._alertLabel=`${n} Will be dismissed in ${i} seconds`),this._displayTimer=null,this._displayTimeout=t,this._renderTemplate(),this._attachEvents()}var t=e.prototype;return t.show=function(e,t=this._displayTimeout){!0!==this._visible&&(clearTimeout(this._displayTimer),this._alert.classList.remove("hidden"),this._alert.removeAttribute("hidden"),window.requestAnimationFrame(()=>{this._alert.classList.add("in")}),(this._alert.querySelector("[data-alert-autofocus]")||this._alert).focus(),this._visible=!0,this.fire("show",e),0!==t&&(this._displayTimer=setTimeout(()=>{this.hide("timeout")},t)))},t.hide=function(e){!1!==this._visible&&(clearTimeout(this._displayTimer),this._alert.classList.add("leaving"),window.requestAnimationFrame(()=>{const e=this;this._setHideAttributes(),Te(this._alert).on("transitionend",(function t(n){"opacity"===n.propertyName&&(e._alert.classList.remove("leaving"),e._alert.classList.add("hidden"),e._alert.setAttribute("hidden",""),Te(e._alert).off("transitionend",t))}))}),this._visible=!1,this.fire("hide",e))},t._setHideAttributes=function(){this._alert.classList.remove("in")},t._renderTemplate=function(){this._alert||(this._alert=document.createElement("div"),this._alert.classList.add("vp-alert"),this._alert.setAttribute("role","alertdialog"),this._alert.setAttribute("aria-atomic","true"),this._alert.classList.add("hidden"),this._alert.setAttribute("hidden",""),this._container.appendChild(this._alert),this._setHideAttributes()),this._message instanceof HTMLElement?(this._alert.innerHTML="",this._alert.appendChild(this._message)):(this._alert.textContent=this._message,this._alert.innerHTML=this._message);const e=document.createElement("button");e.setAttribute("data-close",""),e.setAttribute("aria-label","Close alert"),e.classList.add("close"),e.innerHTML=sa.render("icon_close"),this._alert.appendChild(e)},t._attachEvents=function(){Te(this._alert).on("click","[data-close]",e=>{this.hide(e)})},b(e,[{key:"visible",get:function(){return this._visible}},{key:"message",get:function(){return this._message},set:function(e){e instanceof HTMLElement&&this._message&&e.textContent===this._message.textContent||e!==this._message&&(this._message=e,this._renderTemplate())}}]),e}(),Cl=function(){function e(e,t,n){this.player=e,this.backbone=t,this.isBufferingTooLong=!1,this.isBufferingTooFrequent=!1,this.autoAlertWasDismissed=!1,this.bufferCount=-1,this.badPlaybackTimer=null,this._setUpAlertUI(n),this._attachEventHandlers()}var t=e.prototype;return t.handleBufferStarted=function(){this.bufferCount+=1,this._startBadPlaybackTimer()},t.handleBufferEnded=function(){clearTimeout(this.badPlaybackTimer),this.badPlaybackTimer=null,this.isBufferingTooLong=!1},t._attachEventHandlers=function(){this.player.events.on(Bt._debugPayloadCopied,()=>{this._showDebugPayloadCopied()}),this.player.events.on(wt._spatialUnsupported,e=>{this._showSpatialUnsupportedAlert(e)}),this.player.events.on(wt._spatialFailure,e=>{this._showSpatialFailureAlert(e)}),this.player.events.on(wt._bufferStarted,this.handleBufferStarted.bind(this)),this.player.events.on(g.BUFFER_ENDED,this.handleBufferEnded.bind(this)),this.player.events.on(wt._badPlayback,()=>{this.autoAlertWasDismissed||(this.showAlert("stream_studder"),wo.captureBreadcrumb("Alert shown",{message:"stream_studder"},"video"))}),this.player.events.on(Bt._qualityChanged,e=>{"auto"===e&&this.alertUI.hide("qualitymenuauto")})},t._showSpatialUnsupportedAlert=function(e){e||this.showAlert("warning_alert",{strings:{text:'See a <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">list of browsers</a> that support 360 viewing.'}})},t._showDebugPayloadCopied=function(){this.showAlert("notice",{strings:{text:"Debug Payload Copied"}},5e3)},t._showSpatialFailureAlert=function(e){e||this.showAlert("warning_alert",{strings:{text:'Looking to watch a 360 video? See <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">supported browsers and settings</a>.'}})},t.showAlert=function(e,t=null,n){this.alertUI&&!this.player.config.embed.settings.background&&(this.alertUI.message=sa.render(e,t),this.alertUI.show(null,n))},t._setUpAlertUI=function(e){this.alertUI=new El(e,{displayTimeout:1e3}),this.alertUI.on("show",e=>{this.player.events.fire(Bt._alertVisibilityChanged,!0,e)}),this.alertUI.on("hide",e=>{const t=e.target,n=t&&"function"==typeof t.getAttribute;if(n)switch(t.getAttribute("data-context")){case"suggestion":this.player.events.fire(St._changeQuality,"auto"),e="suggestion";break;default:e="close"}(n||"qualitymenuauto"===e)&&(this.autoAlertWasDismissed=!0),this.player.events.fire(Bt._alertVisibilityChanged,!1,e)})},t._startBadPlaybackTimer=function(){null===this.badPlaybackTimer&&0!==this.bufferCount&&(this.badPlaybackTimer=setTimeout(()=>{this.isBufferingTooLong=!0,this._notifyBadPlayback()},1e4))},t._notifyBadPlayback=function(){"MediaSourceScanner"===this.backbone.currentScannerName&&(this.isBufferingTooLong||this.isBufferingTooFrequent)&&(this.backbone.video.currentFile.restrictedStreamIndexes.length<=0||(this.isBufferingTooLong,this.isBufferingTooFrequent,this.player.events.fire(wt._badPlayback),this.bufferCount=0,this.badPlaybackTimer=null,this.isBufferingTooFrequent=!1,this.isBufferingTooLong=!1))},e}();function Tl(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function wl(e,t){try{var n=e()}catch(ke){return t(ke)}return n&&n.then?n.then(void 0,t):n}function Ll(){}let Sl=function(){function e(e,t){this._player=e,this._store=t,this._failedRequests=0,this._viewerCount=0,this._setUpEvents()}var t=e.prototype;return t._setUpEvents=function(){this._player.events.on(M.STREAM_ONLINE,()=>{this._getViewerCount()})},t._getViewerCount=function(){try{const e=this;if(!e._store.get(zo)||!e._player.config.video.live_event.show_viewer_count)return;const t=setTimeout(()=>{e._getViewerCount()},3e4);let n=`${e._player.config.video.id}`;"unlisted"===e._player.config.video.privacy&&(n+=`:${e._player.config.video.unlisted_hash}`);let i=`https://${e._player.config.vimeo_api_url}/videos/${n}/stats/live`,o={jwt_token:e._player.config.user.vimeo_bucketed_live_client_token};return Al(wl((function(){return Tl(e._player.updatePhpTokens(),(function(){return Al(wl((function(){return Tl(_({url:i,searchParams:o}).json(),(function(t){t.viewers?(e._failedRequests=0,e._viewerCount=t.viewers.current,e._player.events.fire(M.LIVE_STATS_SUCCESS,{viewerCount:e._viewerCount})):e._failedRequests++}))}),(function(){e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(M.LIVE_STATS_FAILURE)})))}))}),(function(n){wo.captureException(n),e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(M.LIVE_STATS_FAILURE)})))}catch(ke){return Promise.reject(ke)}},t._hideViewerCount=function(){return this._failedRequests>3},e}();function Al(e){if(e&&e.then)return e.then(Ll)}let kl=function(){function e(e){let t;t="PROD"===wr(e.config)?"https://embedder-sdk.wirewax.com/latest/wirewax-embedder-sdk@beta.umd.js":"https://embedder-sdk.wirewax.tv/latest/wirewax-embedder-sdk@beta.umd.js";const n=window.WIREWAX?Promise.resolve():Se(t);this.embedders={},this.player=e,this.playerContainer=e.element.querySelector(".vp-wirewax-wrapper"),this.wirewaxContainer=(()=>{const e=document.createElement("div");return e.classList.add("vp-wirewax-container"),e})(),this.playerContainer.appendChild(this.wirewaxContainer),this.playHandlerCalled=!1,this.playHandler=this.handlePlay.bind(this),this.pauseHandler=this.handlePause.bind(this),this.seekedHandler=this.handleSeeked.bind(this),this.endedHandler=this.handleEnded.bind(this),n.then(()=>{this.init()}).catch(e=>{})}var t=e.prototype;return t.init=function(){var e;this.setupEmbedder(this.player.config.embed.interactive_id,null==(e=this.player.config.embed)?void 0:e.interactive_params,this.player.config.embed.create_interactive)},t.setupEmbedder=function(e,t,n){try{t=JSON.parse(t)}catch(o){}const i=n.has_create_interactive?{vidDataURL:n.viddata_url}:{vidId:e,interactiveParams:t||null};return this.embedder=window.WIREWAX("vp-wirewax-container",i),this.embedder.ready().then(()=>{this.registerWIREWAX();const e=this.embedder.getInteractiveData("hotspots");this.player.events.fire(Bt._interactiveReady,{hotspots:e})}).catch(e=>{})},t.registerWIREWAX=function(){this.setWIREWAXCurrentTime=()=>{this.embedder.setCurrentTime(this.player.backbone.currentTime),this.animationId=window.requestAnimationFrame(this.setWIREWAXCurrentTime)},this.player.events.on(h.PLAY,this.playHandler),this.player.events.on(h.PAUSE,this.pauseHandler),this.player.events.on(h.SEEKED,this.seekedHandler),this.player.events.on(h.ENDED,this.endedHandler),this.player.events.once(h.TIME_UPDATE,()=>{this.playHandlerCalled||this.playHandler()}),this.player.config.embed.autoplay&&(this.startTimeUpdate(),this.embedder.play()),this.addWIREWAXListeners(),this.embedders[this.player.backbone.element.id]=this.embedder},t.addWIREWAXListeners=function(){this.embedder.on("play",()=>{this.player.backbone.play()}),this.embedder.on("pause",()=>{this.player.backbone.pause()}),this.embedder.on("seeked",({seekTo:e,seekType:t})=>{this.player.events.fire(Bt._interactiveSeekCall,{type:t}),this.player.backbone.currentTime=e}),this.embedder.on("hotspotClick",this.handleHotspotClick.bind(this)),this.embedder.on("overlayPanelClick",this.handleOverlayPanelClick.bind(this)),this.embedder.on("toggleOverlay",this.handleToggleOverlay.bind(this))},t.destroyWirewax=function(){this.stopTimeUpdate(),this.embedder.destroy(),this.embedders[this.player.backbone.element.id]={},this.playerContainer.removeChild(this.wirewaxContainer),this.playHandlerCalled=!1,this.player.events.off(h.PLAY,this.playHandler),this.player.events.off(h.PAUSE,this.pauseHandler),this.player.events.off(h.SEEKED,this.seekedHandler),this.player.events.off(h.ENDED,this.endedHandler)},t.resetWirewax=function(){var e;this.destroyWirewax(),this.playerContainer.appendChild(this.wirewaxContainer),this.setupEmbedder(this.player.config.embed.interactive_id,null==(e=this.player.config.embed)?void 0:e.interactive_params,this.player.config.embed.create_interactive)},t.handlePlay=function(){this.startTimeUpdate(),this.embedder.play(),this.playHandlerCalled=!0},t.handlePause=function(){this.stopTimeUpdate(),this.embedder.pause()},t.handleSeeked=function(e){const{currentTime:t}=e;this.embedder.setCurrentTime(t)},t.handleEnded=function(){this.embedder.setEnded(!0),this.embedder.setCurrentTime(this.player.backbone.duration)},t.startTimeUpdate=function(){window.cancelAnimationFrame(this.animationId),this.animationId=window.requestAnimationFrame(this.setWIREWAXCurrentTime)},t.stopTimeUpdate=function(){window.cancelAnimationFrame(this.animationId)},t.handleHotspotClick=function(e){this.player.events.fire(Bt._interactiveHotspotClicked,e)},t.handleOverlayPanelClick=function(e){this.player.events.fire(Bt._interactiveOverlayPanelClicked,e)},t.handleToggleOverlay=function(e){e.overlayOnDisplay?(this.player.events.fire(Bt._overlayOpened,"interactive"),this.wirewaxContainer.classList.add("vp-interactive-overlay-open")):(this.player.events.fire(Bt._overlayClosed,"interactive"),this.wirewaxContainer.classList.remove("vp-interactive-overlay-open"))},e}();let Pl,Il,Ol;!function(e){e.PQ="PQ",e.DV5="DV5",e.DV81="DV81",e.DV82="DV82",e.DV84="DV84",e.HDR10="HDR10",e.HDR10_PLUS="HDR10_PLUS",e.HLG="HLG"}(Pl||(Pl={})),function(e){e.FREE="free",e.BASIC="basic",e.STARTER="starter",e.STANDARD="standard",e.ADVANCED="advanced",e.BUSINESS="business",e.PLUS="plus",e.PLUS_LAPSED="plus_lapsed",e.PRO="pro",e.PRO_LAPSED="pro_lapsed",e.PRO_EXPIRED="pro_expired",e.PRODUCER="producer",e.PRODUCER_LAPSED="producer_lapsed",e.LIVE_PRO="live_pro",e.LIVE_BUSINESS="live_business",e.LIVE_BUSINESS_LAPSED="live_business_lapsed",e.LIVE_PREMIUM="live_premium",e.LIVE_PREMIUM_LAPSED="live_premium_lapsed",e.ENTERPRISE="enterprise",e.ENTERPRISE_LAPSED="enterprise_lapsed",e.CUSTOM="custom",e.GUEST="none"}(Il||(Il={})),function(e){e.STREAMROOT="streamroot",e.KOLLECTIVE="kollective",e.HIVE="hive"}(Ol||(Ol={}));const Rl={[Ol.STREAMROOT]:"Lumen",[Ol.KOLLECTIVE]:"Kollective",[Ol.HIVE]:"Hive"};function Nl({config:e,debugCollector:t,currentTime:n,backbone:i}){var r,a,s,l,c;const d=e.request.session,u=t.getCurrent(Pi.FIELD_VIDEO_DIMS),p=t.getCurrent(Pi.FIELD_TOTAL_FRAMES)||0,_=t.getCurrent(Pi.FIELD_DROPPED_FRAMES)||0,v=t.getCurrent(Pi.FIELD_FILES),m=t.getCurrent(Pi.FIELD_STREAMS),f=t.getCurrent(Pi.FIELD_SCANNERS),h=t.getCurrent(Pi.FIELD_BANDWIDTH),g=f===Ri.HLS_LIVE_SCANNER,b=f===Ri.MEDIA_SOURCE_SCANNER,y=Ae(n,i.buffered),E=n+y,C=function(e){if(!e)return null;const t=e.length;let n=0,i=[];for(;n<t;n++){const t=e.start(n),o=e.end(n);i.push({i:n,start:t,end:o})}return i}(i.buffered),T=e.embed.dnt||e.request.flags.dnt,w={isLive:g,isDash:b,embedSize:u,sessionId:d,testGroup:Object.keys(e.request.ab_tests).map(t=>{var n;return`${t}: ${null==(n=e.request.ab_tests[t])?void 0:n.group}`}).join(", "),isDNTEnabled:T,totalFrames:p,droppedFrames:_,ua:null==(r=navigator)?void 0:r.userAgent,clipId:e.video.id,readyState:i.readyState,support:JSON.stringify(o),bufferEnd:mt(E,3),bufferAhead:mt(y,3),currentTime:mt(n,3),clientIp:null==(a=e.request)||null==(s=a.client)?void 0:s.ip,playerVersion:Tr(e),bufferedRanges:JSON.stringify(C),brainDebug:JSON.stringify(i.brainDebug),codec:m?m.codec:null,hideCloseButton:!!e.embed.settings.background,isCopyDisabled:!!T,vrHeadsetName:t.getCurrent(Pi.FIELD_VR_HEADSET),droppedFramesPercent:0!==p?`${(_/p*100).toFixed(2)}%`:0,resolution:m?`${m.width}×${m.height}@${Math.round(m.framerate)} ${Math.round(m.bitrate/1e3).toLocaleString()} Kbps ${m.audioBitrate?` / ${Math.round(m.audioBitrate/1e3).toLocaleString()} Kbps`:""}`:null,payloadId:`${e.video.owner.id}_${e.video.id}_${e.request.session}_${Math.floor(Date.now()/1e3)}`,bandwidthKbps:h?`${Math.floor(h.value/1e3).toLocaleString()} Kbps`:0,bandwidthMinKbps:`${Math.floor(t.getCurrent(Pi.FIELD_MIN_BANDWIDTH)/1e3).toLocaleString()} Kbps`,bandwidthMaxKbps:`${Math.floor(t.getCurrent(Pi.FIELD_MAX_BANDWIDTH)/1e3).toLocaleString()} Kbps`,separateAudioVideo:!(null==(l=e.request.files)||!l.dash||!e.request.files.dash.separate_av)};(null==m?void 0:m.audioChannels)&&(w.resolution+=m.ambisonicConnected&&m.ambisonicOrder?` ambisonic ${m.ambisonicOrder} (${m.audioChannels}ch)`:` ${m.audioChannels}ch`),v&&(w.delivery=v.mime),e.request.drm&&Object.assign(w,{drmEnabled:!0,drmFastly:!!e.request.drm.fastly});const L=null==(c=e.video.ecdn)?void 0:c.ecdn_provider;if(L){const{ecdnBytesByCdn:e,ecdnBytesPeered:t,ecdnPeers:n}=ho(L),i={p2pSources:n.toString(),p2pOffload:`${Ml(t,e)}%`,ecdnVendor:Rl[L]};Object.assign(w,i)}return g&&Object.assign(w,function(e,t){var n;const i=(null==(n=e.video.live_event)?void 0:n.id)||null;let o="";try{o=`${t.getCurrent(Pi.FIELD_LIVE_LATENCY).toFixed(2)} seconds`}catch(ke){}return{liveLatency:o,liveSessionID:i}}(e,t)),b||g?Object.assign(w,{bandwidthSeriesData:Dl(t)}):Object.assign(w,{bandwidthSeriesData:{max:1,debugMarkers:[],timeSeries:[]}}),w}function Ml(e,t){return 0===e&&0===t?0:mt(e/(t+e)*100,1)}function Dl(e){const t=e.getSeries(Pi.FIELD_BANDWIDTH),n=e.getCurrent(Pi.FIELD_MAX_BANDWIDTH);return{debugMarkers:e.getSeries(Pi.FIELD_MARKERS),timeSeries:t,max:n}}let xl=function(){function e(e=((e,t)=>e<t)){this._data={},this._sortedKeys=[],this._sort=e}var t=e.prototype;return t._insert=function(e){var t=this._sortedKeys.length;if(0===t)this._sortedKeys.push(e);else{for(var n=0;n<t;n++)if(this._sort(e,this._sortedKeys[n])){this._sortedKeys[n-1]!==e&&this._sortedKeys.splice(n,0,e);break}n===t&&this._sortedKeys[n-1]!==e&&this._sortedKeys.splice(n,0,e)}},t._binarySearch=function(e,t,n,i){if(i<n)return-1;let o=parseInt(n+(i-n)/2,10);return e[o]>t?this._binarySearch(e,t,n,o-1):e[o]<t?this._binarySearch(e,t,o+1,i):o},t.delete=function(e){const t=this._binarySearch(this._sortedKeys,e,0,this._sortedKeys.length);if(-1===t)throw new Error("key does not exist");this._sortedKeys.splice(t,1),delete this._data[e]},t.set=function(e,t){return this._data[e]=t,this._insert(e),this},t.get=function(e){return this._data[e]},t.keys=function(){return this._sortedKeys.slice()},t.values=function(){return this.keys().map(e=>this._data[e])},t.forEach=function(e){const t=this._sortedKeys.length;for(let n=0;n<t&&!1!==e(this._data[this._sortedKeys[n]],this._sortedKeys[n],this);n++);},b(e,[{key:"size",get:function(){return this._sortedKeys.length}}]),e}();const Bl=e=>{var t,n;const i=new xl;return(null==(t=e.embed)||null==(n=t.cards)?void 0:n.length)&&e.embed.cards.forEach(e=>{const t=e.url?l(l({},e),{},{url:bi(e.url)}):e;i.set(e.timecode,Bo(t))}),i},Vl=e=>{const{events:t,set:n}=e,i=function(e){return{cardsMap:Bl(e.config),activeCard:null,hoveredCard:null,displayedCard:null,cardPressed:void 0}}(e),o=e=>{const{hoveredCard:t,activeCard:n}=e,i=null!==t?t:n;return{cards:l(l({},e),{},{displayedCard:i})}},r=e=>{e&&t.fire(Bt._cardDisplayed,e.id,e)},a=e=>e.timecode;return t.on(Bt._configChanged,(e,t)=>{n(e=>{const n=l(l({},e.cards),{},{cardsMap:Bl(t),activeCard:null,hoveredCard:null});return o(n)})}),t.on(St._addCard,e=>{n(t=>{let{cardsMap:n}=t.cards;n.set(e.timecode,e),r(e);const i=l(l({},t.cards),{},{cardsMap:n,activeCard:e.timecode});return o(i)})}),t.on(St._removeCard,e=>{n(t=>{let{cardsMap:n}=t.cards;n.delete(e.timecode);const i=l(l({},t.cards),{},{cardsMap:n,activeCard:null,hoveredCard:null});return o(i)})}),t.on(h.TIME_UPDATE,({currentTime:e})=>{n(t=>{const n=((e,t)=>{const{cardsMap:n}=e.cards;let i=n.values().filter(e=>((e,t)=>t>=a(e)&&t<(e=>a(e)+(e.displayTime||6))(e))(e,t)).slice(-1)[0];return(null==i?void 0:i.timecode)||null})(t,e),i=t.cards.cardsMap.get(n);if(n===t.cards.activeCard)return{};const s=l(l({},t.cards),{},{activeCard:n});return r(i),o(s)})}),t.on(Bt._ended,()=>{n(e=>{const t=l(l({},e.cards),{},{activeCard:null,hoveredCard:null});return o(t)})}),{cards:i,setCards:(e,i)=>{"cardPressed"!==e?((e,t)=>{n(n=>{const i=l(l({},n.cards),{},{[e]:t});return o(i)})})(e,i):t.fire(Bt._cardPressed,i)}}};function Ul({config:e}){var t,n,i,r;const{title:a}=e.video,{title:s,portrait:c}=e.embed.settings,d=0===e.embed.on_site,u=e.embed.settings.spatial_label,p=!(!e.video.spatial||!u),_=e.request.file_codecs||e.video.file_codecs,v=!z(_),m=e.request.hdr_formats||[],f=v&&(null==(t=_.hevc)||null==(n=t.hdr)?void 0:n.length)>0,h=m.includes(Pl.HDR10_PLUS),g=m.includes(Pl.DV84)||v&&(null==(i=_.hevc)||null==(r=i.dvh1)?void 0:r.length)>0,b=e.video.channel_layout||"stereo",y=e.video.owner[o.devicePixelRatio>1?"img_2x":"img"],E=e.video.owner.name,C=Xi("video-portrait",e),T=Xi("video-title",e),w=Xi("video-byline",e),L=function(e){let t={displayByline:!1,displayBadge:!1};if(e.embed.settings.byline){const{type:n,url:i}=e.embed.settings.byline_badge||{};Object.assign(t,{displayByline:!0,displayBadge:!e.video.live_event,bylineBadgeType:n,bylineBadgeUrl:i})}return t}(e);return l({ownerLinkUrl:C,titleLinkUrl:T,bylineLinkUrl:w,displayTitle:!!s,displayPortrait:!!c,ownerName:E,targetBlank:d,portraitImg:y,title:a,is360:p,hasHDR:f,hasHDR10Plus:h,hasDolbyVision:g,channelLayout:b},L)}const Fl=e=>`opacity ${e}ms ease-out`,Hl=({children:e,visible:t,duration:n=250,styleOverrides:i={},onFaded:o})=>{const r=Fl(n),a={enter:{opacity:0},enterActive:{opacity:1,transition:r},exit:{opacity:1},exitActive:{opacity:0,transition:r},exitDone:{display:"none"}};return Object.keys(i).forEach(e=>{e in a&&Object.assign(a[e],i[e])}),ke(Pe,{in:t,duration:n,styles:a,alwaysMounted:!0,onExited:()=>{o&&o()},children:e})};let ql;function Wl(e){var t;const{request:n,video:i}=e.config,o=Xi("vimeo-logo",e.config);return{overrideBehavior:!1,trailerButtonText:null==(t=i.vod)?void 0:t.button_text,vimeoLogoUrl:o,thumbnailPreview:n.thumb_preview}}const $l=({config:e,element:t})=>{var n;const{embed:i}=e;return!(t.classList.contains("player-tiny")||Mn(t)||e.view&&!ln(e.view)||null!=(n=e.embed)&&n.autoplay||!Bn(i))},Yl=e=>{var t;const{view:n,video:i,embed:r,request:a}=e.config,{vod:s}=i,l=n!==Ft.main&&n!==Ft.privateUnlocked&&n!==Ft.webinarUnlocked,c=!!r.settings.instant_sidedock,d=(null==(t=e.store)?void 0:t.get("ui.player.mode"))===Ai.TINY,u=s&&"purchase_options"in s&&!!s.purchase_options.length,p=s&&sn(s.countries,a.country);return!Mn(e.element)&&!d&&!!Bn(r)&&(o.touch||l||c||u&&p)},Gl=e=>{var t;const{view:n,embed:i,request:o}=e.config;return!(Mn(e.element)||n&&!ln(n)||i.autoplay&&(null==(t=o.flags)?void 0:t.autohide_controls)||!Bn(i))};function zl({element:e}){return{purpose:Dn(e)}}const jl={},Kl=({element:e,config:t})=>{if(e.classList.contains("player-mini")||e.classList.contains("player-tiny"))return!1;const{embed:n}=t;return!(!n.settings.badge||n.autoplay&&16!==n.settings.badge.id)},Xl=({config:e,element:t})=>{var n;return!Mn(t)&&!(e.view&&!ln(e.view))&&(null==(n=e.embed)||!n.background)&&ai(e)},Zl=e=>e.replace(/<\/?[\w\s]*>|<.+[\W]>/g,""),Jl=(e,t=20,n=20,i=10)=>{if(0===e.length)return[];let o,r,a,s,c;return d(e[0]),e.reduce((function(a,s,l,c){var p;const{text:_,endTime:v}=s,m=function(e,t){return e+1===t.length}(l,c);if(r+=`${_} `,m)return u(v,a);const f=_.split(" "),h=function(e){return function(e){return[".","?","!"].some(t=>e.trim().endsWith(t))}(e[e.length-1])}(f);o+=f.length;const g=o>=n,b=o>=t&&h,y=function(e,t,n){return t-e>n}(s.endTime,null==(p=c[l+1])?void 0:p.startTime,i);return(g||b||y)&&(a=u(v,a),d(e[l+1])),a}),[]).map((e,t)=>l(l({},e),{},{originalIndex:t}));function d(e){e&&(o=0,r="",a=e.startTime,s=e.originalIndex,c=e.startTimeDisplay)}function u(e,t){return t.concat({originalIndex:s,text:r.trim(),startTime:a,startTimeDisplay:c,endTime:e})}},Ql=e=>e.map((e,t)=>({startTime:e.startTime,endTime:e.endTime,startTimeDisplay:"",text:Zl(e.text),originalIndex:t})),ec=(e,t)=>{let n;return n=t?e.reduce((e,n)=>(n.startTime>=t.startTime&&n.endTime<=t.endTime&&e.push(l(l({},n),{},{startTimeDisplay:Wn(mn(n.startTime,t))})),e),[]):(e=>e.map(e=>l(l({},e),{},{startTimeDisplay:Wn(e.startTime)})))(e),n},tc=e=>e?e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""):"",nc=(e,t)=>{const{lang:n,cookie:i}=e.request,{captions:o,transcript:r}=i,[a]=(r||"").split("."),[s]=(o||"").split(".");return r&&t.find(e=>e.language.includes(a))||s&&t.find(e=>e.language.includes(s))||n&&t.find(e=>n.includes(e.language))||t.find(e=>e.language.includes("en"))||t[0]},ic=e=>e.map((e,t,n)=>{const i=n[t+1];return i&&i.startTime<e.endTime?l(l({},e),{},{endTime:i.startTime}):e}),oc=(e,t)=>e.findIndex(e=>e.startTime<=t&&e.endTime>t),rc=(e,t)=>!!e.find(e=>e.index===t),ac=()=>o.isGoogleBot,sc=[In.EMPTY,In.HELP,In.SHARE,In.INTERACTIVE],lc=({element:e,config:t})=>{const{embed:n}=t;return!!n.settings.playbar&&!!Bn(n)&&!e.classList.contains("player-tiny")},cc=()=>{const e=ac();return o.isGoogleBot&&e},dc=e=>{const{set:t}=e;return{displayList:function(e){const t=Yl(e),n=$l(e),i=(e=>zl(e).purpose!==In.EMPTY)(e),o=(({store:e,config:t,events:n,set:i})=>{var o,r;return n.on(Bt._configChanged,(e,t)=>{i(e=>{var n,i;return{displayList:l(l({},e.displayList),{},{cards:!!(null==(n=t.embed)||null==(i=n.cards)?void 0:i.length)&&!e.appearance.isMenuBlockingUI})}})}),!!(null==(o=t.embed)||null==(r=o.cards)?void 0:r.length)&&!e.get("ui.controlbar.isMenuFullWidth")})(e),r=Kl(e),a=Gl(e),s=Xl(e),c=lc(e),d=cc(),u=ac();return(({set:e,events:t})=>{const n=t=>{e(e=>({displayList:l(l({},e.displayList),{},{outro:t})}))};t.on(Bt._outroDisplayed,()=>n(!0)),t.on([Bt._outroHidden,h.PLAY,h.SEEKED,Bt._scrubbingStarted,St._reset],()=>n(!1))})(e),(({store:e,config:t,set:n})=>{e.watch("ui.controlbar.isMenuFullWidth",e=>{n(n=>{var i,o;return{displayList:l(l({},n.displayList),{},{cards:!!(null==(i=t.embed)||null==(o=i.cards)?void 0:o.length)&&!e})}})})})(e),(({set:e,events:t,store:n})=>{n.watch("ui.player.mode",t=>{t===Ai.TINY&&e(e=>({displayList:l(l({},e.displayList),{},{debugPanel:!1})}))}),t.on(Bt._debugButtonPressed,()=>{e(e=>n.get("ui.player.mode")===Ai.TINY?{}:{displayList:l(l({},e.displayList),{},{debugPanel:!e.displayList.debugPanel})})})})(e),(({set:e,get:t,store:n,subscribe:i,events:o})=>{function r(n={}){t().displayList.sideDock&&e(e=>{const{playback:t,displayList:i,appearance:r,embed:a,cards:s}=e,{overlay:c,alert:d,menu:p,toast:_}=i,{playInitiated:v,targetTimeReached:m}=t,{forceExitedFullscreen:f}=r,h=an(r,n,"mousedOverSidedock"),g=c||d||p&&r.isMenuBlockingUI||!!s.displayedCard||_&&u();return f?{}:v&&m||g||a.autoHideControls?h?{}:!r.externalDisplay&&!r.pictureInPictureActive||g?(o.fire(Bt._sidedockVisibilityChanged,!1),{appearance:l(l({},e.appearance),{},{mousedOverSidedock:h}),displayList:l(l({},e.displayList),{},{sideDock:!1})}):{}:{}})}function a(i={}){t().displayList.sideDock||e(e=>{const{displayList:t,appearance:r,embed:a,cards:s}=e,{menu:c,overlay:d,alert:p,toast:_}=t,v=d||p||c&&r.isMenuBlockingUI||!!s.displayedCard||_&&u();return Bn(a)?v||n.get("ui.player.mode")===Ai.TINY?{}:(o.fire(Bt._sidedockVisibilityChanged,!0),{appearance:l(l({},e.appearance),{},{shouldRestoreSidedock:!1,mousedOverSidedock:an(e.appearance,i,"mousedOverSidedock")}),displayList:l(l({},e.displayList),{},{sideDock:!0})}):{}})}function s(){return r({mousedOverSidedock:!1})}function c(e,t){e&&t&&s()}function d(e,t){!e&&t&&a()}function u(){return[zn.XXS,zn.XS].includes(t().appearance.playerBreakpoint)}o.on([Bt._mousedOut,Bt._mouseTimeout,Bt._nudgeAttempted],r),o.on([Bt._mousedOver,Bt._airPlayActivated,h.ENTER_PICTURE_IN_PICTURE],a),o.on(Bt._configChanged,(function(t,n){const i=Yl({config:n});e(e=>({displayList:l(l({},e.displayList),{},{sideDock:i})}))})),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.targetTimeReached},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>!e&&s()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.alert},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>e?c(e,t().appearance.isMenuBlockingUI):d(e,t().appearance.isMenuBlockingUI)),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.isMenuBlockingUI},e=>e?c(t().displayList.menu,e):d(t().displayList.menu,e)),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>e?s():a()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},n=>{n?e(e=>({displayList:l(l({},e.displayList),{},{sideDock:!1})})):t().displayList.sideDock||a()}),i(e=>{var t;return null==e||null==(t=e.cards)?void 0:t.displayedCard},e=>e&&s()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.toast},e=>e&&u()&&s()),n.watch("ui.player.mode",n=>{n===Ai.TINY&&t().displayList.sideDock?e(e=>({displayList:l(l({},e.displayList),{},{sideDock:!1}),appearance:l(l({},e.appearance),{},{shouldRestoreSidedock:!0})})):t().appearance.shouldRestoreSidedock&&a()})})(e),(e=>{const{set:t,get:n,subscribe:i,events:o,config:r,element:a}=e;function s(){t(e=>{const{displayList:t,appearance:n,playback:i,embed:o}=e,{menu:a,overlay:s,outro:c,toast:d}=t,{isMenuBlockingUI:u,externalDisplay:p}=n,{scrubbing:_,paused:v}=i,m=s||c||a&&u||d,{embed:f}=r;return Bn(o)?n.playerSizeMode===Ai.TINY?{}:f.settings.title?m?{}:p?{displayList:l(l({},e.displayList),{},{title:!0})}:!v||_?{}:{displayList:l(l({},e.displayList),{},{title:!0})}:{}:{}})}function c(){t(e=>{const{displayList:t,appearance:n,playback:i}=e,{menu:o,overlay:r,outro:a,toast:s}=t,{isMenuBlockingUI:c,externalDisplay:d}=n,{playInitiated:u}=i,p=r||a||o&&c||s;return n.playerSizeMode===Ai.TINY||p?{displayList:l(l({},e.displayList),{},{title:!1})}:d||!u?{}:{displayList:l(l({},e.displayList),{},{title:!1})}})}function d(e,t){e&&t&&c()}function u(e,t){!e&&t&&s()}i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>e&&c()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{e?s():c()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>{e?c():s()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.externalDisplay},e=>{e?s():c()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},e=>{e?c():s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{!e&&s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>e?d(e,n().appearance.isMenuBlockingUI):u(e,n().appearance.isMenuBlockingUI)),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.isMenuBlockingUI},e=>e?d(n().displayList.menu,e):u(n().displayList.menu,e)),i(e=>{var t;return null==e||null==(t=e.overlay)?void 0:t.purpose},e=>{[In.NOT_SUPPORTED,In.HELP,In.EMPTY].includes(e)||c()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.playerSizeMode},e=>{e===Ai.TINY?c():s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.toast},e=>e?c():s()),o.on(Bt._ended,c).on(St._reset,s).on(Bt._configChanged,(e,n)=>{t(e=>({displayList:l(l({},e.displayList),{},{title:$l({config:n,element:a})})}))})})(e),(({set:e,subscribe:t})=>{t(e=>{var t;return null==e||null==(t=e.overlay)?void 0:t.purpose},t=>(t=>{e(e=>({displayList:l(l({},e.displayList),{},{overlay:t})}))})(t!==In.EMPTY))})(e),(({set:e,events:t})=>{t.on(Bt._alertVisibilityChanged,t=>{e(e=>({displayList:l(l({},e.displayList),{},{alert:t})}))})})(e),(({events:e,subscribe:t,set:n,get:i})=>{function o(){n(e=>{const{menu:t}=e.displayList;return t?{displayList:l(l({},e.displayList),{},{menu:!1})}:jl})}e.on(St._reset,o),t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},t=>{const n=t?"preact-menu":"";e.fire(Bt._menuVisibilityChanged,n)}),t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>{var t,n,r,a;return e&&((null==(t=i())?void 0:t.appearance.appBreakpoint)===zn.XS||(null==(n=i())?void 0:n.appearance.appBreakpoint)===zn.XXS||(null==(r=i())?void 0:r.appearance.appSizeMode)===Ai.MINI||(null==(a=i())?void 0:a.appearance.appSizeMode)===Ai.TINY)&&o()}),t(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.appBreakpoint},e=>{var t;return(null==(t=i())?void 0:t.displayList.transcript)&&(e===zn.XS||e===zn.XXS)&&o()}),t(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.appSizeMode},e=>{var t;return(null==(t=i())?void 0:t.displayList.transcript)&&(e===Ai.MINI||e===Ai.TINY)&&o()})})(e),(({set:e,events:t})=>{const n=t=>e(e=>({displayList:l(l({},e.displayList),{},{ad:t})}));t.on(Bt._pausedForAd,()=>n(!0)),t.on([Bt._resumedAfterAd,St._reset],()=>n(!1))})(e),(({set:e,get:t,config:n,events:i,subscribe:o,store:r,element:a})=>{let s=n;const c=(t={})=>{var n,i,o;(16!==(null==(n=s.embed)||null==(i=n.settings)||null==(o=i.badge)?void 0:o.id)||t.isStockBadgeBehavior)&&e(e=>({displayList:l(l({},e.displayList),{},{badge:!1})}))},d=(t={})=>{var n,i,o;(16!==(null==(n=s.embed)||null==(i=n.settings)||null==(o=i.badge)?void 0:o.id)||t.isStockBadgeBehavior)&&e(e=>{const{appearance:t}=e;return[Ai.MINI,Ai.TINY].includes(t.playerSizeMode)?{}:s.embed.settings.badge?{displayList:l(l({},e.displayList),{},{badge:!0}),appearance:l(l({},e.appearance),{},{shouldRestoreBadge:!1})}:{}})};function u(t){e(e=>({displayList:l(l({},e.displayList),{},{badge:Kl({config:t,element:a})})}))}i.on(Bt._controlBarVisibilityChanged,e=>{var t,n,i;16===(null==(t=s.embed)||null==(n=t.settings)||null==(i=n.badge)?void 0:i.id)&&(e?d({isStockBadgeBehavior:!0}):c({isStockBadgeBehavior:!0}))}),i.on(Bt._ended,c),i.on(Bt._configChanged,(e,t)=>{s=t,u(t)}),i.on(St._reset,()=>{u(s)}),r.watch("ui.player.mode",n=>{n!==Ai.TINY&&n!==Ai.MINI||!t().displayList.badge?t().appearance.shouldRestoreBadge&&d():e(e=>({displayList:l(l({},e.displayList),{},{badge:!1}),appearance:l(l({},e.appearance),{},{shouldRestoreBadge:!0})}))}),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>!e&&c()),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>e&&c()),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{(function(e){return[In.NOT_SUPPORTED,In.HELP,null].includes(e)})(e)||c(),e||t().playback.playInitiated||d()})})(e),(({set:e,events:t})=>{const n=t=>e(e=>({displayList:l(l({},e.displayList),{},{notification:t})}));t.on([Bt._liked,Bt._unliked,Bt._addedToWatchLater,Bt._removedFromWatchLater],e=>{e||n(!0)}),t.on([Bt._notificationHidden,St._reset],()=>n(!1))})(e),(({set:e,events:t})=>{const n=t=>{e(e=>({displayList:l(l({},e.displayList),{},{pipOverlay:t})}))};t.on(h.ENTER_PICTURE_IN_PICTURE,()=>n(!0)),t.on(h.LEAVE_PICTURE_IN_PICTURE,()=>n(!1))})(e),(({set:e,events:t,config:n,subscribe:i,element:o})=>{function r(n={}){e(e=>{const{controlBar:i,embed:o,playback:r,displayList:a,appearance:s}=e,c=an(s,n,"mousedOverControlBar"),d={appearance:l(l({},e.appearance),{},{mousedOverControlBar:c})};return i.overrideBehavior||s.forceExitedFullscreen?d:r.playInitiated&&r.targetTimeReached||a.overlay||o.autoHideControls||a.ad?c?d:!s.externalDisplay&&!s.pictureInPictureActive||a.overlay?r.buffering||r.scrubbing?d:(t.fire(Bt._controlBarVisibilityChanged,!1),l(l({},d),{},{displayList:l(l({},e.displayList),{},{controlBar:!1})})):d:d})}function a(){e(e=>{const{displayList:n,controlBar:i,embed:o}=e;return Bn(o)?i.overrideBehavior||n.overlay?{}:(t.fire(Bt._controlBarVisibilityChanged,!0),{displayList:l(l({},e.displayList),{},{controlBar:!0})}):{}})}function s(){return r({mousedOverControlBar:!1})}function c(t){const n=Gl({config:t,element:o});e(e=>({displayList:l(l({},e.displayList),{},{controlBar:n})}))}t.on([Bt._mousedOver,Bt._scrubbingStarted,St._changeVolume,St._reset],a),t.on(Bt._mousedOut,s),t.on(Bt._mouseTimeout,r),t.on(Bt._configChanged,(function(e,t){c(t)})),t.on([M.STREAM_ONLINE,M.STREAM_OFFLINE,M.EVENT_ENDED],(function(){c(n)})),t.on(St._setControlsVisibility,(function(t){e(e=>e.controlBar.overrideBehavior?{displayList:l(l({},e.displayList),{},{controlBar:t})}:{})})),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.externalDisplay},e=>e&&a()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.targetTimeReached},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>{e?s():a()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{e?r():a()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>{e&&a()})})(e),(e=>{const{set:t,subscribe:n,events:i}=e;function o(){t(e=>{const{playback:t,displayList:n,appearance:i}=e,{targetTimeReached:o,paused:r}=t,{menu:a,overlay:s,outro:c,controlBar:d}=n,{isMenuBlockingUI:u}=i;return s||c||a&&u?{displayList:l(l({},e.displayList),{},{banner:!1})}:!o||r&&d?{}:{displayList:l(l({},e.displayList),{},{banner:!1})}})}function r(){t(e=>{const{displayList:t,appearance:n,playback:i,config:o}=e,{scrubbing:r,paused:a}=i,{menu:s,overlay:c,outro:d}=t,{isMenuBlockingUI:u}=n,p=c||d||s&&u;return ai(o)?p||!a||r?{}:{displayList:l(l({},e.displayList),{},{banner:!0})}:{}})}n(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{e?r():o()}),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.controlBar},e=>{e?r():o()}),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},e=>{e?o():r()}),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{e?o():r()}),i.on(Bt._ended,o).on(St._reset,r).on(Bt._configChanged,n=>{t(t=>({displayList:l(l({},t.displayList),{},{banner:Xl(l(l({},e),{},{config:n}))})}))})})(e),(({events:e,subscribe:t,set:n,config:i})=>{const o=e=>{Bn(i.embed)&&n(t=>({displayList:l(l({},t.displayList),{},{unmuteButton:e})}))};e.once(Bt._muteAutoplayed,()=>o(!0)),t(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.volume},e=>{e>0&&o(!1)}),t(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.muted},e=>{e||o(!1)}),t(e=>{var t;return null==e||null==(t=e.liveEvent)?void 0:t.isEnded},e=>{e&&o(!1)})})(e),(e=>{const{get:t,set:n,events:i,subscribe:o,config:r}=e;function a(){n(e=>{const{transcript:t}=e.displayList;return t?s(e,!1):jl})}function s(e,t){return{displayList:l(l({},e.displayList),{},{transcript:t})}}i.on(Bt._configChanged,()=>{n(e=>s(e,ac()))}),i.on(Bt._transcriptKeyPressed,(function(){var e,i,o,a,s;const c=null==(e=t())||null==(i=e.overlay)?void 0:i.purpose,d=null==(o=t().displayList)?void 0:o.transcript,u=null==(a=t())||null==(s=a.displayList)?void 0:s.outro,p=!!d||!u&&sc.includes(c);t().embed.transcript&&p&&(n(e=>l(l({},e),{},{displayList:l(l({},e.displayList),{},{transcript:!e.displayList.transcript})})),Pa(ha.EMBEDDED_TRANSCRIPT_CLICK,r,{name:d?"exit_embed_transcript":"open_embed_transcript",copy:null,location:"keyboard_shortcut",element:"",current_transcript_language:""}))})),i.on(Bt._rightContentAreaDisabled,a),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},e=>e&&a()),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>e&&a()),o(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.stereoscopicEnabled},e=>e&&a()),o(e=>{var t,n;return(null==e||null==(t=e.displayList)?void 0:t.overlay)&&!sc.includes(null==e||null==(n=e.overlay)?void 0:n.purpose)},e=>e&&a()),o(e=>null==e?void 0:e.displayList.transcript,e=>{var n,o;const a=null==(n=t())||null==(o=n.captions)?void 0:o.textTrackEls;e&&(({config:e,events:t},n)=>{var i;const o=n.map(e=>({id:e.id,label:e.label,language:e.srclang})),r=(null==(i=nc(e,o))?void 0:i.language)||"";t.fire(Bt._transcriptSessionStarted,{id:ft(),startTime:Date.now(),defaultLanguage:r})})({config:r,events:i},a)})})(e),(e=>{const{set:t,subscribe:n,events:i}=e;function o(){t(e=>({displayList:l(l({},e.displayList),{},{progressBar:!1})}))}function r(){t(e=>{const{appearance:t,displayList:n,embed:i}=e;return i.playbar?n.ad||t.playerSizeMode===Ai.TINY?{}:{displayList:l(l({},e.displayList),{},{progressBar:!0})}:{}})}n(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.playerSizeMode},e=>{e===Ai.TINY?o():r()}),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>{e?o():r()}),i.on(Bt._configChanged,(n,i)=>{t(t=>({displayList:l(l({},t.displayList),{},{progressBar:lc(l(l({},e),{},{config:i}))})}))})})(e),(e=>{const{subscribe:t,set:n,get:i,events:o}=e;let r;function a(){clearTimeout(r),r=setTimeout((function(){n(e=>({appearance:l(l({},e.appearance),{},{rightContentAreaAnimating:!1})}))}),400)}t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>{var t,r;const s=null==(t=i())||null==(r=t.displayList)?void 0:r.rightContentArea;e&&!s?(o.fire(Bt._rightContentAreaVisibilityChange,!0),n(e=>({displayList:l(l({},e.displayList),{},{rightContentArea:!0}),appearance:l(l({},e.appearance),{},{rightContentAreaAnimating:!0})})),a()):!e&&s&&(o.fire(Bt._rightContentAreaVisibilityChange,!1),n(e=>({displayList:l(l({},e.displayList),{},{rightContentArea:!1}),appearance:l(l({},e.appearance),{},{rightContentAreaAnimating:!0})})),a())}),cc()&&o.fire(Bt._rightContentAreaVisibilityChange,!0)})(e),(({set:e,get:t,events:n,subscribe:i,config:o,backbone:r})=>{function a(){e(e=>({displayList:l(l({},e.displayList),{},{captions:!1})}))}function s(){e(e=>{const{appearance:t,embed:n}=e;return n.cc?t.pictureInPictureActive||n.background?jl:{displayList:l(l({},e.displayList),{},{captions:!0})}:(r.disableTextTrack(),jl)})}n.on(f,s),n.on(h.ENTER_PICTURE_IN_PICTURE,a),n.on(h.LEAVE_PICTURE_IN_PICTURE,s),n.on(Bt._ended,()=>{o.embed.outro!==$t.NOTHING&&a()}),n.on(St._reset,a),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{e?a():s()}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{!e&&s()}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.scrubbing},e=>{e&&s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>{e?a():s()}),i(e=>{var t;return null==e||null==(t=e.captions)?void 0:t.activeCues},e=>{var n,i;e.length&&(null==(n=t())||null==(i=n.playback)?void 0:i.playInitiated)?s():a()})})(e),{debugPanel:!1,cards:o,sideDock:t,title:n,controlBar:a,outro:!1,overlay:i,alert:!1,menu:!1,ad:!1,badge:r,notification:!1,nudgeNotification:!1,pipOverlay:!1,banner:s,unmuteButton:!1,transcript:u,progressBar:c,rightContentArea:d,captions:!1,toast:!1}}(e),setDisplayList:(e,n)=>{t(t=>({displayList:l(l({},t.displayList),{},{[e]:n})}))}}};function uc(e){var t;const{config:i,store:o}=e,{embed:r,video:a}=i,s=o.get("ui.player.width"),l=o.get("ui.player.height"),c=a.width,d=a.height,{videoHeight:u}=pc(s,l,c,d);return{playerBreakpoint:o.get("ui.player.breakpoint"),appBreakpoint:o.get("ui.app.breakpoint"),playerSizeMode:o.get("ui.player.mode"),appSizeMode:o.get("ui.app.mode"),transcriptNavActive:!1,fullscreen:!1,forceExitedFullscreen:!1,pictureInPictureActive:!1,externalDisplay:!1,mousedOverSidedock:!1,mousedOverControlBar:!1,isMenuBlockingUI:o.get("ui.controlbar.isMenuFullWidth"),isMenuVerticalVideoMode:o.get("ui.controlbar.isMenuVerticalVideoMode"),shouldRestoreSidedock:!1,shouldRestoreBadge:!1,isVerticalVideo:o.get("ui.player.isVerticalVideo"),boundingClientRect:st(e.element),isDisplayContextBackbone:e.displayContext===e.backbone,showAirPlayPicker:!1,shouldMenuItemsWrap:o.get("ui.controlbar.doMenuItemsWrap"),stereoscopicEnabled:!1,videoHeight:u,containerHeight:o.get("ui.container.height"),colorOne:li(r.color_one)||li(Kt[Yt]),colorTwo:li(r.color_two)||li(r.color)||li(Kt[Gt]),colorThree:li(r.color_three)||li(Kt[zt]),colorFour:li(r.color_four)||li(Kt[jt]),placeholderThumbnail:n(null==a||null==(t=a.thumbs)?void 0:t.base,{mw:"80",q:"85"}),rightContentAreaAnimating:!1}}function pc(e,t,n,i){const o=n/i,r=o>e/t;return{videoWidth:r?e:Math.round(t*o),videoHeight:r?Math.round(e/o):t}}const _c=(e,t)=>{Ie(()=>{!function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(ke){return Promise.reject(ke)}}}((function(){return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(t.ready(),(function(){e()}))}))()})},vc=({isMenuDisplayed:e,defaultPanel:t,setPanel:n})=>{Ie(()=>{e||setTimeout(()=>{n(t)},250)},[e])};const mc=e=>{let{href:t,children:n,element:i="div",className:o="",targetBlank:r=!0}=e,a=Oe(e,["href","children","element","className","targetBlank"]);const s=Re(i,l(l({},a),{},{className:o}),n);return t?ke("a",l(l(l({href:t,className:`${o} Link_module_link__b2eb3a07`},r?{target:"_blank",rel:"noopener"}:{}),a),{},{children:n})):s};let fc;!function(e){e.DOLBY_VISION="dolbyVision",e.CLOSE="close",e.PIP="pip",e.AIRPLAY="airPlay",e.ENTER_FULLSCREEN="enterFullscreen",e.EXIT_FULLSCREEN="exitFullscreen",e.GEAR="gear",e.VIMEO="vimeo",e.VIMEO_SMALL="vimeoSmall",e.ENTER_PICTURE_IN_PICTURE="enterPictureInPicture",e.EXIT_PICTURE_IN_PICTURE="exitPictureInPicture",e.PAUSE="pause",e.PLAY="play",e.REPLAY="replay",e.CHAPTERS="chapters",e.POINT="point",e.CC="cc",e.CC_FILLED="ccFilled",e.CHECKMARK="checkmark",e.STEREOSCOPIC="stereoscopic",e.PERSON_FILLED="personFilled",e.CHEVRON_DOWN="chevronDown",e.CHEVRON_RIGHT="chevronRight",e.CLOCK="clock",e.CLOCK_FILLED="clockFilled",e.COLLECTIONS="collections",e.DISMISS_X="dismissX",e.HEART="heart",e.HEART_FILLED="heartFilled",e.ONDEMAND="ondemand",e.PAPER_PLANE="paperPlane",e.POP_OUT="popOut",e.VOLUME_OFF_FILLED="volumeOffFilled",e.VOLUME_ON_FILLED="volumeOnFilled",e.FAST_FORWARD="fastForward",e.INFO_CIRCLE="infoCircle",e.TRANSCRIPT_ON="transcriptOn",e.TRANSCRIPT_OFF="transcriptOff",e.SEARCH="search",e.CHEVRON_UP="chevronUp",e.CLOSE_CIRCLE="closeCircle",e.SPINNER="spinner",e.SLIDERS="sliders",e.SWITCH_CONTAINER="switchContainer",e.SWITCH_CIRCLE="switchCircle",e.WARN_CIRCLE="warnCircle",e.THUMBS_UP="thumbsUp",e.THUMBS_DOWN="thumbsDown",e.THUMBS_UP_FILLED="thumbsUpFilled",e.THUMBS_DOWN_FILLED="thumbsDownFilled"}(fc||(fc={}));const hc={[fc.CLOSE]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20"},t),{},{children:ke("path",{d:"M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",fill:"#fff",fillRule:"evenodd"})}))},[fc.AIRPLAY]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-airplay-icon":!0},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.6666 4.99992H3.33329V13.3333H5.43825L4.0911 14.9999H3.33329C2.41282 14.9999 1.66663 14.2537 1.66663 13.3333V4.99992C1.66663 4.07944 2.41282 3.33325 3.33329 3.33325H16.6666C17.5871 3.33325 18.3333 4.07944 18.3333 4.99992V13.3333C18.3333 14.2537 17.5871 14.9999 16.6666 14.9999H15.9088L14.5617 13.3333H16.6666V4.99992ZM10.7777 12.6288C10.3774 12.1336 9.62249 12.1336 9.22224 12.6288L6.26454 16.288C5.73597 16.9419 6.2014 17.9166 7.04225 17.9166H12.9577C13.7985 17.9166 14.2639 16.9419 13.7354 16.288L10.7777 12.6288Z"})}))},[fc.DOLBY_VISION]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 844 126","aria-labelledby":"dv-logo-title"},t),{},{children:[ke("title",{id:"dv-logo-title",children:"Dolby Vision"}),ke("path",{d:"M478.94 30.12l-18.96 42.63-18.95-42.63h-15.9l26.9 60.48-6.59 14.85a7.77 7.77 0 01-10.25 3.94l-2.08-.93-5.88 13.19h.03l5.04 2.26a18.86 18.86 0 0024.85-9.56l37.69-84.23h-15.9zm-66.52 33.04c0-11-9.05-20.05-20.06-20.05a20.08 20.08 0 00-19.02 26.37 20.05 20.05 0 0039.08-6.32zm13.2.13a33.3 33.3 0 01-33.26 33.26 33.08 33.08 0 01-19.02-6v6.02h-14.58V.47h14.58v35.55c5.4-3.77 11.96-6 19.02-6a33.3 33.3 0 0133.27 33.27zm-93.64 33.29h14.55V.48h-14.55v96.1zm-22.62-33.4c0-11-9.05-20.06-20.06-20.06a20.07 20.07 0 000 40.11c11 0 20.06-8.92 20.06-20.05zm13.2.03a33.3 33.3 0 01-33.26 33.26 33.3 33.3 0 01-33.26-33.26 33.3 33.3 0 0133.26-33.27 33.3 33.3 0 0133.27 33.27zM234.1 48.47a33.5 33.5 0 00-33.44-33.45h-20.12v66.9h20.12a33.5 33.5 0 0033.44-33.45zm14.56 0c0 26.47-21.54 48-48 48h-34.68v-96h34.68c26.46 0 48 21.53 48 48zM136.92.47h-14.17c-26.44 0-48 21.56-48 48s21.56 48 48 48h14.17v-96zM.36 96.47h14.16c26.45 0 48-21.56 48-48s-21.55-48-48-48H.36v96zm789.18-66.35c.4 4.2.54 12.61.54 16.14v50.32h7.46V62.8c0-17.63 9.9-26.44 20.88-26.44 13.96 0 17.9 10.3 17.9 22.78v37.44h7.32V56.43c0-14.92-7.05-26.3-23.6-26.3-9.48 0-18.97 5.55-22.63 14.23h-.27c0-3.39-.28-10.7-.55-14.24h-7.05zM769.7 63.28c0 15.02-9.88 26.65-25.7 26.65-15.7 0-25.57-11.63-25.57-26.65 0-15.01 9.88-26.78 25.57-26.78 15.82 0 25.7 11.77 25.7 26.78zm7.57 0c0-19.2-13.66-33.14-33.27-33.14-19.48 0-33.14 13.94-33.14 33.14 0 19.07 13.66 33.28 33.14 33.28 19.61 0 33.27-14.2 33.27-33.28zm-78.51-33.16h-7.85v66.44h7.85V30.12zm1.57-24.1a5.58 5.58 0 00-5.56-5.55 5.55 5.55 0 000 11.12c2.85 0 5.56-2.3 5.56-5.56zm-24.88 34.81c-4.06-6.91-12.04-10.7-21.24-10.7-10.96 0-21.51 5.42-21.51 17.62 0 23.46 36.66 13.01 36.66 30.24 0 8.8-7.71 12.33-15.56 12.33a21.65 21.65 0 01-18.13-9.76l-5.81 4.2c5.4 8 14.47 11.8 23.94 11.8 11.5 0 22.87-5.7 22.87-19.12 0-10.3-7.71-15.18-21.1-18.17-10.43-2.3-15.84-4.74-15.84-12.06 0-7.87 7.58-10.98 14.21-10.98 7.03 0 12.72 3.38 15.83 8.67l5.68-4.07zM617.6 30.1h-7.46v66.48h7.46V30.1zm1.76-23.96A5.58 5.58 0 00613.8.6a5.56 5.56 0 000 11.11c2.85 0 5.56-2.3 5.56-5.56zm-61.1 80.8h.27L590.92.47h8.27l-36.6 96.1h-8.68L517.44.48h8.4l32.4 86.47z",fill:"currentColor",fillRule:"nonzero"})]}))},[fc.PIP]:e=>{let{direction:t="enter"}=e,n=Oe(e,["direction"]);return ke("svg",l(l({className:wn.PIP_ICON,viewBox:"0 0 16 12"},n),{},{children:[ke("polygon",{className:wn.FILL,points:"6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"}),ke("rect",{className:wn.FILL,x:"7",y:"7",width:"9",height:"5"}),ke("polyline",{className:wn.FILL,transform:"enter"===t?"translate(4, 4) rotate(180) translate(-4, -4)":"",points:"5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"})]}))},[fc.ENTER_FULLSCREEN]:()=>ke("svg",{className:Ln.ENTER_FULLSCREEN_ICON,width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-enter-fullscreen":!0,children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 5L17.5858 5L14.2929 8.29292C13.9024 8.68345 13.9024 9.31661 14.2929 9.70714C14.6834 10.0977 15.3166 10.0977 15.7071 9.70714L19 6.41426V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM5 8.00002V6.4142L8.29292 9.70712C8.68345 10.0976 9.31661 10.0976 9.70714 9.70712C10.0977 9.3166 10.0977 8.68343 9.70714 8.29291L6.41424 5.00001L8 5.00002C8.55228 5.00002 9 4.5523 9 4.00002C9 3.44773 8.55228 3.00002 8 3.00002H4C3.73478 3.00002 3.48043 3.10537 3.29289 3.29291C3.10536 3.48044 3 3.7348 3 4.00002V8.00002C3 8.5523 3.44772 9.00001 4 9.00001C4.55228 9.00001 5 8.5523 5 8.00002ZM8.00002 19H6.4142L9.70712 15.7071C10.0976 15.3166 10.0976 14.6834 9.70712 14.2929C9.3166 13.9024 8.68343 13.9024 8.29291 14.2929L5.00001 17.5858V16C5.00001 15.4477 4.5523 15 4.00001 15C3.44773 15 3.00002 15.4477 3.00002 16L3.00002 20C3.00002 20.2652 3.10537 20.5196 3.29291 20.7071C3.48044 20.8947 3.7348 21 4.00002 21H8.00002C8.5523 21 9.00001 20.5523 9.00001 20C9.00001 19.4477 8.5523 19 8.00002 19ZM19 17.5858V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H16C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19H17.5858L14.2929 15.7071C13.9023 15.3166 13.9023 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858Z"})}),[fc.EXIT_FULLSCREEN]:()=>ke("svg",{className:Ln.EXIT_FULLSCREEN_ICON,width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-exit-fullscreen":!0,children:[ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.41425 7.00003L8.41425 4.41425L10.4142 4.41425L10.4142 9.41425C10.4142 9.67946 10.3089 9.93382 10.1214 10.1214C9.93382 10.3089 9.67946 10.4142 9.41425 10.4142L4.41425 10.4142L4.41425 8.41425L7.00003 8.41425L3 4.41422L4.41422 3L8.41425 7.00003Z"}),ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.0097 8.41425L21 4.42398L19.5858 3.00977L15.5858 7.0098L15.5858 4.42401L13.5858 4.42401L13.5858 9.41424C13.5858 9.67946 13.6911 9.93382 13.8787 10.1214C14.0662 10.3089 14.3205 10.4142 14.5858 10.4142L19.5858 10.4142L19.5858 8.41425L17.0097 8.41425Z"}),ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.41419 17L4.41421 21L3 19.5858L6.99997 15.5858L4.41419 15.5858L4.41419 13.5858L9.41419 13.5858C9.96647 13.5858 10.4142 14.0335 10.4142 14.5858L10.4142 19.5858L8.41419 19.5858L8.41419 17Z"}),ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5858 16.9986L19.5855 21L21 19.5861L17.0015 15.5858L19.5813 15.5858L19.5813 13.5858L14.5858 13.5858C14.3206 13.5858 14.0662 13.6912 13.8787 13.8787C13.6912 14.0662 13.5858 14.3206 13.5858 14.5858L13.5858 19.5858L15.5858 19.5858L15.5858 16.9986Z"})]}),[fc.GEAR]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.16668 1.66699C8.2462 1.66699 7.50001 2.41318 7.50001 3.33366V4.72835C7.21484 4.86382 6.94241 5.02175 6.68499 5.19984L5.46953 4.4981C4.68103 4.04285 3.66009 4.31415 3.20034 5.11047L2.36526 6.55686C1.90707 7.35046 2.17605 8.3701 2.96953 8.82822L4.18535 9.53017C4.17298 9.68526 4.16668 9.84206 4.16668 10.0003C4.16668 10.1586 4.17298 10.3154 4.18535 10.4705L2.96953 11.1724C2.17605 11.6306 1.90707 12.6502 2.36526 13.4438L3.20034 14.8902C3.66009 15.6865 4.68103 15.9578 5.46953 15.5026L6.685 14.8008C6.94241 14.9789 7.21484 15.1368 7.50001 15.2723V16.667C7.50001 17.5875 8.2462 18.3337 9.16668 18.3337H10.8333C11.7538 18.3337 12.5 17.5875 12.5 16.667V15.2723C12.7851 15.1369 13.0574 14.979 13.3147 14.801L14.5298 15.5026C15.3183 15.9578 16.3393 15.6865 16.799 14.8902L17.6341 13.4438C18.0923 12.6502 17.8233 11.6306 17.0298 11.1724L15.8146 10.4708C15.827 10.3156 15.8333 10.1587 15.8333 10.0003C15.8333 9.84193 15.827 9.68501 15.8146 9.52981L17.0298 8.82822C17.8233 8.3701 18.0923 7.35046 17.6341 6.55686L16.799 5.11047C16.3393 4.31415 15.3183 4.04285 14.5298 4.4981L13.3147 5.19963C13.0574 5.02162 12.7851 4.86377 12.5 4.72835V3.33366C12.5 2.41318 11.7538 1.66699 10.8333 1.66699H9.16668ZM12.5 10.0003C12.5 11.381 11.3807 12.5003 10 12.5003C8.6193 12.5003 7.50001 11.381 7.50001 10.0003C7.50001 8.61961 8.6193 7.50033 10 7.50033C11.3807 7.50033 12.5 8.61961 12.5 10.0003Z"})}))},[fc.VIMEO]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"54",height:"18",viewBox:"0 0 54 18",role:"img",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1192 1.32529C17.1011 1.76753 16.8758 2.19197 16.4427 2.59836C15.9559 3.05781 15.3789 3.28759 14.7119 3.28759C13.6845 3.28759 13.1881 2.84607 13.2245 1.96218C13.2418 1.50286 13.5168 1.06061 14.0487 0.636176C14.5808 0.21258 15.1711 0 15.8207 0C16.1992 0 16.5146 0.146412 16.7675 0.437671C17.0197 0.729653 17.1367 1.02548 17.1192 1.32529ZM17.7011 13.0761C17.6 13.1708 17.4962 13.2641 17.3896 13.3562C16.181 14.3855 14.9735 14.9003 13.766 14.9003C13.2063 14.9003 12.778 14.7228 12.4809 14.3676C12.1837 14.0126 12.0438 13.5517 12.062 12.9831C12.0794 12.3977 12.2642 11.4922 12.6159 10.2672C12.9677 9.04241 13.1439 8.3853 13.1439 8.29652C13.1439 7.83551 12.981 7.60428 12.6571 7.60428C12.555 7.60428 12.2769 7.77023 11.8227 8.10073C11.4798 9.10988 10.7329 10.3442 9.58186 11.8036C7.94436 13.9012 6.5589 14.9501 5.42559 14.9501C4.72371 14.9501 4.1294 14.3115 3.64413 13.0338L2.67201 9.5206C2.31167 8.24356 1.92519 7.60426 1.51184 7.60426C1.42173 7.60426 1.10644 7.79121 0.566591 8.16344L0 7.44389C0.59431 6.92922 1.18068 6.41456 1.75765 5.89905C2.55027 5.22401 3.14543 4.86899 3.54217 4.83314C4.47949 4.74436 5.05646 5.37584 5.27308 6.72759C5.50692 8.18593 5.66896 9.09304 5.75981 9.44818C6.03016 10.6581 6.32726 11.2625 6.65219 11.2625C6.90423 11.2625 7.28277 10.87 7.78781 10.0852C8.29201 9.3002 8.56236 8.70301 8.59875 8.29265C8.67067 7.61521 8.40032 7.2757 7.78781 7.2757C7.49939 7.2757 7.20217 7.34115 6.89641 7.47036C7.48828 5.55955 8.61926 4.63151 10.2884 4.68432C11.403 4.71661 11.9869 5.3614 12.04 6.6187C12.3087 6.37895 12.5773 6.1391 12.846 5.89907C13.6213 5.22403 14.1982 4.86889 14.5776 4.83316C15.1719 4.78023 15.609 4.95226 15.8887 5.35096C16.1677 5.74953 16.2713 6.2666 16.2001 6.90362C15.9654 7.9836 15.7124 9.35472 15.4422 11.0178C15.424 11.7794 15.7037 12.1594 16.2807 12.1594C16.5328 12.1594 16.9833 11.897 17.6329 11.3707L17.6568 11.3514C17.6982 10.9804 17.7648 10.5395 17.8569 10.029C18.0055 9.20512 18.0884 8.56353 18.1059 8.10264C18.1414 7.78419 18.06 7.62455 17.8624 7.62455C17.7541 7.62455 17.4475 7.8044 16.9425 8.16339L16.2936 7.44397C16.3838 7.37383 16.9512 6.85832 17.9976 5.899C18.7546 5.20689 19.2684 4.85174 19.5387 4.83382C20.0074 4.79809 20.3859 4.98877 20.6745 5.40623C20.9629 5.82357 21.1075 6.3078 21.1075 6.85832C21.1075 7.03589 21.0894 7.2048 21.0539 7.36457C21.3241 6.95649 21.6394 6.60063 22.0006 6.29854C22.8296 5.58837 23.7584 5.18812 24.7858 5.09933C25.6694 5.02847 26.3001 5.23251 26.6795 5.71217C26.9852 6.10304 27.1291 6.66294 27.1117 7.39091C27.2382 7.28504 27.3733 7.16907 27.518 7.04443C27.9322 6.56489 28.3376 6.18329 28.7343 5.899C29.4013 5.41935 30.096 5.15311 30.8168 5.09933C31.6822 5.02847 32.3041 5.23179 32.6828 5.70988C33.0067 6.09919 33.1514 6.65669 33.1159 7.38165C33.0976 7.87755 32.976 8.59866 32.7508 9.54546C32.5246 10.4923 32.4124 11.0358 32.4124 11.1775C32.3943 11.5498 32.4307 11.8059 32.5207 11.9476C32.6108 12.0893 32.8266 12.1593 33.1696 12.1593C33.3237 12.1593 33.5517 12.0614 33.8539 11.8652C33.8254 11.6415 33.8136 11.4089 33.8184 11.1674C33.8359 9.72924 34.4855 8.36197 35.7659 7.06471C37.1718 5.64451 38.8307 4.9335 40.7418 4.9335C42.5089 4.9335 43.4462 5.64282 43.5545 7.06002C43.6264 7.96328 43.1214 8.89372 42.0402 9.85075C40.8856 10.8964 39.4338 11.5607 37.6855 11.844C38.0096 12.2871 38.4964 12.5083 39.146 12.5083C40.4438 12.5083 41.8593 12.1836 43.3925 11.5326C43.4607 11.5043 43.528 11.4758 43.5944 11.4474C43.5823 11.339 43.5733 11.2286 43.5673 11.1161C43.4765 9.5907 44.0351 8.18902 45.2443 6.9121C46.5421 5.49333 48.1733 4.78413 50.1388 4.78413C51.4003 4.78413 52.3559 5.20147 53.0054 6.03459C53.6187 6.79769 53.8977 7.78179 53.8439 8.98725C53.7714 10.6192 53.1587 12.0294 52.0049 13.2175C50.851 14.4058 49.4173 15 47.7047 15C46.2805 15 45.1985 14.5475 44.4596 13.6427C44.2931 13.4353 44.1496 13.2118 44.0292 12.9724C43.8357 13.0907 43.6324 13.209 43.4193 13.3273C41.5083 14.4097 39.5697 14.9501 37.605 14.9501C36.1444 14.9501 35.098 14.4704 34.4673 13.512C34.4211 13.4446 34.3774 13.3759 34.3361 13.3059L34.2784 13.3561C33.0701 14.3856 31.8623 14.9003 30.6549 14.9003C29.4819 14.9003 28.9146 14.2618 28.9507 12.9832C28.9682 12.4147 29.0813 11.7319 29.2882 10.9331C29.4953 10.1341 29.6084 9.51274 29.6266 9.06893C29.6448 8.39462 29.4368 8.05668 29.0021 8.05668C28.532 8.05668 27.9716 8.60792 27.3204 9.70896C26.6328 10.8637 26.2614 11.9826 26.2076 13.0657C26.1712 13.8304 26.2471 14.4168 26.4352 14.8247C25.177 14.8606 24.2956 14.6558 23.793 14.2119C23.3426 13.821 23.1363 13.1733 23.1727 12.2669C23.1901 11.6985 23.2786 11.13 23.4382 10.5617C23.597 9.99324 23.6856 9.48711 23.7038 9.04247C23.7402 8.38536 23.4959 8.05668 22.9727 8.05668C22.5206 8.05668 22.0329 8.56353 21.5098 9.57578C20.9866 10.588 20.6974 11.6455 20.6436 12.7466C20.6072 13.7416 20.672 14.4338 20.8372 14.8247C19.5995 14.8606 18.7207 14.6035 18.2006 14.0538C17.9631 13.8005 17.7966 13.4746 17.7011 13.0761ZM40.3632 7.9913C40.3807 7.51477 40.183 7.27573 39.7689 7.27573C39.2283 7.27573 38.6798 7.64254 38.1219 8.37592C37.5638 9.10942 37.2754 9.81177 37.2579 10.483C37.2477 10.483 37.2477 10.5982 37.2579 10.8279C38.1399 10.5101 38.9051 10.0243 39.5531 9.37024C40.0748 8.80505 40.345 8.34476 40.3632 7.9913ZM50.5847 7.56539C50.738 7.96564 50.8059 8.40644 50.7877 8.88682C50.7515 9.74099 50.4905 10.5593 50.0038 11.3426C49.4268 12.2864 48.7321 12.7574 47.9212 12.7574C47.56 12.7574 47.2802 12.562 47.0827 12.1703C46.9026 11.8324 46.8212 11.4408 46.8393 10.9953C46.8748 10.0882 47.1452 9.23414 47.6511 8.43291C48.2453 7.4541 49.0025 6.96434 49.9223 6.96434C50.2102 6.96434 50.4313 7.16513 50.5847 7.56539Z"})}))},[fc.VIMEO_SMALL]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.7781 6.00913C18.6943 7.81161 17.4171 10.2795 14.9465 13.4122C12.3922 16.6841 10.231 18.3203 8.46324 18.3203C7.36838 18.3203 6.44133 17.3242 5.68438 15.331C5.17905 13.5043 4.67352 11.6776 4.168 9.85093C3.60591 7.8589 3.00305 6.86167 2.35829 6.86167C2.21771 6.86167 1.7259 7.1533 0.88381 7.73392L0 6.61152C0.927048 5.80871 1.84171 5.00589 2.74171 4.20176C3.9781 3.14879 4.90648 2.59501 5.52533 2.53908C6.98743 2.40059 7.88743 3.38562 8.22533 5.49419C8.5901 7.76902 8.84286 9.18398 8.98457 9.73796C9.40629 11.6253 9.86971 12.5681 10.3766 12.5681C10.7697 12.5681 11.3602 11.9557 12.148 10.7316C12.9345 9.50713 13.3562 8.57558 13.413 7.93547C13.5251 6.87875 13.1034 6.34917 12.148 6.34917C11.6981 6.34917 11.2345 6.45126 10.7575 6.65281C11.6808 3.67218 13.445 2.22456 16.0486 2.30695C17.9792 2.36287 18.8891 3.59693 18.7781 6.00913Z"})}))},[fc.ENTER_PICTURE_IN_PICTURE]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{"data-enter-pip":!0,children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.33329 4.99992H16.6666V9.99992H18.3333V4.99992C18.3333 4.07944 17.5871 3.33325 16.6666 3.33325H3.33329C2.41282 3.33325 1.66663 4.07944 1.66663 4.99992V13.3333C1.66663 14.2537 2.41282 14.9999 3.33329 14.9999H8.33329V13.3333H3.33329V4.99992ZM9.99996 12.6666C9.99996 12.1143 10.4477 11.6666 11 11.6666H17.3333C17.8856 11.6666 18.3333 12.1143 18.3333 12.6666V17.3333C18.3333 17.8855 17.8856 18.3333 17.3333 18.3333H11C10.4477 18.3333 9.99996 17.8855 9.99996 17.3333V12.6666ZM7.91663 7.60408V8.59492L6.17079 6.84909C6.05829 6.73659 5.90163 6.66659 5.72913 6.66659C5.38413 6.66659 5.10413 6.94575 5.10413 7.29159C5.10413 7.46409 5.17413 7.61992 5.28746 7.73325L7.03246 9.47909H6.04163C5.69663 9.47909 5.41663 9.75825 5.41663 10.1041C5.41663 10.4491 5.69663 10.7291 6.04163 10.7291H8.54163C8.88663 10.7291 9.16663 10.4491 9.16663 10.1041V7.60408C9.16663 7.25825 8.88663 6.97909 8.54163 6.97909C8.19663 6.97909 7.91663 7.25825 7.91663 7.60408Z",fill:"white"})}))},[fc.EXIT_PICTURE_IN_PICTURE]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-exit-pip":!0},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 6H20V12H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H10V16H4V6ZM12 15C12 14.4477 12.4477 14 13 14H21C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V15ZM7.625 11.75V10.561L9.72 12.656C9.855 12.791 10.043 12.875 10.25 12.875C10.664 12.875 11 12.54 11 12.125C11 11.918 10.916 11.731 10.78 11.595L8.686 9.5H9.875C10.289 9.5 10.625 9.165 10.625 8.75C10.625 8.336 10.289 8 9.875 8L6.875 8C6.461 8 6.125 8.336 6.125 8.75V11.75C6.125 12.165 6.461 12.5 6.875 12.5C7.289 12.5 7.625 12.165 7.625 11.75Z"})}))},[fc.PAUSE]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-pause-icon":!0},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",className:wn.FILL,d:"M8 4C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18V6C10 4.89543 9.10457 4 8 4ZM16 4C14.8954 4 14 4.89543 14 6V18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z"})}))},[fc.PLAY]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-play-icon":!0},t),{},{children:ke("path",{d:"M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z",className:wn.FILL})}))},[fc.REPLAY]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{className:wn.FILL,d:"M0 1V5C0 5.6 0.4 6 1 6H5C5.6 6 6 5.6 6 5C6 4.4 5.6 4 5 4H3.5C4.6 2.8 6.2 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C5.7 14 3.60001 12.7 2.60001 10.6C2.40001 10.1 1.79999 9.89998 1.29999 10.1C0.799988 10.3 0.599988 10.9 0.799988 11.4C2.09999 14.2 5 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0C5.7 0 3.5 1.00001 2 2.70001V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1Z"})}))},[fc.CHAPTERS]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.6665 4.1665V4.99984V5.83317H2.49984H3.33317V4.99984V4.1665H2.49984H1.6665ZM5.83317 4.99984C5.83317 4.5396 6.20627 4.1665 6.6665 4.1665H17.4998C17.9601 4.1665 18.3332 4.5396 18.3332 4.99984C18.3332 5.46007 17.9601 5.83317 17.4998 5.83317H6.6665C6.20627 5.83317 5.83317 5.46007 5.83317 4.99984ZM5.83317 9.99984C5.83317 9.5396 6.20627 9.1665 6.6665 9.1665H17.4998C17.9601 9.1665 18.3332 9.5396 18.3332 9.99984C18.3332 10.4601 17.9601 10.8332 17.4998 10.8332H6.6665C6.20627 10.8332 5.83317 10.4601 5.83317 9.99984ZM6.6665 14.1665C6.20627 14.1665 5.83317 14.5396 5.83317 14.9998C5.83317 15.4601 6.20627 15.8332 6.6665 15.8332H17.4998C17.9601 15.8332 18.3332 15.4601 18.3332 14.9998C18.3332 14.5396 17.9601 14.1665 17.4998 14.1665H6.6665ZM1.6665 9.99984V9.1665H2.49984H3.33317V9.99984V10.8332H2.49984H1.6665V9.99984ZM3.33317 14.9998V14.1665H2.49984H1.6665V14.9998V15.8332H2.49984H3.33317V14.9998Z"})}))},[fc.POINT]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("circle",{className:wn.FILL,cx:"4",cy:"4",r:"4"})}))},[fc.CC]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 24 24","data-cc-icon":!0},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 6H4V18H20V6ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.1137 14.5377C17.569 14.0974 17.8567 13.5215 17.9684 12.8238L17.9999 12.6285H17.796H16.5766H16.44L16.4078 12.7569C16.3344 13.0475 16.2427 13.2659 16.1353 13.4038C15.9477 13.6541 15.6794 13.7748 15.3158 13.7748C14.9632 13.7748 14.6791 13.6292 14.4472 13.3304C14.2081 13.0226 14.0855 12.5403 14.0855 11.897C14.0855 11.2484 14.2032 10.7465 14.4351 10.4027C14.653 10.0766 14.9425 9.91857 15.3171 9.91857C15.6934 9.91857 15.9659 10.0281 16.1504 10.2535C16.2561 10.3826 16.3459 10.5844 16.4169 10.8536L16.4503 10.9803H16.5863H17.8045H17.9878L17.9799 10.801C17.9574 10.3944 17.8136 9.98486 17.5502 9.58479C17.0652 8.86515 16.2979 8.5 15.2673 8.5C14.4909 8.5 13.8433 8.77164 13.3395 9.30664C12.7707 9.91206 12.483 10.7761 12.483 11.8775C12.483 12.8972 12.7368 13.7133 13.2381 14.3063C13.748 14.9058 14.4533 15.2094 15.3359 15.2094C16.0521 15.2094 16.65 14.9833 17.1137 14.5377Z"})}))},[fc.CC_FILLED]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 24 24","data-cc-filled-icon":!0},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.9684 12.8238C17.8567 13.5215 17.569 14.0974 17.1137 14.5377C16.65 14.9833 16.0521 15.2094 15.3359 15.2094C14.4533 15.2094 13.748 14.9058 13.2381 14.3063C12.7368 13.7133 12.483 12.8972 12.483 11.8775C12.483 10.7761 12.7707 9.91206 13.3395 9.30664C13.8433 8.77164 14.4909 8.5 15.2673 8.5C16.2979 8.5 17.0652 8.86515 17.5502 9.58479C17.8136 9.98486 17.9574 10.3944 17.9799 10.801L17.9878 10.9803H17.8045H16.5863H16.4503L16.4169 10.8536C16.3459 10.5844 16.2561 10.3826 16.1504 10.2535C15.9659 10.0281 15.6934 9.91857 15.3171 9.91857C14.9425 9.91857 14.653 10.0766 14.4351 10.4027C14.2032 10.7465 14.0855 11.2484 14.0855 11.897C14.0855 12.5403 14.2081 13.0226 14.4472 13.3304C14.6791 13.6292 14.9632 13.7748 15.3158 13.7748C15.6794 13.7748 15.9477 13.6541 16.1353 13.4038C16.2427 13.2659 16.3344 13.0475 16.4078 12.7569L16.44 12.6285H16.5766H17.796H17.9999L17.9684 12.8238Z"})}))},[fc.CHECKMARK]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.66668 6.39041L10.1953 0.861816L11.1381 1.80463L5.13808 7.80463C4.87773 8.06498 4.45562 8.06498 4.19527 7.80463L0.861938 4.47129L1.80475 3.52848L4.66668 6.39041Z",fill:"white"})}))},[fc.STEREOSCOPIC]:()=>ke("svg",{viewBox:"0 0 64 64",children:ke("path",{d:"M55.3066 16H8.53325C6.79992 16 5.33325 17.52 5.33325 19.3867V47.28C5.33325 49.1467 6.79992 50.6667 8.61325 50.6667H21.3333C22.7733 50.6667 23.9999 49.8133 24.4266 48.56L28.1333 39.3067C28.7733 37.76 30.2666 36.6667 31.9999 36.6667C33.7333 36.6667 35.2266 37.76 35.8666 39.3067L39.5733 48.56C40.0799 49.8133 41.2266 50.6667 42.5333 50.6667H55.3066C57.1999 50.6667 58.6666 49.1467 58.6666 47.28V19.3867C58.6666 17.52 57.1999 16 55.3066 16ZM19.2533 38.88C15.9999 38.88 13.3333 36.1333 13.3333 32.7733C13.3333 29.3333 15.9999 26.6667 19.2533 26.6667C22.5066 26.6667 25.1466 29.3333 25.1466 32.7733C25.1466 36.1333 22.5066 38.88 19.2533 38.88ZM44.7466 38.88C41.4933 38.88 38.8533 36.1333 38.8533 32.7733C38.8533 29.4133 41.4933 26.6667 44.7466 26.6667C47.9999 26.6667 50.6666 29.4133 50.6666 32.7733C50.6666 36.1333 47.9999 38.88 44.7466 38.88Z"})}),[fc.PERSON_FILLED]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fill:"white",fillRule:"evenodd",clipRule:"evenodd",d:"M7.99999 1.33398C6.15904 1.33398 4.66666 2.82637 4.66666 4.66732C4.66666 6.50827 6.15904 8.00065 7.99999 8.00065C9.84094 8.00065 11.3333 6.50827 11.3333 4.66732C11.3333 2.82637 9.84094 1.33398 7.99999 1.33398ZM2.66666 12.0007C2.66666 10.1597 4.15904 8.66732 5.99999 8.66732H9.99999C11.8409 8.66732 13.3333 10.1597 13.3333 12.0007V14.6673H2.66666V12.0007Z"})}))},[fc.CHEVRON_DOWN]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24"},t),{},{children:ke("path",{d:"M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z",fill:"#1a2e3b"})}))},[fc.CHEVRON_RIGHT]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 24 24"},t),{},{children:ke("path",{d:"M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z",fill:"#1a2e3b"})}))},[fc.CLOCK]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20"},t),{},{children:ke("path",{d:"M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM10.75 5v4.69l3.075 3.075a.75.75 0 1 1-1.06 1.06L9.25 10.311V5a.75.75 0 0 1 1.5 0z"})}))},[fc.CLOCK_FILLED]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 4C10.5523 4 11 4.44772 11 5V9.49995L14.6001 12.2C15.0419 12.5314 15.1314 13.1582 14.8001 13.6C14.4687 14.0418 13.8419 14.1314 13.4001 13.8L9.41174 10.8088C9.38636 10.7903 9.36189 10.7706 9.3384 10.7499C9.24863 10.6708 9.17612 10.5786 9.12159 10.4783C9.04406 10.3362 9 10.1733 9 10V9.99923V5C9 4.44772 9.44772 4 10 4Z"})}))},[fc.COLLECTIONS]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20"},t),{},{children:ke("path",{d:"M20 10a1 1 0 0 0-.52-.88L17.44 8l2-1.13A1 1 0 0 0 20 6a1 1 0 0 0-.52-.87l-8-4.45a3 3 0 0 0-2.9 0l-8 4.45A1 1 0 0 0 0 6a1 1 0 0 0 .51.88L2.56 8l-2 1.13a1 1 0 0 0 0 1.75l2 1.13-2 1.12a1 1 0 0 0 0 1.75l8 4.46a3 3 0 0 0 2.92 0l8-4.46a1 1 0 0 0 0-1.75l-2-1.12 2-1.13A1 1 0 0 0 20 10zM9.52 2.41a1 1 0 0 1 1 0L16.94 6l-6.45 3.57a1 1 0 0 1-1 0L3.06 6zm-1 8.91a3 3 0 0 0 2.92 0l3.92-2.18 1.56.86-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 10l1.56-.86zM16.94 14l-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 14l1.54-.86 3.94 2.19a3 3 0 0 0 2.92 0l3.94-2.18z",fill:"#1a2e3b"})}))},[fc.DISMISS_X]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20"},t),{},{children:ke("path",{d:"M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",fill:"#1A2E3B",fillRule:"evenodd"})}))},[fc.HEART]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20"},t),{},{children:ke("path",{d:"M10 18a1 1 0 0 1-.81-.42 15.8 15.8 0 0 0-4.35-3.71C2.46 12.3 0 10.68 0 7.5a5.38 5.38 0 0 1 1.61-3.92A6 6 0 0 1 6 2a5.54 5.54 0 0 1 4.05 1.88A5.74 5.74 0 0 1 14 2c2.9 0 6 2.21 6 5.5s-2.46 4.8-4.84 6.37a15.8 15.8 0 0 0-4.35 3.71A1 1 0 0 1 10 18zM5.78 4A4 4 0 0 0 3 5a3.37 3.37 0 0 0-1 2.5c0 2 1.5 3.09 3.94 4.7A20.94 20.94 0 0 1 10 15.42a20.94 20.94 0 0 1 4.06-3.22C16.5 10.59 18 9.5 18 7.5 18 5.22 15.68 4 14 4c-1.44 0-2.78 1.49-3.17 2.06a1 1 0 0 1-.92.44 1 1 0 0 1-.82-.58A3.65 3.65 0 0 0 6 4z",fill:"#1a2e3b"})}))},[fc.HEART_FILLED]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20"},t),{},{children:ke("path",{d:"M10 18a1.23 1.23 0 0 1-.8-.4 14.25 14.25 0 0 0-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 0 1 1.6-3.9A5.73 5.73 0 0 1 6 2a5.25 5.25 0 0 1 4 1.9A5.85 5.85 0 0 1 14 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 0 0-4.4 3.7 1.23 1.23 0 0 1-.8.4z",fill:"#1a2e3b"})}))},[fc.ONDEMAND]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20"},t),{},{children:ke("path",{d:"M17.44 3.83L11.6.4a3.33 3.33 0 0 0-3.14 0l-5.9 3.43A3.41 3.41 0 0 0 1 6.57v6.86a3.41 3.41 0 0 0 1.56 2.74l5.87 3.43A3.08 3.08 0 0 0 10 20a3.18 3.18 0 0 0 1.57-.39l5.87-3.44A3.41 3.41 0 0 0 19 13.43V6.57a3.41 3.41 0 0 0-1.56-2.74zm-8-1.71A1.13 1.13 0 0 1 10 2a1.19 1.19 0 0 1 .56.12l5.84 3.43a1.47 1.47 0 0 1 .57 1v2.71a1 1 0 0 0-.38-.26L8.08 4.13 8 4.11V3zM8 6.4l6.3 3.6L8 13.66zm-5 7V6.57a1.43 1.43 0 0 1 .57-1L6 4.14v10.68l-.9.52-1.53-.9A1.43 1.43 0 0 1 3 13.43zm13.43 1l-5.87 3.44a1.37 1.37 0 0 1-1.12 0L7.08 16.5l9.22-5.32.7.4v1.85a1.43 1.43 0 0 1-.57 1.01z",fill:"#1a2e3b"})}))},[fc.PAPER_PLANE]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 18.1 20.95"},t),{},{children:ke("path",{d:"M18.11 0L-.01 12.07l8 4v4.88l2.26-3.75 6.65 3.32zm-3 17.37l-3.93-2 1.81-6.42-5 4.91-4-2.03 11.9-7.93z",fill:"#1a2e3b"})}))},[fc.POP_OUT]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 20 20"},t),{},{children:[ke("path",{d:"M16 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h-2z",fill:"#1a2e3b"}),ke("path",{d:"M19 0h-7v2h4.59l-8 8L10 11.41l8-8V8h2V1a1 1 0 0 0-1-1z",fill:"#1a2e3b"})]}))},[fc.VOLUME_OFF_FILLED]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 24 24"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 2.20001C15.1263 2.42863 16.1838 2.84654 17.1379 3.41908L15.5513 4.82943C15.0606 4.58595 14.5414 4.39136 14 4.25201V2.20001ZM21.1249 7.90287L19.5378 9.31361C19.8371 10.1532 20 11.0576 20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 10.5401 21.6872 9.15325 21.1249 7.90287ZM12 4.00396V7.98614L3.17811 15.8278C2.48346 15.5143 2 14.8156 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396ZM12 10.662L5.99037 16.004L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0772 3.25159 21.1143 3.66437 20.7474L21.6644 4.74742C22.0772 4.3805 22.1143 3.74843 21.7474 3.33565C21.3805 2.92286 20.7484 2.88568 20.3356 3.2526L12 10.662ZM10.2929 20.7111L8.81985 18.8407L12 16.0139V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111ZM14 15.4648C15.0633 14.8498 15.8172 13.7593 15.971 12.4841L17.8778 10.7892C17.9579 11.1803 18 11.5852 18 12C18 14.6124 16.3304 16.8349 14 17.6586V15.4648Z"})}))},[fc.VOLUME_ON_FILLED]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 24 24"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 7.16206 18.5645 3.12655 14 2.20001V4.25201C17.4505 5.1401 20 8.2723 20 12ZM18 12C18 9.38754 16.3304 7.16506 14 6.34139V8.53511C15.1956 9.22672 16 10.5194 16 12C16 13.4805 15.1956 14.7732 14 15.4648V17.6586C16.3304 16.8349 18 14.6124 18 12ZM6.58579 8.00396H4C2.89543 8.00396 2 8.89939 2 10.004V14.004C2 15.1085 2.89543 16.004 4 16.004H6.58579L10.2929 20.7111C10.9229 21.341 12 20.8949 12 20.004V4.00396C12 3.11305 10.9229 2.66689 10.2929 3.29685L6.58579 8.00396Z"})}))},[fc.FAST_FORWARD]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 64 64"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.4506 12.0055L32.4643 30.0179C33.6413 31.0772 33.6413 32.9228 32.4643 33.9821L12.4506 51.9945C10.7345 53.5389 8 52.3211 8 50.0124V13.9876C8 11.6789 10.7345 10.4611 12.4506 12.0055ZM39.1172 12.0055L59.131 30.0179C60.308 31.0772 60.308 32.9228 59.131 33.9821L39.1172 51.9945C37.4012 53.5389 34.6667 52.3211 34.6667 50.0124V13.9876C34.6667 11.6789 37.4012 10.4611 39.1172 12.0055Z"})}))},[fc.INFO_CIRCLE]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.6667 6C10.6667 8.57733 8.57733 10.6667 6 10.6667C3.42267 10.6667 1.33333 8.57733 1.33333 6C1.33333 3.42267 3.42267 1.33333 6 1.33333C8.57733 1.33333 10.6667 3.42267 10.6667 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 4.66667C6.36819 4.66667 6.66667 4.36819 6.66667 4C6.66667 3.63181 6.36819 3.33333 6 3.33333C5.63181 3.33333 5.33333 3.63181 5.33333 4C5.33333 4.36819 5.63181 4.66667 6 4.66667ZM6 5.33333C6.36819 5.33333 6.66667 5.54653 6.66667 5.80952V8.19048C6.66667 8.45347 6.36819 8.66667 6 8.66667C5.63181 8.66667 5.33333 8.45347 5.33333 8.19048V5.80952C5.33333 5.54653 5.63181 5.33333 6 5.33333Z",fill:"white"})}))},[fc.TRANSCRIPT_ON]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 24 24"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 3C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C10.5711 17.3995 10.5711 13.6005 12.9142 11.2574C14.4297 9.74185 16.5543 9.20655 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5ZM18.5 11.7313C17.0907 11.2301 15.4565 11.5435 14.3284 12.6716C14.1332 12.8668 13.9623 13.0773 13.8159 13.2991C12.7907 14.8517 12.9616 16.9616 14.3284 18.3284C15.4515 19.4515 17.0762 19.7671 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313ZM7.5 7C6.94772 7 6.5 7.44772 6.5 8C6.5 8.55228 6.94772 9 7.5 9H12.5C13.0523 9 13.5 8.55228 13.5 8C13.5 7.44772 13.0523 7 12.5 7H7.5ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11H7.5ZM6.5 16C6.5 15.4477 6.94772 15 7.5 15H8.5C9.05228 15 9.5 15.4477 9.5 16C9.5 16.5523 9.05228 17 8.5 17H7.5C6.94772 17 6.5 16.5523 6.5 16Z"})}))},[fc.TRANSCRIPT_OFF]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 24 24"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 5H16.5V9.53585C17.1669 9.46283 17.8436 9.50136 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C12.6802 19.5086 12.4696 19.2601 12.2823 19H4.5V5ZM15.2182 19C16.2222 19.5567 17.415 19.6485 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313C17.857 11.5026 17.1672 11.4435 16.5 11.554C15.7048 11.6857 14.9418 12.0582 14.3284 12.6716C12.7663 14.2337 12.7663 16.7663 14.3284 18.3284C14.5992 18.5992 14.8992 18.8231 15.2182 19ZM6.5 8C6.5 7.44772 6.94772 7 7.5 7H12.5C13.0523 7 13.5 7.44772 13.5 8C13.5 8.55228 13.0523 9 12.5 9H7.5C6.94772 9 6.5 8.55228 6.5 8ZM6.5 12C6.5 11.4477 6.94772 11 7.5 11H10.5C11.0523 11 11.5 11.4477 11.5 12C11.5 12.5523 11.0523 13 10.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12ZM7.5 15C6.94772 15 6.5 15.4477 6.5 16C6.5 16.5523 6.94772 17 7.5 17H8.5C9.05228 17 9.5 16.5523 9.5 16C9.5 15.4477 9.05228 15 8.5 15H7.5Z"})}))},[fc.SEARCH]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{className:wn.FILL,d:"M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.5725 18 14.0238 17.4815 15.1925 16.6062L18.298 19.7076C18.6888 20.0978 19.3219 20.0974 19.7122 19.7066C20.1025 19.3159 20.1021 18.6827 19.7113 18.2924L16.6066 15.1919C17.4817 14.0233 18 12.5722 18 11C18 7.13401 14.866 4 11 4ZM6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11Z"})}))},[fc.CHEVRON_UP]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24"},t),{},{children:ke("path",{d:"M12 11.3454L16.331 15.2433L17.6689 13.7567L12.6689 9.25671C12.2886 8.91443 11.7113 8.91443 11.331 9.25671L6.33102 13.7567L7.66895 15.2433L12 11.3454Z",fill:"#1a2e3b"})}))},[fc.CLOSE_CIRCLE]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24"},t),{},{children:ke("path",{clipRule:"evenodd",d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM14.7071 9.26251C14.3571 8.9125 13.7896 8.9125 13.4396 9.26251L12 10.7023L10.5604 9.26252C10.2104 8.9125 9.64292 8.9125 9.29293 9.26252L9.26302 9.29244C8.91306 9.64243 8.91306 10.2099 9.26302 10.5599L10.7027 11.9997L9.26247 13.4401C8.91251 13.7901 8.91251 14.3576 9.26247 14.7076L9.29239 14.7375C9.64237 15.0875 10.2098 15.0875 10.5598 14.7375L12 13.2971L13.4402 14.7375C13.7902 15.0875 14.3576 15.0875 14.7076 14.7375L14.7375 14.7076C15.0875 14.3576 15.0875 13.7901 14.7375 13.4401L13.2973 11.9997L14.737 10.5599C15.0869 10.2099 15.0869 9.64243 14.737 9.29244L14.7071 9.26251Z",fill:"#fff",fillRule:"evenodd"})}))},[fc.SPINNER]:e=>{let t=Object.assign({},e);return ke("svg",l(l({viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",fill:"none","data-spinner":!0},t),{},{children:[ke("circle",{"data-spinner-trace":!0,cx:"24",cy:"24",r:"22",stroke:"white"}),ke("circle",{"data-spinner-circle":!0,cx:"24",cy:"24",r:"22",stroke:"white"})]}))},[fc.SLIDERS]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 7C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7ZM19.8293 5C19.4175 3.83481 18.3062 3 17 3C15.6938 3 14.5825 3.83481 14.1707 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H14.1707C14.5825 8.16519 15.6938 9 17 9C18.3062 9 19.4175 8.16519 19.8293 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.8293ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4.17071C4.58254 14.1652 5.69378 15 7 15C8.30622 15 9.41746 14.1652 9.82929 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H9.82929C9.41746 9.83481 8.30622 9 7 9C5.69378 9 4.58254 9.83481 4.17071 11H3ZM7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H14.1707C14.5825 20.1652 15.6938 21 17 21C18.3062 21 19.4175 20.1652 19.8293 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H19.8293C19.4175 15.8348 18.3062 15 17 15C15.6938 15 14.5825 15.8348 14.1707 17H3ZM18 18C18 17.4477 17.5523 17 17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z"})}))},[fc.SWITCH_CIRCLE]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",fill:"none","data-toggle-container":!0},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z",fill:"white"})}))},[fc.SWITCH_CONTAINER]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"32",height:"16",viewBox:"0 0 32 16",xmlns:"http://www.w3.org/2000/svg",fill:"none","data-toggle-container":!0},t),{},{children:ke("rect",{width:"32",height:"16",rx:"8",fill:"#2F8363"})}))},[fc.WARN_CIRCLE]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",fill:"white"})}))},[fc.THUMBS_UP]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C8.99855 21.3765 8.87772 21.3243 8.76692 21.2737C8.25906 21.7332 7.59078 22 6.88197 22H4C2.89543 22 2 21.1046 2 20V11C2 9.89643 2.89367 9 3.99924 9H7.90182C8.9732 8.60827 9.61763 8.20384 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM13.4759 5.05072L13.4741 5.05871C13.4693 5.07933 13.4638 5.09979 13.4577 5.12006C12.9658 6.75821 12.4366 7.99485 11.6235 8.93936C10.9182 9.75858 10.0581 10.2914 9 10.7202V19.2174C9.08899 19.2196 9.17122 19.2384 9.24448 19.2784C9.38703 19.3561 9.60104 19.4634 9.87139 19.5715C10.4167 19.7897 11.163 20 12 20H17.8014C17.8514 19.9621 17.9179 19.9067 17.9987 19.8304C18.2399 19.6027 18.5483 19.2459 18.8517 18.777C19.4594 17.8379 20 16.5239 20 15V12C20 11.6482 19.9099 11.3969 19.7942 11.2538C19.707 11.1461 19.5294 11 19.0738 11H16.0654C16.0365 11.0006 15.9909 11.0009 15.9325 10.999C15.8501 10.9964 15.7377 10.9891 15.6076 10.971C15.3617 10.9367 14.9841 10.8544 14.6237 10.6345C14.2372 10.3985 13.8666 9.99723 13.7424 9.38864C13.6261 8.81811 13.7562 8.20634 14.0421 7.57802C14.4491 6.68359 14.568 5.82532 14.5835 5.18521C14.5913 4.86647 14.5732 4.60676 14.5541 4.43084C14.55 4.39233 14.5458 4.35787 14.5418 4.32773C14.5154 4.29227 14.4815 4.25162 14.4407 4.21169C14.323 4.09673 14.1856 4.01926 14 4.01926C13.8867 4.01926 13.8489 4.04221 13.8443 4.04499C13.8371 4.04925 13.8089 4.06724 13.7659 4.13728C13.7194 4.21297 13.6697 4.32623 13.6182 4.49311C13.5668 4.65929 13.5255 4.83727 13.4759 5.05072ZM7 19.9889V11H4V20H6.88197C6.91933 20 6.95876 19.9961 7 19.9889Z",fill:"white"})}))},[fc.THUMBS_DOWN]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38005 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926L12 2.01926C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C15.0015 2.64281 15.1223 2.69495 15.2331 2.74553C15.7409 2.28605 16.4092 2.01926 17.118 2.01926H20C21.1046 2.01926 22 2.91469 22 4.01926L22 13.0193C22 14.1228 21.1063 15.0193 20.0008 15.0193H16.0982C15.0268 15.411 14.3824 15.8154 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM10.5241 18.9685L10.5259 18.9606C10.5307 18.9399 10.5362 18.9195 10.5423 18.8992C11.0342 17.2611 11.5634 16.0244 12.3765 15.0799C13.0818 14.2607 13.9419 13.7279 15 13.2991L15 4.80189C14.911 4.79964 14.8288 4.78086 14.7555 4.7409C14.613 4.66315 14.399 4.55587 14.1286 4.44773C13.5833 4.2296 12.837 4.01926 12 4.01926L6.1986 4.01926C6.14859 4.05717 6.08207 4.11258 6.00131 4.18882C5.76012 4.41652 5.4517 4.77339 5.14827 5.24229C4.54059 6.18137 4 7.49534 4 9.01926V12.0193C4 12.371 4.09013 12.6224 4.20582 12.7654C4.29297 12.8732 4.47062 13.0193 4.9262 13.0193H7.93463C7.96345 13.0186 8.00911 13.0183 8.06745 13.0202C8.14991 13.0229 8.26226 13.0301 8.39236 13.0483C8.63827 13.0825 9.01586 13.1648 9.37627 13.3848C9.76282 13.6207 10.1334 14.022 10.2576 14.6306C10.3739 15.2012 10.2438 15.8129 9.95791 16.4412C9.55092 17.3357 9.43197 18.1939 9.41645 18.834C9.40873 19.1528 9.4268 19.4125 9.44585 19.5884C9.45002 19.6269 9.45424 19.6614 9.45823 19.6915C9.48457 19.727 9.5185 19.7676 9.55935 19.8076C9.67696 19.9225 9.81438 20 10 20C10.1133 20 10.1511 19.9771 10.1557 19.9743C10.1629 19.97 10.1911 19.952 10.2341 19.882C10.2806 19.8063 10.3303 19.693 10.3818 19.5262C10.4332 19.36 10.4745 19.182 10.5241 18.9685ZM17 4.03039V13.0193H20L20 4.01926H17.118C17.0807 4.01926 17.0412 4.02315 17 4.03039Z",fill:"white"})}))},[fc.THUMBS_UP_FILLED]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C9.08468 21.4109 9.0418 21.3933 9 21.3758V8.51408C9.46407 8.25834 9.8137 7.9761 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM7 9H3.99924C2.89367 9 2 9.89643 2 11V20C2 21.1046 2.89543 22 4 22H6.88197C6.92144 22 6.96079 21.9992 7 21.9975V9Z",fill:"white"})}))},[fc.THUMBS_DOWN_FILLED]:e=>{let t=Object.assign({},e);return ke("svg",l(l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:ke("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38006 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926H12C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C14.9153 2.60835 14.9582 2.62594 15 2.64348V15.5052C14.5359 15.7609 14.1863 16.0432 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM17 15.0193H20.0008C21.1063 15.0193 22 14.1228 22 13.0193V4.01926C22 2.91469 21.1046 2.01926 20 2.01926H17.118C17.0786 2.01926 17.0392 2.02008 17 2.02173V15.0193Z",fill:"white"})}))}},gc=e=>{let{name:t,className:n}=e,i=Oe(e,["name","className"]);const o=hc[t];return o&&ke(o,l({className:n},i))},bc=Ne({menuEventFromKeyboard:!1,isAccordionToggling:!1,activeAccordion:"",setMenuEventFromKeyboard:()=>{},setAccordionToggling:()=>{},setActiveAccordion:()=>{}}),yc=({children:e})=>{const[t,n]=Me(!1),[i,o]=Me(!1),[r,a]=Me(""),s={menuEventFromKeyboard:t,isAccordionToggling:i,activeAccordion:r,setMenuEventFromKeyboard:n,setAccordionToggling:o,setActiveAccordion:a};return ke(bc.Provider,{value:s,children:e})},Ec=({children:t,menuRef:n,panelRef:i,headerRef:o,buttonRef:r,panel:a,isMenuDisplayed:s,setMenuDisplayed:l,toggleKey:c})=>{const{menuEventFromKeyboard:d,setMenuEventFromKeyboard:u}=De(bc),p=$d(e=>e.embed.keyboard),_=$d(e=>e.embed.background),v=$d(e=>e.config.view),m=xe((t,n)=>{let i=[];const o=(null==t?void 0:t.children)||[],r=(null==n?void 0:n.children)||[];return[].concat(e(o),e(r)).forEach(e=>{var t;const n=window.getComputedStyle(e);!n.display||"none"===n.display||(e.tabIndex>-1&&i.push(e),(null==(t=e.children)?void 0:t.length)&&(i=i.concat(m(e,[]))))}),i},[]),f=xe(()=>{var e,t;((null==o||null==(e=o.current)?void 0:e.contains(document.activeElement))||(null==i||null==(t=i.current)?void 0:t.contains(document.activeElement)))&&(null==r?void 0:r.current)&&(document.body.classList.add("showfocus"),r.current.focus())},[r,o,i]),h=xe(e=>{let t=m(o.current,i.current),n=t.indexOf(document.activeElement),r="up"===e?n-1:n+1,a=null;a=r>=t.length?t[0]:r<0?t[t.length-1]:t[r],a&&a.focus()},[m,o,i]),g=xe(e=>!(e.ctrlKey||e.metaKey||e.altKey)&&(e.which in un?"keydown"===e.type:"keypress"===e.type),[]),b=xe(e=>{if(_)return!0;const t=e.target||e.srcElement;return"INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable},[_]),y=xe(()=>ln(v),[v]),E=xe(e=>{if(!g(e)||b(e)||!y())return;const t=()=>{var e;(null==n||null==(e=n.current)?void 0:e.contains(document.activeElement))&&h("up")},i=()=>{var e;(null==n||null==(e=n.current)?void 0:e.contains(document.activeElement))&&h("down")},o=(e=>{if("keypress"===e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return e.which in un?un[e.which]:String.fromCharCode(e.which).toLowerCase()})(e),r={up:t,down:i,left:t,right:i,esc:()=>{(null==n?void 0:n.current)&&(f(),l(!1))}};c&&(r[c]=()=>{u(!0),l(!s)}),"function"==typeof r[o]&&r[o]()},[s,c,n,h,f,l,u,b,g,y]);return Ie(()=>(p&&(document.addEventListener("keydown",E,!1),document.addEventListener("keypress",E,!1)),()=>{document.removeEventListener("keydown",E,!1),document.removeEventListener("keypress",E,!1)}),[p,E]),Ie(()=>{d&&s&&(()=>{const e=m(o.current,i.current);e.length>0&&(document.body.classList.add("showfocus"),e[0].focus())})()},[i,o,a,s]),Ie(()=>{s||f()},[s]),ke(Be,{children:t})};const Cc=Ve(({isMenuDisplayed:e,isMenuBlockingUI:t,setMenuDisplayed:n=di,panel:i,buttonRef:o,progressBarAndButtonsRef:r,panelContent:a,headerContent:s,toggleKey:c,className:d,id:u,type:p},_)=>{const v=Ue(null);_=_||v;const m=Ue(null),f=Ue(null),h=Ue(null),g=Ue(null),[b,E]=Me({height:"auto"}),[C,T]=Me({}),[w,L]=Me(!1),[S,A]=Me(!1),k=$d(e=>e.appearance.isMenuBlockingUI);t=void 0===t?k:t;const P=$d(e=>e.appearance.isMenuVerticalVideoMode),I=$d(e=>e.appearance.boundingClientRect),O=$d(e=>e.appearance.playerBreakpoint),R=$d(e=>e.displayList.controlBar),{isAccordionToggling:N}=De(bc),M=e=>{const t=window.getComputedStyle(e);return parseFloat(t.fontSize)},D=()=>{L(!1),cancelAnimationFrame(null==g?void 0:g.current)},x=()=>{var n;if(!((null==(n=_)?void 0:n.current)&&e))return;if(t)return A(!1),void E(e=>l(l({},e),{},{height:"100%"}));let i="auto";const o=st(_.current),r=M(_.current),a=o.bottom-_.current.scrollHeight,s=Math.max(I.top,0)-a;if(s>0){let e=_.current.scrollHeight-s-r;i=`${e/r}em`}E(e=>l(l({},e),{},{height:i})),A(s>0)},B=()=>{if(!(null==f?void 0:f.current))return;if(t)return void T({});if(!e)return void T({height:"0"});const n=M(f.current),i=`${(f.current.scrollHeight+16)/n}em`;T({height:i})},V=()=>{x(),w&&(g.current=requestAnimationFrame(V))},U=()=>{D(),B(),x()},F=y(i=>{var r;(null==(r=_)?void 0:r.current)&&(null==o?void 0:o.current)&&e&&(o.current.contains(i.target)||_.current.contains(i.target)||!document.contains(i.target)||t||n(!1))},200),H=y(()=>{t||n(!1)},200);Ie(()=>(document.addEventListener("click",F,!1),window.addEventListener("blur",H,!1),()=>{document.removeEventListener("click",F,!1),window.removeEventListener("blur",H,!1)}),[_,o,e]),Ie(()=>((()=>{var n;const i=(null==(n=_)?void 0:n.current)&&(null==o?void 0:o.current)&&(null==r?void 0:r.current)&&e,a=P&&O===zn.XXS&&(null==I?void 0:I.width);if(!i)return;if(t)return void E(e=>l(l({},e),{},{right:""}));if(a){const e=`${I.width-16}px`;return void E(t=>l(l({},t),{},{width:e,right:"0"}))}const s=st(o.current),c=st(r.current),d=st(_.current);let u=-8;const p=s.right-s.width/2+d.width/2+8;p<c.right&&(u=c.right-p);const v=M(_.current);E(e=>l(l({},e),{},{right:`${u/v}em`}))})(),!e||t?U():(B(),L(!0),V()),()=>{D()}),[e,i,null==I?void 0:I.width,t,O]),Ie(()=>{R||n(!1)},[R]),Ie(()=>{(null==m?void 0:m.current)&&(N?t?x():(T(e=>l(l({},e),{},{height:"auto"})),L(!0),V()):t?(L(!1),U()):(B(),V()))},[N]);const q=dn(wn.VP_MENU,"Menu_module_menu__2c24b9a9",d,S&&"Menu_module_scroll__2c24b9a9",t&&"Menu_module_fullWidth__2c24b9a9",P&&"Menu_module_verticalVideo__2c24b9a9");return ke(Ec,{menuRef:_,panelRef:f,headerRef:h,buttonRef:o,panel:i,isMenuDisplayed:e,setMenuDisplayed:n,toggleKey:c,children:ke(Hl,{visible:e,children:ke("div",{id:u,className:q,ref:_,style:b,onTransitionEnd:e=>{e.target===(null==m?void 0:m.current)&&"height"===e.propertyName&&(x(),D())},"data-menu":p||!0,children:[s&&ke("div",{ref:h,children:s}),ke("div",{ref:m,className:"Menu_module_menuBody__2c24b9a9",style:C,children:ke("div",{className:"Menu_module_menuPanel__2c24b9a9",ref:f,children:a})})]})})})});const Tc=({buffer:e=!1})=>ke("div",{className:`Divider_module_divider__700c72a0 ${e?"Divider_module_buffer__700c72a0":""}`});const wc=({onBack:e=null,title:t,isMenuBlockingUI:n,setMenuDisplayed:i=di,hasCloseButton:o=!0,onClose:r=(()=>i(!1)),size:a=Jn.MD})=>{var s;const l=$d(e=>e.appearance.isMenuBlockingUI);n=null!==(s=n)&&void 0!==s?s:l;const c=dn("MenuHeader_module_menuHeader__71ceb64e",n&&"MenuHeader_module_fullWidth__71ceb64e",e&&"MenuHeader_module_hasBack__71ceb64e",!o&&"MenuHeader_module_hideCloseButton__71ceb64e");return ke("div",{className:c,children:[ke("header",{className:"MenuHeader_module_header__71ceb64e",children:[ke("div",{className:"MenuHeader_module_backButtonWrapper__71ceb64e",children:ke(Kc,{className:`${Ln.EXCLUDE_GLOBAL_BUTTON_STYLES} MenuHeader_module_backButton__71ceb64e`,onClick:e,"aria-label":"Back",color:Kn.ALTERNATIVE,icon:ke(gc,{name:fc.CHEVRON_RIGHT}),iconSize:jn.MD})}),ke(Wc,{size:a,className:"MenuHeader_module_title__71ceb64e",children:t}),ke("div",{className:"MenuHeader_module_closeButtonWrapper__71ceb64e",children:ke(Kc,{className:`${Ln.EXCLUDE_GLOBAL_BUTTON_STYLES} MenuHeader_module_closeButton__71ceb64e`,"aria-label":"Close menu",onClick:r,color:Kn.ALTERNATIVE,icon:ke(gc,{name:fc.DISMISS_X}),iconSize:jn.MD})})]}),ke(Tc,{})]})};const Lc=e=>{let{className:t,id:n,active:i,withActive:o=!0,onSelect:r,onMouseEnter:a,onMouseLeave:s,element:c="div",styled:d=!0,children:u}=e,p=Oe(e,["className","id","active","withActive","onSelect","onMouseEnter","onMouseLeave","element","styled","children"]);const{onClick:_,onKeyDown:v}=rd(r),m=dn("MenuOption_module_option__eac51652",o&&"MenuOption_module_withActive__eac51652",d&&"MenuOption_module_styled__eac51652",t),f=l({className:m,role:"menuitemradio","aria-checked":i,"data-id":n,tabIndex:0,onClick:_,onKeyDown:v,onMouseDown:e=>e.preventDefault(),onMouseEnter:a,onMouseLeave:s},p);return Re(c,f,u)};let Sc,Ac,kc;!function(e){e.PREFS="prefs",e.CHAPTERS="chapters",e.CC="cc",e.TRANSCRIPT="transcript"}(Sc||(Sc={})),function(e){e.EMPTY="empty",e.PREFS="prefs",e.QUALITY="quality",e.SPEED="speed",e.AUDIO="audio",e.CHAPTERS="chapters",e.LANGUAGES="languages",e.CUSTOMIZE="customize",e.FONT="font",e.BACKGROUND="background",e.WINDOW="window",e.PREVIEW="preview",e.TRANSCRIPT_SETTINGS="transcriptSettings",e.TRANSCRIPT_LANGUAGES="transcriptLanguages"}(Ac||(Ac={})),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(kc||(kc={}));const Pc=({className:e,onSelect:t,label:n,value:i,valueComponent:o,id:r,isAccordion:a=!1,isOpened:s=!1,size:l=kc.MEDIUM})=>{let c,d=Jn.MD;return l===kc.LARGE?(d=Jn.LG,c=Jn.MD):a&&(d=Jn.SM),ke(Lc,{className:dn("MenuOptionButton_module_optionButton__20852ebc",l===kc.SMALL&&"MenuOptionButton_module_small__20852ebc",e),onSelect:t,id:r,withActive:!1,children:[ke(Wc,{size:d,weight:a?Qn.BOLD:Qn.NORMAL,className:"MenuOptionButton_module_label__20852ebc",children:n}),i&&ke(Wc,{weight:Qn.NORMAL,size:c,className:"MenuOptionButton_module_value__20852ebc",children:i}),o||ke("div",{className:dn("MenuOptionButton_module_icon__20852ebc",s&&"MenuOptionButton_module_open__20852ebc"),children:ke(gc,{name:a?fc.CHEVRON_DOWN:fc.CHEVRON_RIGHT})})]})};const Ic=Jn.MD,Oc=Jn.SM,Rc=({onSelect:e,onMouseEnter:t,onMouseLeave:n,label:i,active:o,id:r,ordered:a=!1,index:s,isAccordion:l=!1,tabIndex:c})=>{const d=dn("MenuOptionListItem_module_listItem__f8959de6",a&&"MenuOptionListItem_module_ordered__f8959de6",o&&"MenuOptionListItem_module_active__f8959de6",l&&"MenuOptionListItem_module_accordion__f8959de6");return ke(Lc,{element:"li",className:d,onSelect:e,onMouseEnter:t,onMouseLeave:n,active:o,id:r,tabIndex:c,children:[ke("div",a?{className:"MenuOptionListItem_module_number__f8959de6",children:s}:{className:`MenuOptionListItem_module_check__f8959de6 ${o?"MenuOptionListItem_module_activeCheck__f8959de6":""}`,children:ke(gc,{name:fc.CHECKMARK})}),ke(Wc,{className:"MenuOptionListItem_module_text__f8959de6",weight:Qn.NORMAL,size:l?Oc:Ic,children:i}),a&&o&&ke("div",{className:"MenuOptionListItem_module_point__f8959de6",children:ke(gc,{name:fc.POINT})})]})};const Nc=({items:e,onSelect:t,onMenuOptionMouseEnter:n,onMenuOptionMouseLeave:i,ordered:o=!1,isAccordion:r=!1,listItemTabIndex:a=0,itemComponent:s})=>{const c=o?"ol":"ul",d={className:"MenuOptionList_module_list__087838b4",role:"group"},u=e.map(e=>{const c={key:e.id,id:e.id,active:e.active,label:e.label,onSelect:t,onMouseEnter:n,onMouseLeave:i,ordered:o,isAccordion:r,tabIndex:a};return s?s(l(l({},c),e)):ke(Rc,l({},c))});return Re(c,d,u)};const Mc=({label:e,items:t=[],onSelect:n})=>{var i;const o=Ue(null),r=Ue(null),{setAccordionToggling:a,activeAccordion:s,setActiveAccordion:l}=De(bc),[c,d]=Me(!1),[u,p]=Me({}),_=null==(i=t.find(e=>e.active))?void 0:i.label,v=t=>{const n=void 0!==t?t:!c;d(n),a(!0),n&&l(e)},m=e=>{e.target===r.current&&"height"===e.propertyName&&a(!1)},f=e=>{(null==o?void 0:o.current)&&!o.current.contains(e.target)&&o.current!==e.target&&v(!1)};return Ie(()=>(document.addEventListener("click",f),document.addEventListener("transitionend",m),()=>{l(""),document.removeEventListener("click",f),document.removeEventListener("transitionend",m)}),[]),Ie(()=>{p((()=>{let e={};if(c&&(null==r?void 0:r.current)){const t=window.getComputedStyle(r.current),n=parseFloat(t.fontSize);e={height:`${r.current.scrollHeight/n}em`}}return e})())},[c,r]),Ie(()=>{s&&s!==e&&v(!1)},[s]),t.length&&ke("div",{className:"Accordion_module_accordion__6525797b",role:"menu",ref:o,children:[ke(Pc,{label:e,value:_,onSelect:()=>v(),isAccordion:!0,isOpened:c}),ke("div",{className:"Accordion_module_content__6525797b",ref:r,style:u,children:ke(Nc,{items:t,onSelect:n,isAccordion:!0,listItemTabIndex:c?0:-1})})]})};const Dc=({label:e,className:t=""})=>ke("div",{className:`MenuFieldLabel_module_menuField__7a3a0ef4 ${t}`,children:ke(Wc,{className:"MenuFieldLabel_module_label__7a3a0ef4",children:e})}),xc=({items:e=[],label:t,onSelect:n})=>{const i=$d(e=>e.appearance.shouldMenuItemsWrap);return ke(Be,{children:[ke(Dc,{label:t}),ke("ul",{className:`ButtonRow_module_buttonRow__2aef5483 ${i?"ButtonRow_module_wrap__2aef5483":""}`,role:"menu","aria-label":t,children:e.map(e=>ke(Lc,{element:"li",className:`ButtonRow_module_filledButton__2aef5483 ${e.active?"ButtonRow_module_active__2aef5483":""}`,active:e.active,id:e.id,onSelect:n,styled:!1,children:ke(Wc,{className:"ButtonRow_module_label__2aef5483",children:e.label})},e.id))})]})};const Bc=({items:e=[],label:t,onSelect:n})=>{const i=$d(e=>e.appearance.shouldMenuItemsWrap);return ke(Be,{children:[ke(Dc,{label:t}),ke("ul",{className:`ColorSwabs_module_colorSwabs__63fe80c1 ${i?"ColorSwabs_module_wrap__63fe80c1":""}`,role:"menu","aria-label":t,children:e.map(e=>ke(Lc,{id:e.id,element:"li",className:`ColorSwabs_module_colorSwab__63fe80c1 ${e.active?"ColorSwabs_module_active__63fe80c1":""}`,active:e.active,"aria-label":e.label,onSelect:n,styled:!1,children:ke("div",{className:"ColorSwabs_module_inner__63fe80c1",style:{backgroundColor:e.id}})},e.id))})]})};let Vc;!function(e){e.TOP="top",e.BOTTOM="bottom",e.LEFT="left",e.RIGHT="right"}(Vc||(Vc={}));const Uc=({children:t,tooltipText:n,className:i="",containerEl:r,position:a,margin:s})=>{var c,d,u;const p=$d(e=>e.displayList.menu),_=!o.touch&&!p,[v,m]=Me(!1);let f=null==t?void 0:t.ref;const h=Ue(null);f=f||h;const g=Ue(null),b=l(l({},null==t?void 0:t.props),{},{className:`Tooltip_module_tooltipContainer__21ae5b80 ${null==t||null==(c=t.props)?void 0:c.className}`,ref:f,onMouseEnter:e=>{var n;(null==t||null==(n=t.props)?void 0:n.onMouseEnter)&&t.props.onMouseEnter(e),m(!0)},onMouseLeave:e=>{var n;(null==t||null==(n=t.props)?void 0:n.onMouseEnter)&&t.props.onMouseLeave(e),m(!1)}}),y=(({tooltipEl:e,wrappedEl:t,hovered:n,containerEl:i,position:o=Vc.TOP,margin:r=0})=>{const[a,s]=Me("50%"),[l,c]=Me(null),d=$d(e=>e.element);return function(){if(e&&t&&n){const{left:n,right:i}=d.getBoundingClientRect(),{left:o,right:a,width:l}=t.getBoundingClientRect(),{width:c}=e.getBoundingClientRect(),u=(c-l)/2,p=o-u,_=a+u,v=Math.max(n+r-p,0),m=Math.max(_+r-i,0);s(`calc(50% + ${v-m}px)`)}}(),function(){if(e&&i&&n){const{bottom:e}=i.getBoundingClientRect(),{top:t}=d.getBoundingClientRect();switch(o){case Vc.BOTTOM:const n=e-t-r;isNaN(n)||c(`${n}px`)}}}(),{left:a,top:l}})({tooltipEl:null==g?void 0:g.current,wrappedEl:null==(d=f)?void 0:d.current,hovered:v,containerEl:null==r?void 0:r.current,position:a,margin:s}),E=dn("Tooltip_module_tooltip__21ae5b80",wn.VP_TOOLTIP,i),C=_&&ke("span",{ref:g,style:y,className:E,children:n}),T=(null==t||null==(u=t.props)?void 0:u.children)?[C].concat(e(t.props.children)):[C];return Fe(t,b,T)};var Fc={text:"Text_module_text__c5f0df31",sm:"Text_module_sm__c5f0df31",md:"Text_module_md__c5f0df31",lg:"Text_module_lg__c5f0df31",xl:"Text_module_xl__c5f0df31",bpxxs_fontsm:"Text_module_bpxxs_fontsm__c5f0df31",bpxxs_fontmd:"Text_module_bpxxs_fontmd__c5f0df31",bpxxs_fontlg:"Text_module_bpxxs_fontlg__c5f0df31",bpxxs_fontxl:"Text_module_bpxxs_fontxl__c5f0df31",bpxs_fontsm:"Text_module_bpxs_fontsm__c5f0df31",bpxs_fontmd:"Text_module_bpxs_fontmd__c5f0df31",bpxs_fontlg:"Text_module_bpxs_fontlg__c5f0df31",bpxs_fontxl:"Text_module_bpxs_fontxl__c5f0df31",bpsm_fontsm:"Text_module_bpsm_fontsm__c5f0df31",bpsm_fontmd:"Text_module_bpsm_fontmd__c5f0df31",bpsm_fontlg:"Text_module_bpsm_fontlg__c5f0df31",bpsm_fontxl:"Text_module_bpsm_fontxl__c5f0df31",bpmd_fontsm:"Text_module_bpmd_fontsm__c5f0df31",bpmd_fontmd:"Text_module_bpmd_fontmd__c5f0df31",bpmd_fontlg:"Text_module_bpmd_fontlg__c5f0df31",bpmd_fontxl:"Text_module_bpmd_fontxl__c5f0df31",bplg_fontsm:"Text_module_bplg_fontsm__c5f0df31",bplg_fontmd:"Text_module_bplg_fontmd__c5f0df31",bplg_fontlg:"Text_module_bplg_fontlg__c5f0df31",bplg_fontxl:"Text_module_bplg_fontxl__c5f0df31",bpxl_fontsm:"Text_module_bpxl_fontsm__c5f0df31",bpxl_fontmd:"Text_module_bpxl_fontmd__c5f0df31",bpxl_fontlg:"Text_module_bpxl_fontlg__c5f0df31",bpxl_fontxl:"Text_module_bpxl_fontxl__c5f0df31",bpxxl_fontsm:"Text_module_bpxxl_fontsm__c5f0df31",bpxxl_fontmd:"Text_module_bpxxl_fontmd__c5f0df31",bpxxl_fontlg:"Text_module_bpxxl_fontlg__c5f0df31",bpxxl_fontxl:"Text_module_bpxxl_fontxl__c5f0df31",bold:"Text_module_bold__c5f0df31",normal:"Text_module_normal__c5f0df31",medium:"Text_module_medium__c5f0df31"};const Hc={[Jn.SM]:"sm",[Jn.MD]:"md",[Jn.LG]:"lg",[Jn.XL]:"xl"},qc={[Qn.BOLD]:Fc.bold,[Qn.NORMAL]:Fc.normal,[Qn.NUM_500]:Fc.medium},Wc=({element:e="span",children:t,size:n=Jn.SM,sizeMap:i,weight:o=Qn.BOLD,className:r="",id:a=""})=>{let s=[];i?Object.keys(i).forEach(e=>{const t=Hc[i[e]];s.push(Fc[`bp${e}_font${t}`])}):s.push(Fc[Hc[n]]);const l=dn.apply(void 0,[Fc.text].concat(s,[qc[o],r]));return Re(e,{className:l,id:a},t)},$c=e=>ke(mc,{className:e.classNames,href:e.url,tabIndex:e.url?"0":"-1","aria-describedby":"new-window",style:e.style,children:ke("img",{className:e.imgClassNames,src:e.img,alt:e.imgAlt})});var Yc={roundedBox:"shared_module_roundedBox__63d26f6d",hidden:"shared_module_hidden__63d26f6d",focusable:"shared_module_focusable__63d26f6d",focusableMarker:"shared_module_focusableMarker__63d26f6d",focusableCircle:"shared_module_focusableCircle__63d26f6d",focusableButton:"shared_module_focusableButton__63d26f6d"};const Gc={[Kn.PRIMARY]:"Button_module_primary__21a82d88",[Kn.ALTERNATIVE]:"Button_module_alternative__21a82d88",[Kn.CUSTOM]:"Button_module_customColor__21a82d88"},zc={[jn.MD]:"Button_module_md__21a82d88",[jn.SM]:"Button_module_sm__21a82d88",[jn.XS]:"Button_module_xs__21a82d88",[jn.CUSTOM]:"Button_module_customSize__21a82d88"},jc={[jn.MD]:"Button_module_iconMd__21a82d88",[jn.SM]:"Button_module_iconSm__21a82d88"},Kc=Ve((e,t)=>{let{children:n,className:i,color:o=Kn.PRIMARY,size:r=jn.MD,focusable:a=!0,icon:s,iconPosition:c=Xn.LEFT,iconSize:d=jn.SM,type:u}=e,p=Oe(e,["children","className","color","size","focusable","icon","iconPosition","iconSize","type"]);const _=dn("Button_module_button__21a82d88",a&&Yc.focusable,Gc[o],zc[r],s&&"Button_module_icon__21a82d88",s&&jc[d],s&&c===Xn.RIGHT&&"Button_module_iconRight__21a82d88",i);return ke("button",l(l({className:_,ref:t,type:u||Zn.BUTTON},p),{},{children:[c===Xn.LEFT&&s,n&&ke("span",{className:"Button_module_buttonChildren__21a82d88",children:n}),c===Xn.RIGHT&&s]}))});const Xc=({children:e,className:t,color:n,style:i,type:o})=>{const r=$d(e=>e.displayList.progressBar),a=dn("Banner_module_banner__8c1c5dd5",!r&&"Banner_module_progressBarHidden__8c1c5dd5",t);return ke("div",{className:a,style:l(l({},i),{},{background:n}),"data-banner-type":o,children:e})};const Zc=["Shift","Tab"],Jc=!!o.iOS&&"SearchInput_module_mobileSafari__a1ee8a63",Qc=Ve(({ariaLabel:e,onChange:t,onEnter:n,onSearchIterate:i,initialValue:o,numSearchResults:r,minSearchLen:a=0,ariaControls:s,ariaExpanded:c,disabled:d,placeholder:u},p)=>{var _,v;const[m,f]=Me(o),[h,g]=Me(!1),[b,y]=Me(0),E=Ue(null),C=(null==m?void 0:m.length)>0,T=ud("Shift");u=null!==(_=u)&&void 0!==_?_:"Search",e=null!==(v=e)&&void 0!==v?v:"Search";const w=()=>{E.current&&E.current.focus()};He(p,()=>({inputElement:E.current,setInputValue:f}));const L=()=>{f(""),t&&t(""),n&&n(""),y(0),w()},S=e=>{let t;null==e||e.preventDefault(),null==e||e.stopPropagation(),t=b<r-1?b+1:0,y(t),i&&i(t)},A=e=>{let t;null==e||e.preventDefault(),null==e||e.stopPropagation(),t=b>0?b-1:r-1,y(t),i&&i(t)},k=dn("SearchInput_module_inputForm__a1ee8a63",C&&"SearchInput_module_active__a1ee8a63"),P=dn(Ln.EXCLUDE_GLOBAL_BUTTON_STYLES,"SearchInput_module_searchButton__a1ee8a63",Yc.focusableButton),I=0===r?"0/0":`${b+1}/${r}`;return(ke("form",{role:"search","aria-label":e,className:k,"data-component-type":"SearchInput","data-focused":`${h}`,"data-disabled":`${d}`,onReset:()=>L(),onSubmit:e=>{e.preventDefault(),n&&n(m),T?A():S()},onClick:w,children:[!C&&ke("div",l(l({"data-icon":"search",className:"SearchInput_module_searchIcon__a1ee8a63"},on(w)),{},{children:ke(gc,{name:fc.SEARCH})})),ke("input",{dir:"auto",ref:E,role:"combobox",className:Jc,onFocus:()=>g(!0),onBlur:()=>g(!1),onKeyDown:e=>{Zc.includes(e.key)||e.stopPropagation()},"aria-expanded":c,"aria-controls":s,onInput:e=>{e.preventDefault(),f(e.target.value),e.target.value.length>a&&y(0),t&&t(e.target.value)},value:m,placeholder:u,disabled:d}),C&&ke(Be,{children:[ke("div",{"data-purpose":"search-item",className:"SearchInput_module_searchItem__a1ee8a63",children:I}),ke(Kc,l(l({},on(A)),{},{"data-purpose":"decrement-search","aria-label":"Go to previous search result",icon:ke(gc,{name:fc.CHEVRON_UP}),size:jn.CUSTOM,className:P,disabled:d})),ke(Kc,l(l({},on(S)),{},{"data-purpose":"increment-search","aria-label":"Go to next search result",icon:ke(gc,{name:fc.CHEVRON_DOWN}),size:jn.CUSTOM,className:P,disabled:d})),ke(Kc,l(l({},on(L)),{},{"data-icon":"close","data-purpose":"close","aria-label":"Clear Search Results",icon:ke(gc,{name:fc.CLOSE_CIRCLE,"data-icon":"close"}),size:jn.CUSTOM,type:Zn.RESET,className:P,disabled:d}))]})]}))});const ed=e=>{let{className:t="",size:n=ti.SM}=e,i=Oe(e,["className","size"]);const o=dn(wn.VP_SPIN,n===ti.LG&&"Spinner_module_lg__8e25942d",n===ti.SM&&"Spinner_module_sm__8e25942d",t);return ke(gc,l({name:fc.SPINNER,className:`Spinner_module_spinner__8e25942d ${o}`},i))};let td;!function(e){e.RTL="rtl",e.LTR="ltr"}(td||(td={}));const nd={black:"#000",red:"#f00",yellow:"#ff0",green:"#0f0",blue:"#00f",white:"#fff",cyan:"#0ff",magenta:"#f0f"};const id=({cues:e,language:t,direction:n,className:i,fontSize:o,fontFamily:a,fontOpacity:s,color:c,windowOpacity:d,windowColor:u,bgOpacity:p,bgColor:_,edgeStyle:v,height:m,style:f={}})=>{const h=cr(),g=(e,t)=>{const n=new r(nd[e]||e);return n.alpha=t/100,n.rgba},b=l(l(l(l(l({},{fontSize:`${(e=>Math.max(10,Math.round(.045*m*e)))(o)}px`}),(()=>{const e=((e,t)=>h.fontFamily.items.find(e=>e.id===t))(0,a);return{fontVariant:"small_capitals"===e.id?"small-caps":"initial",fontFamily:e.value}})()),{color:g(c,s)}),(()=>{const e=`0, 0, 0, ${Number(s)/100}`;let t="none";switch(v){case"shadow":t=`2px 2px 2px rgba(${e})`;break;case"outline":t=`1px 1px 0 rgba(${e}), -1px 1px 0 rgba(${e}), 1px -1px 0 rgba(${e}), -1px -1px 0 rgba(${e})`;break;case"raised":t=`rgba(${e}) 1px 1px, rgba(${e}) 1.5px 1.5px`;break;case"depressed":t=`rgba(${e}) -1px -1px, rgba(${e}) -1.5px -1.5px`;break;default:t="none"}return{textShadow:t}})()),f),y=l({},{backgroundColor:g(u,d)}),E=l({},{background:g(_,p)}),C=dn(wn.VP_CAPTIONS,"CaptionsRenderer_module_captions__63d9c011",i),T=(()=>{let t=[];return e.forEach(e=>{const n=e.html.split("<br>");t=t.concat(n)}),t})();return ke("div",{className:C,"aria-live":"assertive",lang:t,dir:n,style:b,children:ke("span",{className:"CaptionsRenderer_module_captionsWindow__63d9c011",style:y,children:T.map(e=>ke("span",{className:`CaptionsRenderer_module_captionsLine__63d9c011 ${wn.VP_CAPTIONS_LINE}`,style:E,dangerouslySetInnerHTML:{__html:e}},e))})})};const od=Ve(({children:e,visible:t,ariaLabelledby:n},i)=>ke("div",{role:"dialog","aria-labelledby":n,className:`ToastBase_module_toast__8e90acbc ${t?"ToastBase_module_visible__8e90acbc":""}`,ref:i,children:e})),rd=e=>{const{setMenuEventFromKeyboard:t}=De(bc);return{onClick:n=>{t(!1),n.preventDefault(),n.stopPropagation(),e(n)},onKeyDown:n=>{t(!0),["Enter"," "].includes(n.key)&&(n.preventDefault(),n.stopPropagation(),e(n))}}},ad=()=>{const e=$d(e=>e.playback.paused),t=$d(e=>e.playback.scrubbing),n=$d(e=>e.playback.scrubbingByFrame),i=$d(e=>e.playback.playInitiated),o=$d(e=>e.playback.isChromecastPlaying),r=$d(e=>e.playback.isChromecastConnected),a=$d(e=>e.playback.buffering),s=$d(e=>e.playback.isAdPlaying),l=$d(e=>e.embed.isTrailer),c=$d(e=>e.embed.autoPlay),d=$d(e=>e.displayList.outro),u=$d(e=>e.displayList.ad),p=l&&!i;let _=Ni.PLAY;p?_=Ni.TRAILER:c&&(_=Ni.PAUSE);const[v,m]=Me(_);return r&&m(o?Ni.PAUSE:Ni.PLAY),u&&m(s?Ni.PAUSE:Ni.PLAY),Ie(()=>{d?m(Ni.REPLAY):t&&!d&&m(e?Ni.PLAY:Ni.PAUSE)},[d]),Ie(()=>{t&&!n||a||p||r||d||u||m(e?Ni.PLAY:Ni.PAUSE)},[e,a,p,r,d,u]),Ie(()=>{i&&m(Ni.PAUSE)},[i]),{buttonState:v,setButtonState:m}};let sd;function ld(){}!function(e){e.IDLE="idle",e.LOADING="loading",e.LOADED="loaded",e.ERROR="error"}(sd||(sd={}));const cd=e=>{const[t,n]=Me(sd.IDLE),i=Ue();return{readyState:t,load:xe(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(ke){return Promise.reject(ke)}}}((function(){if(null==i||!i.current)return function(e){if(e&&e.then)return e.then(ld)}(function(t,o){try{var r=function(){let t;return n(sd.LOADING),function(n,i){var o=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(_i(e),(function(e){t=e}));return o&&o.then?o.then(i):i()}(0,(function(){i.current=t,n(sd.LOADED)}))}()}catch(ke){return o()}return r&&r.then?r.then(void 0,o):r}(0,(function(e){n(sd.ERROR)})))})),[e]),module:(null==i?void 0:i.current)||null}},dd=(e,t,n)=>{Ie(()=>{function i(n){n.key!==e&&n.code!==e||t(n)}function o(t){t.key!==e&&t.code!==e||!n||n(t)}return window.addEventListener("keydown",i),n&&window.addEventListener("keyup",o),()=>{window.removeEventListener("keydown",i),n&&window.removeEventListener("keyup",o)}},[t,n,e])},ud=e=>{const[t,n]=Me(!1);return dd(e,()=>{n(!0)},()=>{n(!1)}),t},pd=()=>{const e=$d(e=>e.config);return xe((t,n,i={})=>{Pa(t,e,n,i)},[e])};let _d;!function(e){e[e.AUTO=0]="AUTO",e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER"}(_d||(_d={}));const vd=()=>{const e=$d(e=>e.embed.playButtonPosition),t=$d(e=>e.embed.playbar),n=$d(e=>e.appearance.playerSizeMode),i=$d(e=>e.appearance.isVerticalVideo),{buttonState:o}=ad(),r=n===Ai.TINY,a=n===Ai.MINI&&i;return o===Ni.REPLAY?_d.BOTTOM:r||a||e===_d.CENTER?_d.CENTER:e===_d.BOTTOM||e!==_d.AUTO||t?_d.BOTTOM:_d.CENTER};function md(e){var t,n,i,r,a,s;const{config:c,events:d,subscribe:u,set:p,get:_}=e,{embed:v,request:m,video:f}=c,h=!!v.autoplay,g=!!(v.autoplay&&(null==(t=m.flags)?void 0:t.autohide_controls)),b=!!v.settings.playbar,y=!!v.settings.like,E=!!v.settings.share,C=!!(null==(n=v.settings.share)?void 0:n.embed_only),T=!!v.settings.collections,w=!!v.settings.watch_later,L=!(null==(i=v.settings)||!i.watch_trailer||v.autoplay||!v.on_site),S=!(!v.settings.speed||!e.backbone.supportsPlaybackRate),A=!!v.keyboard,k=!!v.settings.logo,P=!!v.settings.volume,I=!!v.settings.fullscreen,O=!!(null==(r=f.live_event)||null==(a=r.settings)?void 0:a.hide_live_label),R=!!(null==(s=f.live_event)?void 0:s.show_viewer_count),N=!!v.settings.custom_logo,M=function(e){var t;const{config:n}=e;let i={customLogoUrl:null,customLogoImg:null,customLogoSticky:!1,customLogoWidth:null,customLogoHeight:null};if(!(null==(t=n.embed.settings.custom_logo)?void 0:t.img))return i;const r=n.embed.settings.custom_logo;let a=r.img;return o.devicePixelRatio>=2&&(a=a.replace(/(mw|mh)=(\d+)/g,(function(e,t,n){return t+"="+2*parseInt(n,10)}))),i={customLogoUrl:bi(r.url),customLogoImg:a,customLogoSticky:r.sticky,customLogoWidth:r.width,customLogoHeight:r.height},i}(e),D=!!v.settings.background,x=0!==v.settings.controls,B=!!v.transparent,V=!!v.on_site,U=fd(e),F=!!v.settings.audio_tracks,H=!!v.settings.airplay,q=!!v.settings.chapters,W=!!v.settings.chromecast,$=!!v.settings.cc,Y=!!v.settings.quality,G=v.settings.play_button_position,z=!!U;return z&&d.fire(Bt._rightContentAreaEnabled),u(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},t=>{var n,i;const o=null==(n=_())||null==(i=n.embed)?void 0:i.transcript;let r=fd(e);const a=t&&hd(e)&&!o,s=!t&&!r&&o;a?(r=!0,d.fire(Bt._rightContentAreaEnabled)):s&&d.fire(Bt._rightContentAreaDisabled),p(e=>({embed:l(l({},e.embed),{},{rightContentAreaEnabled:r,transcript:r})}))}),{autoPlay:h,autoHideControls:g,playbar:b,like:y,share:E,embedOnlyShare:C,collections:T,watchLater:w,isTrailer:L,speedChangeEnabled:S,keyboard:A,showVimeoLogo:k,volume:P,fullscreen:I,hideLiveLabel:O,showViewerCount:R,customLogo:N,customLogoFields:M,background:D,controls:x,transparent:B,transcript:U,rightContentAreaEnabled:z,onsite:V,multipleAudioTracks:F,airplay:H,chapters:q,cc:$,chromecast:W,quality:Y,playButtonPosition:G}}function fd(e){const t=hd(e);return function({config:e}){return Ji(e)!==Ui.SINGLE_VIDEO_VIEW_RECIPIENT}(e)&&t}function hd(e){var t;const{config:n,backbone:i}=e,{embed:o}=n;return!!o.settings.transcript&&(null==(t=i.textTracks)?void 0:t.length)>0}const gd=[{id:.5,label:"0.5x"},{id:.75,label:"0.75x"},{id:1,label:"Normal"},{id:1.25,label:"1.25x"},{id:1.5,label:"1.5x"},{id:2,label:"2x"}],bd=Do;function yd(e){var t,n;const{config:i,backbone:r}=e,a=Ed(e),s=!!o.airPlay,l=!r||r.supportsTextTracks,c=i.embed.quality?pn(r.qualities,i.embed.quality):r.qualities,d=Cd(r.qualities,i.embed.quality),u=Ld(i);return{playInitiated:!1,targetTimeReached:!1,scrubbing:!1,scrubbingByFrame:!1,paused:!i.embed.autoplay||(null==(t=i.video.live_event)||null==(n=t.archive)?void 0:n.status)===vr.done,buffering:!1,loadedTime:0,currentTime:r.currentTime,liveEdgeTime:r.liveEdgeTime,atLiveEdge:r.atLiveEdge,liveTailTime:r.liveTailTime,hasFragments:u,currentFragment:e.fragmentsHandler.currentFragment,duration:i.video.duration,qualities:c,currentQuality:d,playbackRates:a,loadedMetadata:!1,pictureInPictureEnabled:null==r?void 0:r.pictureInPictureEnabled,supportsAirPlay:s,supportsTextTracks:l,supportsStereoscopic:Td(e),supportsChromecast:Qi(e.config),isChromecastConnected:!1,isChromecastPlaying:!1,isChromecastBuffering:!1,isChromecastSetupWithAvailableDevices:wd(),isAdPlaying:!1,supportsSettingVolume:!r||r.supportsSettingVolume,volume:r.volume,muted:r.muted||!!i.embed.muted,audioTracks:r.audioTracks}}function Ed(e){const{backbone:t,config:n}=e;let i=[];return t.supportsPlaybackRate&&n.embed.settings.speed&&(i=pn(gd,`${t.playbackRate}`)),i}function Cd(e,t){var n;if(t){var i;const n="string"==typeof t?t:t.quality||`${t.height}p`,o=null==e||null==(i=e.find(e=>e.id===n))?void 0:i.label;if(o)return o}return null==e||null==(n=e.find(e=>e.active))?void 0:n.label}function Td(e){const{config:t}=e;return"disable"!==t.video.privacy&&(o.webvr||o.stereoscopic)&&t.video.spatial&&Da(t,"webvr").group}function wd(){return bd.castState!==wi.NOT_SETUP&&bd.castState!==wi.NO_DEVICES_AVAILABLE}function Ld(e){var t;return!z(null==(t=e.embed.interactive)?void 0:t.fragments)}function Sd({config:e}){const{user:t,video:n}=e;return{liked:t.liked,loggedIn:t.logged_in,watchLater:t.watch_later,ownerName:n.owner.name,collected:!1,shared:!1}}const Ad={isVOD:!1,vodButtonVisible:!1};function kd(e){const{video:t,embed:n,user:i,request:o}=e.config;let r=l({},Ad);if(t.vod&&"purchase_options"in t.vod&&t.vod.purchase_options.length){const e=!0,a=t.vod.is_coming_soon,s="ondemand.main"===n.context||"Vimeo\\Controller\\OnDemandController.main"===n.context,l=t.vod&&i.purchased;let c=n.settings.vod&&sn(t.vod.countries,o.country);c&&a&&s&&(c=!1);const[d]=t.vod.purchase_options;let u=null;d&&(u=function(e,t,n,i){var o=i.label_string;return o?(o=function(e,t,n){let i=n.USD;return t in n&&(i=n[t]),-1!==e.indexOf("${price}")?e.replace("${price}",i):-1!==e.indexOf("{PRICE}")?e.replace("{PRICE}",i):e}(o=function(e,t){return void 0!==e&&void 0!==e[t]?e[t]:t}(e,o),n,i.prices),i.expires_in_duration_str&&(o=o.replace("{TIME}",i.expires_in_duration_str)),i.available_on_formatted&&(o=o.replace("{DATE}",i.available_on_formatted)),o):null}(o.dynamic_translation_map,0,o.currency,d)),r.isVOD=e,r.vodLabel=u,r.purchased=!!l,r.productId=d.product_id,r.isExpiring=!!d.expiring,r.vodButtonVisible=c}return r}function Pd({config:e}){const{badge:t}=e.embed.settings;let n=o.devicePixelRatio>1?"img_2x":"img";return o.svg&&t.svg&&(n="svg"),{link:t.link,img:t[n],margin:t.margin||!1,width:t.width,height:t.height,name:t.name,shadow:!!t.shadow,id:t.id}}function Id(e){return{chapters:Array.from(e.backbone.chapters),activeChapterId:null}}function Od(e){var t,n,i,o,r;const{backbone:a,config:s}=e,c=a.enabledTextTrack,d=a.textTracks,u=!!s.video.live_event,{textTracks:p,activeTextTrackId:_,language:v,direction:m}=Rd(d,u,c),f=Nd(e),h=(null==d||null==(t=d.filter(e=>e.trackElement))?void 0:t.map(e=>e.trackElement))||[],g=1===(null==s||null==(n=s.request)||null==(i=n.flags)?void 0:i.ott)||"dev"===(null==s||null==(o=s.request)||null==(r=o.build)?void 0:r.js)||"gedevplayer.vimeows.com"===(null==s?void 0:s.player_url),b=(d||[]).reduce((e,t)=>t.rtl?e.concat(t.id):e,[]);return l({textTracks:p,textTrackEls:h,activeTextTrackId:_,requiresCrossOrigin:g,activeCues:[],language:v,direction:m,rtlTracks:b},f)}function Rd(e,t,n){let i=[],o=null==n?void 0:n.id;return(null==e?void 0:e.length)&&(o||(o="off"),i.push({label:"Off",id:"off",active:"off"===o}),e.forEach(e=>{let o="CC"===e.label.substring(e.label.length-2),r="captions"!==e.kind||o?"":" CC",a=t?"Display Captions":e.label+r;const s=`${e.id}`,l={label:a,id:s,active:(null==n?void 0:n.id)===s};i.push(l)})),{textTracks:i,activeTextTrackId:o,language:null==n?void 0:n.language,direction:Md(n)}}function Nd(e){const{store:t}=e,n=cr();return Object.keys(n).forEach(e=>{const i=t.get(`ui.captions.${e}`);n[e]=i}),n}function Md(e){return e?e.rtl?td.RTL:td.LTR:null}function Dd(e){var t;const{config:n}=e,i=n.video.live_event,o=null==i?void 0:i.status,r=!!o,a=null==i||null==(t=i.archive)?void 0:t.status,s=Bd(o),c=xd(a),d=s.isStarted&&yr(i);return l(l(l({isLiveEvent:r,isPlayable:d},s),c),{},{dvrEnabled:null==i?void 0:i.dvr,viewerCount:et(0),liveStatsRequestSucceeded:null})}function xd(e){return{isArchived:"done"===e}}function Bd(e){return{isStarted:e===mr.started,isEnded:e===mr.ended}}function Vd(e){const{config:t}=e,{interactive:n,wirewax:i}=t.embed;return{hotspots:[],demoEnd:null==n?void 0:n.demo_end,enabled:!!i,ready:!1,showMarkers:!!(null==n?void 0:n.markers)}}let Ud;!function(e){e.EMPTY="empty",e.QOE_SURVEY="qoe_survey"}(Ud||(Ud={}));const Fd="qoe_survey_test",Hd={control:"control",variant:"variant"},qd=.5,{Provider:Wd,useStore:$d,useStoreApi:Yd}=We(),Gd=({player:e,children:t})=>{const[n,i]=Me(!1);return _c(()=>i(!0),e),n?ke(Wd,{createStore:()=>$e(Ye((t,n,{subscribe:i})=>{const o=l(l({set:t,get:n,subscribe:i},e),{},{get backbone(){return e.backbone},get displayContext(){return e.displayContext},get config(){return e.config},get fragmentsHandler(){return e.fragmentsHandler}}),{config:r,element:s,expose:c,uuid:d,verifyConfig:u,events:p}=e;return l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l({},(e=>{const{set:t,events:n}=e,i=Nl(e);return n.on(Bt._debugDataChange,()=>{t(()=>({debug:Nl(e)}))}),{debug:i}})(o)),(e=>{const{set:t,events:n}=e,i=Wl(e),o=(e,n)=>{t(t=>({controlBar:l(l({},t.controlBar),{},{[e]:n})}))};return n.on(Bt._configChanged,()=>{t(()=>({controlBar:Wl(e)}))}),n.on(St._overrideControlbarBehavior,e=>{o("overrideBehavior",e)}),{controlBar:i,setControlBar:o}})(o)),dc(o)),(e=>{const{store:t,set:n,events:i,element:o,backbone:r,config:a}=e,s=uc(e),c=(e,t)=>n(n=>({appearance:l(l({},n.appearance),{},{[e]:t})}));return t.watch("ui.player.breakpoint",e=>c("playerBreakpoint",e)),t.watch("ui.player.mode",e=>c("playerSizeMode",e)),t.watch("ui.app.breakpoint",e=>c("appBreakpoint",e)),t.watch("ui.app.mode",e=>c("appSizeMode",e)),t.watch("ui.controlbar.isMenuFullWidth",e=>c("isMenuBlockingUI",e)),t.watch("ui.player.isVerticalVideo",e=>{c("isVerticalVideo",e)}),t.watch("ui.controlbar.isMenuVerticalVideoMode",e=>c("isMenuVerticalVideoMode",e)),t.watch("ui.player.width",()=>{c("boundingClientRect",st(o))}),t.watch("ui.controlbar.doMenuItemsWrap",e=>{c("shouldMenuItemsWrap",e)}),t.watch("ui.player.width",e=>{const{videoHeight:n}=pc(e,t.get("ui.player.height"),a.video.width,a.video.height);c("videoHeight",n)}),t.watch("ui.player.height",e=>{const{videoHeight:n}=pc(t.get("ui.player.width"),e,a.video.width,a.video.height);c("videoHeight",n)}),t.watch("ui.container.height",e=>{c("containerHeight",e)}),i.on(Bt._willEnterFullscreen,()=>c("fullscreen",!0)),i.on(Bt._didExitFullscreen,e=>{n(t=>{const n={fullscreen:!1,forceExitedFullscreen:t.appearance.forceExitedFullscreen};return e||(n.forceExitedFullscreen=!0),{appearance:l(l({},t.appearance),n)}})}),i.on(h.WEBKIT_END_FULLSCREEN,()=>{c("fullscreen",!1)}),i.on(Bt._airPlayActivated,()=>{n(e=>({appearance:l(l({},e.appearance),{},{showAirPlayPicker:!0})}))}),i.on(Bt._airPlayDeactivated,()=>{n(e=>({appearance:l(l({},e.appearance),{},{showAirPlayPicker:!1})}))}),i.on(St._reset,()=>{n(()=>({appearance:uc(e)}))}),i.on(Bt._airPlayActivated,()=>{n(e=>({appearance:l(l({},e.appearance),{},{externalDisplay:!0})}))}),i.on(Bt._airPlayDeactivated,()=>{n(e=>({appearance:l(l({},e.appearance),{},{externalDisplay:!1})}))}),i.on(h.ENTER_PICTURE_IN_PICTURE,()=>{n(e=>({appearance:l(l({},e.appearance),{},{pictureInPictureActive:!0})}))}),i.on(h.LEAVE_PICTURE_IN_PICTURE,()=>{n(e=>({appearance:l(l({},e.appearance),{},{pictureInPictureActive:!1})}))}),i.on(x.WEBVR_ENTER,()=>{n(e=>({appearance:l(l({},e.appearance),{},{stereoscopicEnabled:!0})}))}),i.on(x.WEBVR_EXIT,()=>{n(e=>({appearance:l(l({},e.appearance),{},{stereoscopicEnabled:!1})}))}),i.on(St._changeColor,(e,t)=>{const i=Zt[t];n(t=>({appearance:l(l({},t.appearance),{},{[i]:li(e)})}))}),{appearance:s,setAppearance:(e,t)=>{"fullscreen"!==e?"pictureInPictureActive"!==e?"showAirPlayPicker"!==e?("stereoscopicEnabled"===e&&i.fire(Bt._stereoscopicButtonPressed),"transcriptNavActive"===e&&i.fire(Bt._transcriptNavActive,t),c(e,t)):i.fire(Bt._airPlayButtonPressed):i.fire(r.pictureInPictureActive?St._deactivatePictureInPicture:St._activatePictureInPicture):i.fire(Bt._fullscreenButtonPressed)}}})(o)),(e=>{const{set:t,events:n}=e,i=md(e);return n.on(Bt._configChanged,()=>{t(()=>({embed:md(e)}))}),{embed:i}})(o)),Vl(o)),(e=>{const{events:t,set:n}=e,i=()=>{clearTimeout(ql),ql=setTimeout(()=>{n(e=>({displayList:l(l({},e.displayList),{},{nudgeNotification:!1})})),t.fire(Bt._nudgeEnded)},1050)},o=e=>{i(),n(t=>({displayList:l(l({},t.displayList),{},{nudgeNotification:!0}),nudge:e}))};return t.on(Bt._showNudgeNotification,({direction:e,time:t})=>{o({direction:e,time:t})}),{nudge:{direction:null,time:null},setNudge:(e,t)=>{i(),n(n=>({nudge:l(l({},n.nudge),{},{[e]:t})}))},setNudgeProperties:o}})(o)),(e=>{const{events:t,set:n,get:i,backbone:o}=e,r=(e,t)=>{n(n=>({playback:l(l({},n.playback),{},{[e]:t})}))},a=yd(e);return t.on(St._reset,()=>{n(()=>({playback:yd(e)}))}),t.on(Bt._configChanged,t=>{t&&n(()=>({playback:yd(e)}))}),t.on(f,()=>r("playInitiated",!0)),t.on(h.PLAY,()=>{n(e=>({playback:l(l({},e.playback),{},{scrubbing:!1,scrubbingByFrame:!1,paused:!1,playInitiated:!0})}))}),t.on(Bt._playButtonPressed,()=>r("paused",!1)),t.on([h.PAUSE,Bt._paused,Bt._pauseButtonPressed],()=>r("paused",!0)),t.on(Bt._targetTimeReached,()=>r("targetTimeReached",!0)),t.on(g.BUFFER_STARTED,()=>r("buffering",!0)),t.on(g.BUFFER_ENDED,()=>r("buffering",!1)),t.on(Bt._scrubbingStarted,e=>{r("scrubbing",!0),"keyboard"===(null==e?void 0:e.seekType)&&(null==e?void 0:e.isFrameByFrame)&&r("scrubbingByFrame",!0)}),t.on(Bt._scrubbingEnded,()=>{r("scrubbing",!1),r("scrubbingByFrame",!1)}),t.on(St._setTime,e=>{n(t=>{const n=t.liveEvent.dvrEnabled?t.playback.liveTailTime:0,i=t.liveEvent.dvrEnabled?t.playback.liveEdgeTime:t.playback.duration,o=dt(e,n,i);return{playback:l(l({},t.playback),{},{currentTime:o})}})}),t.on(h.TIME_UPDATE,({currentTime:e,timeProgress:t,liveEdgeTime:i,atLiveEdge:o,liveTailTime:r})=>{n(n=>{const a=Math.min(mt(100*t),100);return e=e||n.playback.duration*a||0,{playback:l(l({},n.playback),{},{currentTime:e,liveEdgeTime:i,atLiveEdge:o,liveTailTime:r})}})}),t.on(Bt._ended,()=>{const e=i().liveEvent.dvrEnabled&&!i().playback.atLiveEdge,t=i().liveEvent.dvrEnabled&&i().playback.atLiveEdge;e||n(e=>({playback:l(l({},e.playback),{},{currentTime:t?0:e.playback.currentFragment.duration})}))}),t.on(h.PROGRESS,({loaded:e})=>{n(t=>({playback:l(l({},t.playback),{},{loadedTime:e})}))}),t.on([Bt._fragmentChanged,h.DURATION_CHANGE],()=>{const t=i().playback.currentFragment;if(!qe(t,e.fragmentsHandler.currentFragment)){const t=Ld(e.config);n(n=>({playback:l(l({},n.playback),{},{hasFragments:t,currentFragment:e.fragmentsHandler.currentFragment})}))}}),t.on(h.LOADED_METADATA,()=>{n(e=>({playback:l(l({},e.playback),{},{loadedMetadata:!0})}))}),t.on([g.STREAM_CHANGE,R],e=>{const t={currentQuality:Cd(o.qualities,e)};i().liveEvent.isLiveEvent&&Object.assign(t,{qualities:o.qualities}),n(e=>({playback:l(l({},e.playback),t)}))}),t.on(Bt._qualityChanged,e=>{n(t=>({playback:l(l({},t.playback),{},{qualities:o.qualities,currentQuality:Cd(o.qualities,e)})}))}),t.on(g.AUDIO_TRACK_CHANGED,()=>r("audioTracks",o.audioTracks)),t.once(A,()=>r("pictureInPictureEnabled",o.pictureInPictureEnabled)),t.on(Bt._airPlayAvailable,()=>{n(e=>({playback:l(l({},e.playback),{},{supportsAirPlay:!0})}))}),t.on(Bt._airPlayNotAvailable,()=>{n(e=>({playback:l(l({},e.playback),{},{supportsAirPlay:!1})}))}),t.on(Bt._playbackRateChanged,()=>{n(t=>({playback:l(l({},t.playback),{},{playbackRates:Ed(e)})}))}),t.on(Bt._volumeChanged,e=>{n(t=>({playback:l(l({},t.playback),{},{volume:e})}))}),t.on(Bt._mutedChanged,e=>{n(t=>({playback:l(l({},t.playback),{},{muted:e})}))}),t.on(g.AVAILABLE_STREAMS_CHANGED,()=>{n(e=>({playback:l(l({},e.playback),{},{qualities:o.qualities,currentQuality:Cd(o.qualities)})}))}),bd.on(No.connected,()=>{n(e=>({playback:l(l({},e.playback),{},{isChromecastConnected:!0})}))}),bd.on(No.disconnected,()=>{n(e=>({playback:l(l({},e.playback),{},{isChromecastConnected:!1})}))}),bd.on(No.initialized,()=>{n(e=>({playback:l(l({},e.playback),{},{isChromecastSetupWithAvailableDevices:wd()})}))}),bd.on(No.castStateChanged,()=>{n(e=>({playback:l(l({},e.playback),{},{isChromecastSetupWithAvailableDevices:wd()})}))}),bd.on(No.playing,()=>{n(e=>({playback:l(l({},e.playback),{},{isChromecastPlaying:!0,isChromecastBuffering:!1})}))}),bd.on(No.buffering,()=>{n(e=>({playback:l(l({},e.playback),{},{isChromecastBuffering:!0})}))}),bd.on([No.error,No.idle,No.paused,No.ended,No.disconnected],()=>{n(e=>({playback:l(l({},e.playback),{},{isChromecastPlaying:!1,isChromecastBuffering:!1})}))}),bd.on(No.error,()=>{n(e=>({playback:l(l({},e.playback),{},{supportsChromecast:!1})}))}),t.on([Bt._adClicked,Bt._adPaused,Bt._adComplete,Bt._adError,Bt._adSkipped,Bt._allAdsCompleted],()=>{n(e=>({playback:l(l({},e.playback),{},{isAdPlaying:!1})}))}),t.on([Bt._adStarted,Bt._adResumed],()=>{n(e=>({playback:l(l({},e.playback),{},{isAdPlaying:!0})}))}),{playback:a,setPlayback:(e,a,s)=>{if("paused"!==e){if("qualities"===e)return t.fire(St._changeQuality,a),void n(e=>{const t=pn(e.playback.qualities,a);return{playback:l(l({},e.playback),{},{qualities:t,currentQuality:Cd(t)})}});if("playbackRates"===e)return t.fire(St._changePlaybackRate,a),void n(e=>{const t=pn(e.playback.playbackRates,a);return{playback:l(l({},e.playback),{},{playbackRates:t})}});if("scrubbing"!==e)if("currentTime"!==e)if("volume"!==e)if("muted"!==e)if("audioTracks"!==e)r(e,a);else{const e=o.audioTracks.find(e=>e.id===`${a}`);e&&(o.enableAudioTrack(e),t.fire(St._changeAudioTrack,e))}else t.fire(St._changeMuted,a);else t.fire(St._changeVolume,a);else switch(null==s?void 0:s.seekType){case"interactive-marker":t.fire(St._seek,a),t.fire(Bt._playButtonPressed),t.fire(Bt._interactiveMarkerClicked,{type:"interactive-marker",action:null==s?void 0:s.action});break;case"nudge":t.fire(Bt._nudgeAttempted),t.fire(St._seek,a),i().playback.playInitiated||t.fire(Bt._playButtonPressed);break;default:t.fire(St._seek,a)}else a?t.fire(Bt._scrubbingStarted):t.fire(Bt._scrubbingEnded)}else!1===a?t.fire(Bt._playButtonPressed):t.fire(Bt._pauseButtonPressed)}}})(o)),(e=>{const{events:t}=e,n=(t,n)=>{e.set(e=>({user:l(l({},e.user),{},{[t]:n})}))};return t.on(Bt._liked,()=>n("liked",!0)),t.on(Bt._unliked,()=>n("liked",!1)),t.on(Bt._addedToWatchLater,()=>n("watchLater",!0)),t.on(Bt._removedFromWatchLater,()=>n("watchLater",!1)),t.on(Bt._configChanged,(t,n)=>{e.set(()=>({user:Sd({config:n})}))}),{user:Sd(e),setUser:(i,o)=>{if("liked"!==i||!0!==o)if("watchLater"!==i||!0!==o)if("collected"!==i)if("shared"!==i)n(i,o);else{const{share:n}=e.config.embed.settings,i=(null==n?void 0:n.embed_only)?Bt._embedButtonPressed:Bt._shareButtonPressed;t.fire(i)}else t.fire(Bt._collectionsButtonPressed);else t.fire(Bt._watchLaterButtonPressed);else t.fire(Bt._likeButtonPressed)}}})(o)),(e=>{const{set:t,get:n,events:i,config:o,subscribe:r}=e,a=kd(e);function s(e){e&&n().vod.vodButtonVisible?t(e=>({vod:l(l({},e.vod),{},{vodButtonVisible:!1})})):e||!n().vod.isVOD||n().vod.vodButtonVisible||t(e=>({vod:l(l({},e.vod),{},{vodButtonVisible:!0})}))}return r(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{s(e)}),r(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>s(e)),i.on(Bt._configChanged,(n,i)=>{t(()=>({vod:kd(l(l({},e),{},{config:i}))}))}),{vod:a,setVod:(e,n)=>{if("purchased"!==e||!0!==n)t(t=>({vod:l(l({},t.vod),{},{[e]:n})}));else{const[e]=o.video.vod.purchase_options;i.fire(Bt._vodButtonPressed,e.product_id)}}}})(o)),(e=>{const{set:t,get:n,events:i,config:o}=e,r=zl(e),a=(e,i)=>{if("purpose"!==e)t(t=>({overlay:l(l({},t.overlay),{},{[e]:i})}));else{const e=n().overlay.purpose===i?In.EMPTY:i;t(t=>({overlay:l(l({},t.overlay),{},{purpose:e})}))}};return i.on(Bt._overlayOpened,e=>{a("purpose",e)}),i.on(Bt._overlayClosed,()=>{a("purpose",In.EMPTY)}),i.on(St._showOverlay,e=>{xn(e)&&i.fire(Bt._overlayOpened,e)}),i.on(Bt._overlayCloseButtonPressed,()=>{xn(n().overlay.purpose)&&i.fire(Bt._overlayClosed)}),{overlay:r,setOverlay:(t,r)=>{if("purpose"!==t||r!==In.SHARE){if("purpose"===t&&r===In.EMPTY){if(xn(n().overlay.purpose))return void i.fire(Bt._overlayClosed);r=Dn(e.element)}a(t,r)}else{var s;const{embed:e}=o,t=(null==(s=e.settings.share)?void 0:s.embed_only)?Bt._embedButtonPressed:Bt._shareButtonPressed;i.fire(t)}}}})(o)),(e=>{const{set:t,events:n}=e,i=Ul(e);return n.on(Bt._configChanged,(n,i)=>{t(()=>({title:Ul(l(l({},e),{},{config:i}))}))}),{title:i}})(o)),(e=>{const{events:t,set:n}=e,i=Pd(e);return t.on(Bt._configChanged,(e,t)=>{n(()=>({badge:Pd({config:t})}))}),{badge:i,setBadge:(e,i)=>{"id"!==e?((e,t)=>{n(n=>({badge:l(l({},n.badge),{},{[e]:t})}))})(e,i):t.fire(Bt._badgePressed,i)}}})(o)),(e=>{const{set:t,events:n}=e,i=(e,n)=>{t(t=>({chapters:l(l({},t.chapters),{},{[e]:n})}))},o=Id(e),r=({backbone:e})=>{if(e.chaptersTrack){const t=()=>n.fire(Bt._chapterChanged,null==e?void 0:e.currentChapterID);e.chaptersTrack.addEventListener("cuechange",t)}};return r(e),n.on(Bt._chapterChanged,e=>{t(t=>({chapters:l(l({},t.chapters),{},{activeChapterId:e})}))}),n.on(g.CHAPTER_CUES_UPDATED,()=>i("chapters",Array.from(e.backbone.chapters))),n.on(Bt._configChanged,()=>{t(()=>({chapters:Id(e)})),r(e)}),{chapters:o,setChapters:(e,t,o)=>{"activeChapterId"!==e||"string"!=typeof t?i(e,t):n.fire(Bt._chapterSeekAttempted,parseFloat(t)+.001,null==o?void 0:o.type)}}})(o)),(e=>{const{set:t,get:n,events:i,backbone:o}=e,r=cr(),s=e=>{var i,r;const a=Rd(o.textTracks,null==(i=n())||null==(r=i.liveEvent)?void 0:r.isLiveEvent,e);t(e=>({captions:l(l({},e.captions),a)}))},c=Od(e);return i.on(Bt._captionsChanged,e=>{s(e)}),i.on(g.TEXT_TRACKS_AVAILABLE,()=>{s()}),i.on(Bt._configChanged,()=>{t(()=>({captions:Od(e)}))}),i.on(L,(e,n=[])=>{o.enabledTextTrack&&"disabled"!==(null==e?void 0:e.mode)&&t(e=>({captions:l(l({},e.captions),{},{activeCues:a(n)})}))}),i.on(St._turnCaptionsOff,()=>{t(e=>({captions:l(l({},e.captions),{},{activeCues:[]})}))}),{captions:c,setCaptions:(n,o)=>{if("activeTextTrackId"===n)return"off"!==o&&o?void i.fire(St._turnCaptionsOn,o):void i.fire(St._turnCaptionsOff);if(Bi.hasOwnProperty(n)){const a=r[n];return i.fire(St._changeCaptionsStyles,a,o),void t(t=>({captions:l(l({},t.captions),Nd(e))}))}((e,n)=>{t(t=>({captions:l(l({},t.captions),{},{[e]:n})}))})(n,o)},resetCaptionsStyles:()=>{i.fire(St._resetCaptionsStyles),t(t=>({captions:l(l({},t.captions),Nd(e))}))}}})(o)),(e=>{const{events:t,set:n,subscribe:i}=e,o=Dd(e),r=(e,t)=>{n(n=>({liveEvent:l(l({},n.liveEvent),{},{[e]:t})}))};t.on(Bt._configChanged,()=>{n(()=>({liveEvent:Dd(e)}))});const{EVENT_ACTIVE:a,EVENT_PENDING:s,EVENT_STARTED:c,EVENT_ENDED:d}=M,u={[a]:mr.active,[s]:mr.pending,[c]:mr.started,[d]:mr.ended};Object.keys(u).forEach(e=>t.on(e,()=>n(t=>({liveEvent:l(l({},t.liveEvent),Bd(u[e]))}))));const{ARCHIVE_STARTED:p,ARCHIVE_DONE:_,ARCHIVE_ERROR:v}=M,m={[p]:vr.started,[_]:vr.done,[v]:vr.error};return Object.keys(m).forEach(e=>t.on(e,()=>n(t=>({liveEvent:l(l({},t.liveEvent),xd(m[e]))})))),t.on(M.LIVE_STATS_SUCCESS,({viewerCount:e})=>{n(t=>({liveEvent:l(l({},t.liveEvent),{},{viewerCount:et(e),liveStatsRequestSucceeded:!0})}))}),t.on(M.LIVE_STATS_FAILURE,()=>{n(e=>({liveEvent:l(l({},e.liveEvent),{},{liveStatsRequestSucceeded:!1})}))}),t.on(Bt._liveEventSafeToPlay,()=>{r("isPlayable",!0)}),i(e=>{var t;return null==e||null==(t=e.liveEvent)?void 0:t.isStarted},e=>!e&&r("isPlayable",!1)),{liveEvent:o,setLiveEvent:r}})(o)),(e=>{const{events:t,set:n}=e;return t.on(Bt._webinarRegistrantBlocked,()=>{n(e=>({webinar:l(l({},e.webinar),{},{webinarRegistrantBlocked:!0})}))}),t.on(Bt._webinarRegistrantUnblocked,()=>{n(e=>({webinar:l(l({},e.webinar),{},{webinarRegistrantBlocked:!1})}))}),{webinar:{webinarRegistrantBlocked:!1},setWebinar:(e,t)=>{n(n=>({webinar:l(l({},n.webinar),{},{[e]:t})}))}}})(o)),(e=>{const{set:t,events:n}=e,i=Vd(e),o=e=>{e.embed.wirewax&&n.once(Bt._interactiveReady,({hotspots:e})=>{t(t=>({interactive:l(l({},t.interactive),{},{hotspots:e,ready:!0})}))})};return o(e.config),n.on(Bt._configChanged,(n,i)=>{n&&(n=>{o(n),t(()=>({interactive:Vd(e)}))})(i)}),{interactive:i,setInteractive:(e,n)=>{t(t=>({interactive:l(l({},t.interactive),{},{[e]:n})}))}}})(o)),(e=>{const{set:t,events:n,config:i}=e;return n.on(Bt._configChanged,()=>{t(()=>({cuePoints:{cuePoints:[]}}))}),i.embed.on_site&&(n.on(Bt._cuePointAdded,e=>{t(t=>{const n=t.cuePoints.cuePoints.concat(e);return{cuePoints:l(l({},t.cuePoints),{},{cuePoints:n})}})}),n.on(Bt._cuePointRemoved,e=>{t(t=>{const n=t.cuePoints.cuePoints.filter(t=>t.id!==e.id);return{cuePoints:l(l({},t.cuePoints),{},{cuePoints:n})}})})),{cuePoints:{cuePoints:[]},setCuePoints:(e,n)=>{t(t=>({cuePoints:l(l({},t.cuePoints),{},{[e]:n})}))}}})(o)),(e=>{const{set:t,get:n,events:i,subscribe:o,element:r,addABTest:a,config:s}=e,c={purpose:Ud.EMPTY};let d=function(e){const{request:t,video:n,embed:i}=e.config,{qoe_survey_forced:o,ott:r}=t.flags,{qoe_survey_vote:a}=t.cookie,{duration:s,live_event:l}=n;return!(!o&&(s<60&&!l||!Bn(i)||r||Vn(7776e6)<a/1e3||!(Math.random()<.01)))}(e);const u=(e,n)=>{t(t=>({toast:l(l({},t.toast),{},{[e]:n})}))},p=()=>{var e,t;d&&(null==(e=n())||null==(t=e.toast)?void 0:t.purpose)!==Ud.QOE_SURVEY&&(e=>{if(!e)return!1;const t=e.getBoundingClientRect(),n=t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth),i="visible"===document.visibilityState;return n&&i})(r)&&(Math.random()>qd&&!s.request.flags.qoe_survey_forced?a({test:Fd,group:Hd.control}):(a({test:Fd,group:Hd.variant}),u("purpose",Ud.QOE_SURVEY),i.fire(Bt._qoeSurveyPresented),d=!1))};return o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>{var t,i,o,r;const a=function(e,t){return t?6e5:Math.round(.4*e*1e3)}(null==(t=n())||null==(i=t.playback)?void 0:i.duration,null==(o=n())||null==(r=o.liveEvent)?void 0:r.isLiveEvent);e&&a&&setTimeout(p,a)}),{toast:c,setToast:u}})(o)),{},{config:r,element:s,name:(null==c?void 0:c.name)||Li.VimeoPlayer,uuid:d,verifyConfig:u,events:p,subscribe:i})})),children:t}):null};const zd=({children:e,text:t})=>{const n=Ue(t),[i,r]=Me(!1),[a,s]=Me(!1),c=()=>{a||s(!0)},d=()=>{i&&(c(),r(!1))},u=()=>{i||o.touch||(c(),r(!0))},p=xe(()=>{a&&s(!1)},[a]),_={className:"LabeledButton_module_box__e0f241d2",onMouseEnter:u,onMouseLeave:d,onFocus:u,onBlur:d},v=l({className:"LabeledButton_module_labeledButton__e0f241d2"},on(t=>{d(),e.props.onClick&&e.props.onClick(t)})),m=`${Fl(250)} transform 250 ease-out`,f={visible:i,styleOverrides:{enterActive:{transform:"translateX(0)",transition:m},exitActive:{transform:"translateX(5px)",transition:m}}};return n.current!==t&&(a?f.onFaded=p:n.current=t),ke("div",l(l({},_),{},{children:[ke(Hl,l(l({},f),{},{children:ke("label",l(l({},v),{},{role:"presentation",children:ke("span",{children:n.current})}))})),e]}))},jd=Ve((e,t)=>{let{on:n,label:i,icon:o,onClick:r,className:a="",children:s}=e,c=Oe(e,["on","label","icon","onClick","className","children"]);return ke(Kc,l(l({ref:t,size:jn.SM,icon:o,"aria-label":i,onClick:r,className:`${Ln.EXCLUDE_GLOBAL_BUTTON_STYLES} ${n&&wn.ON} ${a}`},c),{},{children:s}))}),Kd=()=>{const e=$d(e=>e.embed.collections),t=$d(e=>e.setUser);return e&&ke(zd,{text:"Add to collections",children:ke(jd,{label:"Add to collections",className:wn.COLLECTIONS_BUTTON,onClick:()=>t("collected",!0),icon:ke(gc,{name:fc.COLLECTIONS,className:wn.COLLECTIONS_ICON,focusable:"false"})})})},Xd=()=>{const e=$d(e=>e.setUser),t=$d(e=>e.user.liked);let n=t?"Unlike":"Like",i=n;return $d(e=>e.user.loggedIn)||(i="Like (this opens in a new window)"),$d(e=>e.embed.like)&&ke(zd,{text:n,children:ke(jd,{label:i,className:wn.LIKE_BUTTON,on:t,icon:ke(gc,{name:t?fc.HEART_FILLED:fc.HEART,className:wn.LIKE_ICON,focusable:"false"}),"data-like-button":!0,onClick:()=>e("liked",!0)})})};const Zd=()=>{const e=$d(e=>e.setOverlay),t={share:$d(e=>e.embed.embedOnlyShare)?"Embed":"Share"};return $d(e=>e.embed.share)&&ke(zd,{text:t.share,children:ke(jd,{label:t.share,"data-share-button":!0,onClick:()=>e("purpose",In.SHARE),icon:ke(gc,{name:fc.PAPER_PLANE,className:"share-icon ShareButton_module_shareIcon__da819942",focusable:"false"})})})};const Jd=()=>{const{vodLabel:e,purchased:t,isExpiring:n,vodButtonVisible:i}=$d(e=>e.vod),o=$d(e=>e.setVod),r=on(()=>o("purchased",!0));return i&&ke("div",l(l({},r),{},{className:`VODButton_module_vodButtonContainer__65824b9e ${n?"VODButton_module_expiring__65824b9e":""}`,"data-vod-expiring":n,"data-vod-purchased":t,"data-vod-button":!0,children:ke(Kc,{size:jn.SM,iconPosition:Xn.RIGHT,className:`${Ln.EXCLUDE_GLOBAL_BUTTON_STYLES} ${wn.VOD_BUTTON} VODButton_module_vodButton__65824b9e ${t&&wn.ON}`,"data-vod-button":!0,icon:ke(gc,{name:fc.ONDEMAND,className:wn.VOD_ICON,"data-vod-icon":!0}),children:ke("span",{"data-vod-button-label":!0,children:e})})}))},Qd=()=>{const e=$d(e=>e.embed.watchLater),t=$d(e=>e.user.watchLater),n=$d(e=>e.user.loggedIn),i=$d(e=>e.setUser);let o=t?"Remove from Watch Later":"Add to Watch Later",r=o;return n||(r="Add to Watch Later (this opens in a new window)"),e&&ke(zd,{text:o,children:ke(jd,{label:r,className:wn.WATCH_LATER_BUTTON,on:t,onClick:()=>i("watchLater",!0),icon:ke(gc,{name:t?fc.CLOCK_FILLED:fc.CLOCK,className:wn.WATCH_LATER_ICON,focusable:"false"}),"data-watch-later-button":!0})})},eu=()=>{const e=$d(e=>e.displayList.sideDock),t=$d(e=>e.setAppearance),n=$d(e=>e.appearance.fullscreen),i=$d(e=>e.displayList.outro),o=$d(e=>e.vod.vodButtonVisible),r=$d(e=>e.vod.purchased),a={className:`${wn.VP_SIDEDOCK} SideDock_module_root__07ab40b6 ${i?"SideDock_module_outroVisible__07ab40b6":""} ${n?"SideDock_module_fullscreen__07ab40b6":""}`,onPointerEnter:()=>t("mousedOverSidedock",!0),onMouseEnter:()=>t("mousedOverSidedock",!0),onPointerLeave:()=>t("mousedOverSidedock",!1),onMouseLeave:()=>t("mousedOverSidedock",!1)};return o&&!r?ke("div",l(l({},a),{},{"data-sidedock":!0,children:[ke(Jd,{}),ke(Hl,{visible:e,children:ke("div",{className:"SideDock_module_sidedockInner__07ab40b6","data-sidedock-inner":!0,children:[ke(Xd,{}),ke(Qd,{}),ke(Kd,{}),ke(Zd,{})]})})]})):ke(Hl,{visible:e,children:ke("div",l(l({},a),{},{"data-sidedock":!0,children:[o&&r&&ke(Jd,{}),ke(Xd,{}),ke(Qd,{}),ke(Kd,{}),ke(Zd,{})]}))})};let tu,nu;!function(e){e.MARKER_SEEKED="seeked",e.MARKER_ENDED="ended",e.MARKER_UPSWITCH="upswitch",e.MARKER_DOWNSWITCH="downswitch",e.MARKER_SWITCH_COMPLETE="switchcomplete",e.MARKER_RESIZE="resize",e.MARKER_SCANNER_CHANGE="scannerchange",e.MARKER_FILE_CHANGE="filechange",e.MARKER_STALLED="stalled",e.MARKER_BUFFER_GAP_JUMP="buffergapjump",e.MARKER_BUFFER_GAP_JUMP_PREVENT="buffergapjumpprevent",e.MARKER_STALL_JUMP="stalljump"}(tu||(tu={})),function(e){e.MARKER_SEEKED="#0088cc",e.MARKER_ENDED="#503873",e.MARKER_UPSWITCH="#5a9e02",e.MARKER_DOWNSWITCH="#d93636",e.MARKER_RESIZE="#FF8A00",e.MARKER_SCANNER_CHANGE="#e9ff00",e.MARKER_FILE_CHANGE="#b5d3e2",e.MARKER_STALLED="#f44283"}(nu||(nu={}));const iu=Object.entries(tu).reduce((e,[t,n])=>(e[n]=nu[t],e),{}),ou=({max:e=1,timeSeries:t=[],debugMarkers:n=[]})=>{const i=t.length,o=i<100?0:i-100,r=t[o],a=t[i-1],s=r?r.time:0,l=a?a.time:0,c=t.slice(o).map(t=>{let n=(t.time-s)/(l-s)*250,i=14-14*t.value/e;return isNaN(i)&&(i=0),isNaN(n)&&(n=0),`${n},${function(e,t,n){return Math.min(Math.max(e,0),14)}(i)}`}).join(" ");return ke("svg",{width:250,height:14,viewBox:"0 0 250 14",children:[ke("g",{children:ke("polyline",{stroke:"white",fill:"none",points:c})}),ke("g",{children:!!n.length&&n.filter(e=>e.t>=s&&e.t<=l).map((e,t)=>{let n=(e.t-s)/(l-s)*250;return isNaN(n)&&(n=0),ke("g",{children:ke("line",{className:"BandwidthSeriesDisplay_module_marker__718ed0d2",x1:n,y1:"0",x2:n,y2:14,strokeWidth:"1",stroke:iu[e.type]})},`${e.t}-${t}`)})})]})};const ru=({title:e="",children:t})=>ke("p",{children:[ke("span",{children:e}),ke("b",{children:t})]}),au=({payloadId:e,showSessionId:t})=>{const{codec:n,isLive:i,isDash:o,delivery:r,resolution:a,embedSize:s,drmEnabled:l,drmFastly:c,sessionId:d,ecdnVendor:u,p2pSources:p,p2pOffload:_,totalFrames:v,liveLatency:m,currentTime:f,bufferEnd:h,bufferAhead:g,droppedFrames:b,vrHeadsetName:y,liveSessionID:E,bandwidthKbps:C,bandwidthMinKbps:T,bandwidthMaxKbps:w,separateAudioVideo:L,bandwidthSeriesData:S,droppedFramesPercent:A}=$d(e=>e.debug),{max:k,debugMarkers:P,timeSeries:I}=S;return ke("div",{className:"DebugValues_module_values__cf9b5b97",children:[!!r&&ke(ru,{title:"Delivery:",children:r}),!!n&&ke(ru,{title:"Codec:",children:n}),!!a&&ke(ru,{title:"Playing:",children:a}),!!s&&ke(ru,{title:"Embed Size:",children:s}),o&&ke(ru,{title:"Separate AV:",children:`${L}`}),(o||i)&&ke(ru,{title:"Dropped Frames:",children:[b," / ",v," - ",A]}),!!y&&ke(ru,{title:"VR Hardware:",children:y}),i&&ke(ru,{title:"Live Latency:",children:m}),i&&!!E&&ke(ru,{title:"Live Session ID:",children:E}),!!u&&ke(Be,{children:[ke(ru,{title:"eCDN Vendor:",children:u}),ke(ru,{title:"Peers - P2P Delivery:",children:[p," - ",_]})]}),l&&ke(ru,{title:"DRM:",children:["Enabled; Fastly DRM: ",`${c}`]}),ke(ru,{title:"Playhead / Buffer:",children:[f," / ",h," / ",g]}),(o||i)&&ke(Be,{children:[ke("p",{children:[ke("span",{children:"Bandwidth:"}),ke("b",{children:C}),ke("div",{className:"DebugValues_module_bandwidthMinMax__cf9b5b97",children:["(",ke("b",{className:"DebugValues_module_bandwidthMin__cf9b5b97",children:T}),ke("b",{className:"DebugValues_module_bandwidthMax__cf9b5b97",children:w}),")"]})]}),ke("div",{className:"DebugValues_module_timeSeries__cf9b5b97",children:ke(ou,{max:k,debugMarkers:P,timeSeries:I})})]}),d&&t&&ke("p",{children:[ke("span",{children:"Debug Key:"}),ke("br",{}),ke("b",{className:"DebugValues_module_sessionId__cf9b5b97",children:d})]}),e&&ke("p",{children:[ke("span",{children:"Debug Key:"}),ke("br",{}),ke("b",{className:"DebugValues_module_payloadId__cf9b5b97",children:e})]})]})};let su;const lu=Ve(({onCopyFailed:e,labelResetDelay:t,className:n},i)=>{const[o,r]=Me(!1),a=$d(e=>e.debug),{bandwidthSeriesData:s}=a,l=Oe(a,["bandwidthSeriesData"]);return ke(Kc,{ref:i,className:n,onClick:()=>{const n={version:2,tpl:l,mark:s.debugMarkers};clearTimeout(su);try{const o=btoa(JSON.stringify(n));rn(o)?(r(!0),su=setTimeout(()=>{clearTimeout(su),r(!1)},t)):e(),i.current.focus()}catch(ke){e()}},color:Kn.CUSTOM,children:o?"Copied":"Copy Debug Payload"})});let cu;function du(){}const uu=({onSendSuccess:e,labelResetDelay:t,className:n})=>{const{player_url:i,request:o}=$d(e=>e.config),[r,a]=Me(!1),[s,l]=Me(!1),c=$d(e=>e.debug),{bandwidthSeriesData:d}=c,u=Oe(c,["bandwidthSeriesData"]),{signature:p,expires:_,timestamp:v}=o,m=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(ke){return Promise.reject(ke)}}}((function(){const{clipId:n,payloadId:o}=u,r=`https://${i}${`/debug_payload/${n}/${o}?s=${p}&expires=${_}&time=${v}`}`,s={version:2,tpl:u,mark:d.debugMarkers};return clearTimeout(cu),function(e){if(e&&e.then)return e.then(du)}(function(t,n){try{var i=function(t,n){try{var i=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(Ge({url:r,method:"post",json:s,timeout:1e4}).json(),(function({ID:t}){e(t),a(!0)}))}catch(ke){return n()}return i&&i.then?i.then(void 0,n):i}(0,(function(){l(!0)}))}catch(ke){return n(!0,ke)}return i&&i.then?i.then(n.bind(null,!1),n.bind(null,!0)):n(!1,i)}(0,(function(e,n){return cu=setTimeout(()=>{clearTimeout(cu),a(!1),l(!1)},t),function(e,t){if(e)throw t;return t}(e,n)})))}));let f="Send Debug Payload";return r?f="Sent":s&&(f="Something Went Wrong"),ke(Kc,{className:n,onClick:m,color:Kn.CUSTOM,children:f})},pu=()=>{const e=$d(e=>e.name),t=$d(e=>e.appearance.playerBreakpoint),n=$d(e=>e.displayList.debugPanel),i=$d(e=>e.setDisplayList),{isDNTEnabled:o,hideCloseButton:r,isCopyDisabled:a,clipId:s}=$d(e=>e.debug),[c,d]=Me(void 0),[u,p]=Me(!1),[_,v]=Me(null),m=Ue(null),f=Ue(null),h=Ue(null),g=!r&&e!==Li.ChromelessPlayer,b=!a&&e!==Li.ChromelessPlayer,y=dn("DebugPanel_module_root__56861123",Yc.roundedBox,(t===zn.XS||t===zn.XXS)&&"DebugPanel_module_smallPlayer__56861123");return Ie(()=>{n?h.current?h.current.focus():f.current&&f.current.focus():_&&(_.focus(),document.body.classList.add("showfocus"))},[n,_]),n&&ke("div",{ref:m,className:y,onFocus:e=>{var t;(null==(t=m.current)?void 0:t.contains(e.relatedTarget))||v(e.relatedTarget)},children:[s&&ke("p",l(l({},on(()=>{rn(`${s}`)})),{},{children:[ke("span",{children:"Clip ID: "}),ke("b",{className:"DebugPanel_module_clipId__56861123",children:s})]})),ke(au,{payloadId:c,showSessionId:u}),ke("input",{type:"text",className:"DebugPanel_module_debugCode__56861123"}),b&&ke(Be,{children:[ke(lu,{labelResetDelay:1500,onCopyFailed:()=>p(!0),className:"DebugPanel_module_button__56861123",ref:h}),ke(uu,{labelResetDelay:1500,onSendSuccess:e=>d(e),className:"DebugPanel_module_button__56861123"})]}),g&&ke("button",l(l({},on(()=>i("debugPanel",!1))),{},{className:"DebugPanel_module_closeButton__56861123","aria-label":"Close stats debug panel",ref:f,children:ke(gc,{name:fc.DISMISS_X})})),!!o&&"No Debug Key available as Do Not Track is enabled."]})};const _u=()=>{const{link:e,img:t,margin:n,width:i,height:o,name:r,id:a}=$d(e=>e.badge),s=$d(e=>e.setBadge),l=$d(e=>e.displayList.badge),c={};return n&&Object.assign(c,{margin:n}),ke(Hl,{visible:l,children:ke("div",{className:`${wn.VP_BADGE} Badge_module_badge__5ccfc853`,style:c,"data-badge":!0,children:ke(mc,{href:e,onClick:()=>s("id",a),targetBlank:!0,className:`Badge_module_badgeLink__5ccfc853 ${Yc.focusable}`,children:ke("img",{src:t,width:i,height:o,alt:`${r} Badge`})})})})};var vu={tagsWrapper:"TitleTags_module_tagsWrapper__6695c0c0",tag:"TitleTags_module_tag__6695c0c0",titleTag:"TitleTags_module_titleTag__6695c0c0",dolbyVisionTag:"TitleTags_module_dolbyVisionTag__6695c0c0",bylineTag:"TitleTags_module_bylineTag__6695c0c0",lonerTag:"TitleTags_module_lonerTag__6695c0c0"};const mu=({is360:e,hasHDR:t,hasHDR10Plus:n,hasDolbyVision:i,channelLayout:o,className:r})=>{const a="5.1"===o||"7.1"===o,s=o.startsWith("ambisonic");return ke("div",{className:vu.tagsWrapper,"data-title-tags":!0,children:[e&&ke("span",{className:`${vu.tag} ${vu[r]}`,children:s?"360 ambisonic":"360"}),t&&!n&&ke("span",{className:`${vu.tag} ${vu[r]}`,children:"HDR"}),n&&ke("span",{className:`${vu.tag} ${vu[r]}`,children:"HDR10+"}),i&&ke("span",{className:`${vu.tag} ${vu.dolbyVisionTag} ${vu[r]}`,children:ke(gc,{name:fc.DOLBY_VISION})}),a&&ke("span",{className:`${vu.tag} ${vu[r]}`,children:o})]})};const fu=()=>{const{displayTitle:e,displayPortrait:t,ownerLinkUrl:n,targetBlank:i,portraitImg:o,titleLinkUrl:r,title:a,ownerName:s,is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,bylineLinkUrl:_,displayByline:v}=$d(e=>e.title),m=$d(e=>e.displayList.title),f=$d(e=>e.displayList.badge),[h,g]=Me(t&&!f);return Ie(()=>{let e;return!f&&t?e=setTimeout(()=>g(!0),250):g(!1),()=>clearTimeout(e)},[f,t]),ke(Be,{children:[ke(_u,{}),ke(Hl,{visible:m,children:ke("div",{className:`${wn.VP_TITLE} Title_module_title__1f69cee0`,"aria-hidden":!m,children:ke("header",{className:"Title_module_header__1f69cee0",children:[h&&ke("div",{className:"Title_module_portrait__1f69cee0",children:ke(mc,{href:n,targetBlank:i,variant:"minimal",className:`Title_module_portraitLink__1f69cee0 ${Yc.focusableCircle}`,children:ke("img",{src:o,alt:"Link to video owner's profile",width:"60",height:"60","data-trackClick":"video-portrait"})})}),ke("div",{className:"Title_module_headers__1f69cee0",children:[e&&ke(mc,{href:r,targetBlank:i,"data-track-click":"video-title",variant:"minimal",className:Yc.focusable,children:ke(Wc,{sizeMap:{[zn.XXS]:Jn.MD,[zn.XS]:Jn.LG,[zn.SM]:Jn.XL},className:"Title_module_headerText__1f69cee0 Title_module_mainTitle__1f69cee0",children:[a,ke(mu,{is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,className:Ln.TITLE_TAG})]})}),v&&ke(mc,{href:_,targetBlank:i,variant:"minimal",className:`Title_module_subtitleLink__1f69cee0 ${Yc.focusable}`,children:ke(Wc,{className:"Title_module_headerText__1f69cee0 Title_module_subtitle__1f69cee0",children:[s,!a&&ke(mu,{is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,className:Ln.BYLINE_TAG})]})}),!a&&!v&&ke(mu,{is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,className:Ln.TITLE_TAG})]})]})})})]})};const hu=({id:e,timecode:t,className:n,teaser:i,url:o,imageUrl:r,headline:a,inView:s})=>{const l=$d(e=>e.appearance.isVerticalVideo),c=$d(e=>e.setCards),d=$d(e=>e.setPlayback),u=()=>{c("hoveredCard",null),c("cardPressed",e),o&&d("paused",!0)},p=dn("Card_module_card__5758713b",n,s&&"Card_module_active__5758713b",r&&"Card_module_hasThumbnail__5758713b",l&&"Card_module_vertical__5758713b");return ke("div",{className:p,onMouseEnter:()=>c("hoveredCard",t),onMouseLeave:()=>c("hoveredCard",null),onClick:u,onKeyUp:e=>{"Enter"===e.key&&u()},role:"link",tabIndex:-1,children:ke(mc,{href:o,className:"Card_module_inner__5758713b",children:[!!r&&ke("div",{className:"Card_module_imageWrap__5758713b",children:ke("img",{className:"Card_module_image__5758713b",src:r,alt:a})}),ke("div",{className:"Card_module_body__5758713b",children:[ke(Wc,{size:Jn.MD,className:"Card_module_text__5758713b Card_module_title__5758713b",children:a}),!!i&&ke(Wc,{weight:Qn.NORMAL,element:"p",className:"Card_module_text__5758713b Card_module_detail__5758713b",children:i})]}),!!o&&ke("div",{className:"Card_module_popOutWrapper__5758713b",children:ke(gc,{name:fc.POP_OUT,className:"Card_module_popOut__5758713b"})})]})})};const gu=()=>{const e=$d(e=>e.cards.cardsMap),t=$d(e=>e.cards.displayedCard),n=$d(e=>e.displayList.cards),i=$d(e=>e.displayList.overlay),o=e=>t===e&&!i;return n&&ke("div",{className:"Cards_module_cardsWrapper__e224f7b9",children:e.values().map(e=>ke(hu,{id:e.id,timecode:e.timecode,className:e.className,teaser:e.teaser,url:e.url,imageUrl:e.imageUrl,headline:e.headline,inView:o(e.timecode)},e.id))})};const bu=({show:e})=>{const{buffering:t,currentTime:n,loadedTime:i,currentFragment:o}=$d(e=>e.playback),r=fn(n,o),a=fn(i,o);return e&&ke("div",{className:"TinyProgressBar_module_tinyBar__f8a567ff",children:ke("svg",{className:"TinyProgressBar_module_tinyBarSVG__f8a567ff",width:"100%",height:"100%",viewBox:"0 0 70 40",focusable:"false",children:[ke("defs",{children:[ke("clipPath",{id:"rounded-border",children:ke("rect",{height:"100%",width:"100%",x:"0",y:"0",rx:"5"})}),ke("pattern",{id:"tiny-buffer","data-tiny-buffer-pattern":!0,className:"TinyProgressBar_module_bufferPattern__f8a567ff",patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"10",height:"10",viewBox:"0 0 10 10",children:[ke("line",{x1:"5",y1:"-1",x2:"-5",y2:"10",strokeWidth:"2",strokeLinecap:"butt"}),ke("line",{x1:"10",y1:"-1",x2:"0",y2:"10",strokeWidth:"2",strokeLinecap:"butt"}),ke("line",{x1:"15",y1:"-1",x2:"5",y2:"10",strokeWidth:"2",strokeLinecap:"butt"})]})]}),ke("g",{clipPath:"url(#rounded-border)",children:t?ke("rect",{className:"TinyProgressBar_module_buffer__f8a567ff",height:"3",width:"110%",x:"0",y:"37",fill:"url(#tiny-buffer)"}):ke(Be,{children:[ke("rect",{className:"TinyProgressBar_module_loaded__f8a567ff","data-tiny-loaded":!0,height:"3",width:gn(a),x:"0",y:"37"}),ke("rect",{className:"TinyProgressBar_module_played__f8a567ff","data-tiny-played":!0,height:"3",width:gn(r),x:"0",y:"37"})]})})]})})};const yu=({className:e,controlBarVisibilityHandlers:t})=>{const n=$d(e=>e.displayList.controlBar),i=$d(e=>e.liveEvent.isLiveEvent),o=$d(e=>e.liveEvent.isPlayable),r=$d(e=>e.liveEvent.isArchived),a=$d(e=>e.liveEvent.isEnded),s=$d(e=>e.liveEvent.dvrEnabled),l=$d(e=>e.setPlayback),c=$d(e=>e.controlBar.trailerButtonText),d=$d(e=>e.embed.playbar),u=$d(e=>e.appearance.playerSizeMode),{buttonState:p,setButtonState:_}=ad(),v=vd(),m=!i||o||r||s&&a,f=u===Ai.TINY||!d,h=p===Ni.TRAILER,g={[Ni.PLAY]:{icon:fc.PLAY,onClick:()=>{l("paused",!1),_(Ni.PAUSE)},label:"Play",className:"PlayButton_module_playIcon__fc6bec57"},[Ni.PAUSE]:{icon:fc.PAUSE,onClick:()=>{l("paused",!0),_(Ni.PLAY)},label:"Pause",className:"PlayButton_module_pauseIcon__fc6bec57"},[Ni.REPLAY]:{icon:fc.REPLAY,onClick:()=>{l("paused",!1),_(Ni.PAUSE)},label:"Play",className:"PlayButton_module_replayIcon__fc6bec57"},[Ni.TRAILER]:{icon:fc.PLAY,onClick:()=>{l("paused",!1)},label:"Play",className:"PlayButton_module_trailerIcon__fc6bec57"}}[p],b=dn("PlayButton_module_playButtonWrapper__fc6bec57",v===_d.CENTER&&"PlayButton_module_center__fc6bec57",h&&"PlayButton_module_trailer__fc6bec57"),y=dn(Ln.EXCLUDE_GLOBAL_BUTTON_STYLES,"PlayButton_module_playButton__fc6bec57",h&&"PlayButton_module_trailer__fc6bec57",Yc.focusable,e||"");return m&&ke(Hl,{visible:n,children:ke("div",{className:b,children:ke(Uc,{tooltipText:g.label,className:`Tooltip_module_playTooltip__21ae5b80 ${h?"Tooltip_module_trailerPlayTooltip__21ae5b80":""}`,children:ke(Kc,{className:y,"aria-label":g.label,onClick:g.onClick,icon:ke(gc,{className:g.className,name:g.icon}),iconSize:jn.CUSTOM,color:Kn.CUSTOM,onTouchStart:t.onTouchStart,onTouchEnd:t.onTouchEnd,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,"data-play-button":!0,children:[ke(bu,{show:f}),h&&ke("span",{className:"PlayButton_module_text__fc6bec57",children:c||"Watch Trailer"})]})})})})};const Eu=Ve((e,t)=>{let{className:n="",icon:i,children:o,tooltipLabel:r,hasTooltip:a=!0,id:s}=e,c=Oe(e,["className","icon","children","tooltipLabel","hasTooltip","id"]);const d=$d(e=>e.appearance.playerBreakpoint),u=dn(Ln.EXCLUDE_GLOBAL_BUTTON_STYLES,"ControlBarButton_module_controlBarButton__88a67ab4",Yc.focusable,n),p=["xl","xxl"].includes(d)?16:8;return a?ke(Uc,{tooltipText:r,margin:p,children:ke(Kc,l(l({id:s,color:Kn.CUSTOM,size:jn.XS,ref:t,className:u,icon:i,iconSize:jn.CUSTOM},c),{},{children:o}))}):ke(Kc,l({id:s,color:Kn.CUSTOM,size:jn.XS,ref:t,className:u,icon:i,iconSize:jn.CUSTOM},c))});const Cu=()=>{const e=$d(e=>e.appearance.fullscreen),t=$d(e=>e.setAppearance),n=dn(wn.FULLSCREEN,"FullscreenButton_module_fullscreen__e0e92a4f"),i={tooltip:e?"Exit full screen":"Fullscreen",exitFullscreen:"Exit full screen",enterFullscreen:"Enter full screen"},o=e?i.exitFullscreen:i.enterFullscreen,r=e?fc.EXIT_FULLSCREEN:fc.ENTER_FULLSCREEN;return ke(Eu,{onClick:()=>t("fullscreen",!e),className:n,"aria-label":o,icon:ke(gc,{name:r}),tooltipLabel:i.tooltip,"data-fullscreen-button":!0})};const Tu=Ve(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const{onClick:i,onKeyDown:o}=rd(()=>t(!e));return ke(Eu,{ref:n,className:`${wn.VP_PREFS} PrefsButton_module_prefsButton__61ec289e`,"aria-expanded":e,"aria-label":"Settings",icon:ke(gc,{name:fc.GEAR,className:"PrefsButton_module_gearIcon__61ec289e"}),onClick:i,onKeyDown:o,tooltipLabel:"Settings","data-prefs-button":!0})}),wu=()=>{const e=$d(e=>e.appearance.pictureInPictureActive),t=$d(e=>e.setAppearance),n=e?"Exit Picture-in-Picture":"Enter Picture-in-Picture",i=e?fc.EXIT_PICTURE_IN_PICTURE:fc.ENTER_PICTURE_IN_PICTURE;return ke(Eu,{className:wn.PIP,"aria-label":n,icon:ke(gc,{name:i,className:e?wn.ON:""}),onClick:()=>t("pictureInPictureActive",!e),tooltipLabel:"Picture-in-Picture","data-pip-button":!0})};const Lu=({children:e,volumeButtonRef:t})=>{const n=Ue(null),i=$d(e=>e.setPlayback),r=$d(e=>e.setDisplayList),a=$d(e=>e.playback.volume),s=$d(e=>e.playback.muted)?0:a,c=$d(e=>e.playback.supportsSettingVolume),d=$d(e=>e.displayList.controlBar),u=$d(e=>e.appearance.playerSizeMode),p=u===Ai.TINY||u===Ai.MINI,[_,v]=Me(!1),m=100*s,[f,h]=Me(!1),[g,b]=Me(!1),y=_&&c&&!p;Ie(()=>{d||v(!1)},[d]);const E=e=>{k(e)},C=()=>{v(!0),r("menu",!1)},T=e=>{cn(n.current,e)||cn(null==t?void 0:t.current,e)||v(!1),h(!1),document.removeEventListener("mouseup",T),document.removeEventListener("mousemove",E),document.removeEventListener("pointerup",T),document.removeEventListener("pointermove",E)},w=e=>{h(!0),k(e),o.pointerEvents?(document.addEventListener("pointerup",T),document.addEventListener("pointermove",E)):(document.addEventListener("mouseup",T),document.addEventListener("mousemove",E))},L=()=>{f||v(!1)},S=()=>b(!0),A=()=>b(!1);function k(e){let t=e.clientY;e.targetTouches&&e.targetTouches.length&&(t=e.targetTouches[0].clientY,e.preventDefault());const o=function(e){const t=st(n.current).top,i=st(n.current).bottom;return dt((i-e)/(i-t),0,1)}(t);i("volume",o)}const P=dn("VolumeControl_module_volumeControl__05432d27",wn.VOLUME,Yc.focusable),I=dn("VolumeControl_module_volumeBar__05432d27",g||f?"VolumeControl_module_mouseEnteredSlider__05432d27":""),O=o.pointerEvents?{onPointerEnter:C,onPointerLeave:L}:{onMouseEnter:C,onMouseLeave:L},R=o.pointerEvents?{onPointerDown:w,onPointerEnter:S,onPointerLeave:A}:{onMouseDown:w,onMouseEnter:S,onMouseLeave:A};return ke("div",l(l({className:"VolumeControl_module_volumeControlContainer__05432d27",onFocus:()=>{v(!0),r("menu",!1)}},O),{},{"data-volume-control-container":!0,children:[e,ke(Hl,{visible:y,children:ke("div",l(l({role:"slider",className:P,ref:n,tabIndex:0,"aria-valuenow":s,"aria-valuetext":Math.round(100*s)+"%","aria-label":"Volume (use up/down arrow keys to change)","aria-valuemin":0,"aria-valuemax":1,onBlur:()=>{f||v(!1)},onTouchMove:k},R),{},{"data-volume-control":!0,children:ke("div",{className:I,children:[ke("div",{className:"VolumeControl_module_volumeBarFill__05432d27",style:{height:`${m}%`}}),ke("div",{className:"VolumeControl_module_sliderHandle__05432d27",style:{bottom:`${m}%`}})]})}))})]}))},Su=()=>{const e=Ue(),t=$d(e=>e.setPlayback),n=$d(e=>e.playback.volume),i=$d(e=>e.playback.muted);return ke(Lu,{volumeButtonRef:e,children:ke(Eu,{ref:e,onClick:()=>{i?(t("muted",!1),0===n&&t("volume",1)):i||0!==n?!i&&n>0&&t("muted",!0):t("volume",1)},icon:ke(gc,!i&&n>0?{name:fc.VOLUME_ON_FILLED,"data-volume-icon":!0}:{name:fc.VOLUME_OFF_FILLED,"data-volume-muted-icon":!0}),"aria-label":"Volume (use up/down arrow keys to change)","data-volume-button":!0,hasTooltip:!1})})};const Au=()=>{const e=$d(e=>e.controlBar.vimeoLogoUrl),t=$d(e=>e.appearance.playerBreakpoint),n=$d(e=>e.appearance.playerSizeMode),i=[Ai.MINI,Ai.TINY].includes(n)||[zn.XS,zn.XXS].includes(t),o=ke(gc,i?{name:fc.VIMEO_SMALL,"data-vimeo-small-icon":!0}:{name:fc.VIMEO,"data-vimeo-icon":!0});return ke(mc,{className:wn.LOGO,tabIndex:"-1",href:e,variant:"minimal",children:ke(Eu,{className:"VimeoLogoButton_module_vimeoLogoButton__3d853800",icon:o,"aria-label":"Watch on vimeo.com",hasTooltip:!1,"data-vimeo-logo-button":!0})})},ku=()=>{const e=$d(e=>e.appearance.showAirPlayPicker),t=$d(e=>e.setAppearance),n=e?"Turn off AirPlay":"Choose an AirPlay device";return ke(Eu,{onClick:()=>t("showAirPlayPicker",!e),className:wn.AIRPLAY,"aria-label":n,tooltipLabel:"AirPlay","data-airplay-button":!0,icon:ke(gc,{name:fc.AIRPLAY,className:e?wn.ON:""})})},Pu=Ve(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const{onClick:i,onKeyDown:o}=rd(()=>t(!e));return ke(Eu,{ref:n,className:wn.VP_CHAPTER_BUTTON,onClick:i,onKeyDown:o,"aria-expanded":e,"aria-label":"Chapters",icon:ke(gc,{name:fc.CHAPTERS}),tooltipLabel:"Chapters","data-chapter-button":!0})}),Iu=Ve(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const i=$d(e=>e.captions.activeTextTrackId),{onClick:o,onKeyDown:r}=rd(()=>t(!e)),a=i&&"off"!==i?fc.CC_FILLED:fc.CC;return ke(Eu,{ref:n,className:wn.CC,"aria-label":"Choose captions","aria-haspopup":!0,icon:ke(gc,{name:a}),onClick:o,onKeyDown:r,tooltipLabel:"CC/Subtitles","data-cc-button":!0})}),Ou=()=>{const e=$d(e=>e.setAppearance),t=$d(e=>e.appearance.stereoscopicEnabled),n=t?"Disable stereoscopic playback":"Enable stereoscopic playback";return ke(Eu,{className:wn.STEREOSCOPIC,onClick:()=>e("stereoscopicEnabled",!t),"aria-label":n,icon:ke(gc,{name:fc.STEREOSCOPIC}),tooltipLabel:"Stereoscopic","data-stereoscopic-button":!0})};const Ru=()=>{const e=dn(Ln.EXCLUDE_GLOBAL_BUTTON_STYLES,"ChromecastButton_module_chromecastButton__9ec33deb","ControlBarButton_module_controlBarButton__88a67ab4",Yc.focusable,wn.VP_CAST_BUTTON);return(()=>{const[e,t]=Me(!1);Ie(()=>{setTimeout(()=>t(!0),500)},[])})(),ke(Uc,{tooltipText:"GoogleCast",children:ke("button",{className:e,"aria-label":"Cast",is:"google-cast-button","data-chromecast-button":!0})})},Nu=()=>{const e=pd(),t=$d(e=>e.displayList.transcript),n=$d(e=>e.setDisplayList),i="Transcript",{onClick:o,onKeyDown:r}=rd(()=>{n("transcript",!t),e(ha.EMBEDDED_TRANSCRIPT_CLICK,{name:t?"exit_embed_transcript":"open_embed_transcript",copy:i,location:"control_bar",element:"transcript_button",current_transcript_language:""})}),a=ke(gc,{name:t?fc.TRANSCRIPT_ON:fc.TRANSCRIPT_OFF}),s=t?[An.TRANSCRIPT_VIEWER,Sn.RIGHT_CONTENT_AREA].join(" "):Sn.RIGHT_CONTENT_AREA;return ke(Eu,{id:An.TRANSCRIPT_CONTROL_BAR_BUTTON,onClick:o,onKeyDown:r,icon:a,"aria-label":i,tooltipLabel:i,"aria-controls":s})};const Mu=({className:e})=>{const t=$d(e=>e.displayList.controlBar),n=$d(e=>e.appearance.playerSizeMode)===Ai.TINY,i=$d(e=>e.embed.customLogo),o=$d(e=>e.displayList.ad),{customLogoUrl:r,customLogoImg:a,customLogoSticky:s}=$d(e=>e.embed.customLogoFields),l=$d(e=>e.user.ownerName),c=i&&!n&&!o,d=dn(wn.CUSTOM_LOGO,"CustomLogo_module_customLogo__29e363fc",r?"CustomLogo_module_link__29e363fc":"",Yc.focusable,e);return c&&ke(Hl,{visible:s||t,children:ke($c,{classNames:d,imgClassNames:"CustomLogo_module_customLogoImg__29e363fc",url:r,img:a,imgAlt:l})})},Du=({className:e,marker:t})=>{const n=$d(e=>e.setPlayback),i=$d(e=>e.playback.currentFragment),o=(t.startTime-i.startTime)/i.duration*100,r=e=>n("currentTime",e.path[0].dataset.time),a="Seek to "+Math.round(100*t.startTime)/100+" seconds.";return ke("div",{id:`cuepoint-${t.id}`,className:e,style:{left:`${o}%`},"data-time":t.startTime,role:"button","aria-label":a,tabIndex:0,onClick:r,onKeyUp:e=>{["Space","Enter"].includes(e.code)&&r(e)},"data-cue-point-marker":!0})};const xu=()=>{const e=$d(e=>e.playback.currentFragment),t=$d(e=>e.cuePoints.cuePoints),n=dn("CuePointMarkers_module_cuePoints__c121afd2",Yc.focusableMarker,wn.CUEPOINT),i=t.filter(t=>e.startTime<=t.time&&t.time<=e.endTime).map(e=>({id:e.id,startTime:e.time}));return ke(Be,{children:!!i.length&&i.map(e=>ke(Du,{className:n,marker:e},e.startTime))})};const Bu=()=>{const{currentTime:e,currentFragment:t}=$d(e=>e.playback),n=mn(e,t),i={progressBar:"Progress Bar",ariaText:Wn(n)+" of "+Wn(t.duration)};return ke("div",{className:`FocusTarget_module_focusTarget__02e194b8 ${Yc.focusable}`,role:"slider","aria-label":i.progressBar,"aria-valuemin":0,"aria-valuemax":t.duration,"aria-valuenow":Math.round(n),"aria-valuetext":i.ariaText,tabIndex:0,"data-progress-bar-focus-target":!0})};const Vu=({hotspot:e,setTabFocusedHotspotMarker:t,setHoverFocusedHotspotMarker:n})=>{const i=$d(e=>e.setPlayback),o=$d(e=>e.playback.currentFragment),r=(e.start-o.startTime)/o.duration,a={label:e.name,id:e.hotspotId,startTime:e.start,left:r},s=dn("HotspotMarker_module_interactiveMarker__a53a1a54",wn.VP_INTERACTIVE_MARKER,Yc.focusableMarker);function l(e){i("currentTime",e.path[0].dataset.time,{action:e.type,seekType:"interactive-marker"})}return ke("div",{className:s,role:"button",style:{left:gn(r,!1)},"aria-label":null==e?void 0:e.ariaLabel,"data-time":e.start,tabIndex:0,onClick:l,onKeyUp:e=>{["Space","Enter"].includes(e.code)&&l(e)},onMouseEnter:()=>n(a),onMouseLeave:()=>n(null),onFocus:()=>t(a),onBlur:()=>t(null),"data-hotspot-marker":!0})},Uu=({hotspots:e,setHoverFocusedHotspotMarker:t,setTabFocusedHotspotMarker:n})=>ke(Be,{children:e.map(e=>ke(Vu,{hotspot:e,setTabFocusedHotspotMarker:n,setHoverFocusedHotspotMarker:t},e.start))});const Fu=({time:e,left:t,visible:n=!0,disabled:i=!1})=>ke(Hl,{visible:n,children:ke("div",{className:"Timecode_module_timecodeContainer__6a968513",role:"presentation",style:{left:t},"data-progress-bar-timecode-container":!0,children:ke("div",{className:`Timecode_module_timecode__6a968513 ${i?"Timecode_module_disabled__6a968513":""}`,"data-progress-bar-timecode":!0,children:Wn(e)})})}),Hu=()=>{const e=$d(e=>e.playback.currentTime),t=$d(e=>e.playback.liveEdgeTime),n=$d(e=>e.playback.liveTailTime),i=$d(e=>e.playback.atLiveEdge),o=$d(e=>e.playback.currentFragment),r=$d(e=>e.playback.playInitiated),a=$d(e=>e.playback.paused),s=$d(e=>e.playback.buffering),l=$d(e=>e.liveEvent.isLiveEvent),c=$d(e=>e.liveEvent.dvrEnabled),d=$d(e=>e.liveEvent.isEnded),u=$d(e=>e.liveEvent.isArchived),[p,_]=Me(o.duration),v=l&&!u?1:0,[m,f]=Me(v);Ie(()=>{const a=mn(e,o);if(l)if(c){if(c){const a=d&&!r&&0===e,s=u&&0!==o.duration;a?(_(o.duration),f(0)):s?(_(e),f(e/o.duration)):i?(f(1),_(t)):(f(Cn(e,n,t)),_(e-t))}}else u&&(r||0!==e)?(f(fn(e,o)),_(a)):u?(_(o.duration),f(v)):(f(1),_(e));else r||0!==a?(f(fn(e,o)),_(a)):(_(o.duration),f(v))},[e,r,o,l,d,u,t,i]);const h=!l||u||c&&d||!a&&!s&&0!==t;return ke(Fu,{time:p,left:gn(m,!1),disabled:l&&!c,visible:h})};function qu(e,t,n){return e/t*n}const Wu={xs:120,md:160,xl:200},$u=({visible:e=!1,mousePercent:t=0,progressBarWidth:n,isMousedOverProgress:i=!1,tabOrHoverFocusedHotspotMarker:o=null})=>{const r=$d(e=>e.displayList.menu),a=$d(e=>e.playback.currentFragment),s=$d(e=>e.playback.duration),c=$d(e=>e.playback.liveEdgeTime),d=$d(e=>e.playback.liveTailTime),u=$d(e=>e.liveEvent.isLiveEvent),p=$d(e=>e.liveEvent.dvrEnabled),_=$d(e=>e.liveEvent.isArchived),v=$d(e=>e.appearance.boundingClientRect),m=$d(e=>e.appearance.isVerticalVideo),f=$d(e=>e.appearance.playerBreakpoint),h=$d(e=>e.verifyConfig),g=$d(e=>e.chapters.chapters),b=$d(e=>e.embed.chapters),y=$d(e=>e.controlBar.thumbnailPreview),[E,C]=Me({width:0,height:0,backgroundImage:"",backgroundSize:"",backgroundPosition:""}),[T,w]=Me(!1),L=v.height>300&&n>=185;let S=L&&!r&&(!u||p&&0!==c)&&e;const[A,k]=Me(0);i?k(t):o?k(o.left):S=!1;const P=bn(A,a);let I;I=p?_&&0!==a.duration?yn(A,a):((e,t,n)=>En(e,t,n)-n)(A,d,c):yn(A,a);let O="";if(g.length&&b){const e=g.find(e=>e.startTime<=P&&e.endTime>=P);O=(null==e?void 0:e.text)||""}const R=(null==o?void 0:o.label)||"",N=((e,t)=>Wu[e]*(t?9/16:1))((e=>{switch(e){case zn.XL:case zn.XXL:return"xl";case zn.SM:case zn.MD:case zn.LG:return"md";default:return"xs"}})(f),m),M=N/(null==y?void 0:y.frame_width);return Ie(()=>{!T&&L&&e&&y&&h().then(()=>Po(y.url).then(()=>{w(!0),C({width:y.frame_width*M,height:y.frame_height*M,backgroundImage:`url(${y.url})`,backgroundSize:`${y.width*M}px ${y.height*M}px`,backgroundPosition:""})})).catch(()=>{})},[e,T,L,y,M,h]),Ie(()=>{w(!1)},[y]),Ie(()=>{y&&C(e=>l(l({},e),{},{width:y.frame_width*M,height:y.frame_height*M,backgroundSize:`${y.width*M}px ${y.height*M}px`}))},[f]),Ie(()=>{if(y&&L){let e=0,t=0;if(y){const n=s/y.frames,i=Math.min(y.frames-1,Math.ceil(P/n)),o=i%y.columns,r=Math.floor(i/y.columns);e=-o*y.frame_width*M,t=-r*y.frame_height*M}C(n=>l(l({},n),{},{backgroundPosition:`${e}px ${t}px`}))}},[A,v,y,L,s,M,P]),ke(Hl,{visible:S,children:ke("div",{className:`${wn.THUMB_PREVIEW} ThumbnailPreview_module_thumbnailPreview__c559a995`,role:"presentation","aria-hidden":"true",style:{left:gn(A,!1),maxWidth:N},children:[!!E.backgroundImage&&T&&ke("div",{className:`${wn.THUMB} ThumbnailPreview_module_thumbnailPreviewImage__c559a995`,style:{width:`${E.width}px`,height:`${E.height}px`,backgroundImage:E.backgroundImage,backgroundSize:E.backgroundSize,backgroundPosition:E.backgroundPosition}}),ke("div",{className:"ThumbnailPreview_module_thumbnailPreviewText__c559a995",children:[R&&ke("span",{className:"ThumbnailPreview_module_text__c559a995",children:R}),R&&O&&ke("span",{className:"ThumbnailPreview_module_separator__c559a995"}),O&&ke("span",{className:"ThumbnailPreview_module_text__c559a995",children:O}),ke("span",{className:"ThumbnailPreview_module_time__c559a995",children:Wn(I)})]})]})})};const Yu=({segment:e,isExpanded:t})=>{const n=$d(e=>e.playback.currentFragment),i=$d(e=>e.playback.loadedTime),o=$d(e=>e.playback.currentTime),r=$d(e=>e.playback.liveEdgeTime),a=$d(e=>e.playback.liveTailTime),s=$d(e=>e.playback.atLiveEdge),l=$d(e=>e.liveEvent.isLiveEvent),c=$d(e=>e.liveEvent.dvrEnabled),d=$d(e=>e.liveEvent.isPlayable),u=$d(e=>e.liveEvent.isArchived),p=$d(e=>e.liveEvent.isEnded),_=$d(e=>e.playback.playInitiated),v=l&&!u,m=0!==r;let f,h;const g=l?1:((e,t)=>(e.endTime-e.startTime)/t.duration)(e,n);if(l)if(c){if(c){const t=p&&!_&&0===o,l=u&&0!==n.duration;t?(f=0,h=0):l?(f=hn(i,e),h=hn(o,e)):s?(f=1,h=1):(f=Cn(i,a,r),h=Cn(o,a,r))}}else u?(f=hn(i,e),h=hn(o,e)):(f=d?1:0,h=0);else f=hn(i,e),h=hn(o,e);const b=gn(g,!1),y=gn(h,!1),E=gn(f),C=dn("ChapterSegment_module_chapterWrapper__d4d891b5",v&&(!c||!m)&&"ChapterSegment_module_disabled__d4d891b5",t&&"ChapterSegment_module_expanded__d4d891b5"),T=e.startTime===n.startTime?0:2;return ke("div",{className:C,style:{width:`calc(${b} - ${T}px)`},children:ke("div",{className:"ChapterSegment_module_chapter__d4d891b5",children:[ke("div",{className:`ChapterSegment_module_loaded__d4d891b5 ${n.duration<60?"ChapterSegment_module_shortVideo__d4d891b5":""}`,style:{width:E},"data-progress-bar-loaded":!0}),ke("div",{className:"ChapterSegment_module_played__d4d891b5",style:{width:y},"data-progress-bar-played":!0})]})})};const Gu=({hoveredChapterId:e})=>{const t=$d(e=>e.playback.currentFragment),n=$d(e=>e.chapters.chapters),i=$d(e=>e.embed.chapters);let o;return o=$d(e=>e.appearance.playerBreakpoint)!==zn.XXS&&i?((e,t)=>{const n=Tn(e,t);let i=[];return 0===n.length?i.push({startTime:t.startTime,endTime:t.endTime}):n.forEach((e,o)=>{let r=e.startTime,a=e.endTime;0===o&&e.startTime>t.startTime&&i.push({startTime:t.startTime,endTime:e.startTime}),0===o&&e.startTime<t.startTime&&(r=t.startTime),o===n.length-1&&e.endTime>t.endTime&&(a=t.endTime),i.push({startTime:r,endTime:a,chapterId:e.startTime})}),i})(n,t):[{startTime:t.startTime,endTime:t.endTime}],ke("div",{className:"ChapterSegments_module_chapterSegmentsWrapper__6e982b76",children:o.map(t=>ke(Yu,{segment:t,isExpanded:t.chapterId===e},t.startTime))})};const zu=({hoveredChapterId:t})=>{const n=$d(e=>e.chapters.chapters),i=$d(e=>e.embed.chapters),r=$d(e=>e.playback.currentFragment),a=$d(e=>e.playback.liveEdgeTime),s=$d(e=>e.playback.liveTailTime),c=$d(e=>e.liveEvent.isLiveEvent),d=$d(e=>e.liveEvent.isArchived),u=$d(e=>e.liveEvent.dvrEnabled),p=$d(e=>e.setPlayback),_=$d(e=>e.element),v=$d(e=>e.interactive.hotspots),m=$d(e=>e.interactive.showMarkers),f=pd(),[h,g]=Me(!1),[b,E]=Me(!1),[C,T]=Me(0),[w,L]=Me(null),[S,A]=Me(null),[k,P]=Me(null),I=Ue(null),[O,R]=Me(_n(null==I?void 0:I.current)),N=O.rightOffsetValue-O.leftOffsetValue,M=y(()=>{R(_n(null==I?void 0:I.current))},300),D=Ue(new X(M));Ie(()=>{const e=D.current,t=null==I?void 0:I.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[]);const x=(e,t=3)=>mt(dt((e-O.leftOffsetValue)/N,0,1),t),B=e=>{e?_.classList.add("scrubbing"):_.classList.remove("scrubbing")};function V(e){if(2===(null==e?void 0:e.button)||(null==e?void 0:e.ctrlKey))return;if(p("scrubbing",!0),B(!0),"pointerdown"===e.type||"MSPointerDown"===e.type){L(e.pointerId);try{e.target.msSetPointerCapture?e.target.msSetPointerCapture(w):e.target.setPointerCapture(w)}catch(ke){}document.addEventListener("pointermove",U),document.addEventListener("pointerup",F)}else"touchstart"===e.type?(document.addEventListener("touchmove",U),document.addEventListener("touchend",F)):(document.addEventListener("mousemove",U),document.addEventListener("mouseup",F));const t=vn(e),o=x(t),l=!u||d&&0!==r.duration?bn(o,r):En(o,s,a);p("currentTime",l),(e=>{if(!n.length||!i)return;const t=((e,t)=>t.reduce((t,n)=>{if(null===t)return n;const i=n.startTime-e,o=t.startTime-e;return Math.abs(i)>Math.abs(o)?t:n},null))(e,n);if(!t)return;const o=t.startTime,a=e-o,s=Math.abs(a)<=5,l=Tn(n,r);f(ha.CHAPTER_SEGMENT_CLICK,{seek_event_start_time:e,is_chapter_seek:s,nearest_chapter_start_time:o,chapter_seek_event_delta:a,total_no_chapters_at_seek:n.length,fragment_no_chapters_at_seek:l.length})})(l)}function U(e){if(w&&w!==e.pointerId||!1===e.isPrimary)return;const t=vn(e),n=x(t),i=!u||d&&0!==r.duration?bn(n,r):En(n,s,a);p("currentTime",i),T(n)}function F(e){const t=e.type;"pointerup"===t||"MSPointerUp"===t?(document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",F),L(null)):"touchend"===t?(document.removeEventListener("touchmove",U),document.removeEventListener("touchend",F)):(document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",F)),p("scrubbing",!1),B(!1)}Ie(()=>()=>{document.removeEventListener("touchmove",U),document.removeEventListener("touchend",F),document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",F),document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",F)},[]);let H={};(!c||u&&a||d)&&(H=o.pointerEvents?{onPointerDown:V}:{onTouchStart:V,onMouseDown:V});const q=function(t,n,i){let o=1;return(e(t).sort((e,t)=>e.start-t.start).reduce((e,t)=>{let r=Object.assign({},t);if(!(n.startTime<=r.start&&r.start<=n.endTime))return e;let a=r.name,s=r.start,l=a+". Seek to "+Math.round(100*s)/100+" seconds.";if(r.ariaLabel=l,r.leftPositionInProgressBar=(r.start-n.startTime)/n.duration*100,!e.length)return e.push(r),e;const c=e.length-1,d=function(e,t,n,i){const o=qu(e,n,i),r=qu(t,n,i);return Math.floor(r-o)}(e[c].start-n.startTime,r.start-n.startTime,n.duration,i);return!isNaN(d)&&d<=5?(o+=1,a=o+" hotspots",s=e[c].start,e[c].name=a,l=a+". Seek to "+Math.round(100*s)/100+" seconds.",e[c].ariaLabel=l):isNaN(d)||(o=1,e.push(r)),e},[]))}(v,r,N),W=!!q.length&&m;return ke("div",l(l({className:"ProgressBar_module_progressBarContainer__4c917885",ref:I,onMouseEnter:()=>{R(_n(null==I?void 0:I.current)),E(!0)},onMouseMove:e=>{const{clientX:t}=e,n=x(t);T(n),g(!1),A(null)},onMouseLeave:()=>E(!1),onFocus:()=>g(!0),onBlur:()=>g(!1),role:"presentation"},H),{},{children:ke("div",{className:`${wn.VP_PROGRESS} ProgressBar_module_progressBar__4c917885`,"data-progress-bar":!0,children:[ke(Bu,{}),ke(Gu,{hoveredChapterId:t}),ke(xu,{}),W&&ke(Uu,{hotspots:q,setTabFocusedHotspotMarker:A,setHoverFocusedHotspotMarker:P}),ke($u,{visible:b||h,mousePercent:C,isMousedOverProgress:b,progressBarWidth:N,tabOrHoverFocusedHotspotMarker:S||k}),ke(Hu,{})]})}))};let ju;!function(e){e.PLAYER_UI="player_ui",e.CONTROL_BAR="control_bar"}(ju||(ju={}));const Ku=({setMenuDisplayed:e})=>{const t=$d(e=>e.setDisplayList);return ke(Kc,{className:`${wn.VP_MENU_INFO} DebugPanelButton_module_debugPanelButton__b625b798`,onClick:()=>{e(!1),t("debugPanel",!0)},icon:ke(gc,{className:"DebugPanelButton_module_debugPanelButtonIcon__b625b798",name:fc.INFO_CIRCLE}),color:Kn.CUSTOM,children:ke("span",{className:"DebugPanelButton_module_debugPanelButtonText__b625b798",children:"Debug log"})})},Xu={[Ac.EMPTY]:()=>ke(Be,{}),[Ac.PREFS]:({setPanel:e,setMenuDisplayed:t})=>{const n=$d(e=>e.embed.speedChangeEnabled),i=$d(e=>e.embed.multipleAudioTracks),r=$d(e=>e.embed.quality),a=$d(e=>e.playback.qualities),s=$d(e=>e.playback.currentQuality),c=$d(e=>e.playback.playbackRates),d=$d(e=>e.playback.audioTracks),u=r&&(null==a?void 0:a.length)>0,p=i&&(null==d?void 0:d.length)>1,_=(e=[])=>{var t;return null==(t=e.find(e=>e.active))?void 0:t.label},v={quality:{label:"Quality",value:s,onSelect:()=>e(Ac.QUALITY)},speed:{label:"Speed",value:_(c),onSelect:()=>e(Ac.SPEED)},audio:{label:"Audio",value:_(d),onSelect:()=>e(Ac.AUDIO)}};return ke(Be,{children:[u&&ke(Pc,l({},v.quality)),n&&ke(Pc,l({},v.speed)),p&&ke(Pc,l({},v.audio)),o.touch&&ke(Be,{children:[ke(Tc,{buffer:!0}),ke(Ku,{setMenuDisplayed:t})]})]})},[Ac.QUALITY]:()=>{const{qualities:e}=$d(e=>e.playback),t=$d(e=>e.setPlayback);return ke(Nc,{items:e,onSelect:e=>t("qualities",e.currentTarget.dataset.id)})},[Ac.SPEED]:()=>{const{playbackRates:e}=$d(e=>e.playback),t=$d(e=>e.setPlayback);return ke(Nc,{items:e,onSelect:e=>t("playbackRates",e.currentTarget.dataset.id)})},[Ac.AUDIO]:()=>{var e;const t=$d(e=>e.playback.audioTracks),n=$d(e=>e.setPlayback),i=pd(),o=Ue(!1),r=Ue(null==(e=t.find(e=>e.enabled))?void 0:e.label);return Ie(()=>(i(ha.MULTI_AUDIO_TRACK_CLICK,{event_name:"audio_menu_opened",has_selected_track:o.current,initial_track:r.current}),()=>{i(ha.MULTI_AUDIO_TRACK_CLICK,{event_name:"audio_menu_closed",has_selected_track:o.current,initial_track:r.current})}),[i]),ke(Nc,{items:t,onSelect:e=>{n("audioTracks",e.currentTarget.dataset.id),o.current=!0,i(ha.MULTI_AUDIO_TRACK_CLICK,{event_name:"select_audio_track",track_selected:e.currentTarget.innerText,has_selected_track:o.current,initial_track:r.current})}})}},Zu={[Ac.EMPTY]:()=>ke(Be,{}),[Ac.QUALITY]:({setPanel:e,setMenuDisplayed:t})=>ke(wc,{title:"Quality",onBack:()=>e(Ac.PREFS),setMenuDisplayed:t}),[Ac.SPEED]:({setPanel:e,setMenuDisplayed:t})=>ke(wc,{title:"Speed",onBack:()=>e(Ac.PREFS),setMenuDisplayed:t}),[Ac.PREFS]:({setMenuDisplayed:e})=>$d(e=>e.appearance.isMenuBlockingUI)&&ke(wc,{title:"Settings",setMenuDisplayed:e}),[Ac.AUDIO]:({setPanel:e,setMenuDisplayed:t})=>ke(wc,{title:"Audio",onBack:()=>e(Ac.PREFS),setMenuDisplayed:t})},Ju=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i})=>{const o=Ac.PREFS,[r,a]=Me(o);vc({isMenuDisplayed:e,defaultPanel:o,setPanel:a});const s=(e=>Xu[e]||Xu[Ac.EMPTY])(r),l=(e=>Zu[e]||Zu[Ac.EMPTY])(r);return ke(Cc,{type:Sc.PREFS,isMenuDisplayed:e,setMenuDisplayed:t,panel:r,buttonRef:n,progressBarAndButtonsRef:i,toggleKey:Vi.PrefsMenu,panelContent:ke(s,{setPanel:a,setMenuDisplayed:t}),headerContent:ke(l,{setPanel:a,setMenuDisplayed:t})})},Qu=({setMenuDisplayed:e})=>$d(e=>e.appearance.isMenuBlockingUI)&&ke(wc,{title:"Chapters",setMenuDisplayed:e});const ep=({startTime:e,id:t,active:n,label:i,onMouseEnter:o,onMouseLeave:r,onSelect:a})=>{const{onClick:s,onKeyDown:l}=rd(a),c=dn(n&&"ChaptersPanelMenuOption_module_active__7de75bd4",Ln.EXCLUDE_GLOBAL_BUTTON_STYLES);return ke("li",{className:"ChaptersPanelMenuOption_module_chapterListItem__7de75bd4",children:ke("button",{"data-id":t,"data-testid":"chapter-list-item-button",role:"menuitemradio",tabIndex:0,"aria-checked":n,className:c,onClick:s,onKeyDown:l,onMouseDown:e=>e.preventDefault(),onMouseEnter:o,onMouseLeave:r,children:[ke("div",{className:"ChaptersPanelMenuOption_module_chapterTitleText__7de75bd4",children:i}),ke("div",{className:"ChaptersPanelMenuOption_module_chapterStartTime__7de75bd4",children:Wn(e)})]})},t)},tp=({setMenuDisplayed:e,onMenuOptionMouseEnter:t,onMenuOptionMouseLeave:n})=>{const{chapters:i,activeChapterId:o}=$d(e=>e.chapters),r=$d(e=>e.setChapters),a=i.map((e,t)=>({index:t+1,label:e.text,id:e.id,active:e.id===o,startTime:e.startTime}));return ke(Nc,{items:a,onSelect:t=>{r("activeChapterId",t.currentTarget.dataset.id,{type:"menu"}),e(!1)},onMenuOptionMouseEnter:t,onMenuOptionMouseLeave:n,itemComponent:ep})},np=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i,onMenuOptionMouseEnter:o,onMenuOptionMouseLeave:r})=>ke(Cc,{type:Sc.CHAPTERS,isMenuDisplayed:e,setMenuDisplayed:t,panel:Ac.CHAPTERS,buttonRef:n,progressBarAndButtonsRef:i,panelContent:ke(tp,{setMenuDisplayed:t,onMenuOptionMouseEnter:o,onMenuOptionMouseLeave:r}),headerContent:ke(Qu,{setMenuDisplayed:t})});const ip=()=>{const e=$d(e=>e.captions.fontSize),t=$d(e=>e.captions.fontFamily),n=$d(e=>e.captions.fontOpacity),i=$d(e=>e.captions.color),o=$d(e=>e.captions.bgColor),r=$d(e=>e.captions.bgOpacity),a=$d(e=>e.captions.windowOpacity),s=$d(e=>e.captions.windowColor),l=$d(e=>e.captions.edgeStyle),c=$d(e=>e.appearance.videoHeight);return ke("div",{className:"PreviewWindow_module_previewWindow__ca393743",children:ke("div",{className:"PreviewWindow_module_checkeredBackground__ca393743",children:ke(id,{cues:[{html:"This is a preview\n of a caption"}],className:"PreviewWindow_module_previewCaption__ca393743",fontSize:e,fontFamily:t,fontOpacity:n,color:i,bgColor:o,bgOpacity:r,windowOpacity:a,windowColor:s,edgeStyle:l,height:c})})})};const op=({updateMetricsPayload:e})=>{const t=$d(e=>e.resetCaptionsStyles);return ke(Lc,{element:"button",className:`${Ln.EXCLUDE_GLOBAL_BUTTON_STYLES} ResetButton_module_resetButton__bc4bf57a ${Yc.focusable}`,onSelect:()=>{t(),e({has_reset_all:!0,final_action_reset_all:!0})},withActive:!1,styled:!1,children:ke("span",{children:"Reset all"})})},rp={[Ac.EMPTY]:()=>ke(Be,{}),[Ac.LANGUAGES]:({setPanel:e,updateMetricsPayload:t})=>{const n=$d(e=>e.captions.textTracks),i=$d(e=>e.setCaptions),{isMenuBlockingUI:o,isMenuVerticalVideoMode:r}=$d(e=>e.appearance),a=o||r,s={customize:{label:"Customize",onSelect:()=>{e(Ac.CUSTOMIZE),t({has_clicked_customize:!0})}},preview:{label:"Preview",onSelect:()=>e(Ac.PREVIEW)}};return ke(Be,{children:[ke(Nc,{items:n,onSelect:e=>{i("activeTextTrackId",e.currentTarget.dataset.id)}}),ke(Tc,{buffer:!0}),ke(Pc,l({},s.customize)),a&&ke(Be,{children:[ke(Tc,{buffer:!0}),ke(Pc,l({},s.preview))]})]})},[Ac.CUSTOMIZE]:({setPanel:e,updateMetricsPayload:t})=>{const n=$d(e=>e.appearance.isMenuBlockingUI),i=$d(e=>e.appearance.isMenuVerticalVideoMode),o=n||i,r={font:{label:"Font",onSelect:()=>{e(Ac.FONT),t({has_clicked_font:!0})},size:kc.SMALL},background:{label:"Background",onSelect:()=>{e(Ac.BACKGROUND),t({has_clicked_background:!0})},size:kc.SMALL},window:{label:"Window",onSelect:()=>{e(Ac.WINDOW),t({has_clicked_window:!0})},size:kc.SMALL},preview:{label:"Preview",onSelect:()=>e(Ac.PREVIEW)}};return ke(Be,{children:[ke(Pc,l({},r.font)),ke(Pc,l({},r.background)),ke(Pc,l({},r.window)),ke(op,{updateMetricsPayload:t}),o&&ke(Be,{children:[ke(Tc,{buffer:!0}),ke(Pc,l({},r.preview))]})]})},[Ac.FONT]:({setPanel:e,updateMetricsPayload:t})=>{const n=$d(e=>e.setCaptions),i=$d(e=>e.captions.fontSize),o=$d(e=>e.captions.fontFamily),r=$d(e=>e.captions.fontOpacity),a=$d(e=>e.captions.color),s=$d(e=>e.captions.edgeStyle),c=$d(e=>e.appearance.isMenuBlockingUI),d=$d(e=>e.appearance.isMenuVerticalVideoMode),u=c||d,p=cr(),_=()=>t({has_changed_font:!0,has_customized:!0,final_action_reset_all:!1}),v={fontFamily:{label:p.fontFamily.title,items:pn(p.fontFamily.items,o),onSelect:e=>{n("fontFamily",e.currentTarget.dataset.id),_()}},color:{label:p.color.title,items:pn(p.color.items,a),onSelect:e=>{n("color",e.currentTarget.dataset.id),_()}},fontSize:{label:p.fontSize.title,items:pn(p.fontSize.items,`${i}`),onSelect:e=>{n("fontSize",e.currentTarget.dataset.id),_()}},fontOpacity:{label:p.fontOpacity.title,items:pn(p.fontOpacity.items,r),onSelect:e=>{n("fontOpacity",e.currentTarget.dataset.id),_()}},edgeStyle:{label:p.edgeStyle.title,items:pn(p.edgeStyle.items,s),onSelect:e=>{n("edgeStyle",e.currentTarget.dataset.id),_()}},preview:{label:"Preview",onSelect:()=>e(Ac.PREVIEW)}};return ke(Be,{children:[ke(Mc,l({},v.fontFamily)),ke(Bc,l({},v.color)),ke(xc,l({},v.fontSize)),ke(xc,l({},v.fontOpacity)),ke(Mc,l({},v.edgeStyle)),ke(op,{updateMetricsPayload:t}),u&&ke(Be,{children:[ke(Tc,{}),ke(Pc,l({},v.preview))]})]})},[Ac.BACKGROUND]:({setPanel:e,updateMetricsPayload:t})=>{const n=$d(e=>e.setCaptions),i=$d(e=>e.captions.bgColor),o=$d(e=>e.captions.bgOpacity),r=$d(e=>e.appearance.isMenuBlockingUI),a=$d(e=>e.appearance.isMenuVerticalVideoMode),s=r||a,c=cr(),d=()=>t({has_changed_background:!0,final_action_reset_all:!1,has_customized:!0}),u={bgColor:{label:c.bgColor.title,items:pn(c.bgColor.items,i),onSelect:e=>{n("bgColor",e.currentTarget.dataset.id),d()}},bgOpacity:{label:c.bgOpacity.title,items:pn(c.bgOpacity.items,o),onSelect:e=>{n("bgOpacity",e.currentTarget.dataset.id),d()}},preview:{label:"Preview",onSelect:()=>e(Ac.PREVIEW)}};return ke(Be,{children:[ke(Bc,l({},u.bgColor)),ke(xc,l({},u.bgOpacity)),ke(op,{updateMetricsPayload:t}),s&&ke(Be,{children:[ke(Tc,{}),ke(Pc,l({},u.preview))]})]})},[Ac.WINDOW]:({setPanel:e,updateMetricsPayload:t})=>{const n=$d(e=>e.setCaptions),i=$d(e=>e.captions.windowOpacity),o=$d(e=>e.captions.windowColor),r=$d(e=>e.appearance.isMenuBlockingUI),a=$d(e=>e.appearance.isMenuVerticalVideoMode),s=r||a,c=cr(),d=()=>t({has_changed_window:!0,final_action_reset_all:!1,has_customized:!0}),u={windowColor:{label:c.windowColor.title,items:pn(c.windowColor.items,o),onSelect:e=>{n("windowColor",e.currentTarget.dataset.id),d()}},windowOpacity:{label:c.windowOpacity.title,items:pn(c.windowOpacity.items,i),onSelect:e=>{n("windowOpacity",e.currentTarget.dataset.id),d()}},preview:{label:"Preview",onSelect:()=>e(Ac.PREVIEW)}};return ke(Be,{children:[ke(Bc,l({},u.windowColor)),ke(xc,l({},u.windowOpacity)),ke(op,{updateMetricsPayload:t}),s&&ke(Be,{children:[ke(Tc,{}),ke(Pc,l({},u.preview))]})]})},[Ac.PREVIEW]:({updateMetricsPayload:e})=>ke(Be,{children:[ke(ip,{}),ke(op,{updateMetricsPayload:e})]})},ap={[Ac.EMPTY]:()=>ke(Be,{}),[Ac.LANGUAGES]:({setMenuDisplayed:e})=>$d(e=>e.appearance.isMenuBlockingUI)&&ke(wc,{title:"CC/Subtitles",setMenuDisplayed:e}),[Ac.CUSTOMIZE]:({setPanel:e,setMenuDisplayed:t})=>ke(wc,{title:"Customize",onBack:()=>e(Ac.LANGUAGES),setMenuDisplayed:t}),[Ac.FONT]:({setPanel:e,setMenuDisplayed:t})=>ke(wc,{title:"Font",onBack:()=>e(Ac.CUSTOMIZE),setMenuDisplayed:t}),[Ac.BACKGROUND]:({setPanel:e,setMenuDisplayed:t})=>ke(wc,{title:"Background",onBack:()=>e(Ac.CUSTOMIZE),setMenuDisplayed:t}),[Ac.WINDOW]:({setPanel:e,setMenuDisplayed:t})=>ke(wc,{title:"Window",onBack:()=>e(Ac.CUSTOMIZE),setMenuDisplayed:t}),[Ac.PREVIEW]:({previousPanel:e,setPanel:t,setMenuDisplayed:n})=>ke(wc,{title:"Preview",onBack:()=>t(e),setMenuDisplayed:n})},sp=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i,updateMetricsPayload:o})=>{const r=Ac.LANGUAGES,[a,s]=Me(r),[l,c]=Me(r),d=(e=>rp[e]||rp[Ac.EMPTY])(a),u=(e=>ap[e]||ap[Ac.EMPTY])(a),p=e=>{c(a),s(e)};return vc({isMenuDisplayed:e,defaultPanel:r,setPanel:s}),ke(Cc,{type:Sc.CC,isMenuDisplayed:e,setMenuDisplayed:t,panel:a,buttonRef:n,progressBarAndButtonsRef:i,toggleKey:Vi.CCMenu,panelContent:ke(d,{setPanel:p,setMenuDisplayed:t,previousPanel:l,updateMetricsPayload:o}),headerContent:ke(u,{setPanel:p,setMenuDisplayed:t,previousPanel:l})})},lp=({withButtons:e,withMenus:t,menuProps:n})=>{const i=(()=>{const e=$d(e=>e.captions.textTracks),t=$d(e=>e.playback.supportsTextTracks),n=$d(e=>e.appearance.isDisplayContextBackbone),i=$d(e=>e.displayList.ad),o=$d(e=>e.embed.speedChangeEnabled),r=$d(e=>e.playback.qualities),a=$d(e=>e.embed.quality),s=$d(e=>e.playback.isChromecastConnected),l=$d(e=>e.chapters.chapters),c=$d(e=>e.embed.transcript),d=$d(e=>e.embed.cc),u=$d(e=>e.embed.chapters),p=!!(a&&(null==r?void 0:r.length)),_=t&&!!e.length&&n&&!i&&d,v=n&&!(!o&&!p)&&!s&&!i,m=!!(null==l?void 0:l.length)&&u&&!i;return{[Sc.CC]:_,[Sc.PREFS]:v,[Sc.CHAPTERS]:m,[Sc.TRANSCRIPT]:c}})(),r=$d(e=>e.playback.pictureInPictureEnabled),a=$d(e=>e.embed.fullscreen),s=$d(e=>e.embed.showVimeoLogo),c=$d(e=>e.embed.volume),d=$d(e=>e.appearance.fullscreen),u=$d(e=>e.embed.airplay),p=$d(e=>e.playback.supportsAirPlay),_=$d(e=>e.embed.chromecast),v=$d(e=>e.playback.supportsChromecast),m=$d(e=>e.playback.isChromecastSetupWithAvailableDevices),f=$d(e=>e.appearance.stereoscopicEnabled),h=$d(e=>e.playback.supportsStereoscopic),g=$d(e=>e.displayList.ad),b=$d(e=>e.playback.loadedMetadata),y=$d(e=>{var t;return null==(t=e.interactive.hotspots)?void 0:t.length}),E=$d(e=>e.interactive.enabled),C=$d(e=>e.interactive.ready),T=!!E&&(!C||y),w=p&&b&&!g&&!T&&u,L=_&&v&&m&&!g&&!T,S=f&&h&&!g,A=r&&!g,k=(a||d)&&!(o.iOS&&y),P=s&&!g;return ke(Be,{children:[e&&c&&ke(Su,{}),e&&i[Sc.CC]&&ke(Iu,l(l({},n[Sc.CC]),{},{ref:n[Sc.CC].buttonRef})),t&&i[Sc.CC]&&ke(sp,l({},n[Sc.CC])),e&&i[Sc.TRANSCRIPT]&&ke(Nu,{}),e&&i[Sc.PREFS]&&ke(Tu,l(l({},n[Sc.PREFS]),{},{ref:n[Sc.PREFS].buttonRef})),t&&i[Sc.PREFS]&&ke(Ju,l({},n[Sc.PREFS])),e&&i[Sc.CHAPTERS]&&ke(Pu,l(l({},n[Sc.CHAPTERS]),{},{ref:n[Sc.CHAPTERS].buttonRef})),t&&i[Sc.CHAPTERS]&&ke(np,l({},n[Sc.CHAPTERS])),e&&L&&ke(Ru,{}),e&&w&&ke(ku,{}),e&&S&&ke(Ou,{}),e&&A&&ke(wu,{}),e&&k&&ke(Cu,{}),e&&P&&ke(Au,{})]})},cp=()=>{const e=Ue(null),t=$d(e=>e.displayList.controlBar),n=$d(e=>e.displayList.progressBar),i=$d(e=>e.displayList.outro),o=$d(e=>e.playback.playInitiated),r=$d(e=>e.embed.isTrailer),a=$d(e=>e.appearance.isMenuBlockingUI),s=(()=>{const e=$d(e=>e.setAppearance),[t,n]=Me(!1);return{onMouseEnter:()=>{t||e("mousedOverControlBar",!0),n(!1)},onMouseLeave:()=>{t||e("mousedOverControlBar",!1),n(!1)},onTouchStart:()=>{e("mousedOverControlBar",!0),n(!0)},onTouchEnd:()=>{e("mousedOverControlBar",!1),n(!0)}}})(),c=vd()===_d.CENTER,d=r&&!o,[u,p]=Me(null),_=(({setHoveredChapterId:e,progressBarAndButtonsRef:t})=>{const n=$d(e=>e.displayList.menu),i=$d(e=>e.setDisplayList),o=Ue(null),r=Ue(null),a=Ue(null),{sendBPClosedCaptionsClickEvent:s,updateCCMetricsPayload:c,resetCCMetricsPayload:d}=(()=>{const e=$d(e=>e.captions.language),t=$d(e=>e.captions.fontSize),n=$d(e=>e.captions.fontOpacity),i=$d(e=>e.captions.fontFamily),o=$d(e=>e.captions.color),r=$d(e=>e.captions.edgeStyle),a=$d(e=>e.captions.bgColor),s=$d(e=>e.captions.bgOpacity),c=$d(e=>e.captions.windowColor),d=$d(e=>e.captions.windowOpacity),u=Ue({fontSize:t,fontOpacity:n,fontColor:o,fontFamily:i,edgeStyle:r,bgColor:a,bgOpacity:s,windowColor:c,windowOpacity:d}),p=Ue({language_selected:e||"off",has_clicked_customize:!1,has_customized:!1,has_clicked_font:!1,has_changed_font:!1,has_clicked_background:!1,has_changed_background:!1,has_clicked_window:!1,has_changed_window:!1,has_reset_all:!1,final_action_reset_all:!1}),_=xe(e=>{p.current=l(l({},p.current),e)},[]),v=pd();return Ie((function(){_({language_selected:e||"off"})}),[e,_]),Ie((function(){const e=t!==u.current.fontSize||o!==u.current.fontColor||i!==u.current.fontFamily||n!==u.current.fontOpacity||r!==u.current.edgeStyle||a!==u.current.bgColor||s!==u.current.bgOpacity||c!==u.current.windowColor||d!==u.current.windowOpacity;_({has_customized:e})}),[t,n,o,i,r,a,s,c,d,_]),{sendBPClosedCaptionsClickEvent:()=>v(ha.CLOSED_CAPTIONS_CLICK,p.current),updateCCMetricsPayload:_,resetCCMetricsPayload:()=>{p.current={language_selected:e||"off",has_clicked_customize:!1,has_customized:!1,has_clicked_font:!1,has_changed_font:!1,has_clicked_background:!1,has_changed_background:!1,has_clicked_window:!1,has_changed_window:!1,has_reset_all:!1,final_action_reset_all:!1},u.current={fontSize:t,fontOpacity:n,fontColor:o,fontFamily:i,edgeStyle:r,bgColor:a,bgOpacity:s,windowColor:c,windowOpacity:d}}}})(),[u,p]=Me(!1),[_,v]=Me(!1),[m,f]=Me(!1),h=e=>t=>{e===v&&_&&!t&&(s(),d()),e(t),i("menu",t),e!==p&&p(!1),e!==v&&v(!1),e!==f&&f(!1)};n||(p(!1),v(!1),f(!1));const g=h(p),b=h(f),y=h(v);return{[Sc.CC]:{isMenuDisplayed:_,setMenuDisplayed:y,buttonRef:a,progressBarAndButtonsRef:t,updateMetricsPayload:c},[Sc.PREFS]:{isMenuDisplayed:u,setMenuDisplayed:g,buttonRef:o,progressBarAndButtonsRef:t},[Sc.CHAPTERS]:{isMenuDisplayed:m,setMenuDisplayed:b,buttonRef:r,progressBarAndButtonsRef:t,onMenuOptionMouseEnter:t=>{var n,i;return e(parseInt(null==t||null==(n=t.currentTarget)||null==(i=n.dataset)?void 0:i.id,10))},onMenuOptionMouseLeave:()=>e(null)}}})({setHoveredChapterId:p,progressBarAndButtonsRef:e}),v=dn("ControlBar_module_controlBarWrapper__ea0d6863",c&&"ControlBar_module_centerPlayButton__ea0d6863"),m=dn(wn.VP_CONTROLS,"ControlBar_module_controls__ea0d6863",d&&"ControlBar_module_trailer__ea0d6863",!n&&"ControlBar_module_noProgressBar__ea0d6863"),f=dn("ControlBar_module_progressBarAndButtons__ea0d6863",!n&&"ControlBar_module_noProgressBar__ea0d6863");return ke(yc,{children:[ke("div",{className:v,children:[ke(yu,{controlBarVisibilityHandlers:s}),ke(Hl,{visible:t,styleOverrides:{exitDone:{display:"flex",visibility:"hidden"}},children:ke("div",l(l({className:m},s),{},{"data-control-bar":!0,children:!i&&!d&&ke("div",{className:f,ref:e,children:[n&&ke(Be,{children:[ke(wp,{context:ju.CONTROL_BAR}),ke(Sp,{context:ju.CONTROL_BAR}),ke(zu,{hoveredChapterId:u})]}),ke(lp,{withButtons:!0,menuProps:_,withMenus:!a})]})}))}),ke(Mu,{})]}),ke(lp,{menuProps:_,withMenus:a,withButtons:!1})]})};const dp=()=>{const e=$d(e=>e.displayList.notification);return ke("div",{className:`Notification_module_root__8c1db022 ${e?"Notification_module_active__8c1db022":""}`})};let up;!function(e){e.Backward="backward",e.Forward="forward"}(up||(up={}));const pp=()=>{const e=$d(e=>e.displayList.nudgeNotification),t=$d(e=>e.nudge.direction),n=$d(e=>e.nudge.time);return ke(Hl,{visible:e,children:ke("div",{className:`NudgeNotification_module_nudge__d98d80a9 ${t===up.Backward&&"NudgeNotification_module_nudgeBackward__d98d80a9"}`,children:ke("div",{className:"NudgeNotification_module_nudgeInfo__d98d80a9",children:[ke("div",{className:"NudgeNotification_module_nudgeIcon__d98d80a9",children:ke(gc,{name:fc.FAST_FORWARD})}),ke("div",{className:"NudgeNotification_module_nudgeTime__d98d80a9",children:n?n+" seconds":""})]})})})};let _p;const vp=()=>{const e=Ue(Yd().getState().playback.currentFragment),t=Ue(Yd().getState().playback.currentTime);Yd().subscribe(t=>e.current=t.playback.currentFragment),Yd().subscribe(e=>t.current=e.playback.currentTime);const n=$d(e=>e.displayList.overlay),i=$d(e=>e.displayList.ad),r=$d(e=>e.liveEvent.isLiveEvent),a=$d(e=>e.liveEvent.isArchived),s=r&&!a,l=$d(e=>e.embed.background),c=$d(e=>e.embed.controls),d=$d(e=>e.displayList.outro),u=$d(e=>e.config.video.spatial),p=!(!o.spatialPlayback||!u),_=o.touch&&!n&&!i&&!s&&!l&&c&&!d&&!p,v=$d(e=>e.setPlayback),m=$d(e=>e.setNudgeProperties),[f,h]=Me({left:0,right:0}),g=n=>i=>{let o;i.preventDefault(),n===up.Forward?(o=f.left+1,h({left:o,right:0})):(o=f.right+1,h({left:0,right:o})),clearTimeout(_p),_p=setTimeout(b,250),o>=2&&function(n,i){const{startTime:o,endTime:r}=e.current;let a=0;a=n===up.Forward?t.current+10:t.current-10,a<o?a=o:a>=r?a=r-.001:m({direction:n,time:10+10*(i-2)}),v("currentTime",a,{seekType:"nudge"})}(n,o)};function b(){h({left:0,right:0})}return _&&ke(Be,{children:[ke("div",{className:"NudgeArea_module_nudgeArea__1e671f9b NudgeArea_module_nudgeBackwardArea__1e671f9b",onTouchEnd:g(up.Backward)}),ke("div",{className:"NudgeArea_module_nudgeArea__1e671f9b NudgeArea_module_nudgeForwardArea__1e671f9b",onTouchEnd:g(up.Forward)})]})},mp=({player:e,children:t})=>(ze(e=>{}),ke(Gd,{player:e,children:[ke(Op,{}),t]})),fp=({element:e,children:t})=>je(ke(Be,{children:t}),e);const hp=()=>{const e=$d(e=>e.embed.like),t=$d(e=>e.embed.watchLater),n=[{key:"↑",text:"Volume up",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"↓",text:"Volume down",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"→",text:"Scrub forward",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"←",text:"Scrub backwards",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"X",text:"Like",ignore:!e},{key:"S",text:"Share",ignore:!$d(e=>e.embed.share)},{key:"W",text:"Watch Later",ignore:!t},{key:"C",text:"Toggle Captions"},{key:"H",text:"Toggle Preferences Menu"},{key:"F",text:"Toggle fullscreen"},{key:"⇧T",text:"Toggle Transcript",ignore:!$d(e=>e.embed.transcript)},{key:"V",text:"View on Vimeo",ignore:$d(e=>e.embed.onsite)},{key:"J",text:"Scrub backwards"},{key:"K",text:"Play/Pause"},{key:"L",text:"Scrub forward"},{key:"M",text:"Toggle Mute"}];return ke(Be,{children:[ke("h1",{id:wn.VP_OVERLAY_LABELLEDBY,children:"Keyboard Shortcuts"}),ke("div",{className:"HelpOverlay_module_keysWrapper__584c584b","data-help-keys":!0,children:n.map(e=>!e.ignore&&ke("div",{className:`HelpOverlay_module_keyWrapper__584c584b ${e.className||""}`,children:[ke("div",{className:"HelpOverlay_module_keySymbol__584c584b",children:e.key}),ke("div",{className:"HelpOverlay_module_keyText__584c584b",children:e.text})]}))})]})};const gp=Ve((e,t)=>{const n=$d(e=>e.setOverlay),i=on(()=>n("purpose",In.EMPTY));return ke("button",l(l({ref:t,className:`CloseOverlayButton_module_closeOverlayButton__64883c67 ${Yc.focusableButton}`},i),{},{children:ke(gc,{name:fc.CLOSE})}))});const bp=({children:e,visible:t,style:n})=>{const i=$d(e=>e.element),o=Ue(null),r=Ue(null);return Ie((function(){t&&r.current&&i.contains(document.activeElement)?(o.current=document.activeElement,at(r.current)):!t&&o.current&&(at(o.current),o.current=null)}),[t,r,i]),ke("div",{className:`OverlayBase_module_overlayWrapper__226bd2d4 ${t?"":"OverlayBase_module_hidden__226bd2d4"}`,role:"dialog","aria-modal":"true","aria-labelledby":wn.VP_OVERLAY_LABELLEDBY,"data-content-area-sibling-eligible":!0,style:n,"data-overlay":!0,children:[ke("div",{className:"OverlayBase_module_overlayCell__226bd2d4",children:ke("div",{className:`OverlayBase_module_overlay__226bd2d4 ${t?"OverlayBase_module_visible__226bd2d4":""}`,children:e})}),ke("nav",{className:"OverlayBase_module_overlayNav__226bd2d4",children:ke(gp,{ref:r})})]})},yp=()=>{const e=$d(e=>e.overlay.purpose),t=$d(e=>e.displayList.overlay),[n,i]=Me(e),o=t&&xn(e);return o&&i(e),ke(Hl,{visible:o,duration:o?200:105,styleOverrides:{exitDone:{display:"block",visibility:"hidden"}},onFaded:()=>{i(e)},children:ke(bp,{visible:o,children:n===In.HELP&&ke(hp,{})})})};const Ep=()=>{const{pipOverlay:e}=$d(e=>e.displayList);return ke(Hl,{visible:e,children:ke("div",{className:`${wn.VP_PIP_OVERLAY} PipOverlay_module_overlay__4ebce77e`,children:[ke(gc,{name:fc.PIP}),ke("div",{className:"PipOverlay_module_title__4ebce77e",children:"Playing in picture-in-picture"})]})})};const Cp=()=>{const e=$d(e=>e.liveEvent.isLiveEvent),t=$d(e=>e.liveEvent.isPlayable),n=$d(e=>e.liveEvent.isEnded),i=e&&!n,o=$d(e=>e.webinar.webinarRegistrantBlocked),r=i&&!o,a=$d(e=>e.displayList.controlBar),s=$d(e=>e.playback.paused),l=$d(e=>e.appearance.playerSizeMode)===Ai.TINY;return r&&ke(Hl,{visible:!a&&!s||a&&l&&t,children:ke("div",{className:"LiveStatusLabelAndViewerCounter_module_liveStatusLabelAndViewerCounter__df50a84b",children:[ke(wp,{context:ju.PLAYER_UI}),ke(Sp,{context:ju.PLAYER_UI})]})})};const Tp={[ju.PLAYER_UI]:"LiveStatusLabel_module_playerUI__c53a9f1c",[ju.CONTROL_BAR]:"LiveStatusLabel_module_controlBar__c53a9f1c"},wp=({className:e,context:t})=>{const n=$d(e=>e.embed.hideLiveLabel),i=$d(e=>e.webinar.webinarRegistrantBlocked),o=$d(e=>e.liveEvent.isLiveEvent),r=$d(e=>e.liveEvent.isPlayable),a=$d(e=>e.liveEvent.isArchived),s=Tp[t],l=dn(wn.VP_LIVE_STATUS,"LiveStatusLabel_module_liveStatusLabel__c53a9f1c",s,e),c=dn(wn.VP_LIVE_STATUS_CIRCLE,"LiveStatusLabel_module_liveStatusCircle__c53a9f1c",r?"LiveStatusLabel_module_live__c53a9f1c":"LiveStatusLabel_module_offline__c53a9f1c"),d=dn("LiveStatusLabel_module_liveStatusText__c53a9f1c",r?"LiveStatusLabel_module_live__c53a9f1c":"LiveStatusLabel_module_offline__c53a9f1c");return o&&!a&&!n&&!i&&ke("div",{className:l,"data-live-status-label":!0,children:[ke("div",{className:c}),ke("span",{className:d,children:"LIVE"})]})};const Lp={[ju.PLAYER_UI]:"LiveViewerCounter_module_playerUI__6c695e18",[ju.CONTROL_BAR]:"LiveViewerCounter_module_controlBar__6c695e18"},Sp=({className:e="",context:t})=>{const n=$d(e=>e.liveEvent.isPlayable),i=$d(e=>e.embed.showViewerCount),o=$d(e=>e.liveEvent.viewerCount),r=$d(e=>e.webinar.webinarRegistrantBlocked),a=$d(e=>e.liveEvent.liveStatsRequestSucceeded),s=Lp[t],l=dn(wn.VP_LIVE_VIEWER_COUNT,"LiveViewerCounter_module_liveViewerCounter__6c695e18",s,e);return n&&i&&!r&&a&&ke("div",{className:l,"data-live-viewer-counter":!0,children:[ke(gc,{className:"LiveViewerCounter_module_liveViewerCounterIcon__6c695e18",name:fc.PERSON_FILLED}),ke("span",{className:"LiveViewerCounter_module_liveViewerCountValue__6c695e18",children:o})]})};const Ap=()=>{const e=$d(e=>e.setPlayback);return $d(e=>e.displayList.unmuteButton)&&ke(Kc,{className:`${wn.VP_UNMUTE} ${Ln.EXCLUDE_GLOBAL_BUTTON_STYLES} ${Yc.focusable} UnmuteButton_module_container__12242335`,onClick:t=>{t.preventDefault(),e("muted",!1)},icon:ke(gc,{className:"UnmuteButton_module_icon__12242335",name:fc.VOLUME_OFF_FILLED}),color:Kn.PRIMARY,size:jn.CUSTOM,"data-unmute-button":!0,children:ke(Wc,{className:"UnmuteButton_module_text__12242335",size:Jn.MD,children:"Unmute"})})};const kp=({style:e})=>{const t=$d(e=>e.interactive.demoEnd),n=$d(e=>e.appearance.playerBreakpoint),i=$d(e=>e.displayList.progressBar),o=$d(e=>e.appearance.playerSizeMode),r=pd(),a=o===Ai.TINY,s=(e=>{switch(e){case zn.XXL:case zn.XL:case zn.LG:case zn.MD:return ei.LG;default:return ei.SM}})(n),l=(e=>{const t=Date.now(),n=Date.parse(e);return Math.floor((n-t)/864e5)})(t),c=1===l?"There is 1 day of interactivity remaining on this demo.":"There are "+l+" days of interactivity remaining on this demo.";let d;d=a||[zn.XS,zn.XXS].includes(n)&&!i?"Demo":s===ei.LG?"Learn More":"Interactive demo";const u=dn("InteractiveDemoUpsellBanner_module_button__111d9322",Ln.EXCLUDE_GLOBAL_BUTTON_STYLES),p=ke(gc,{name:fc.INFO_CIRCLE,className:"InteractiveDemoUpsellBanner_module_infoIcon__111d9322"});return ke(Xc,{color:"linear-gradient(270deg, #0095d5 0%, #00b285 49.59%, #00be4c 100%)",style:e,type:"interactive-demo",children:[s===ei.LG&&ke(Wc,{size:Jn.MD,weight:Qn.NUM_500,className:"InteractiveDemoUpsellBanner_module_text__111d9322",children:[p,c]}),ke(mc,{tabIndex:"-1",href:"https://vimeo.com/features/interactive-video",children:ke(Kc,{className:u,icon:s===ei.SM&&p,iconSize:jn.CUSTOM,color:Kn.CUSTOM,onClick:()=>r(ha.CLICK,{target:"view_interactive_homepage",name:"interactive_demo_banner_view",copy:"Learn_more",type:"upsell"}),children:ke(Wc,{size:Jn.MD,weight:s===ei.SM?Qn.NUM_500:Qn.BOLD,children:d})})})]})},Pp=()=>{const e=$d(e=>e.displayList.banner),t=$d(e=>e.config);return ai(t)?ke(Hl,{visible:e,children:ri(t)&&ke(kp,{})}):null},Ip={[oi.LIGHT]:ii.EIGHTY,[oi.DARK]:ii.TWENTY},Op=()=>{const e=$d(e=>e.uuid),t=$d(e=>e.embed.transparent),n=$d(e=>e.appearance.fullscreen),i=$d(e=>e.appearance.colorOne),o=$d(e=>e.appearance.colorTwo),r=$d(e=>e.appearance.colorThree),a=$d(e=>e.appearance.colorFour),s=[[ni.ONE,li(i,ii.ONE_HUNDRED)],[ni.TWO,li(o,ii.ONE_HUNDRED)],[ni.THREE,li(r,ii.ONE_HUNDRED)],[ni.FOUR,li(a,ii.ONE_HUNDRED,!1,!0)],[ni.ONE_MONOCHROME,li(i,ii.ONE_HUNDRED,!0)],[ni.TWO_MONOCHROME,li(o,ii.ONE_HUNDRED,!0)],[ni.ONE_OPACITY_NINETY,li(i,ii.NINETY,!1,!0)],[ni.THREE_OPACITY_TWENTY,li(r,ii.TWENTY)],[ni.ONE_MONOCHROME_OPACITY_TWENTY,li(i,ii.TWENTY,!0)],[ni.TWO_MONOCHROME_OPACITY_TWENTY,li(o,ii.TWENTY,!0)],[ni.ONE_MONOCHROME_OPACITY_SIXTY,li(i,ii.SIXTY,!0)],[ni.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY,li(i,Ip,!0)],[ni.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY,li(o,Ip,!0)]];let l,c;return n?(l="#000 !important",c="transparent !important"):t?(l="transparent !important",c="transparent !important"):(l=`var(${ni.FOUR})`,c=`var(${ni.FOUR})`),ke("style",{type:"text/css","data-player-colors":e,children:[`.player-${e} {\n                ${ci(s)}\n            }`,`.player-${e} {\n                background-color: ${l};\n            }`,`.player-${e} .${wn.VP_VIDEO_WRAPPER} {\n                background-color: ${c};\n            }`]})};const Rp=({children:e})=>{let t=$d(e=>e.element);const n=$d(e=>e.embed.rightContentAreaEnabled),i=$d(e=>e.displayList.rightContentArea),r=$d(e=>e.displayList.transcript),a=["RightContentArea_module_rightContentArea__25340be4"];var s;return i&&a.push("RightContentArea_module_visible__25340be4"),o.isGoogleBot&&r&&(t=null==(s=t)?void 0:s.parentElement,a.push("RightContentArea_module_googleBot__25340be4")),n&&je(ke("div",{id:Sn.RIGHT_CONTENT_AREA,className:dn.apply(void 0,a),"aria-hidden":!i,children:e}),t)};const Np=()=>{const[e,t]=Me(!1),n=$d(e=>e.appearance.placeholderThumbnail),i=$d(e=>e.appearance.appSizeMode),r=$d(e=>e.appearance.appBreakpoint),a=$d(e=>e.embed.rightContentAreaEnabled),s=$d(e=>e.displayList.rightContentArea),c=$d(e=>e.appearance.rightContentAreaAnimating),d=$d(e=>e.element),u=a&&(s||c),p=r===zn.XS||r===zn.XXS||i===Ai.MINI||i===Ai.TINY,_=dn("ContentAreaBackground_module_img__90d1a7f8",e&&"ContentAreaBackground_module_loaded__90d1a7f8"),v=p?{visible:s,duration:400}:{visible:u,duration:0};return o.isGoogleBot?null:je(ke(Hl,l(l({},v),{},{children:ke("div",{className:"ContentAreaBackground_module_imgContainer__90d1a7f8",children:ke("img",{onLoad:()=>t(!0),alt:"video thumbnail",className:_,src:n})})})),null==d?void 0:d.querySelector(`.${Ln.CONTENT_AREA_BACKGROUND_CONTAINER}`))};let Mp,Dp,xp,Bp;Ke(".TranscriptError_lazy_module_refresh__82862687{border:none;padding:4px 12px;gap:4px;height:32px;background:hsla(0,0%,100%,.1);border-radius:4px}.TranscriptError_lazy_module_icon__82862687{width:40px;height:40px}",{}),function(e){e.IDLE="idle",e.LOADED="loaded",e.ERROR="error",e.LOADING="loading"}(Mp||(Mp={})),function(e){e.MAIN="main",e.LANGUAGE="language"}(Dp||(Dp={})),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(xp||(xp={})),function(e){e.PREV="prev",e.NEXT="down",e.FIRST="first",e.LAST="last"}(Bp||(Bp={}));const{Provider:Vp,useStore:Up}=We(),Fp={timecodeDisplayed:!0,selectedSettingsMenu:Dp.MAIN,settingsDisplayed:!1,currentSearchResultIndex:0,searchTerms:"",searchResults:[],transcriptDisabled:!1,autofollowEnabled:!0},Hp=({children:e})=>{const t=$d(e=>e.subscribe),n=$d(e=>e.captions.textTrackEls),i=$d(e=>e.captions.rtlTracks),o=$d(e=>e.config),r=$d(e=>e.events),a=$d(e=>e.displayList.transcript),s=$d(e=>e.displayList.overlay),c=$d(e=>e.appearance.appBreakpoint),d=$d(e=>e.appearance.appSizeMode),u=pd(),p=((e,t)=>e.map(e=>{const n=e.id.replace(Pn.TEXT_TRACK_ID_PREFIX,""),i=t.includes(n);return{id:e.id,label:e.label,language:e.srclang,rtl:i}}))(n,i),_=nc(o,p),v=Ue(null==_?void 0:_.language);return ke(Vp,{createStore:()=>$e((e,n)=>{const i=(t,n)=>e(e=>l(l({},e),{},{[t]:n})),o=Fp.selectedSettingsMenu,m=e=>i("selectedSettingsMenu",e),f=Fp.settingsDisplayed,h=t=>{var i,o;const a={};if(t!==(null==(i=n())?void 0:i.settingsDisplayed)){var s,c;a.settingsDisplayed=t;const e=null==(s=n())||null==(c=s.selectedTrack)?void 0:c.language;t?u(ha.EMBEDDED_TRANSCRIPT_CLICK,{name:"open_embed_transcript_setting",copy:"settings",location:"player_embedded_transcript",element:"embedded_transcript_settings_menu",current_transcript_language:e}):t||e===v.current||(u(ha.EMBEDDED_TRANSCRIPT_CLICK,{name:"change_language_settings",copy:e,location:"player_embedded_transcript_settings",element:"language_select_panel",current_transcript_language:e}),v.current=e)}(null==(o=n())?void 0:o.settingsDisplayed)&&!t&&(a.selectedSettingsMenu=Fp.selectedSettingsMenu),Object.keys(a).length&&e(e=>l(l({},e),a));const d=t?"preact-menu":"";r.fire(Bt._menuVisibilityChanged,d)},g=Fp.timecodeDisplayed,b=Fp.currentSearchResultIndex,y=e=>i("currentSearchResultIndex",e),E=Fp.searchResults,C=e=>{0===e.length&&i("currentSearchResultIndex",0),i("searchResults",e)},T=Fp.searchTerms,w=e=>i("searchTerms",e),L=!a||s,S=qp(c,d),A=Fp.autofollowEnabled;function k(){w(Fp.searchTerms),C(Fp.searchResults),y(Fp.currentSearchResultIndex)}return t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>{e||(h(Fp.settingsDisplayed),m(Fp.selectedSettingsMenu))}),t(e=>{var t,n;return{transcriptVisible:null==e||null==(t=e.displayList)?void 0:t.transcript,overlayVisible:null==e||null==(n=e.displayList)?void 0:n.overlay}},({transcriptVisible:e,overlayVisible:t})=>{i("transcriptDisabled",!(e&&!t))}),t(e=>{var t,n;return{breakpoint:null==e||null==(t=e.appearance)?void 0:t.appBreakpoint,sizeMode:null==e||null==(n=e.appearance)?void 0:n.appSizeMode}},({breakpoint:t,sizeMode:i})=>{const o=qp(t,i);o!==n().transcriptSizeMode&&e(e=>l(l({},e),{},{transcriptSizeMode:o}))}),t(e=>{var t,n;return{outroDisplayed:null==e||null==(t=e.displayList)?void 0:t.outro,animationActive:null==e||null==(n=e.appearance)?void 0:n.rightContentAreaAnimating}},({outroDisplayed:e,animationActive:t})=>{e&&!t&&k()}),{timecodeDisplayed:g,searchTerms:T,setSearchTerms:w,currentSearchResultIndex:b,setCurrentSearchResultIndex:y,settingsDisplayed:f,setSettingsDisplayed:h,selectedTrack:_,availableTracks:p,setSelectedTrack:e=>{const t=p.find(t=>t.id===e);i("selectedTrack",t),k(),r.fire(Bt._transcriptChanged,t)},selectedSettingsMenu:o,setSelectedSettingsMenu:m,searchResults:E,setSearchResults:C,toggleTimecodeDisplayed:()=>{var e;return i("timecodeDisplayed",!(null==(e=n())?void 0:e.timecodeDisplayed))},toggleSettingsDisplayed:()=>{var e;return h(!(null==(e=n())?void 0:e.settingsDisplayed))},transcriptDisabled:L,transcriptSizeMode:S,autoFollowEnabled:A,setAutoFollowEnabled:e=>i("autoFollowEnabled",e)}}),children:e})};function qp(e,t){const n=e===zn.XS||e===zn.XXS,i=t===Ai.MINI||t===Ai.TINY;return n||i?xp.SMALL:e===zn.XL||e===zn.XXL?xp.LARGE:xp.MEDIUM}Ke(".TranscriptMessage_lazy_module_container__da8aac6c{display:flex;justify-content:center;flex-direction:column;align-items:center;height:100%;padding:0 48px;gap:24px;width:100%}.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_messageText__da8aac6c{text-align:center}.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_icon__da8aac6c{width:40px;height:40px}.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c{position:absolute;top:16px;right:16px}.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c,.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c:active,.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c:focus,.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c:hover{background-color:initial!important}.right-content-area-supported.app-mini .TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c,.right-content-area-supported.app-tiny .TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c,.right-content-area-supported.app-xs .TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c,.right-content-area-supported.app-xxs .TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c{top:8px;right:8px}",{});Ke(".TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54{margin-left:8px;border:none;background-color:hsla(0,0%,100%,.1)}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 svg path{fill:#fff}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54:hover:not(:disabled){background-color:hsla(0,0%,100%,.12)}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54:hover:not(:disabled):active{background-color:hsla(0,0%,100%,.3)}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54{top:3.6em;bottom:auto;z-index:1;pointer-events:none}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54.TranscriptControlButton_lazy_module_tooltipDisabled__0a363e54,.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54.TranscriptControlButton_lazy_module_tooltipHidden__0a363e54{display:none}.player.app-xl .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54,.player.app-xxl .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54{width:48px;height:48px}.player.app-xl .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54,.player.app-xxl .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54{top:4.5em}.right-content-area-supported.app-mini .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54,.right-content-area-supported.app-tiny .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54,.right-content-area-supported.app-xs .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54,.right-content-area-supported.app-xxs .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54{border-radius:4px}",{});const Wp=Ve((e,t)=>{let{icon:n,onClick:i,label:o,tooltipLabel:r,disabled:a,className:s}=e,c=Oe(e,["icon","onClick","label","tooltipLabel","disabled","className"]);const d=$d(e=>e.appearance.appBreakpoint),u=Up(e=>e.transcriptDisabled),p=Up(e=>e.settingsDisplayed),_=Up(e=>e.autoFollowEnabled),{onClick:v,onKeyDown:m}=rd(i),f="boolean"!=typeof a?u:a,h=dn(s,Ln.EXCLUDE_GLOBAL_BUTTON_STYLES,"TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54",Yc.focusableButton);let g=jn.MD;d!==zn.XL&&d!==zn.XXL||(g=jn.CUSTOM);const b=ke(Kc,l({ref:t,onClick:v,onKeyDown:m,size:g,icon:n,"aria-label":o,disabled:f,color:Kn.CUSTOM,className:h},c)),y=dn("TranscriptControlButton_lazy_module_tooltip__0a363e54",f&&"TranscriptControlButton_lazy_module_tooltipDisabled__0a363e54",(p||!_)&&"TranscriptControlButton_lazy_module_tooltipHidden__0a363e54");return ke(Uc,{tooltipText:r,className:y,children:b})}),$p=({className:e})=>{const t=Up(e=>e.selectedTrack),n=$d(e=>e.displayList.transcript),i=$d(e=>e.setDisplayList),o=pd(),r=!n;return ke(Wp,{icon:ke(gc,{name:fc.CLOSE,focusable:"false"}),label:"Close Transcript",tooltipLabel:"Close",onClick:()=>{i("transcript",!1),o(ha.EMBEDDED_TRANSCRIPT_CLICK,{name:"exit_embed_transcript",copy:"Close Transcript",location:"player_embedded_transcript",element:"x_button",current_transcript_language:t.language})},disabled:r,"aria-controls":An.TRANSCRIPT_VIEWER,className:e})},Yp=({message:e,icon:t,componentType:n,children:i})=>ke("div",{className:"TranscriptMessage_lazy_module_container__da8aac6c","data-component-type":n,children:[ke($p,{className:"TranscriptMessage_lazy_module_closeMessageButton__da8aac6c"}),t||ke(gc,{name:fc.INFO_CIRCLE,className:"TranscriptMessage_lazy_module_icon__da8aac6c"}),ke(Wc,{size:Jn.LG,weight:Qn.BOLD,className:"TranscriptMessage_lazy_module_messageText__da8aac6c",children:e}),i]}),Gp=({onRetry:e})=>{const t=pd(),n=Up(e=>e.selectedTrack),i=ke(gc,{name:fc.WARN_CIRCLE,className:"TranscriptError_lazy_module_icon__82862687"}),o=dn(Ln.EXCLUDE_GLOBAL_BUTTON_STYLES,"TranscriptError_lazy_module_refresh__82862687");return ke(Yp,{message:"There was a problem loading the transcript.",componentType:"transcript-error",icon:i,children:ke(Kc,{className:o,size:jn.CUSTOM,onClick:()=>{e(),t(ha.EMBEDDED_TRANSCRIPT_CLICK,{name:"click_refresh_error",copy:"Refresh",location:"player_embedded_transcript_error",element:"refresh_transcript_button",current_transcript_language:n.language})},"data-component-type":"retry-request",children:ke(Wc,{size:Jn.MD,weight:Qn.BOLD,children:"Refresh"})})})},zp=()=>{const e=Ue(!0),{module:t,load:n,readyState:i}=cd(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(ke){return Promise.reject(ke)}}}((function(){return import("./Transcript.lazy.module.js")}))),o=null==t?void 0:t.Transcript,r=$d(e=>e.displayList.transcript),a=$d(e=>e.embed.transcript);return r&&e.current&&(n(),e.current=!1),!a||i!==sd.LOADED&&!r?null:ke(Be,{children:[i===sd.LOADING&&ke(ed,{}),i===sd.ERROR&&ke(Gp,{onRetry:n}),i===sd.LOADED&&ke(o,{})]})};let jp;const Kp=()=>{const e=$d(e=>e.playback.buffering),t=$d(e=>e.playback.isChromecastBuffering),n=$d(e=>e.playback.isChromecastConnected),i=$d(e=>e.displayList.progressBar),[o,r]=Me(!1);return e||t?jp=setTimeout(()=>{r(!0)},600):(clearTimeout(jp),r(!1)),i&&ke(Be,{children:[ke(Hl,{visible:n||o,styleOverrides:{enterActive:{opacity:.4},exit:{opacity:.4}},children:ke("div",{className:"BufferHandler_module_shade__cb05e8a3","data-shade":!0})}),ke(Hl,{visible:o,children:ke(ed,{size:ti.LG})})]})};const Xp=()=>{const e=$d(e=>e.captions.activeCues),t=$d(e=>e.captions.language),n=$d(e=>e.captions.direction),i=$d(e=>e.displayList.captions),o=$d(e=>e.displayList.controlBar),r=$d(e=>e.displayList.progressBar),a=$d(e=>e.appearance.fullscreen),s=$d(e=>e.embed.rightContentAreaEnabled),l=$d(e=>e.captions.fontSize),c=$d(e=>e.captions.fontFamily),d=$d(e=>e.captions.fontOpacity),u=$d(e=>e.captions.color),p=$d(e=>e.captions.bgColor),_=$d(e=>e.captions.bgOpacity),v=$d(e=>e.captions.windowOpacity),m=$d(e=>e.captions.windowColor),f=$d(e=>e.captions.edgeStyle),h=$d(e=>e.appearance.videoHeight),g=$d(e=>e.appearance.containerHeight),b=$d(e=>e.embed.transparent);let y=null,E={};!a&&b||h<g-58&&(y=`translateY(-${(g-h)/2}px)`,E.transform=y);const C=dn("Captions_module_captions__5a5f9181",!i&&"Captions_module_hide__5a5f9181",o&&!y&&"Captions_module_withControls__5a5f9181",!r&&"Captions_module_noPlaybar__5a5f9181",a&&"Captions_module_fullscreen__5a5f9181",s&&"Captions_module_contentAreaSibling__5a5f9181");return ke(id,{cues:e,language:t,direction:n,className:C,fontSize:l,fontFamily:c,fontOpacity:d,color:u,bgColor:p,bgOpacity:_,windowOpacity:v,windowColor:m,edgeStyle:f,height:h,style:E})};const Zp=e=>{let{tooltipLabel:t,icon:n,onClick:i,containerRef:o,className:r}=e,a=Oe(e,["tooltipLabel","icon","onClick","containerRef","className"]);const s=$d(e=>e.appearance.playerBreakpoint),c=["xl","xxl"].includes(s)?16:8,d=dn("ToastButton_module_toastButton__e866927a",Ln.EXCLUDE_GLOBAL_BUTTON_STYLES,r);return t?ke(Uc,{tooltipText:t,position:Vc.BOTTOM,containerEl:o,margin:c,children:ke(Kc,l({color:Kn.ALTERNATIVE,size:jn.CUSTOM,icon:n,iconSize:jn.CUSTOM,onClick:i,className:d},a))}):ke(Kc,l({color:Kn.ALTERNATIVE,size:jn.CUSTOM,icon:n,iconSize:jn.CUSTOM,onClick:i,className:d},a))};const Jp=({transitionTime:e,delay:t=400,ariaLabelledby:n})=>{const i=`width ${e-t}ms linear`,[o,r]=Me({});return Ie(()=>{const e=setTimeout(()=>{r({transition:i,width:"100%"})},t);return()=>{clearTimeout(e)}},[r,i,t]),ke("div",{className:"Progress_module_progressWrapper__64de5bf5",role:"progressbar","aria-labelledby":n,children:ke("div",{className:"Progress_module_progress__64de5bf5",style:o})})};const Qp=()=>ke("div",{className:"Divider_module_divider__ab2a5c61"});const e_=({onClick:e,describedBy:t,selected:n})=>ke(Zp,{className:`CloseToastButton_module_close__e44e3d03 ${n?"CloseToastButton_module_selected__e44e3d03":""}`,icon:ke(gc,{name:fc.DISMISS_X}),onClick:e,"aria-label":"Close","aria-describedby":t});const t_=({id:e,children:t,className:n})=>{const i=dn("ToastMessage_module_label__88d8df97",n);return ke(Wc,{id:e,weight:Qn.NORMAL,className:i,sizeMap:{[zn.XXS]:Jn.SM,[zn.SM]:Jn.MD,[zn.XL]:Jn.LG,[zn.XXL]:Jn.XL},children:t})};let n_;const i_=({containerRef:e})=>{const t=$d(e=>e.setToast),[n,i]=Me(!1),[o,r]=Me(!1),[a,s]=Me(!1),l=pd();Ie(()=>{l(ha.VIEW_PLAYER_CSAT_V1),n_=setTimeout(()=>{t("purpose",Ud.EMPTY)},1e4)},[l,t]);return ke(Be,{children:[ke(Jp,{transitionTime:1e4,ariaLabelledby:kn.QOE_SURVEY_TEXT}),ke(t_,{id:kn.QOE_SURVEY_TEXT,children:"How's the viewing experience?"}),ke(Zp,{className:`QoESurvey_module_thumbsUp__1993fb34 ${n?"QoESurvey_module_selected__1993fb34":""}`,tooltipLabel:"Good","aria-label":"Good","aria-describedby":kn.QOE_SURVEY_TEXT,icon:ke(gc,{name:n?fc.THUMBS_UP_FILLED:fc.THUMBS_UP}),onClick:()=>{n||o||a||(l(ha.SELECT_THUMBS_UP_PLAYER_CSAT_V1),i(!0),clearTimeout(n_),setTimeout(()=>{t("purpose",Ud.EMPTY)},200))},containerRef:e}),ke(Zp,{className:`QoESurvey_module_thumbsDown__1993fb34 ${o?"QoESurvey_module_selected__1993fb34":""}`,tooltipLabel:"Poor","aria-label":"Poor","aria-describedby":kn.QOE_SURVEY_TEXT,icon:ke(gc,{name:o?fc.THUMBS_DOWN_FILLED:fc.THUMBS_DOWN}),onClick:()=>{n||o||a||(l(ha.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1),r(!0),clearTimeout(n_),setTimeout(()=>{t("purpose",Ud.EMPTY)},200))},containerRef:e}),ke(Qp,{}),ke(e_,{onClick:()=>{n||o||a||(l(ha.DISMISS_PLAYER_CSAT_V1),s(!0),clearTimeout(n_),t("purpose",Ud.EMPTY))},describedBy:kn.QOE_SURVEY_TEXT,selected:a})]})},o_={[Ud.QOE_SURVEY]:kn.QOE_SURVEY_TEXT},r_=()=>{const e=Ue(null),t=$d(e=>e.toast.purpose),n=$d(e=>e.setDisplayList),[i,o]=Me(t),r=t!==Ud.EMPTY,a=o_[t];return r?(o(t),n("toast",!0)):setTimeout(()=>{o(t),n("toast",!1)},400),ke(od,{ref:e,visible:r,ariaLabelledby:a,children:i===Ud.QOE_SURVEY&&ke(i_,{containerRef:e})})};function a_(e,t){const n=t.querySelector(`.${wn.VP_PLAYER_UI_CONTAINER}`),i=t.querySelector(`.${wn.VP_PLAYER_UI_OVERLAYS}`);Xe(ke(mp,{player:e,children:[ke(pp,{}),ke(Ep,{}),ke(fp,{element:i,children:[ke(r_,{}),ke(Pp,{}),ke(Cp,{}),ke(fu,{}),ke(eu,{}),ke(pu,{}),ke(gu,{}),ke(dp,{}),ke(yp,{}),ke(cp,{}),ke(vp,{}),ke(Ap,{}),ke(Kp,{}),ke(Xp,{})]}),ke(Np,{}),ke(Rp,{children:ke(zp,{})})]}),n)}function s_(e,t,n,i){sa.helpers=gl;const r=function(e){if(!0===e)return Promise.resolve(null);let t=!1;return new Promise((n,i)=>{e.link.addEventListener("load",()=>{if(!t){t=!0;const i=(new Date).getTime()-e.startTime;setTimeout(()=>n(i),100)}},!1)})}(n),a=new Za({element:e,delegate:i,cssLoadedPromise:r}),s=a.store;e.classList.add("js-player-fullscreen");let l=a.expose,c=null,d=null,u=null,p=null,v=null,m=null,f=null,h=null,g=null,b=null,y=null;const E=e.querySelector(".vp-controls"),C={tiny:Bt._enteredTinyMode,mini:Bt._enteredMiniMode,normal:Bt._enteredNormalMode,none:Bt._enteredNormalMode};function T(t){t&&void 0!==C[t]&&(a.events.fire(C[t]),e.classList.toggle("player-normal","normal"===t),e.classList.toggle("player-mini","mini"===t),e.classList.toggle("player-tiny","tiny"===t))}function w(t){t&&void 0!==C[t]&&(e.classList.toggle("app-normal","normal"===t),e.classList.toggle("app-mini","mini"===t),e.classList.toggle("app-tiny","tiny"===t))}function L(t){Object.keys(Gr).forEach(n=>e.classList.toggle(`player-${n}`,t===n))}function S(t){Object.keys(Gr).forEach(n=>e.classList.toggle(`app-${n}`,t===n))}function A(){const t=a.config.embed.settings;e.classList.toggle("with-fullscreen",!!t.fullscreen);const n=t.custom_logo;e.classList.toggle("with-custom-logo",!!n),e.classList.toggle("with-sticky-custom-logo",n&&n.sticky),e.classList.toggle("hide-controls-mode",!!t.background||0===t.controls),e.classList.toggle("touch-support",o.touch),e.classList.toggle("is-google-bot",o.isGoogleBot)}function k(e,t=a.config.video.url){if(!(!t||e&&e.metaKey)){if(-1===t.indexOf("#")&&a.backbone.currentTime>0&&a.backbone.currentTime<a.config.video.duration-30&&!a.backbone.paused&&(t+=`#at=${Math.floor(a.backbone.currentTime)}`),!a.config.embed.on_site)return window.open(t),function(e){if(e&&e.detail>0)try{document.activeElement.blur()}catch(ke){}}(e),a.events.fire(Bt._pauseButtonPressed),!1;window.location=t}}function P(){f||(T(s.get("ui.player.mode")),f=s.watch("ui.player.mode",T)),h||(T(s.get("ui.app.mode")),h=s.watch("ui.app.mode",w))}function I(){v||(L(s.get("ui.player.breakpoint")),v=s.watch("ui.player.breakpoint",L)),m||(S(s.get("ui.app.breakpoint")),m=s.watch("ui.app.breakpoint",S))}function O(){a.config.video.live_event?s.get(jo)||s.get(Xo)?b&&(b.disable(),b=null):(b=new ts(e,a,s),new Sl(a,s)):b&&(b.disable(),b=null)}function R(){A(),g=new Promise((e,t)=>{let n=null;const i=()=>{clearTimeout(n),window.innerWidth>0&&window.innerHeight>0?e():n=setTimeout(i,250)};a.events.once(Bt._ready,i),a.events.once(Bt._error,i)}),function(){const e=(e,t)=>a.verifyConfig().then(()=>{const{signature:n,session:i,timestamp:o,expires:r}=a.config.request,s=`https://${a.config.player_url}/video/${a.config.video.id}/${e}?signature=${n}&session=${i}&time=${o}&expires=${r}`;return _(s,{method:t,withCredentials:!0})}).catch(n=>{wo.captureException(n,{extra:{action:e,method:t}})}),t=(e,t)=>a.updatePhpTokens().then(()=>{const n="following"===e?a.config.video.owner.id:a.config.video.id,i=a.config.user.vimeo_api_interaction_tokens;let o="";if(i)switch(o="?auth=",e){case"likes":o+=i.likes;break;case"watchlater":o+=i.watch_later;break;case"following":o+=i.following}const r=a.config.video.unlisted_hash&&"following"!==e?`:${a.config.video.unlisted_hash}`:"",s=`https://${a.config.vimeo_api_url}/users/${a.config.user.id}/${e}/${n}${r}${o}`;return _(s,{method:t,jwt:a.config.user.vimeo_api_client_token}).catch(n=>{wo.captureException(n,{extra:{action:e,method:t}})})}).catch(e=>{wo.captureException(e)});a.events.on(Bt._vodButtonPressed,e=>{if(a.config.user.purchased)return!a.config.video.vod.is_feature&&a.config.video.vod.feature_id?void a.loadVideo(a.config.video.vod.feature_id).then(()=>(a.events.fire(Bt._playButtonPressed),a.config.video.vod.feature_id)).catch(e=>{wo.captureException(e),a.events.fire(St._showOverlay,"error",{title:"Sorry",message:"There was a problem. Please try again."})}):void a.events.fire(Bt._playButtonPressed);a.config.video.vod&&a.config.video.vod.is_coming_soon?k(null,a.config.video.vod.url):a.performDelegateAction(Ot,()=>{a.events.fire(St._openPopup,"purchase",{productId:e})},[e])}),a.events.on(Bt._likeButtonPressed,()=>{a.config.user.logged_in?a.config.user.id!==a.config.video.owner.id&&(a.config.user.liked?a.performDelegateAction(kt,(function(){"disable"!==a.config.video.privacy?t("likes","DELETE"):e("like","DELETE"),a.config.user.liked=!1,a.events.fire(Bt._unliked)})):a.performDelegateAction(At,(function(){"disable"!==a.config.video.privacy?t("likes","PUT"):e("like","PUT"),a.config.user.liked=!0,a.events.fire(Bt._liked)}))):a.performDelegateAction(Nt,()=>{a.events.fire(St._openPopup,"login-like")})}),a.events.on(Bt._watchLaterButtonPressed,()=>{(a.config.video.url||"unlisted"===a.config.video.privacy)&&(a.config.user.logged_in?a.config.user.watch_later?a.performDelegateAction(It,()=>{t("watchlater","DELETE"),a.config.user.watch_later=!1,a.events.fire(Bt._removedFromWatchLater)}):a.performDelegateAction(Pt,()=>{t("watchlater","PUT"),a.config.user.watch_later=!0,a.events.fire(Bt._addedToWatchLater)}):a.performDelegateAction(Nt,()=>{a.events.fire(St._openPopup,"login-watch-later")}))}),a.events.on(Bt._collectionsButtonPressed,()=>{a.performDelegateAction(Mt,()=>{a.config.video.vod&&a.config.video.vod.url?k(null,`${a.config.video.vod.url}#collections`):a.config.video.url&&k(null,`${a.config.video.url}#collections`)})}),a.events.on(Bt._shareButtonPressed,()=>{const e=a.config.embed.settings.share&&a.config.embed.settings.share.embed_only,t=()=>{a.events.fire(St._showOverlay,"share",e)};ee.element?t():a.performDelegateAction(Rt,t)}),a.events.on(Bt._embedButtonPressed,()=>{a.config.embed.settings.share.embed_only&&a.performDelegateAction(Rt,()=>{a.events.fire(St._showOverlay,"share",!0)})}),a.events.on(Bt._followButtonPressed,()=>{if(a.config.user.logged_in&&a.config.user.id!==a.config.video.owner.id){if(a.config.user.following)return t("following","DELETE"),a.config.user.following=!1,void a.events.fire(Bt._unfollowed);t("following","PUT"),a.config.user.following=!0,a.events.fire(Bt._followed)}})}(),a.events.on(Bt._pausedForAd,()=>{e.classList.add("player-ad")}),a.events.on([Bt._resumedAfterAd,St._reset],()=>{e.classList.remove("player-ad")}),function(){const t=function(){return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(g,(function(){const t=function(){const{width:t,height:n}=st(e);return oo?n<=200?"10px":t<450?"12px":t<=1024?"11px":"10px":"10px"}();E&&(E.style.fontSize=t);const n=e.querySelector(".vp-sidedock");n&&(n.style.fontSize=t)}))};a.events.on(Bt._didEnterFullscreen,t),a.events.on(Bt._didExitFullscreen,t),window.addEventListener("orientationchange",t),oo&&(e.classList.add("mobile"),t())}(),P(),I(),function(){function t(){let t=e;if(i&&i.getFullscreenElement&&"function"==typeof i.getFullscreenElement){const n=i.getFullscreenElement();n&&n instanceof HTMLElement&&n.contains(e)&&n.classList.contains("js-player-fullscreen")&&(t=n)}return t}a.config.embed.fullscreen=!0,o.iPad&&e.classList.add("no-fullscreen-api-support");const n=a.config.embed.playsinline&&(o.iOS>=10||Wt),r=o.iPad||n;ee.enabled||r||(e.classList.add("no-fullscreen-support"),o.iOS||(a.config.embed.fullscreen=!1));let s=!1,l=!1;a.events.on(St._forceFullscreen,(function(){ee.enabled||ee.videoEnabled(e)?(a.events.fire(Bt._willEnterFullscreen),l=!1,ee.request(t())):a.events.fire(St._toggleNativeControls,!0)})),a.events.on(Bt._fullscreenButtonPressed,(function(){a.backbone.pictureInPictureActive&&a.backbone.exitPictureInPicture(),ee.element?(a.events.fire(Bt._willExitFullscreen),ee.exit()):(a.events.fire(Bt._willEnterFullscreen),l=!0,ee.request(t()))}));var c=ee.onenter,d=ee.onexit;if(ee.onenter=function(e){null!==document.webkitFullScreenElement&&(s||(t().contains(e)?function(e,n){s||(s=!0,a.events.fire(Bt._didEnterFullscreen,t()===e,l))}(e):"function"==typeof c&&c(e)))},ee.onexit=function(){document.webkitFullScreenElement||(s?s&&(s=!1,a.events.fire(Bt._didExitFullscreen,l),l||a.events.fire(St._toggleNativeControls,!1),l=!1):"function"==typeof d&&d())},Te(e).on("click","a",(function(e){ee.element===t()&&ee.exit()})),Te(e).on("gestureend",(function(e){e.scale>1&&a.events.fire(Bt._fullscreenButtonPressed)})),"undefined"!=typeof MSGesture){var u=1,p=new MSGesture;p.target=e,Te(e).on("pointerdown",(function(e){p.addPointer(e.pointerId)})).on(["MSGestureChange"],(function(e){u*=e.scale})).on(["MSGestureEnd"],(function(){(!s&&u>=2||s&&u<1)&&a.events.fire(Bt._fullscreenButtonPressed),u=1}))}}(),function(){const t=Xi("vimeo-logo",a.config);is(e,"a[data-clip-link]",e=>k(e,t)),a.events.on(St._openVimeo,k)}(),O(),a.config.video.webinar?y=new yl(a,s):y&&(y.disable(),y=null),a.events.on(Bt._configChanged,()=>{A(),O()}),a.events.on(St._destroy,()=>{var e;null==(e=b)||e.disable()})}function N(){c||(c=new qs(a,s,e.querySelector(".vp-overlay-wrapper")))}function M(){d||(d=new al(a,{uuid:a.uuid,id:e.id,isMobileDevice:!1}))}function D(){u||(u=new ll(a))}let x;function B(e=400){var t,n;x&&clearTimeout(x),null==(t=a.element)||null==(n=t.classList)||n.add("animating"),x=setTimeout(()=>{var e,t;null==(e=a.element)||null==(t=e.classList)||t.remove("animating")},e)}function V(e){var t;const{embed:n}=e,i=!!n.wirewax&&!!n.interactive_id&&!Gn(null==(t=n.interactive)?void 0:t.demo_end),o=n.create_interactive.has_create_interactive;return i||o}const U={initializationHandler:()=>(function(){N(),M(),D(),o.browser.ie||(V(a.config)&&(p=new kl(a)),a.events.on(Bt._configChanged,e=>{e&&(!p&&V(a.config)?p=new kl(a):p&&V(a.config)?p.resetWirewax():p&&!V(a.config)&&(p.destroyWirewax(),p=null))})),a.events.on(Bt._rightContentAreaVisibilityChange,e=>{e&&!a.element.classList.contains("right-content-area-open")?(B(),a.element.classList.add("right-content-area-open")):!e&&a.element.classList.contains("right-content-area-open")&&(B(),a.element.classList.remove("right-content-area-open"))}),a.events.on(Bt._rightContentAreaEnabled,()=>{var e,t;null==(e=a.element)||null==(t=e.classList)||t.add("right-content-area-supported"),Array.from(a.element.querySelectorAll("[data-content-area-sibling-eligible]")).forEach(e=>{var t;return null==e||null==(t=e.classList)?void 0:t.add("content-area-sibling-enabled")})}),a.events.on(Bt._rightContentAreaDisabled,()=>{var e,t;null==(e=a.element)||null==(t=e.classList)||t.remove("right-content-area-supported"),Array.from(a.element.querySelectorAll("[data-content-area-sibling-eligible]")).forEach(e=>{var t;return null==e||null==(t=e.classList)?void 0:t.remove("content-area-sibling-enabled")})}),new Qa(a,s,e);const t=new ml(a,s,e);new ns(a,e.querySelector(".vp-notification-wrapper")),new cs(a,s,e.querySelector(".vp-outro-wrapper")),new a_(a,e),Object.defineProperties(l,{pauseKeyboard:{enumerable:!0,value:t.pause},unpauseKeyboard:{enumerable:!0,value:t.unpause}})}(),R(),Promise.resolve()),postInitializationHandler:()=>(a.backbone&&new Cl(a,a.backbone,e),Promise.resolve()),authorizationHandler(e){var t,n;I(),P(),e(),N(),M();let i="Error",o="Unhandled video privacy";switch(a.config.view){case Ft.privatePassword:return new Promise((e,t)=>{a.events.fire(St._showOverlay,"password"),a.events.once(Bt._passwordUnlocked,t=>{e(t)})});case Ft.privateLocked:D();const e={loggedIn:{name:"error",data:{title:"Private Video",message:"Sorry, you don’t have permission to watch.",modal:!0,logo:!!a.config.embed.settings.logo,icon:"lock"}},notLoggedIn:{name:"private-locked",data:null}};let r,s;return a.config.user.logged_in?(r=e.loggedIn,s=Promise.reject()):(r=e.notLoggedIn,s=new Promise((t,n)=>{a.events.once(Bt._privateUnlocked,i=>{if(i.view===Ft.privateLocked)return r=e.loggedIn,a.events.fire(St._showOverlay,r.name,r.data),void n();t(i)})})),a.events.fire(St._showOverlay,r.name,r.data),s;case Ft.error:i=a.config.title,o=a.config.message;break;case Ft.webinarBlocked:return D(),a.events.fire(St._showOverlay,"webinar-confirmation"),Promise.reject();case Ft.webinarLocked:if(null==(t=a.config.video.webinar)?void 0:t.registration_form)return new Promise((e,t)=>{a.events.fire(St._showOverlay,"email-capture"),a.events.once(Bt._webinarFormSuccess,t=>{e(t)})});break;case Ft.webinarFull:if(null==(n=a.config.video.webinar)?void 0:n.registration_form)return new Promise((e,t)=>{a.events.fire(St._showOverlay,"email-capture",{registration_full:!0}),a.events.once(Bt._webinarFormSuccess,t=>{e(t)})})}return a.events.fire(St._showOverlay,"error",{title:i,message:o,modal:!0}),Promise.reject()}};return a.init(t,U).catch(t=>{wo.captureException(t),N(),M(),e.classList.remove("loading"),a.events.fire(Bt._error,tn.id,tn)}),l}window.requestModule=window.requestModule||Ze,window.BigScreen=window.BigScreen||ee;export{wc as A,ha as B,Ln as C,Ac as D,Cc as E,Bp as F,Wp as G,Qc as H,gc as I,Yp as J,ua as K,Hp as L,kc as M,Gp as N,yc as O,$p as P,ed as Q,po as R,Dp as S,Mp as T,_o as U,uo as V,s_ as VimeoPlayer,fc as a,on as b,ki as c,Zi as d,ic as e,ec as f,Jl as g,Up as h,An as i,dd as j,Qe as k,pd as l,rc as m,tc as n,oc as o,Ql as p,xp as q,Hl as r,Kc as s,dn as t,$d as u,jn as v,Yc as w,Pc as x,Nc as y,Jn as z};