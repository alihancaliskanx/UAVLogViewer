import '../mavextra/mavextra'
import '../mavextra/mymavextra'

export const store = {
    // Assume we are online until the check in Home.vue says otherwise.
    //
    // CesiumViewer.asyncSetup() reads this on mount to decide between the
    // online viewer (Esri imagery) and the offline one (no imagery at all).
    // isOnline() resolves asynchronously, so on a fast load the viewer was
    // built before the answer arrived, saw undefined, and created the offline
    // viewer: a black globe with stars and the flight path floating in it.
    //
    // Defaulting to true fails in the harmless direction. If the machine
    // really is offline the tiles simply do not load, which is what the
    // offline viewer would have shown anyway.
    isOnline: true,
    // currentTrajectory: [],
    trajectorySource: '',
    trajectories: {},
    timeTrajectory: {},
    timeAttitude: {},
    timeAttitudeQ: {},
    logType: '',
    defaultParams: {},
    showParams: false,
    showRadio: false,
    showMessages: false,
    showDeviceIDs: false,
    showAttitude: false,
    showEkfHelper: false,
    flightModeChanges: [],
    file: null,
    events: [],
    cssColors: [],
    colors: [],
    mapAvailable: false,
    mission: [],
    fences: [],
    showFences: true,
    showMap: false,
    showMagFit: false,
    currentTime: false,
    processDone: false,
    plotOn: false,
    processStatus: 'Pre-processing...',
    processPercentage: -1,
    mapLoading: false,
    mapError: null,
    plotLoading: false,
    timeRange: null,
    textMessages: [],
    namedFloats: [],
    metadata: null,
    // cesium menu:
    modelScale: 1.0,
    heightOffset: 0.0,
    showClickableTrajectory: false,
    showTrajectory: true,
    trajectorySources: [],
    // Extra trajectory sources overlaid for comparison with the primary one.
    comparisonTrajectories: [],
    // Solid colors used (by index) to draw the comparison trajectory overlays.
    comparisonTrajectoryColors: ['#00ffff', '#ff00ff', '#ffff00', '#ff8000', '#00ff80', '#8000ff'],
    attitudeSources: {},
    attitudeSource: null,
    showWaypoints: true,
    cameraType: 'follow',
    expressions: [], // holds message name
    expressionErrors: [],
    plotCache: {},
    allAxis: [0, 1, 2, 3, 4, 5],
    allColors: [
        '#1f77b4',
        '#ff7f0e',
        '#2ca02c',
        '#d62728',
        '#9467BD',
        '#8C564B'],
    radioMode: '2',
    /* global _COMMIT_ */
    commit: _COMMIT_.slice(0, 6),
    /* global _BUILDDATE_ */
    buildDate: _BUILDDATE_,
    childPlots: []
}
