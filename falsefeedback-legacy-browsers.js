/********************** 
 * Falsefeedback *
 **********************/


// store info about the experiment session:
let expName = 'falsefeedback';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(routine_1RoutineBegin());
flowScheduler.add(routine_1RoutineEachFrame());
flowScheduler.add(routine_1RoutineEnd());
flowScheduler.add(picture_viewingRoutineBegin());
flowScheduler.add(picture_viewingRoutineEachFrame());
flowScheduler.add(picture_viewingRoutineEnd());
flowScheduler.add(ValenceRoutineBegin());
flowScheduler.add(ValenceRoutineEachFrame());
flowScheduler.add(ValenceRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'FalseFeedback/Picture3.png', 'path': 'FalseFeedback/Picture3.png'},
    {'name': 'FalseFeedback/Picture4.png', 'path': 'FalseFeedback/Picture4.png'},
    {'name': 'FalseFeedback/Picture5.png', 'path': 'FalseFeedback/Picture5.png'},
    {'name': 'FalseFeedback/Picture6.png', 'path': 'FalseFeedback/Picture6.png'},
    {'name': 'FalseFeedback/Picture7.png', 'path': 'FalseFeedback/Picture7.png'},
    {'name': 'FalseFeedback/Picture1.png', 'path': 'FalseFeedback/Picture1.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var routine_1Clock;
var stimulus;
var attractiveness;
var picture_viewingClock;
var image;
var image_2;
var image_3;
var image_4;
var image_5;
var mouse_2;
var ValenceClock;
var SAM_V;
var Button_Valence1;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "routine_1"
  routine_1Clock = new util.Clock();
  stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  attractiveness = new visual.Slider({
    win: psychoJS.window, name: 'attractiveness',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not attractive", "Neutral", "Attractive"], fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "picture_viewing"
  picture_viewingClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'FalseFeedback/Picture3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.5), 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'FalseFeedback/Picture4.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.3), 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'FalseFeedback/Picture5.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.1), 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'FalseFeedback/Picture6.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.2, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'FalseFeedback/Picture7.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "Valence"
  ValenceClock = new util.Clock();
  SAM_V = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SAM_V', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1116, 222],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Button_Valence1 = new visual.Polygon({
    win: psychoJS.window, name: 'Button_Valence1', 
    edges: 100, size:[0.5, 0.5],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var routine_1MaxDurationReached;
var routine_1MaxDuration;
var routine_1Components;
function routine_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    routine_1Clock.reset();
    routineTimer.reset();
    routine_1MaxDurationReached = false;
    // update component parameters for each repeat
    attractiveness.reset()
    psychoJS.experiment.addData('routine_1.started', globalClock.getTime());
    routine_1MaxDuration = null
    // keep track of which components have finished
    routine_1Components = [];
    routine_1Components.push(stimulus);
    routine_1Components.push(attractiveness);
    
    routine_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function routine_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_1' ---
    // get current time
    t = routine_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimulus* updates
    if (t >= 0.0 && stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus.tStart = t;  // (not accounting for frame time here)
      stimulus.frameNStart = frameN;  // exact frame index
      
      stimulus.setAutoDraw(true);
    }
    
    
    // if stimulus is active this frame...
    if (stimulus.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *attractiveness* updates
    if (t >= 0.0 && attractiveness.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attractiveness.tStart = t;  // (not accounting for frame time here)
      attractiveness.frameNStart = frameN;  // exact frame index
      
      attractiveness.setAutoDraw(true);
    }
    
    
    // if attractiveness is active this frame...
    if (attractiveness.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check attractiveness for response to end Routine
    if (attractiveness.getRating() !== undefined && attractiveness.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    routine_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_1' ---
    routine_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('routine_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('attractiveness.response', attractiveness.getRating());
    psychoJS.experiment.addData('attractiveness.rt', attractiveness.getRT());
    // the Routine "routine_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var picture_viewingMaxDurationReached;
var gotValidClick;
var picture_viewingMaxDuration;
var picture_viewingComponents;
function picture_viewingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'picture_viewing' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    picture_viewingClock.reset();
    routineTimer.reset();
    picture_viewingMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('picture_viewing.started', globalClock.getTime());
    picture_viewingMaxDuration = null
    // keep track of which components have finished
    picture_viewingComponents = [];
    picture_viewingComponents.push(image);
    picture_viewingComponents.push(image_2);
    picture_viewingComponents.push(image_3);
    picture_viewingComponents.push(image_4);
    picture_viewingComponents.push(image_5);
    picture_viewingComponents.push(mouse_2);
    
    picture_viewingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function picture_viewingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'picture_viewing' ---
    // get current time
    t = picture_viewingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // if image_2 is active this frame...
    if (image_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    // if image_3 is active this frame...
    if (image_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    
    // if image_4 is active this frame...
    if (image_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    
    // if image_5 is active this frame...
    if (image_5.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_2 is active this frame...
    if (mouse_2.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval([image, image_2, image_3, image_4, image_5])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_2.clicked_name.push(null);
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    picture_viewingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function picture_viewingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'picture_viewing' ---
    picture_viewingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('picture_viewing.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "picture_viewing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ValenceMaxDurationReached;
var ValenceMaxDuration;
var ValenceComponents;
function ValenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Valence' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ValenceClock.reset();
    routineTimer.reset();
    ValenceMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Valence.started', globalClock.getTime());
    ValenceMaxDuration = null
    // keep track of which components have finished
    ValenceComponents = [];
    ValenceComponents.push(SAM_V);
    ValenceComponents.push(Button_Valence1);
    
    ValenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function ValenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Valence' ---
    // get current time
    t = ValenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SAM_V* updates
    if (t >= 0.0 && SAM_V.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      SAM_V.setImage('FalseFeedback/Picture1.png', false);
      // keep track of start time/frame for later
      SAM_V.tStart = t;  // (not accounting for frame time here)
      SAM_V.frameNStart = frameN;  // exact frame index
      
      SAM_V.setAutoDraw(true);
    }
    
    
    // if SAM_V is active this frame...
    if (SAM_V.status === PsychoJS.Status.STARTED) {
      // update params
      SAM_V.setImage('FalseFeedback/Picture1.png', false);
    }
    
    
    // *Button_Valence1* updates
    if (t >= 0.0 && Button_Valence1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Button_Valence1.tStart = t;  // (not accounting for frame time here)
      Button_Valence1.frameNStart = frameN;  // exact frame index
      
      Button_Valence1.setAutoDraw(true);
    }
    
    
    // if Button_Valence1 is active this frame...
    if (Button_Valence1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Button_Valence1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Button_Valence1.tStop = t;  // not accounting for scr refresh
      Button_Valence1.frameNStop = frameN;  // exact frame index
      // update status
      Button_Valence1.status = PsychoJS.Status.FINISHED;
      Button_Valence1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ValenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ValenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Valence' ---
    ValenceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Valence.stopped', globalClock.getTime());
    // the Routine "Valence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
