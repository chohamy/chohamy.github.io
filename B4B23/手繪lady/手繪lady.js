(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"手繪lady_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhT3A6WMAAAh0rMCnvAAAMAAAB0rg");
	mask.setTransform(536.775,373.4);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1402,0.1462);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,1073.5,746.8), null);


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 手握筆
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(162.85,96.4,1,1,0,0,0,536.8,373.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(-373.9,-277,1073.5,746.8), null);


// stage content:
(lib.手繪lady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_25
	this.instance = new lib.手握筆();
	this.instance.setTransform(523.7,456.35,1,1,0,0,0,162.8,96.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(141).to({_off:false},0).wait(1).to({x:507.35,y:478.6},0).wait(1).to({x:515.85,y:491.75},0).wait(1).to({y:504.2},0).to({_off:true},1).wait(20));

	// 圖層_24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_141 = new cjs.Graphics().p("AAABmQhkgHAEhfQAEhcBcgJQCJAgg4B7QgWAwg0AAIgHAAg");
	var mask_graphics_142 = new cjs.Graphics().p("AibCGQg3hkBOhUQAtgxBAgBIAJABIAAgOQAEhbBbgJQCJAgg4B8QgQAkghAJQAQAjgDAzQgFBlhiAdQgdAKgbAAQhNAAgthQg");
	var mask_graphics_143 = new cjs.Graphics().p("AgzDCQgKgOgHgNQhTAEguhUQg4hjBOhVQAugxBAgBIAIABIAAgOQAEhbBcgJQCJAgg4B8QgQAkghAJIADAIQCpAcgZCkQgKBFg/AeQgrAVglAAQhCAAgyhDg");
	var mask_graphics_144 = new cjs.Graphics().p("AgtEQQg4hMAqhSQgJgNgHgNQhSAEgvhTQg3hkBOhUQAtgxBAgCIAJABIAAgNQAEhcBbgJQCJAgg4B8QgQAkghAJIADAIQCpAcgZCkQgCAQgFAOQAhAwgMBQQgLBFg/AeQgqAVglAAQhEAAgxhEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(141).to({graphics:mask_graphics_141,x:315.2779,y:290.6362}).wait(1).to({graphics:mask_graphics_142,x:307.1088,y:301.8503}).wait(1).to({graphics:mask_graphics_143,x:311.3558,y:306.5716}).wait(1).to({graphics:mask_graphics_144,x:312.0305,y:314.4319}).wait(21));

	// lady11
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,286.7,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(141).to({_off:false},0).wait(24));

	// 圖層_23
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(373.6,439.1,1,1,0,0,0,162.8,96.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({_off:false},0).wait(1).to({y:427.95},0).to({_off:true},1).wait(24));

	// 圖層_22 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_139 = new cjs.Graphics().p("AgYBVQhYggAhhVQAWg5A7gDQB7AdgzBtQgWAvgpAAQgQAAgTgIg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AgkCIQhYggAihWIAEgLQgIgUABgdQAEhbBcgJQCJAgg4B6IgIAPQAFAegTAoQgVAugpAAQgQAAgUgHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_1_graphics_139,x:170.9106,y:273.0011}).wait(1).to({graphics:mask_1_graphics_140,x:172.0756,y:267.9261}).wait(25));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,266.275);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(139).to({_off:false},0).wait(26));

	// 圖層_21
	this.instance_3 = new lib.手握筆();
	this.instance_3.setTransform(431,447.8,1,1,0,0,0,162.8,96.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(135).to({_off:false},0).wait(1).to({x:439.85,y:449.65},0).wait(1).to({x:452.3},0).wait(1).to({x:464.75},0).to({_off:true},1).wait(26));

	// 圖層_20 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_135 = new cjs.Graphics().p("Ah5AtQglhuBqg3QAbgOAagBQCYAagaCRQgNBKhJATQgbAHgVAAQhTAAgfhbg");
	var mask_2_graphics_136 = new cjs.Graphics().p("Ag1BuQhVABgghcQglhuBqg4QAbgOAbAAQBKAMAfAqQCQAbgaCOQgNBKhJATQgbAHgWAAQg+AAggg0g");
	var mask_2_graphics_137 = new cjs.Graphics().p("AATCNQhcAVgrhEQhVABgfhcQglhuBqg4QAbgOAbAAQBKAMAgApQA1ALAeAaQAQgFARAAQCYAZgaCSQgNBKhKATQgaAGgXAAQg1AAgfglg");
	var mask_2_graphics_138 = new cjs.Graphics().p("Ag0CNQhdAVgrhEQhVABgfhcQgmhuBrg4QAbgOAbAAQBKAMAgApQA2ALAdAaQAQgFARAAQAdAEAXAKQAQgOAWgMQAbgOAbAAQCYAZgaCSQgOBKhJATQg2AOgmgPQgUASggAJQgbAGgWAAQg0AAgfglg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(135).to({graphics:mask_2_graphics_135,x:224.6516,y:275.5459}).wait(1).to({graphics:mask_2_graphics_136,x:229.5583,y:278.1714}).wait(1).to({graphics:mask_2_graphics_137,x:235.7834,y:279.7965}).wait(1).to({graphics:mask_2_graphics_138,x:243.0016,y:279.7965}).wait(27));

	// lady09_拷貝_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhhAhQgWgWgpggIgsgkQgJgJACgHIBRAIIgIACQAYAAA7ARQBEAUANACQAYAEAsgEIA8gGIA5AJQAEAEgHAIIgWAVIgkAmQgdAYggAAQiSAAgogpg");
	this.shape_1.setTransform(243.4226,276.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(135).to({_off:false},0).wait(30));

	// 圖層_18
	this.instance_4 = new lib.手握筆();
	this.instance_4.setTransform(429.95,437.15,1,1,0,0,0,162.8,96.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131).to({_off:false},0).wait(1).to({x:437.8},0).wait(1).to({x:450.25},0).wait(1).to({x:464},0).to({_off:true},1).wait(30));

	// 圖層_16 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_131 = new cjs.Graphics().p("Ah5AtQglhuBqg4QAbgOAaAAQCYAZgaCSQgNBKhJATQgbAHgVAAQhTAAgfhbg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AiqBBQglhvBqg3QAbgOAbAAIAGABQAQgOAXgMQAZgOAcgBQCYAagbCRQgNBKhJATQgVAGgTABQgVAXgkAKQgbAHgXAAQhSAAgfhbg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AjlBBQglhvBqg3QAbgOAbAAIAGABQAQgOAXgMQAagOAcgBQAhAGAYAMIAFgDQAbgOAcgBQCYAagbCRQgNBKhJATQg+AQgogVIgQAFQgVAGgSABQgVAXglAKQgbAHgXAAQhSAAgfhbg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AA0BnQgjACgZgOIgQAFQgVAGgTABQgVAXglAKQh7Aggnh0QgmhvBrg3QAbgOAbAAIAFABQARgOAWgMQAbgOAbgBQAiAGAZAMIAEgDQAbgOAbgBQBVAOAdA0QCVAagaCRQgNBKhJATQgbAHgXAAQhGAAghhCg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(131).to({graphics:mask_3_graphics_131,x:226.6016,y:268.9959}).wait(1).to({graphics:mask_3_graphics_132,x:231.5084,y:267.0209}).wait(1).to({graphics:mask_3_graphics_133,x:237.4084,y:267.0209}).wait(1).to({graphics:mask_3_graphics_134,x:242.9835,y:268.3212}).wait(31));

	// lady09_拷貝
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("ACZA6QgwgwgMAAQglAFgWAAQgKgBgQgFQgPgFgLAAQgNAAgzAKIg4AKIhIgHQgBgGABgBIAFgCQAxgVAmgUQBKgnAjAAQAGAAATAIQATAIAKAAQADgBAXgHQASgHARAIQAZAKAiAmQAmAqAHAoQACACgBAEg");
	this.shape_2.setTransform(243.5121,266);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(131).to({_off:false},0).wait(34));

	// 圖層_11
	this.instance_5 = new lib.手握筆();
	this.instance_5.setTransform(509.3,533.75,1,1,0,0,0,162.8,96.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(123).to({_off:false},0).wait(1).to({x:486.35},0).wait(1).to({x:466.7,y:541.6},0).wait(1).to({x:449.65,y:559.3},0).wait(1).to({x:427.35,y:567.15},0).wait(1).to({x:411.6,y:573.7},0).wait(1).to({x:389.95},0).wait(1).to({x:369.6,y:582.2},0).to({_off:true},1).wait(34));

	// 圖層_10 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_123 = new cjs.Graphics().p("Ah5AtQglhuBqg3QAbgOAbgBQCYAagbCSQgNBJhJATQgbAHgWAAQhSAAgfhbg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AjUA6QglhuBqg4QAbgOAbAAQAvAIAeAUQASgXAhgRQAbgOAcAAQCYAZgbCSQgNBKhJATQhLATgrgiQgWAegrALQgbAHgWAAQhTAAgehbg");
	var mask_4_graphics_125 = new cjs.Graphics().p("Ak2BdQgmhtBqg4QAbgOAbAAQApAGAcAPQAPgwA7gfQAbgOAaAAQAwAIAeATQATgWAggRQAbgOAcgBQCYAagbCTQgNBIhJATQhKAUgsgjQgWAfgsALQhCARgqgaQgRA/hDASQgcAIgXAAQhTAAgfhdg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AmSCMQgmhvBrg2QAbgOAbgBQAdAFAXAKQAKg5BDgjQAbgOAbAAQApAGAcAOQAPgwA6geQAbgOAbAAQAvAHAeAUQAUgWAggRQAbgOAcgBQCYAagbCTQgNBIhJATQhLATgrgiQgXAegrAMQhDARgqgbQgRBAhCASQg8AQgogTIAAACQgOBJhJATQgbAHgWAAQhTAAgehbg");
	var mask_4_graphics_127 = new cjs.Graphics().p("An7DKQgmhvBrg3QAbgOAbgBQAxAIAeAVQgQhZBcgxQAbgOAbAAQAeAFAXAJQAKg4BDgjQAbgPAaAAQApAGAcAPQAPgwA6gfQAbgOAcAAQAvAIAeAUQATgXAhgRQAbgOAbAAQCYAZgaCTQgNBKhKATQhKATgsgiQgWAegrALQhDARgrgaQgQA/hEASQg6AQgogTIgBABQgNBKhJATQhMATgsgkQABAXgFAaQgNBJhJATQgbAHgWAAQhTAAgehbg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AprDuQglhvBqg3QAbgOAbAAQA8AJAgAdQAIg8BFgkQAbgNAbgBQAxAIAfAUQgRhZBdgxQAbgOAbAAQAeAFAXAJQAJg4BCgjQAbgPAbAAQApAGAcAPQAPgwA7gfQAbgOAbAAQAwAIAeAUQATgXAggRQAbgOAcAAQCYAZgbCTQgNBKhJATQhKATgsgiQgWAegsALQhDASgqgbQgRA/hDASQg8APgogSIAAABQgOBKhIATQhLATgsgkQABAWgFAbQgNBJhKATQhZAXgtg2IgCALQgNBKhJATQgaAGgXAAQhTAAgfhbg");
	var mask_4_graphics_129 = new cjs.Graphics().p("ArKECQglhvBqg3QAbgOAbgBQAuAIAeASQATgdApgWQAbgOAbAAQA8AKAgAcQAIg8BFgjQAbgOAbAAQAxAIAfAVQgRhbBdgwQAagOAbgBQAeAFAXAKQAJg5BDgjQAbgOAbAAQApAGAcAOQAPgwA7geQAbgOAbAAQAwAHAeAUQATgWAggRQAbgOAcgBQCYAagbCTQgNBJhJATQhKATgsgiQgWAegsAMQhDARgqgbQgRBAhDARQg8AQgogTIAAACQgOBJhJATQhKAUgsgkQABAWgFAaQgNBKhKATQhZAXgtg3IgCALQgNBKhJATQhJATgsghQgWAog0ANQgaAHgXAAQhSAAgfhbg");
	var mask_4_graphics_130 = new cjs.Graphics().p("As5EgQglhvBqg4QAbgOAbAAQA9AKAgAdQANgzA/ghQAbgOAbAAQAtAHAeATQAUgeApgVQAbgOAbAAQA7AJAgAdQAIg7BGgkQAbgOAbgBQAxAIAdAVQgQhbBcgwQAbgOAbAAQAeAFAXAJQAKg5BDgiQAbgPAbAAQApAGAcAPQAPgwA6gfQAbgOAcAAQAvAIAeAUQATgXAhgRQAbgOAbAAQCYAZgaCTQgNBKhKATQhKATgsgiQgWAegrALQhEARgqgaQgQBAhEASQg7AOgogRIgBABQgNBJhJATQhMATgsgkQABAWgFAbQgNBJhIATQhZAXgtg2IgCALQgOBKhJATQhJASgrghQgXAogzAOQhbAXgtg5QgNBKhKATQgaAGgXAAQhTAAgehag");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(123).to({graphics:mask_4_graphics_123,x:301.968,y:363.9959}).wait(1).to({graphics:mask_4_graphics_124,x:292.793,y:365.3198}).wait(1).to({graphics:mask_4_graphics_125,x:282.9721,y:368.9606}).wait(1).to({graphics:mask_4_graphics_126,x:273.7834,y:373.4959}).wait(1).to({graphics:mask_4_graphics_127,x:263.3084,y:379.7209}).wait(1).to({graphics:mask_4_graphics_128,x:252.1584,y:383.3364}).wait(1).to({graphics:mask_4_graphics_129,x:242.6584,y:385.2959}).wait(1).to({graphics:mask_4_graphics_130,x:231.518,y:388.2459}).wait(35));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,357.4,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(123).to({_off:false},0).wait(42));

	// 圖層_9
	this.instance_7 = new lib.手握筆();
	this.instance_7.setTransform(480.45,472.55,1,1,0,0,0,162.8,96.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(112).to({_off:false},0).wait(1).to({y:500.1},0).wait(1).to({x:489,y:521.1},0).wait(1).to({x:506,y:531.6},0).wait(1).to({x:526.35,y:523.05},0).wait(1).to({x:545.35},0).wait(1).to({x:561.75,y:513.9},0).wait(1).to({x:579.45,y:521.1},0).wait(1).to({x:595.15,y:529.65},0).wait(1).to({x:606.1,y:545.35},0).wait(1).to({x:617.9,y:559.1},0).to({_off:true},1).wait(42));

	// 圖層_8 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_112 = new cjs.Graphics().p("Ah5AtQglhuBqg4QAbgOAbAAQCYAZgbCSQgNBKhJATQgbAHgVAAQhTAAgfhbg");
	var mask_5_graphics_113 = new cjs.Graphics().p("Ah/CgQgkhpBeg3QgdgXgQguQglhvBqg3QAbgOAaAAQCYAZgaCTQgLA8gzAXQBDArgSBmQgOBKhJATQgaAGgWAAQhTAAgehag");
	var mask_5_graphics_114 = new cjs.Graphics().p("AhRDeQgIgWgBgTQgwgTgWhBQgjhoBdg3QgdgXgQguQglhvBqg4QAbgOAcAAQCXAZgbCTQgKA9g0AYQA3AkgCBKQBgAngVB3QgNBKhKATQgbAHgWAAQhSAAgehbg");
	var mask_5_graphics_115 = new cjs.Graphics().p("AANEFIgCgEQgLAGgOADQh7Aggnh0QgIgVgBgUQgwgTgWhAQgjhoBdg3QgdgXgQgvQglhvBqg3QAbgOAcAAQCXAZgbCTQgJA9g0AXQA3AkgCBKQA9AaANA7IAKgGQAbgOAbAAQCYAZgaCTQgNBKhKATQgaAHgXAAQhTAAgehbg");
	var mask_5_graphics_116 = new cjs.Graphics().p("AhoEFIgCgEQgMAGgOADQh7Aggnh0QgIgVgBgUQgwgTgWhAQgjhoBdg3QgdgXgQgvQglhvBqg3QAbgOAcAAQCYAZgbCTQgKA9g0AXQA3AkgCBKQA+AaANA7IAKgGQAbgOAaAAQBMANAfArQAPgxA8ggQAbgOAbAAQCYAZgaCTQgNBKhKATQhqAbgrhRQgNBKhKATQgaAHgXAAQhSAAgehbg");
	var mask_5_graphics_117 = new cjs.Graphics().p("AjEEFIgBgEQgMAGgPADQh7Aggnh0QgHgVgCgUQgwgTgWhAQgjhoBdg3QgdgXgQgvQglhvBqg3QAbgOAcAAQCYAZgbCTQgKA9g0AXQA4AkgDBKQA/AaAMA7IAKgGQAbgOAbAAQBLANAgArQAOgxA8ggQAbgOAbAAQA2AJAfAYQASgSAagOQAbgOAcAAQCYAZgbCTQgNBKhJATQhQAVgtgqQgVAYgmAKQhpAbgshRQgNBKhJATQgaAHgWAAQhTAAgfhbg");
	var mask_5_graphics_118 = new cjs.Graphics().p("AkQEFIgBgEQgMAGgOADQh8Aggnh0QgHgVgCgUQgvgTgWhAQgjhoBdg3QgdgXgQgvQglhvBqg3QAbgOAbAAQCYAZgaCTQgLA9gzAXQA3AkgCBKQA+AaANA7IAJgGQAbgOAcAAQBMANAfArQAPgxA6ggQAbgOAcAAQA1AJAgAYQARgSAbgOQAbgOAbAAQATADAQAFQAUgfAqgVQAbgOAbAAQCYAZgaCSQgOBKhJATQgsALghgHQgVApg1AOQhPAVgtgqQgWAYglAKQhqAbgrhRQgNBKhJATQgaAHgXAAQhTAAgfhbg");
	var mask_5_graphics_119 = new cjs.Graphics().p("Al1EFIgBgEQgMAGgPADQh7Aggnh0QgHgVgCgUQgwgTgWhAQgjhoBdg3QgdgXgQgvQglhvBqg3QAbgOAcAAQCYAZgbCTQgKA9g0AXQA4AkgDBKQA/AaAMA7IAKgGQAbgOAbAAQBMANAgArQAOgxA8ggQAbgOAbAAQA1AJAfAYQASgSAagOQAbgOAcAAQATADAQAFQATgfAqgVQAbgOAbAAQBbAPAbA5QAOgLARgJQAbgOAbAAQCZAZgbCTQgNBKhJATQhwAdgqhcQgUAQgeAIQgrALghgHQgWApg0AOQhQAVgtgqQgVAYgmAKQhoAbgshRQgNBKhKATQgaAHgWAAQhTAAgfhbg");
	var mask_5_graphics_120 = new cjs.Graphics().p("AHOEZIgGgVQhNADgihJQgTARgeAHQgrAMghgIQgWAqg0ANQhQAVgtgpQgVAYglAJQhqAcgrhRQgNBKhKATQh7Afgnh0IgCgEQgMAGgOAEQh7Aggnh0QgIgWgBgTQgwgTgWhBQgjhoBdg3QgdgXgQguQglhvBqg4QAbgOAcAAQCYAZgbCTQgKA9g0AYQA3AkgCBLQA+AYANA7IAKgFQAbgOAbAAQBMAMAfArQAPgxA8gfQAbgOAbgBQA2AJAeAYQARgRAbgOQAbgOAcgBQASADAQAFQAUgdAqgWQAbgOAbgBQBbAPAbA6QAOgLARgJQAbgNAbAAQB2ASALBdQCUAagaCRQgOBKhJATQgbAHgWAAQhTAAgehbg");
	var mask_5_graphics_121 = new cjs.Graphics().p("AIJFhQgKgdAAgZQhPgCgdhYIgGgVQhNADgihJQgTAQgeAIQgrALghgHQgWAqg0ANQhQAVgsgpQgVAXgmAKQhpAbgshQQgNBKhKATQh7Afgnh0IgCgEQgMAGgOAEQh7Aggnh0QgHgWgCgUQgwgSgWhAQgjhpBdg3QgdgXgQguQglhvBqg4QAbgOAcAAQCYAZgbCTQgKA9g0AYQA3AjgCBLQA+AaANA6IAKgFQAbgNAbAAQBMALAfArQAPgwA8gfQAbgOAbgBQA2AJAfAYQASgSAagNQAagOAcgBQASADAQAFQAUgfAqgVQAbgOAbgBQBbAPAbA6QAOgKARgJQAbgOAbAAQB2ATALBbQCGAZgJB5QCMAdgZCNQgOBKhJATQgaAHgXAAQhTAAgehbg");
	var mask_5_graphics_122 = new cjs.Graphics().p("AJAG8QgRg0AOgoQhOgDgehYQgKgdAAgYQhOgDgehYIgGgVQhNADghhJQgUARgeAHQgrAMghgIQgWAqg0ANQhPAVgtgpQgVAYgmAJQhpAcgshRQgNBKhKATQh7Afgnh0IgBgEQgMAGgPAEQh7AggnhzQgHgWgCgTQgwgTgWhBQgjhpBdg3QgdgXgQguQglhvBqg4QAbgOAcAAQCYAZgbCTQgKA9g0AYQA4AkgDBLQA/AZAMA7IAKgFQAbgOAbAAQBMAMAgArQAOgxA8gfQAbgOAbgBQA2AJAfAYQASgRAagOQAbgOAcgBQASADAQAFQATgeAqgWQAbgOAbgBQBbAPAbA7QAOgLARgJQAbgOAbAAQB2ATALBdQCGAYgJB4QCMAdgZCNIgDAOQCLAcgZCOQgNBKhKATQgaAHgXAAQhSAAgfhcg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(112).to({graphics:mask_5_graphics_112,x:277.068,y:310.9364}).wait(1).to({graphics:mask_5_graphics_113,x:276.4083,y:322.3959}).wait(1).to({graphics:mask_5_graphics_114,x:279.6834,y:328.6209}).wait(1).to({graphics:mask_5_graphics_115,x:289.1833,y:332.5614}).wait(1).to({graphics:mask_5_graphics_116,x:300.9833,y:332.5614}).wait(1).to({graphics:mask_5_graphics_117,x:310.1583,y:332.5614}).wait(1).to({graphics:mask_5_graphics_118,x:317.7015,y:332.5614}).wait(1).to({graphics:mask_5_graphics_119,x:327.8578,y:332.5614}).wait(1).to({graphics:mask_5_graphics_120,x:334.0827,y:334.5209}).wait(1).to({graphics:mask_5_graphics_121,x:339.9764,y:341.7448}).wait(1).to({graphics:mask_5_graphics_122,x:345.5517,y:350.9198}).wait(43));

	// lady07
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,287.8,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(112).to({_off:false},0).wait(53));

	// 圖層_7
	this.instance_9 = new lib.手握筆();
	this.instance_9.setTransform(497.75,432.2,1,1,0,0,0,162.8,96.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(103).to({_off:false},0).wait(1).to({x:488.6,y:459.1},0).wait(1).to({x:470.9,y:476.8},0).wait(1).to({x:453.85,y:481.4},0).wait(1).to({x:436.8},0).wait(1).to({x:415.85,y:474.2},0).wait(1).to({x:402.1,y:461.1},0).wait(1).to({x:394.2,y:450.6},0).wait(1).to({x:385.05,y:436.2},0).to({_off:true},1).wait(53));

	// 圖層_6 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_103 = new cjs.Graphics().p("Ah5AtQglhuBqg3QAbgOAbgBQCYAagbCSQgNBJhJATQgbAHgWAAQhSAAgfhbg");
	var mask_6_graphics_104 = new cjs.Graphics().p("AigCgQglhvBqg3QASgJASgDQgQgUgKgfQglhvBqg3QAagOAbgBQCYAagaCTQgNBJhKASIgYAFQAwAtgQBXQgNBKhJATQgaAHgXAAQhSAAgfhbg");
	var mask_6_graphics_105 = new cjs.Graphics().p("AjeDrQgmhvBrg4QAYgMAYgBQgPhYBbgwQASgJARgEQgPgUgKgeQglhvBpg4QAbgOAbAAQCYAZgaCTQgNBKhKATIgYAFQAwAsgQBWQgNBKhJATQgSAFgRACQACAXgFAcQgOBKhIATQgaAHgWAAQhTAAgfhbg");
	var mask_6_graphics_106 = new cjs.Graphics().p("AkwETQglhvBqg4QAbgOAbAAQAVADARAGQAQgtA4gdQAYgMAYgCQgPhYBagvQASgKASgDQgQgUgKgeQglhvBqg4QAbgOAbAAQCYAZgaCTQgNBKhKATIgYAFQAwAsgQBWQgNBKhJATQgSAFgRABQACAYgFAcQgOBKhJATQguAMgigJQgSA7hBARQgaAGgXAAQhTAAgehag");
	var mask_6_graphics_107 = new cjs.Graphics().p("Ai0FAQgWAcgpALQh8Aggnh0QglhvBqg4QAbgOAbAAQBGALAgAlQATgTAcgPQAbgOAcAAQAUADARAGQARgtA2gdQAYgMAYgCQgPhYBcgvQASgKARgDQgPgUgLgeQglhvBqg4QAbgOAcAAQCYAZgbCTQgNBKhJATIgYAFQAwAsgQBWQgOBKhJATQgSAFgQABQABAYgFAcQgNBKhJATQgvAMgjgJQgSA7g/ARQgbAGgXAAQg6AAgggtg");
	var mask_6_graphics_108 = new cjs.Graphics().p("AhPFAQgWAcgpALQhvAdgrhdQgUAQgdAIQh7Aggnh0QgmhvBrg3QAbgOAbgBQBbAPAbA7QANgLASgJQAbgOAbAAQBGALAgAlQASgTAdgPQAbgOAaAAQAVADARAGQAQgtA4gdQAYgMAYgCQgPhYBbgvQASgKASgDQgQgUgKgeQglhvBqg4QAbgOAbAAQCYAZgaCTQgNBKhKATIgYAFQAwAsgQBWQgNBKhJATQgSAFgRABQACAYgFAcQgOBKhJATQguAMgjgJQgSA7hBARQgaAGgXAAQg5AAghgtg");
	var mask_6_graphics_109 = new cjs.Graphics().p("AgkFAQgWAcgpALQhwAdgqhdQgUAQgdAIQh7Aggnh0QgNgkADgeQg8gSgThMQgeh2B0gvQAVgJAUAAQCVAagWCKQA3ATAVAsQANgLASgJQAbgOAbAAQBFALAhAlQASgTAcgPQAbgOAbAAQAUADASAGQAQgtA4gdQAXgMAYgCQgPhYBcgvQASgKASgDQgQgUgKgeQglhvBqg4QAbgOAbAAQCYAZgaCTQgNBKhKATIgYAFQAwAsgQBWQgNBKhJATQgTAFgQABQACAYgFAcQgOBKhJATQgvAMgigJQgSA7hBARQgbAGgWAAQg6AAgggtg");
	var mask_6_graphics_110 = new cjs.Graphics().p("AAAFAQgWAcgpALQhwAdgqhdQgUAQgdAIQh7Aggnh0QgNgkADgeQg8gSgThMQgGgWAAgTQgrgVgUg7QglhvBqg3QAbgOAbAAQCKAWgIB6QBXAogRBrQA3ATAVAsQANgLASgJQAbgOAbAAQBFALAhAlQARgTAdgPQAbgOAbAAQAUADASAGQAQgtA4gdQAXgMAYgCQgPhYBcgvQASgKASgDQgQgUgKgeQglhvBqg4QAbgOAbAAQCYAZgaCTQgNBKhKATIgYAFQAwAsgQBWQgNBKhJATQgTAFgQABQACAYgFAcQgOBKhJATQgvAMgigJQgSA7hBARQgbAGgWAAQg7AAgfgtg");
	var mask_6_graphics_111 = new cjs.Graphics().p("AA0FNQgXAcgnALQhwAdgrhdQgUAQgdAIQh7Aggnh0QgMgkADgeQg9gSgThMQgFgWgBgTQgqgVgUg7QgOgoAGghQhGgJgbhRQglhvBqg4QAbgOAbAAQCWAZgYCPQBzAcgHBwQBYAogRBrQA3ATAUAsQAOgLARgJQAbgOAbAAQBFALAgAlQASgTAdgPQAbgOAcAAQAUADARAGQAQgtA4gdQAYgMAYgCQgPhYBcgvQARgKASgDQgQgUgKgeQglhvBqg4QAbgOAcAAQCYAZgbCTQgNBKhJATIgYAFQAvAsgPBWQgOBKhJATQgSAFgQABQABAYgFAcQgNBKhJATQgvAMgjgJQgSA7hAARQgbAGgXAAQg6AAgggtg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(103).to({graphics:mask_6_graphics_103,x:290.168,y:266.9959}).wait(1).to({graphics:mask_6_graphics_104,x:286.2334,y:278.4709}).wait(1).to({graphics:mask_6_graphics_105,x:280.0084,y:286.0114}).wait(1).to({graphics:mask_6_graphics_106,x:271.818,y:289.9459}).wait(1).to({graphics:mask_6_graphics_107,x:261.6584,y:289.9464}).wait(1).to({graphics:mask_6_graphics_108,x:251.5084,y:289.9464}).wait(1).to({graphics:mask_6_graphics_109,x:247.2477,y:289.9464}).wait(1).to({graphics:mask_6_graphics_110,x:243.643,y:289.9464}).wait(1).to({graphics:mask_6_graphics_111,x:238.393,y:288.6464}).wait(54));

	// lady06
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,252.4,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(103).to({_off:false},0).wait(62));

	// pen
	this.instance_11 = new lib.手握筆();
	this.instance_11.setTransform(387.65,446.95,1,1,0,0,0,162.8,96.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(92).to({_off:false},0).wait(1).to({y:470},0).wait(1).to({y:489.45},0).wait(1).to({y:518.65},0).wait(1).to({x:392.75,y:534},0).wait(1).to({x:375.35,y:555.5},0).wait(1).to({x:364.1,y:563.7},0).wait(1).to({x:345.65,y:569.35},0).wait(1).to({x:325.7,y:578.1},0).wait(1).to({x:310.3,y:585.25},0).wait(1).to({x:303.15,y:599.6},0).to({_off:true},1).wait(62));

	// 圖層_4 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_92 = new cjs.Graphics().p("AhkBUQg4hCAnhNQAlhLBTgDQCZAZgZCUQgJA0guAaQgpAYgjAAQg3AAgtg2g");
	var mask_7_graphics_93 = new cjs.Graphics().p("AhfCwQg4hCAnhOQAIgPAJgNIgKgLQg4hCAnhOQAlhLBUgDQCYAZgZCVQgFAegSAVQAwAsgPBYQgJA0guAbQgoAXglAAQg2AAgtg2g");
	var mask_7_graphics_94 = new cjs.Graphics().p("AhVEkQg4hDAnhNQAPgeAWgTQgXgNgUgZQg4hBAnhOQAIgQAJgMIgKgMQg4hCAnhOQAlhLBUgDQCYAZgZCVQgGAegRAVQAwAtgPBXQgIAuglAaQBSAkgIBsQgFBBg7AfQgnAUgiAAQg3AAgtg1g");
	var mask_7_graphics_95 = new cjs.Graphics().p("AhTGNQg3hDAnhNQANgcAUgSQgKgJgJgLQg4hDAnhNQAPgeAWgSQgXgNgUgZQg4hCAnhOQAIgPAJgNIgKgMQg4hCAnhOQAlhLBUgDQCYAZgZCVQgGAegRAVQAwAtgPBYQgIAuglAaQBSAjgIBsQgEA1gpAfQA6AtgQBfQgJA0guAbQgpAXgkAAQg3AAgtg1g");
	var mask_7_graphics_96 = new cjs.Graphics().p("AhIHuQg4hDAnhNQAHgQALgNQgMgJgKgNQg3hCAnhOQANgbAUgSQgKgJgJgMQg4hCAnhNQAPgeAWgSQgXgOgUgYQg4hCAnhOQAHgQAKgMIgKgMQg4hDAnhOQAlhLBUgDQCYAagZCUQgGAegRAWQAwAtgPBYQgIAtglAbQBSAkgIBqQgFA2goAfQA6AsgQBgQgGAfgSAWQA8AsgQBhQgJA0gtAbQgpAYglAAQg2AAgtg2g");
	var mask_7_graphics_97 = new cjs.Graphics().p("AiVJFQg4hCAnhOQAeg8A6gOQgRgwAag0QAIgQAKgNQgLgJgKgNQg4hCAnhOQAOgbAUgSQgKgJgKgMQg4hBAnhOQAPgeAWgSQgWgOgVgYQg4hCAnhOQAIgQAKgMIgLgMQg4hDAnhOQAmhLBTgDQCZAagaCUQgFAegRAWQAvAtgPBYQgIAtgkAbQBRAkgIBrQgEA2gpAdQA6AtgQBgQgFAfgSAWQA8AsgQBhQgJA0guAbQgWANgVAGQAIAhgIAsQgJAzgtAbQgoAYglAAQg3AAgtg2g");
	var mask_7_graphics_98 = new cjs.Graphics().p("AjOKCQg3hCAnhOQAghABBgMQADgXAMgYQAeg7A6gPQgRgvAag1QAIgQAJgMQgKgKgKgMQg4hDAnhNQAOgbATgSQgJgJgKgLQg4hDAnhNQAPgeAWgTQgWgNgVgZQg4hCAnhOQAIgPAKgNIgLgMQg4hCAnhOQAmhLBSgDQCaAZgaCVQgFAegRAVQAvAtgPBYQgHAuglAaQBSAlgJBrQgEA2goAeQA5AsgQBfQgFAfgSAWQA8AsgQBiQgJA0guAaQgWANgVAGQAIAhgIAsQgJA0gtAaQgdARgaAFIgDAXQgJA0gtAaQgpAYgkAAQg3AAgug2g");
	var mask_7_graphics_99 = new cjs.Graphics().p("AkpKXQg4hDAnhNQAlhMBUgDQAqAHAdARQAfg0A7gKQACgXANgYQAcg8A7gOQgSgwAbg0QAHgQALgNQgMgJgKgNQg3hCAnhNQANgbAUgSQgKgJgJgMQg4hCAnhOQAPgeAWgSQgXgOgUgYQg3hCAmhOQAHgQAKgMIgKgMQg3hDAmhOQAlhLBUgDQCZAagZCUQgGAegRAWQAwAtgPBYQgIAtglAbQBSAkgIBrQgFA2goAfQA6AsgQBfQgGAfgSAWQA8AsgQBhQgJA0gtAbQgXANgVAGQAIAhgHAsQgJAzguAbQgdARgaAFIgDAWQgJA0gtAbQhQAug/gsQgPAYgaAPQgpAYgkAAQg3AAgtg2g");
	var mask_7_graphics_100 = new cjs.Graphics().p("AmALNQg4hDAnhNQAlhMBUgDQAVAEASAGQAEgTAKgUQAlhLBUgDQAqAHAdAQQAfg0A6gKQACgXANgYQAdg8A7gOQgSgvAbg1QAHgQALgMQgMgKgKgMQg3hDAnhMQANgcAUgSQgKgJgJgLQg4hDAnhNQAPgeAWgTQgXgNgUgZQg4hCAnhOQAHgPAKgNIgKgMQg4hCAnhOQAlhLBUgDQCZAZgZCVQgGAegRAVQAwAtgPBYQgIAuglAaQBSAkgIBsQgFA1goAfQA6AtgQBeQgGAfgSAWQA8AsgQBiQgJA0gtAaQgXANgVAGQAIAhgHAsQgJA0guAaQgdARgaAFIgDAXQgJA0gtAaQhRAvg/gtQgOAYgaAPQhAAlg1gVIgCANQgJA0guAbQgpAXgkAAQg3AAgtg1g");
	var mask_7_graphics_101 = new cjs.Graphics().p("AnnLrQg4hCAnhOQAmhLBTgDQAwAIAfAUIAFgLQAmhMBTgDQAVAEASAGQAEgTAKgUQAmhLBTgDQApAHAdAQQAggzA6gLQADgXAMgYQAeg7A6gPQgRgvAag1QAIgQAKgMQgLgKgKgMQg4hCAnhNQAOgcAUgSQgKgJgKgLQg4hDAnhNQAPgeAWgTQgWgNgVgZQg4hCAnhOQAIgPAKgNIgLgMQg4hCAnhOQAmhLBTgDQCaAZgaCVQgFAegRAVQAvAtgPBYQgIAugkAaQBRAlgIBrQgEA2gpAeQA6AtgQBfQgFAegSAWQA8AsgQBiQgJA0guAaQgWANgVAGQAIAhgIAsQgJA0gtAaQgdARgaAFIgDAXQgJA0guAaQhQAvhAgtQgOAYgaAPQhBAmg0gWIgCANQgJA0gtAbQhXAyhCg3QgMArgoAXQgpAYglAAQg3AAgtg2g");
	var mask_7_graphics_102 = new cjs.Graphics().p("AoAMUQg4hCAnhOQAPgfAYgTQADgPAJgRQAmhLBTgDQAwAIAeAUIAGgLQAlhMBUgDQAVAEASAGQAEgTAKgUQAlhLBTgDQAqAHAdAQQAfgzA7gLQACgXANgYQAdg7A7gPQgSgvAbg1QAHgQALgMQgMgKgKgMQg3hCAnhNQANgcAUgSQgKgJgJgLQg4hDAnhNQAPgeAWgTQgXgNgUgZQg4hCAnhOQAHgPAKgNIgKgMQg4hCAnhOQAlhLBUgDQCZAZgZCVQgGAegRAVQAwAtgPBYQgIAuglAaQBSAlgIBrQgFA2goAeQA6AtgQBfQgGAfgSAVQA8AsgQBiQgJA0gtAaQgXANgVAGQAIAhgHAsQgJA0guAaQgdARgaAFIgDAXQgJA0gtAaQhRAvg/gtQgPAYgaAPQhAAmg0gWIgCANQgJA0guAbQhWAyhDg3QgLAogkAYIgBAGQgJA0guAaQgpAYgkAAQg3AAgtg2g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(92).to({graphics:mask_7_graphics_92,x:181.3811,y:284.013}).wait(1).to({graphics:mask_7_graphics_93,x:181.881,y:293.234}).wait(1).to({graphics:mask_7_graphics_94,x:183.1882,y:304.7436}).wait(1).to({graphics:mask_7_graphics_95,x:183.1882,y:315.238}).wait(1).to({graphics:mask_7_graphics_96,x:184.1995,y:324.963}).wait(1).to({graphics:mask_7_graphics_97,x:182.1495,y:333.675}).wait(1).to({graphics:mask_7_graphics_98,x:176.5202,y:339.813}).wait(1).to({graphics:mask_7_graphics_99,x:167.2995,y:341.863}).wait(1).to({graphics:mask_7_graphics_100,x:158.5995,y:347.238}).wait(1).to({graphics:mask_7_graphics_101,x:148.3495,y:350.313}).wait(1).to({graphics:mask_7_graphics_102,x:145.7995,y:354.413}).wait(63));

	// lady05
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,274.3,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(92).to({_off:false},0).wait(73));

	// pen
	this.instance_13 = new lib.手握筆();
	this.instance_13.setTransform(394.05,336.1,1,1,0,0,0,162.8,96.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(72).to({_off:false},0).wait(1).to({x:374.6},0).wait(1).to({x:362.3},0).wait(1).to({x:342.3,y:342.75},0).wait(1).to({x:326.45,y:349.4},0).wait(1).to({x:308.05,y:368.35},0).wait(1).to({x:301.95,y:391.9},0).wait(1).to({x:307.05,y:409.8},0).wait(1).to({x:317.8,y:424.65},0).wait(1).to({x:323.95,y:437.45},0).wait(1).to({x:329.05,y:449.2},0).wait(1).to({x:320.9,y:458.45},0).wait(1).to({x:315.75,y:483.5},0).wait(1).to({x:329.1,y:492.75},0).wait(1).to({x:341.4,y:505},0).wait(1).to({x:335.25,y:522.45},0).wait(1).to({y:539.85},0).wait(1).to({x:348.05,y:551.1},0).wait(1).to({x:360.85,y:561.9},0).wait(1).to({_off:true},1).wait(73));

	// 圖層_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_72 = new cjs.Graphics().p("AhbAPQgNhOBOgcQAOgFAMAAQB/AbguB1QgQApgsAGQgNACgKAAQhMAAgNhSg");
	var mask_8_graphics_73 = new cjs.Graphics().p("AibA4QgNhOBOgcQAOgFANAAQATAEAQAGQgBg/BCgYQAOgFANAAQB/AbguB1QgQApgsAGQghAFgYgIQgDASgIAUQgQApgrAGQgMACgLAAQhMAAgOhSg");
	var mask_8_graphics_74 = new cjs.Graphics().p("AhJBVQgQARgbADQhiAOgPhdQgNhPBOgcQAOgFANAAQBDAPATAoQAOgLAWgIQAOgFALAAQATAEAQAGQgBg/BEgYQAOgFAMAAQB/AbgtB1QgQApgtAGQghAFgYgIQgDASgHAUQgQApgtAGQgMACgLAAQg8AAgVg1g");
	var mask_8_graphics_75 = new cjs.Graphics().p("Ak6B2Qg4hCAnhNQAmhLBTgDQBDALAhAjQAMgoAzgSQAOgFAMAAQBDAPATAoQAOgMAVgHQAOgFANAAQATAEAQAGQgBg/BDgYQAOgFANAAQB/AbguB2QgQAogsAGQgiAFgXgIQgDASgIAUQgQApgsAGQhRAMgYg/QgRARgaADQg0AIgcgXIgCAOQgJA0guAaQgoAYglAAQg3AAgtg2g");
	var mask_8_graphics_76 = new cjs.Graphics().p("AmJCpQg4hCAnhOQAlhKBUgDIAaAFQAEgOAHgPQAmhLBTgDQBDALAhAjQANgoAxgSQAOgFANAAQBDAPATAoQAOgMAWgHQAOgFAMAAQATAEAQAGQgBg/BEgYQAOgFAMAAQB/AbgtB2QgQApgtAGQghAFgYgIQgDASgHATQgQApgtAGQhRALgYg+QgRARgaADQg0AIgcgXIgCAOQgIA0guAaQg4AhgwgMIAAADQgJA0guAbQgpAXgkAAQg3AAgtg2g");
	var mask_8_graphics_77 = new cjs.Graphics().p("AnZD2Qg4hCAnhOQAmhLBTgDIAXAFQgGgmAVgqQAlhLBUgDIAaAFQAEgOAHgPQAmhLBTgDQBDALAhAjQAMgoAygSQAOgFANAAQBDAPATAoQAPgMAVgHQAOgFAMAAQAUAEAPAGQgBg/BEgYQAOgFAMAAQB/AbgtB2QgQApgtAGQghAFgYgIQgCASgIAUQgQApgtAGQhRAMgYg/QgQARgbADQg0AIgdgXIgCAOQgIA0guAZQg3AhgwgMIAAADQgJA0guAbQg2AggvgLQACAYgFAeQgJA0gtAaQgpAYglAAQg3AAgtg2g");
	var mask_8_graphics_78 = new cjs.Graphics().p("AnwFNQg4hCAnhOQASgjAcgUQgfg4Agg/QAlhKBTgDIAYAFQgHgnAVgqQAmhLBTgDIAaAFQAEgOAIgPQAmhLBTgDQBCALAhAjQAMgoAzgSQAOgFAMAAQBEAPASAoQAPgMAVgHQAOgFANAAQATAEAPAGQgBg/BEgYQAOgFANAAQB/AbguB2QgQApgsAGQgiAFgXgIQgDASgIAUQgQApgsAGQhRAMgYg/QgRARgbADQg0AIgcgXIgCAOQgJA0guAaQg3AhgvgMIgBADQgJAzgtAbQg3AggugLQABAYgEAeQgJAzgtAbQARAngKA5QgIA0guAaQgpAYglAAQg3AAgtg2g");
	var mask_8_graphics_79 = new cjs.Graphics().p("AnbG7Qg4hCAnhOQANgaASgRQgSgNgRgUQg4hCAnhOQASgjAcgUQgfg3Agg/QAlhLBTgDIAYAFQgHgnAVgqQAmhLBTgDIAaAFQAEgOAIgPQAmhLBTgDQBCALAhAjQAMgoAzgSQAOgFAMAAQBEAPASAoQAPgMAVgHQAOgFANAAQATAEAPAGQgBg/BEgYQAOgFANAAQB/AbguB2QgQApgsAGQgiAFgXgIQgDASgIAUQgQApgsAGQhRAMgYg/QgRARgbADQg0AIgcgXIgCAOQgJA0guAaQg3AhgvgMIgBADQgJA0gtAbQg3AggugLQABAYgEAdQgJAzgtAbQARAngKA5QgHAqggAaQBOArgSBtQgJA0guAaQgpAYgkAAQg3AAgtg2g");
	var mask_8_graphics_80 = new cjs.Graphics().p("AmJH7QgjgpACguQgagNgXgcQg4hCAnhOQANgaASgRQgSgNgRgUQg4hCAnhOQASgiAcgUQgfg4Agg/QAlhLBTgDIAYAFQgHgnAVgqQAmhLBTgDIAaAFQAEgOAIgPQAmhLBTgDQBCALAhAjQAMgoAzgSQAOgFAMAAQBEAPASAoQAPgLAVgIQAOgFANAAQATAEAPAGQgBg/BEgYQAOgFANAAQB/AbguB2QgQApgsAGQgiAFgXgIQgDASgIAUQgQApgsAGQhRAMgYg/QgRARgbADQg0AIgcgXIgCAOQgJA0guAaQg3AhgvgMIgBADQgJA0gtAbQg3AggugLQABAYgEAeQgJAzgtAaQARAngKA5QgHAqggAaQBCAkgDBTQBjAngUB6QgJA0guAaQgpAYgkAAQg3AAgtg2g");
	var mask_8_graphics_81 = new cjs.Graphics().p("AkyI4QggglgBgqQgdgNgZgfQgjgpACgtQgagNgXgcQg4hDAnhNQANgaASgSQgSgMgRgUQg4hDAnhMQASgkAcgTQgfg4AghAQAlhLBTgDIAYAFQgHgmAVgqQAmhLBTgEIAaAGQAEgPAIgPQAmhLBTgDQBCAMAhAiQAMgnAzgSQAOgFAMgBQBEAPASAoQAPgLAVgIQAOgFANAAQATAFAPAGQgBg/BEgZQAOgFANAAQB/AcguB1QgQApgsAHQgiAFgXgIQgDARgIAUQgQApgsAHQhRALgYg+QgRAQgbAEQg0AHgcgXIgCAOQgJA0guAbQg3AggvgMIgBAEQgJA0gtAaQg3AggugLQABAZgEAdQgJA0gtAaQARAngKA4QgHArggAZQBCAkgDBTQBSAgAABZQBpAmgVB9QgJA0guAbQgpAYgkAAQg3AAgtg3g");
	var mask_8_graphics_82 = new cjs.Graphics().p("AjRJ2QgegkgDgnQgigMgegkQgggmgBgpQgdgNgZgfQgjgpACgtQgagOgXgbQg4hDAnhNQANgaASgSQgSgMgRgUQg4hCAnhNQASgkAcgTQgfg4AghAQAlhLBTgDIAYAFQgHgmAVgqQAmhLBTgEIAaAGQAEgPAIgPQAmhLBTgDQBCALAhAjQAMgnAzgSQAOgFAMgBQBEAPASAoQAPgLAVgIQAOgFANAAQATAEAPAHQgBhABEgYQAOgFANAAQB/AcguB1QgQApgsAHQgiAEgXgHQgDARgIAUQgQApgsAHQhRALgYg/QgRARgbAEQg0AHgcgXIgCAOQgJA0guAbQg3AggvgMIgBAEQgJA0gtAaQg3AggugLQABAZgEAdQgJAzgtAbQARAngKA5QgHAqggAZQBCAkgDBTQBSAgAABZQBVAfACBYQBzAkgWCDQgJA0gsAaQgpAYglAAQg3AAgtg2g");
	var mask_8_graphics_83 = new cjs.Graphics().p("AkOK7Qg4hCAnhOQASglAdgTIgCgNQgigMgegkQgggmgBgpQgdgOgZgeQgjgpACguQgagNgXgcQg4hCAnhOQANgaASgRQgSgMgRgUQg4hCAnhOQASgjAcgUQgfg4Agg/QAlhLBTgDIAYAFQgHgnAVgqQAmhLBTgDIAaAFQAEgOAIgPQAmhLBTgDQBCALAhAjQAMgoAzgSQAOgFAMAAQBEAPASAoQAPgLAVgIQAOgFANAAQATAEAPAGQgBg/BEgYQAOgFANAAQB/AbguB2QgQApgsAGQgiAFgXgIQgDASgIAUQgQApgsAGQhRAMgYg/QgRARgbADQg0AIgcgXIgCAOQgJA0guAaQg3AhgvgMIgBADQgJA0gtAbQg3AggugLQABAYgEAeQgJAzgtAbQARAngKA5QgHAqggAaQBCAjgDBTQBSAgAABZQBVAfACBYQBzAkgWCCQgJA0gsAbIgFACQADAagFAgQgJA0guAaQgpAYgkAAQg3AAgtg2g");
	var mask_8_graphics_84 = new cjs.Graphics().p("Al1MIQg4hCAnhOQAeg8A6gOQgGgmAVgqQASgkAdgUIgCgNQgigMgegkQgggmgBgpQgdgNgZgfQgjgpACgtQgagOgXgbQg4hDAnhMQANgaASgSQgSgMgRgUQg4hDAnhNQASgkAcgTQgfg4AghAQAlhLBTgDIAYAFQgHgmAVgqQAmhLBTgEIAaAGQAEgPAIgPQAmhLBTgDQBCALAhAjQAMgnAzgSQAOgFAMgBQBEAPASAoQAPgLAVgIQAOgFANAAQATAEAPAHQgBhABEgYQAOgFANAAQB/AcguB1QgQApgsAHQgiAEgXgHQgDARgIAUQgQApgsAHQhRALgYg/QgRARgbAEQg0AHgcgXIgCAOQgJA0guAbQg3AggvgMIgBAEQgJA0gtAaQg3AggugLQABAZgEAdQgJAzgtAbQARAngKA5QgHArggAZQBCAkgDBSQBSAgAABZQBVAfACBYQBzAkgWCDQgJA0gsAaIgFADQADAagFAfQgJA0guAbQgXANgWAGQACAZgFAfQgJA0gtAaQgpAYglAAQg3AAgtg2g");
	var mask_8_graphics_85 = new cjs.Graphics().p("AjwNVQgogvAIg1Qg3ABgug3Qg4hCAnhOQAeg7A6gPQgGgmAVgqQASgkAdgUIgCgNQgigMgegkQggglgBgqQgdgNgZgfQgjgpACgtQgagOgXgbQg4hCAnhNQANgaASgSQgSgMgRgUQg4hDAnhNQASgkAcgTQgfg4AghAQAlhLBTgDIAYAFQgHgmAVgqQAmhLBTgEIAaAGQAEgPAIgPQAmhLBTgDQBCAMAhAiQAMgnAzgSQAOgFAMgBQBEAPASAoQAPgLAVgIQAOgFANAAQATAFAPAGQgBg/BEgZQAOgFANAAQB/AcguB1QgQApgsAHQgiAFgXgIQgDARgIAUQgQApgsAHQhRALgYg+QgRAQgbAEQg0AHgcgXIgCAOQgJA0guAbQg3AggvgMIgBAEQgJA0gtAaQg3AggugLQABAZgEAdQgJA0gtAaQARAngKA5QgHArggAZQBCAkgDBTQBSAgAABYQBVAfACBZQBzAjgWCDQgJA0gsAaIgFADQADAagFAfQgJA0guAbQgXANgWAGQABARgBASIACAAQCZAagZCUQgIA0guAbQgpAYglAAQg3AAgtg2g");
	var mask_8_graphics_86 = new cjs.Graphics().p("AhWOFQgTgWgIgYQhHAQg4hDQgogvAIg1Qg3ABgug2Qg4hDAnhOQAeg7A6gOQgGgnAVgpQASglAdgTIgCgNQgigMgegkQgggmgBgqQgdgNgZgeQgjgpACguQgagNgXgbQg4hCAnhOQANgaASgRQgSgNgRgUQg4hCAnhOQASgjAcgUQgfg4Agg/QAlhLBTgDIAYAFQgHgnAVgqQAmhLBTgDIAaAFQAEgOAIgPQAmhLBTgDQBCALAhAjQAMgoAzgSQAOgFAMAAQBEAPASAoQAPgMAVgHQAOgFANAAQATAEAPAGQgBg/BEgYQAOgFANAAQB/AbguB2QgQApgsAGQgiAFgXgIQgDASgIAUQgQApgsAGQhRALgYg+QgRARgbADQg0AIgcgXIgCAOQgJA0guAaQg3AhgvgMIgBADQgJA0gtAbQg3AfgugKQABAYgEAeQgJAzgtAaQARAngKA6QgHAqggAaQBCAjgDBTQBSAhAABXQBVAfACBZQBzAjgWCDQgJA0gsAbIgFACQADAagFAgQgJA0guAaQgXAOgWAFQABARgBATIACAAQBuASASBSQALgDAOAAQCZAZgZCVQgJA0gtAbQgpAXglAAQg2AAgtg2g");
	var mask_8_graphics_87 = new cjs.Graphics().p("AijPSQg4hCAnhOQARgiAagTQg5ABgug3QgogvAIg0Qg3AAgug2Qg4hDAnhOQAeg7A6gOQgGgmAVgqQASglAdgTIgCgNQgigMgegkQgggmgBgpQgdgOgZgeQgjgoACguQgagNgXgcQg4hCAnhOQANgaASgRQgSgNgRgUQg4hCAnhOQASgjAcgUQgfg4Agg/QAlhLBTgDIAYAFQgHgnAVgqQAmhLBTgDIAaAFQAEgOAIgPQAmhLBTgDQBCALAhAjQAMgoAzgSQAOgFAMAAQBEAPASAoQAPgMAVgHQAOgFANAAQATAEAPAGQgBg/BEgYQAOgFANAAQB/AbguB2QgQApgsAGQgiAFgXgIQgDASgIAUQgQApgsAGQhRAMgYg/QgRARgbADQg0AIgcgXIgCAOQgJA0guAaQg3AhgvgMIgBADQgJA0gtAbQg3AggugLQABAYgEAeQgJAzgtAbQARAngKA5QgHAqggAaQBCAkgDBTQBSAgAABZQBVAfACBXQBzAkgWCCQgJA0gsAbIgFACQADAagFAgQgJA0guAaQgXAOgWAGQABAQgBATIACAAQBuASASBSQALgDAOAAQCZAZgZCVQgJA0gtAbIgVAKQAEAdgGAkQgJA0gtAaQgoAYglAAQg3AAgtg2g");
	var mask_8_graphics_88 = new cjs.Graphics().p("AjHQxQg4hCAnhOQASgkAcgTQgug+AkhJQARgiAagTQg5ACgug3QgogvAIg1Qg3AAgug2Qg4hCAnhOQAeg8A6gOQgGgmAVgqQASgkAdgUIgCgNQgigMgegkQgggmgBgoQgdgNgZgfQgjgpACgtQgagOgXgbQg4hDAnhNQANgaASgSQgSgMgRgUQg4hDAnhNQASgkAcgTQgfg4AghAQAlhLBTgDIAYAFQgHgmAVgqQAmhLBTgEIAaAGQAEgPAIgPQAmhLBTgDQBCALAhAjQAMgnAzgSQAOgFAMgBQBEAPASAoQAPgLAVgIQAOgFANAAQATAEAPAHQgBhABEgYQAOgFANAAQB/AcguB1QgQApgsAHQgiAEgXgHQgDARgIAUQgQApgsAHQhRALgYg/QgRARgbAEQg0AHgcgXIgCAOQgJA0guAbQg3AggvgMIgBAEQgJA0gtAaQg3AggugLQABAZgEAdQgJAzgtAbQARAngKA5QgHArggAZQBCAkgDBTQBSAgAABZQBVAfACBYQBzAjgWCDQgJA0gsAaIgFADQADAagFAfQgJA0guAbQgXANgWAGQABAQgBATIACAAQBuASASBSQALgCAOgBQCZAagZCVQgJA0gtAaIgVALQAEAcgGAkQgJAygrAbQAcArgMBGQgIA0gtAaQgpAYglAAQg3AAgtg2g");
	var mask_8_graphics_89 = new cjs.Graphics().p("Ag3RfQgRgTgIgVQhCALg1g/Qg4hCAnhOQASgkAcgTQgug+AkhJQARgiAagTQg5ACgug3QgogvAIg1Qg3AAgug2Qg4hCAnhOQAeg8A6gOQgGgmAVgqQASgkAdgUIgCgNQgigMgegkQggglgBgpQgdgNgZgfQgjgpACgtQgagOgXgbQg4hDAnhNQANgaASgSQgSgMgRgUQg4hDAnhNQASgkAcgTQgfg4AghAQAlhLBTgDIAYAFQgHgmAVgqQAmhLBTgEIAaAGQAEgPAIgPQAmhLBTgDQBCALAhAjQAMgnAzgSQAOgFAMgBQBEAPASAoQAPgLAVgIQAOgFANAAQATAEAPAHQgBhABEgYQAOgFANAAQB/AcguB1QgQApgsAHQgiAEgXgHQgDARgIAUQgQApgsAHQhRALgYg/QgRARgbAEQg0AHgcgXIgCAOQgJA0guAbQg3AggvgMIgBAEQgJA0gtAaQg3AggugLQABAZgEAdQgJAzgtAbQARAngKA5QgHArggAZQBCAkgDBTQBSAgAABZQBVAfACBYQBzAkgWCCQgJA0gsAaIgFADQADAagFAfQgJA0guAbQgXANgWAGQABAQgBATIACAAQBuASASBSQALgCAOgBQCZAagZCVQgJA0gtAaIgVALQAEAcgGAkQgJAygrAbQAKAOAFASIARgBQCZAZgZCVQgJA0guAaQgpAYgkAAQg2AAgtg2g");
	var mask_8_graphics_90 = new cjs.Graphics().p("ABSSiQgggmgBgqQg5ADgvg4QgRgUgIgUQhCAKg1g+Qg4hDAnhOQASgjAcgTQgug/AkhIQARgiAagTQg5ABgug3QgogvAIg1Qg3ABgug2Qg4hDAnhOQAeg7A6gOQgGgnAVgpQASglAdgTIgCgNQgigLgegkQgggmgBgqQgdgNgZgeQgjgpACguQgagNgXgcQg4hCAnhOQANgaASgRQgSgNgRgUQg4hCAnhOQASgjAcgUQgfg4Agg/QAlhLBTgDIAYAFQgHgnAVgqQAmhLBTgDIAaAFQAEgOAIgPQAmhLBTgDQBCALAhAjQAMgoAzgSQAOgFAMAAQBEAPASAoQAPgMAVgHQAOgFANAAQATAEAPAGQgBg/BEgYQAOgFANAAQB/AbguB2QgQApgsAGQgiAFgXgIQgDASgIAUQgQApgsAGQhRALgYg+QgRAQgbAEQg0AIgcgXIgCAOQgJA0guAaQg3AhgvgMIgBADQgJA0gtAbQg3AfgugKQABAYgEAeQgJAzgtAaQARAngKA6QgHAqggAaQBCAjgDBTQBSAhAABYQBVAfACBZQBzAjgWCCQgJA0gsAbIgFACQADAagFAgQgJA0guAaQgXAOgWAFQABARgBATIACAAQBuASASBSQALgDAOAAQCZAZgZCVQgJA0gtAbIgVAKQAEAdgGAkQgJAygrAaQAKAPAFASIARgCQCDAWAABvIAHAAQCZAagZCVQgJAzgtAbQgpAXglAAQg3AAgtg1g");
	var mask_8_graphics_91 = new cjs.Graphics().p("ABSSiQgggmgBgqQg5ADgvg4QgRgUgIgUQhCAKg1g+Qg4hDAnhOQASgjAcgTQgug/AkhIQARgiAagTQg5ABgug3QgogvAIg1Qg3ABgug2Qg4hDAnhOQAeg7A6gOQgGgnAVgpQASglAdgTIgCgNQgigLgegkQgggmgBgqQgdgNgZgeQgjgpACguQgagNgXgcQg4hCAnhOQANgaASgRQgSgNgRgUQg4hCAnhOQASgjAcgUQgfg4Agg/QAlhLBTgDIAYAFQgHgnAVgqQAmhLBTgDIAaAFQAEgOAIgPQAmhLBTgDQBCALAhAjQAMgoAzgSQAOgFAMAAQBEAPASAoQAPgMAVgHQAOgFANAAQATAEAPAGQgBg/BEgYQAOgFANAAQB/AbguB2QgQApgsAGQgiAFgXgIQgDASgIAUQgQApgsAGQhRALgYg+QgRAQgbAEQg0AIgcgXIgCAOQgJA0guAaQg3AhgvgMIgBADQgJA0gtAbQg3AfgugKQABAYgEAeQgJAzgtAaQARAngKA6QgHAqggAaQBCAjgDBTQBSAhAABYQBVAfACBZQBzAjgWCCQgJA0gsAbIgFACQADAagFAgQgJA0guAaQgXAOgWAFQABARgBATIACAAQBuASASBSQALgDAOAAQCZAZgZCVQgJA0gtAbIgVAKQAEAdgGAkQgJAygrAaQAKAPAFASIARgCQCDAWAABvIAHAAQCZAagZCVQgJAzgtAbQgpAXglAAQg3AAgtg1g");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_8_graphics_72,x:186.7572,y:165.1157}).wait(1).to({graphics:mask_8_graphics_73,x:180.3572,y:169.2102}).wait(1).to({graphics:mask_8_graphics_74,x:172.9322,y:169.2103}).wait(1).to({graphics:mask_8_graphics_75,x:161.2745,y:172.613}).wait(1).to({graphics:mask_8_graphics_76,x:153.3495,y:177.734}).wait(1).to({graphics:mask_8_graphics_77,x:145.4203,y:185.413}).wait(1).to({graphics:mask_8_graphics_78,x:143.0995,y:194.113}).wait(1).to({graphics:mask_8_graphics_79,x:143.0995,y:205.113}).wait(1).to({graphics:mask_8_graphics_80,x:143.0995,y:211.509}).wait(1).to({graphics:mask_8_graphics_81,x:143.0995,y:217.659}).wait(1).to({graphics:mask_8_graphics_82,x:143.0995,y:223.788}).wait(1).to({graphics:mask_8_graphics_83,x:143.0995,y:230.709}).wait(1).to({graphics:mask_8_graphics_84,x:143.0995,y:238.388}).wait(1).to({graphics:mask_8_graphics_85,x:143.0995,y:246.063}).wait(1).to({graphics:mask_8_graphics_86,x:143.0995,y:250.934}).wait(1).to({graphics:mask_8_graphics_87,x:143.0995,y:258.613}).wait(1).to({graphics:mask_8_graphics_88,x:143.0995,y:268.088}).wait(1).to({graphics:mask_8_graphics_89,x:143.0995,y:272.688}).wait(1).to({graphics:mask_8_graphics_90,x:143.0995,y:279.338}).wait(1).to({graphics:mask_8_graphics_91,x:143.0995,y:279.338}).wait(74));

	// lady04
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,163.9,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(72).to({_off:false},0).wait(93));

	// pen
	this.instance_15 = new lib.手握筆();
	this.instance_15.setTransform(405.6,326.95,1,1,0,0,0,162.8,96.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(56).to({_off:false},0).wait(1).to({y:341.15},0).wait(1).to({y:358.35},0).wait(1).to({x:394,y:376.8},0).wait(1).to({x:377.65,y:387.15},0).wait(1).to({x:357.85,y:393.15},0).wait(1).to({x:343.25,y:401.75},0).wait(1).to({x:337.25,y:418.95},0).wait(1).to({x:345.85,y:430.1},0).wait(1).to({x:355.3,y:442.15},0).wait(1).to({x:363.9,y:453.35},0).wait(1).to({y:467.65},0).wait(1).to({x:359.2,y:483.95},0).wait(1).to({x:366.1,y:496.85},0).wait(1).to({y:508.05},0).wait(1).to({y:520.9},0).to({_off:true},1).wait(93));

	// 圖層_19 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_56 = new cjs.Graphics().p("AgJA/QgUgDgPgPQgPgQgDgUQgDgTAKgTQAKgTASgJQARgIAUADQAVADAOAOQAOAOAEAVQADAVgJASQgJASgTAKQgPAHgOAAIgJgBg");
	var mask_9_graphics_57 = new cjs.Graphics().p("AgdCcQgcgHgWgSQgYgVgMggQgMgfAGggQAFgfAWgaQAQgTAUgLIgDgOQgDgUAKgTQAKgTASgJQARgIAUADQAVADAOAOQAOAOAEAVQADATgHAQQAKAFAIAHQAZAUANAfQAMAfgFAgQgDATgIAQQgNAZgWASQgXASgcAGQgNADgNAAQgOAAgPgEg");
	var mask_9_graphics_58 = new cjs.Graphics().p("AggD4QgfgDgagTQgagSgOgbQgOgcABgfQABggAPgbQAPgbAbgRIADgBQgJgNgGgPQgMggAFgfQAGggAVgaQAQgTAVgMIgEgNQgDgUAKgTQAKgTASgJQARgJAUAEQAVADAOAOQAPAOADAVQADASgGAQQAJAFAJAHQAZAUAMAgQAMAfgFAgQgDAUgIAOQgMAagXASIgNAJQAPAVAFAaQAGAcgHAbQgIAjgbAZQgUATgaAIQgUAHgTAAIgNgBg");
	var mask_9_graphics_59 = new cjs.Graphics().p("Ah2E+QgegRgRgeQgRgfACgjQACggARgcQASgcAcgPQALgHAMgDQgMgaABgeQAAggAQgaQAPgbAbgRIACgBQgJgNgGgQQgMggAGgfQAFggAWgaQAQgUAUgLIgDgNQgDgUAJgTQAKgTASgJQARgJAVAEQAVADAOAOQAOAOAEAVQADASgGAQQAJAFAIAHQAZAUANAgQAMAfgFAgQgDAUgIAPQgNAagWASIgNAJQAPAVAFAZQAGAcgHAbQgJAjgbAZQgTATgaAIIgEABQAKAVACAZQACAjgQAeQgPAegeASQgdATghAAIgCAAQghAAgdgRg");
	var mask_9_graphics_60 = new cjs.Graphics().p("Ai9FyQgfgQgSgeQgTgdgBgiQAAgSAEgOQAHgeAWgYQAVgYAegKQAcgKAeAFIAQADQAFgVAMgUQASgcAcgPQALgGAMgEQgMgaABgdQAAggAQgaQAOgbAbgRIACgCQgJgNgGgQQgMgfAGggQAFggAWgaQAPgTAVgLIgDgOQgDgUAKgTQAKgTASgJQARgIAVADQAVADAOAOQAOAOAEAVQADATgHAQQAKAFAIAHQAZAUANAfQAMAggFAgQgDATgIAQQgNAZgWASIgNAJQAOAVAGAaQAGAcgHAaQgJAjgbAaQgTASgaAJIgEABQAKAVACAZQACAjgQAdQgPAegeATQgeASghABQgTAAgQgFQgEAPgHAQQgOAbgYARQgbAUgjADIgMAAQgdAAgZgMg");
	var mask_9_graphics_61 = new cjs.Graphics().p("AkGGKQghgKgYgaQgXgbgGghQgFgZAGgaQAGgaAPgVQAVgbAggNQAhgNAiAFQAgAFAaAVQAGgKAJgKQAVgYAegKQAcgKAeAFIARADQAEgVALgUQASgcAcgPQALgGAMgEQgMgaABgdQAAggAQgaQAPgbAbgRIACgCQgJgNgGgQQgMgfAGggQAFggAWgaQAQgTAUgLIgDgOQgDgUAKgTQAKgTASgJQARgIAVADQAVADAOAOQAOAOAEAVQADATgGAQQAJAFAIAHQAZAUANAfQAMAggFAgQgDATgIAQQgNAZgWASIgNAJQAPAVAFAaQAGAcgHAaQgJAjgbAaQgTASgaAJIgEABQAKAVACAZQACAjgQAdQgPAegeATQgeASghABQgSAAgSgFQgDAPgIAQQgOAbgYARQgbAUgiADQgkADgegPQgMgHgLgIQgHANgLALQgXAYgjAJQgQAEgQAAQgRAAgRgFg");
	var mask_9_graphics_62 = new cjs.Graphics().p("AlVG/QgggIgZgZQgYgYgIghQgIggAKgiQAJghAZgWQAVgUAdgIQAcgJAcAGQALACALADIADgPQAGgaAPgVQAVgbAggNQAhgNAiAFQAfAFAaAVQAHgKAJgKQAVgYAdgKQAcgKAeAEIAQAEQAFgVAMgUQASgcAcgOQALgGAMgEQgMgaABgeQAAggAQgaQAPgbAbgRIACgCQgJgNgGgQQgMgfAGggQAFggAWgaQAPgTAVgLIgDgOQgDgUAKgTQAKgTASgJQARgJAVAEQAVADAOAOQAOAOAEAVQADATgHAQQAKAFAIAHQAZAUANAfQAMAggFAgQgDATgIAQQgNAZgWASIgNAJQAOAVAGAaQAGAcgHAbQgJAjgbAZQgTASgaAJIgEABQAKAVACAZQACAigQAeQgPAegeATQgeASghAAQgTABgRgFQgEAPgHAQQgOAbgYARQgbAUgjADQgkADgdgQQgNgGgKgIQgIANgKAKQgXAZgjAJQgiAJgggKIgJgDIgCAPQgIAigWAYQgXAZgiAJQgSAFgRAAQgPAAgPgEg");
	var mask_9_graphics_63 = new cjs.Graphics().p("AmeIAQgggTgQgfQgRggAEglQADglAWgcQAWgcAkgMIAGgCIgCgHQgIggAKgiQAJghAZgWQAVgUAdgIQAcgIAcAFQALACALAEIADgQQAGgaAPgVQAVgbAggNQAhgNAiAFQAfAFAaAVQAHgKAJgKQAUgYAegJQAcgKAeAFIAQADQAFgVAMgUQASgcAcgPQALgGAMgEQgMgaABgeQAAggAQgaQAPgbAbgRIACgCQgJgNgGgQQgMgfAGggQAFggAWgaQAQgTAUgLIgDgOQgDgUAKgTQAKgTASgJQARgIAVADQAVADAOAOQAOAOAEAVQADATgHAQQAKAFAIAHQAZAUANAfQAMAggFAgQgDATgIAQQgNAZgWASIgNAJQAOAVAGAaQAGAcgHAbQgJAjgbAaQgTASgaAJIgEABQAKAVACAYQACAjgQAdQgPAegeATQgeASghABQgTAAgRgFQgDAQgIAPQgOAbgYARQgbAUgjADQgkADgegPQgNgHgKgIQgGANgLALQgXAYgjAJQgiAJgggKIgJgDIgCAPQgIAigWAYQgXAZgiAJIAEAPQAGAjgNAgQgNAhgeAWQgeAWgkACIgHAAQggAAgdgRg");
	var mask_9_graphics_64 = new cjs.Graphics().p("AkuJCQgigRgSgfQgRgfAAgiQgWgEgVgMQgggSgQggQgRgfAEglQADgmAWgcQAWgbAkgMIAGgCIgCgHQgIghAKghQAJghAZgXQAVgTAdgIQAcgJAcAFQALACALAEIADgQQAGgaAPgUQAVgaAggOQAhgNAiAGQAfAFAaAVQAHgLAJgJQAUgYAegKQAcgKAeAEIAQAEQAFgWAMgTQASgcAcgPQALgHAMgDQgMgbABgdQAAggAQgbQAPgbAbgRIACgBQgJgNgGgQQgMggAGgfQAFggAWgaQAQgUAUgLIgDgNQgDgUAKgTQAKgTASgJQARgJAVAEQAVADAOAOQAOAOAEAVQADASgHAQQAKAFAIAHQAZAUANAgQAMAfgFAgQgDAUgIAPQgNAagWASIgNAJQAOAUAGAbQAGAcgHAbQgJAjgbAZQgTATgaAIIgEABQAKAVACAZQACAjgQAdQgPAegeASQgeATghAAQgTAAgRgFQgDAQgIAPQgOAcgYARQgbAUgjACQgkADgegPQgNgGgKgJQgGANgLALQgXAYgjAJQgiAJgggKIgJgDIgCAPQgIAigWAZQgXAYgiAKIAEAOQACANAAAMIAFABQAlAHAZAYQAaAZAJAkQAJAkgMAhQgLAigdAXQgeAXgjAEIgNAAQgdAAgagNg");
	var mask_9_graphics_65 = new cjs.Graphics().p("AjBKNQgigUgQgiQgNgbACgiQABgNAEgNQgcgBgZgNQgigRgSgeQgRgfAAgjQgWgDgVgMQgggTgQgfQgRggAEglQADglAWgcQAWgcAkgMIAGgCIgCgHQgIggAKgiQAJghAZgWQAVgTAdgIQAcgIAcAFQALACALAEIADgQQAGgaAPgVQAVgbAggNQAhgNAiAFQAfAFAaAVQAHgKAJgKQAUgYAegKQAcgKAeAFIAQADQAFgVAMgUQASgcAcgPQALgGAMgEQgMgaABgeQAAggAQgaQAPgbAbgRIACgCQgJgNgGgQQgMgfAGggQAFggAWgaQAQgTAUgLIgDgOQgDgUAKgTQAKgTASgJQARgIAVADQAVADAOAOQAOAOAEAVQADATgHAQQAKAFAIAHQAZAUANAfQAMAggFAgQgDATgIAQQgNAZgWASIgNAJQAOAVAGAaQAGAcgHAbQgJAjgbAaQgTASgaAJIgEABQAKAVACAZQACAjgQAdQgPAegeATQgeASghAAQgTAAgRgEQgDAOgIAQQgOAbgYARQgbAUgjADQgkADgegPQgNgHgKgIQgGANgLALQgXAYgjAJQgiAJgggKIgJgDIgCAPQgIAigWAYQgXAZgiAJIAEAPQACAMAAAMIAFABQAlAHAZAZQAaAYAJAkQAIAhgJAgQAPAAAQAEQAXAHAUAPQAdAYAMAlQALAmgLAkQgLAjgfAZQgfAYglADIgIAAQghAAgegSg");
	var mask_9_graphics_66 = new cjs.Graphics().p("AgdLHQghgIgXgYQgXgWgIggIgGABQglACgigUQgigUgQgiQgNgbACgiQABgNAEgNQgcgBgZgNQgigRgSgeQgRgfAAgjQgWgDgVgMQgggTgQgfQgRggAEglQADglAWgcQAWgcAkgMIAGgCIgCgHQgIggAKgiQAJggAZgWQAVgUAdgIQAcgIAcAFQALACALAEIADgQQAGgaAPgVQAVgbAggNQAhgNAiAFQAfAFAaAVQAHgKAJgKQAUgYAegKQAcgKAeAFIAQADQAFgVAMgUQASgcAcgPQALgGAMgEQgMgaABgeQAAggAQgaQAPgbAbgRIACgCQgJgNgGgQQgMgfAGggQAFggAWgaQAQgTAUgLIgDgOQgDgUAKgTQAKgTASgJQARgIAVADQAVADAOAOQAOAOAEAVQADATgHAQQAKAFAIAHQAZAUANAfQAMAggFAgQgDATgIAQQgNAZgWASIgNAJQAOAVAGAaQAGAcgHAbQgJAjgbAaQgTASgaAJIgEABQAKAVACAZQACAjgQAdQgPAegeATQgeASghABQgTAAgRgFQgDAQgIAPQgOAagYARQgbAUgjADQgkADgegPQgNgHgKgIQgGANgLALQgXAYgjAJQgiAJgggKIgJgDIgCAPQgIAigWAYQgXAZgiAJIAEAPQACAMAAAMIAFABQAlAHAZAZQAaAYAJAkQAIAigJAfQAPAAAQAEQAXAHAUAPQAdAYAMAlIABAEQAagDAcAKQAjAMAWAcQAXAeACAoQACAogUAgQgaApgvANQgPAEgQAAQgPAAgRgFg");
	var mask_9_graphics_67 = new cjs.Graphics().p("Ag3MGQgfgSgRgfQgWgpALguQAFgXAPgUQgPgUgHgZIgGAAQglADgigUQgigUgQgiQgNgcACghQABgOAEgMQgcgBgZgNQgigRgSgfQgRgeAAgjQgWgDgVgNQgggSgQggQgRgfAEglQADgmAWgcQAWgbAkgMIAGgCIgCgHQgIggAKghQAJghAZgXQAVgTAdgIQAcgJAcAFQALADALADIADgQQAGgaAPgUQAVgbAggOQAhgNAiAGQAfAFAaAVQAHgKAJgKQAUgYAegKQAcgKAeAEIAQAEQAFgWAMgTQASgcAcgPQALgGAMgEQgMgaABgeQAAggAQgbQAPgbAbgRIACgBQgJgNgGgQQgMggAGgfQAFggAWgaQAQgTAUgMIgDgNQgDgUAKgTQAKgTASgJQARgJAVAEQAVADAOAOQAOAOAEAVQADASgHAQQAKAGAIAGQAZAUANAgQAMAfgFAgQgDAUgIAPQgNAagWASIgNAJQAOAVAGAaQAGAcgHAbQgJAjgbAZQgTATgaAIIgEACQAKAVACAYQACAjgQAeQgPAegeASQgeATghAAQgTABgRgGQgDAQgIAPQgOAcgYARQgbAUgjACQgkADgegPQgNgGgKgIQgGANgLAKQgXAYgjAIQgiAJgggKIgJgBIgCANQgIAigWAZQgXAYgiAKIAEAOQACANAAAMIAFABQAlAHAZAYQAaAZAJAkQAIAhgJAfQAPABAQAEQAXAGAUAQQAdAXAMAmIABAEQAagDAcAJQAjANAWAcQAXAeACAoQACAngUAgIgEAHIALAQQAQAcAAAhQAAAhgPAcQgQAcgcARQgcASggABIgGAAQgfAAgdgRg");
	var mask_9_graphics_68 = new cjs.Graphics().p("AhsNRQgYgNgQgXQgQgWgGgbQgDgPABgQQACggASgcQARgaAYgOQgLggAIgjQAFgYAPgUQgPgUgHgZIgGABQglACgigUQgigUgQgiQgNgbACgiQABgOAEgMQgcgBgZgNQgigRgSgeQgRgfAAgjQgWgDgVgMQgggTgQgfQgRggAEglQADglAWgbQAWgcAkgMIAGgCIgCgHQgIggAKgiQAJghAZgWQAVgUAdgIQAcgIAcAFQALACALAEIADgQQAGgaAPgVQAVgbAggNQAhgNAiAFQAfAFAaAVQAHgKAJgKQAUgYAegKQAcgKAeAFIAQADQAFgVAMgUQASgcAcgPQALgGAMgEQgMgaABgeQAAggAQgaQAPgbAbgRIACgCQgJgNgGgQQgMgfAGggQAFggAWgaQAQgTAUgLIgDgOQgDgUAKgTQAKgTASgJQARgIAVADQAVADAOAOQAOAOAEAVQADATgHAQQAKAFAIAHQAZAUANAfQAMAggFAgQgDATgIAQQgNAZgWASIgNAJQAOAVAGAaQAGAcgHAbQgJAjgbAaQgTASgaAJIgEABQAKAVACAZQACAjgQAdQgPAegeATQgeASghABQgTAAgRgFQgDAPgIAQQgOAbgYARQgbAUgjADQgkADgegPQgNgHgKgIQgGANgLALQgXAYgjAJQgiAJgggKIgJgDIgCAPQgIAigWAYQgXAYgiAJIAEAPQACAMAAAMIAFABQAlAHAZAZQAaAYAJAkQAIAhgJAgQAPAAAQAEQAXAHAUAPQAdAYAMAlIABAEQAagDAcAKQAjAMAWAcQAXAeACAoQACAogUAgIgEAGIALAQQAQAcAAAhQAAAigPAbQgQAcgcASIgCABQAGAUAAAVQAAAggRAdQgRAdgbAQQgbAQghAAQgiAAgcgPg");
	var mask_9_graphics_69 = new cjs.Graphics().p("AhlObQghgQgSgdQgZgnAGgvQAFgcAQgYQgPgWgFgaQgDgOABgRQACggASgcQARgZAYgOQgLghAIgjQAFgXAPgUQgPgUgHgZIgGAAQglADgigUQgigUgQgiQgNgcACghQABgOAEgMQgcgBgZgNQgigRgSgfQgRgeAAgjQgWgDgVgNQgggSgQggQgRgfAEgkQADgmAWgcQAWgbAkgMIAGgCIgCgHQgIghAKghQAJghAZgXQAVgTAdgIQAcgJAcAFQALACALAEIADgQQAGgaAPgUQAVgbAggOQAhgNAiAGQAfAFAaAVQAHgLAJgJQAUgYAegKQAcgKAeAEIAQAEQAFgWAMgTQASgcAcgPQALgGAMgEQgMgaABgeQAAggAQgbQAPgbAbgRIACgBQgJgNgGgQQgMggAGgfQAFggAWgaQAQgTAUgMIgDgNQgDgUAKgTQAKgTASgJQARgJAVAEQAVADAOAOQAOAOAEAVQADASgHAQQAKAFAIAHQAZAUANAgQAMAfgFAgQgDAUgIAPQgNAagWASIgNAJQAOAVAGAaQAGAcgHAbQgJAjgbAZQgTATgaAIIgEACQAKAVACAYQACAjgQAeQgPAegeASQgeATghAAQgTABgRgGQgDAQgIAPQgOAcgYARQgbAUgjACQgkADgegPQgNgGgKgIQgGAMgLALQgXAYgjAJQgiAJgggKIgJgCIgCAOQgIAigWAZQgXAYgiAKIAEAOQACANAAALIAFABQAlAHAZAYQAaAZAJAkQAIAhgJAfQAPABAQAEQAXAGAUAQQAdAXAMAmIABAEQAagDAcAJQAjANAWAcQAXAeACAoQACAngUAgIgEAHIALAQQAQAcAAAhQAAAhgPAcQgQAcgcARIgCACQAGATAAAVQAAAhgRAcIgFAJQAOATAFAaQAIAjgMAhQgLAggdAXQgcAWgiAEIgOABQgbAAgagMg");
	var mask_9_graphics_70 = new cjs.Graphics().p("AgNPKQgggPgTggQgMgTgEgUQgLgDgKgFQghgQgSgdQgZgnAGguQAFgdAQgYQgPgWgFgZQgDgPABgQQACggASgcQARgaAYgOQgLggAIgjQAFgYAPgUQgPgUgHgZIgGABQglACgigUQgigUgQgiQgNgbACgiQABgOAEgMQgcgBgZgNQgigRgSgeQgRgfAAgjQgWgDgVgMQgggTgQgfQgRgfAEglQADglAWgcQAWgcAkgMIAGgCIgCgHQgIggAKgiQAJghAZgWQAVgUAdgIQAcgJAcAGQALACALAEIADgQQAGgaAPgVQAVgbAggNQAhgNAiAFQAfAFAaAVQAHgKAJgKQAUgYAegKQAcgKAeAFIAQADQAFgVAMgUQASgcAcgPQALgGAMgEQgMgaABgeQAAggAQgaQAPgbAbgRIACgCQgJgNgGgQQgMgfAGggQAFggAWgaQAQgTAUgLIgDgOQgDgUAKgTQAKgTASgJQARgJAVAEQAVADAOAOQAOAOAEAVQADATgHAQQAKAFAIAHQAZAUANAfQAMAggFAgQgDATgIAQQgNAZgWASIgNAJQAOAVAGAaQAGAcgHAbQgJAjgbAaQgTASgaAJIgEABQAKAVACAZQACAjgQAdQgPAegeATQgeASghABQgTAAgRgFQgDAPgIAQQgOAbgYARQgbAUgjADQgkADgegPQgNgHgKgIQgGANgLALQgXAYgjAJQgiAJgggKIgJgDIgCAPQgIAigWAYQgXAZgiAJIAEAPQACAMAAAMIAFABQAlAHAZAZQAaAXAJAkQAIAhgJAgQAPAAAQAEQAXAHAUAPQAdAYAMAlIABAEQAagDAcAKQAjAMAWAcQAXAeACAoQACAogUAgIgEAGIALAQQAQAcAAAhQAAAigPAbQgQAcgcASIgCABQAGAUAAAVQAAAggRAdIgFAIQAOAUAFAZIAAABQAeAIAXAVQAZAXAKAiQAKAjgMAkQgLAjgbAXQgbAWglAFIgRABQgcAAgYgMg");
	var mask_9_graphics_71 = new cjs.Graphics().p("AhkQKQgegTgRghQgQghAEgjQAEgjAXgdQATgZAbgMIgPgGQghgQgSgdQgZgnAGguQAFgdAQgYQgPgVgFgaQgDgPABgQQACggASgcQARgZAYgPQgLggAIgjQAFgYAPgUQgPgTgHgaIgGABQglACgigUQgigUgQgiQgNgbACgiQABgNAEgNQgcgBgZgNQgigRgSgeQgRgfAAgjQgWgDgVgLQgggTgQgfQgRggAEglQADglAWgcQAWgcAkgMIAGgCIgCgHQgIggAKgiQAJghAZgWQAVgUAdgIQAcgIAcAFQALACALAEIADgQQAGgaAPgVQAVgbAggNQAhgNAiAFQAfAFAaAVQAHgKAJgKQAUgYAegKQAcgKAeAFIAQADQAFgVAMgUQASgcAcgPQALgGAMgEQgMgaABgeQAAggAQgaQAPgbAbgRIACgCQgJgNgGgQQgMgfAGggQAFggAWgaQAQgTAUgLIgDgOQgDgUAKgTQAKgTASgJQARgIAVADQAVADAOAOQAOAOAEAVQADATgHAQQAKAFAIAHQAZAUANAfQAMAggFAgQgDATgIAQQgNAZgWASIgNAJQAOAVAGAaQAGAcgHAbQgJAjgbAaQgTASgaAJIgEABQAKAVACAZQACAjgQAdQgPAegeATQgeASghABQgTAAgRgFQgDAQgIAPQgOAbgYARQgbAUgjADQgkADgegPQgNgGgKgJQgGANgLALQgXAYgjAJQgiAJgggKIgJgDIgCAPQgIAigWAYQgXAZgiAJIAEAPQACAMAAAMIAFABQAlAHAZAZQAaAYAJAkQAIAhgJAfQAPAAAQAEQAXAHAUAPQAdAYAMAlIABAEQAagDAcAKQAjAMAWAcQAXAeACAoQACAogUAgIgEAGIALAQQAQAcAAAhQAAAigPAbQgQAcgcASIgCABQAGAUAAAVQAAAggRAdIgFAIQAOAUAFAZIAAABQAeAIAXAVQAZAXAKAiQAKAjgMAkQgLAjgbAXQgQANgTAHQAGAkgNAgQgOAkgfAVQgdAUglABIgEAAQgjAAgcgRg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_9_graphics_56,x:199.7644,y:157.985}).wait(1).to({graphics:mask_9_graphics_57,x:199.6871,y:167.5874}).wait(1).to({graphics:mask_9_graphics_58,x:197.8202,y:176.5115}).wait(1).to({graphics:mask_9_graphics_59,x:193.9674,y:185.1247}).wait(1).to({graphics:mask_9_graphics_60,x:186.1985,y:189.799}).wait(1).to({graphics:mask_9_graphics_61,x:176.9599,y:191.4871}).wait(1).to({graphics:mask_9_graphics_62,x:168.5958,y:196.6997}).wait(1).to({graphics:mask_9_graphics_63,x:164.3929,y:204.4835}).wait(1).to({graphics:mask_9_graphics_64,x:164.3929,y:210.7371}).wait(1).to({graphics:mask_9_graphics_65,x:164.3929,y:218.6878}).wait(1).to({graphics:mask_9_graphics_66,x:164.3929,y:223.1804}).wait(1).to({graphics:mask_9_graphics_67,x:164.3929,y:230.7047}).wait(1).to({graphics:mask_9_graphics_68,x:164.3929,y:237.999}).wait(1).to({graphics:mask_9_graphics_69,x:164.3929,y:245.115}).wait(1).to({graphics:mask_9_graphics_70,x:164.3929,y:249.7996}).wait(1).to({graphics:mask_9_graphics_71,x:164.3929,y:256.6766}).wait(94));

	// lady03
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,152.5,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(56).to({_off:false},0).wait(109));

	// pen
	this.instance_17 = new lib.手握筆();
	this.instance_17.setTransform(455.55,347.7,1,1,0,0,0,162.8,96.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({_off:false},0).wait(1).to({x:470.65,y:355.65},0).wait(1).to({x:482.8,y:363.2},0).wait(1).to({x:493.7,y:368.25},0).wait(1).to({x:508.8,y:376.65},0).wait(1).to({x:520.15,y:385.05},0).wait(1).to({x:528.1,y:368.7},0).wait(1).to({x:534,y:351.1},0).wait(1).to({y:328.9},0).wait(1).to({x:536.75,y:311},0).wait(1).to({x:531.75,y:293.4},0).wait(1).to({x:523.35,y:280.8},0).wait(1).to({x:507.8,y:270.7},0).wait(1).to({x:493.15,y:261.9},0).wait(1).to({x:477.2,y:254.35},0).wait(1).to({x:458.35},0).wait(1).to({x:443.7},0).wait(1).to({x:430.7,y:259.4},0).wait(1).to({x:418.55,y:265.3},0).wait(1).to({x:407.65,y:277.05},0).wait(1).to({x:395.95,y:291.75},0).to({_off:true},1).wait(109));

	// 圖層_17 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_35 = new cjs.Graphics().p("AgjBnQgegKgTgXQgRgWgGgcQgCgKAAgMQABggAUgcQAUgcAegLQAcgLAeAGQAfAFAXAVQAWAUAJAeQAJAegIAcQgIAdgWAWQgXAWgdAGQgLADgMAAQgRAAgTgHg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AAMCOQgYgOgQgaQgLgTgEgVQgcAFgcgJQgegKgTgYQgRgVgGgbQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAWAUQAWAUAJAfIADAPQAKgCALAAQAdAAAZAOQAYAOAOAYQAPAXACAbQACAdgOAbQgOAbgZAQQgYAPgfABIgEAAQgcAAgYgNg");
	var mask_10_graphics_37 = new cjs.Graphics().p("ABhC8QgdgKgSgXQgRgVgGgYQgOAEgOABQgeABgagOQgZgOgQgbQgLgSgEgVQgcAFgcgKQgegKgTgWQgRgWgGgcQgCgKAAgNQABggAUgcQAUgdAegKQAcgLAfAGQAfAFAXAVQAWAUAJAeIADAPQAKgBALAAQAcAAAZAOQAYANAOAYQAKAQAEARIAKgCQAdgGAdAJQAcAKAUAUQATAVAGAfQAGAegKAbQgKAcgXATQgXAUgcAFQgKACgJAAQgTAAgTgIg");
	var mask_10_graphics_38 = new cjs.Graphics().p("ACbDaQgcgLgTgWQgIgKgFgKIAAAAQgdAFgcgLQgdgKgRgXQgRgVgGgZQgNAFgQAAQgeABgagOQgZgOgQgaQgLgTgDgTQgcAFgdgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAfIADAPQAKgCALAAQAdAAAZAOQAXAOAOAYQAKAQAEARIAKgDQAdgGAdAKQAcAJAUAWQAJAKAHAMQAZgEAZAIQAdAIAUAWQAUAVAHAeQAGAegJAcQgJAcgXAUQgXAUgdAFQgJACgKAAQgTAAgUgHg");
	var mask_10_graphics_39 = new cjs.Graphics().p("ADuEFQgbgFgVgQQgVgQgMgYIgFgPIgCABQgdAFgdgLQgcgKgTgXQgIgJgFgLIAAAAQgdAFgbgKQgdgLgSgXQgRgUgGgZQgNAEgQABQgeABgagOQgZgOgQgZQgLgTgDgVQgcAFgdgKQgegKgTgXQgRgWgGgcQgCgKAAgNQABggAUgcQAUgcAegLQAcgLAfAGQAfAFAXAVQAWAUAJAeIADAPQAKgBALAAQAdAAAZAOQAYANAOAYQAKAQAEARIAKgCQAcgGAdAJQAcAKAUAVQAJALAHANQAYgFAaAIQAdAJAUAUQARASAHAYQALgCAMAAQAfAAAcASQAcASANAdQAMAdgFAhQgFAhgVAXQgVAWgbAJQgPAFgRAAQgKAAgKgBg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AEwE2QgfgDgZgTQgagUgKgdQgFgMgBgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgDAAQgcAFgdgKQgdgLgRgWQgIgKgFgKIgBAAQgdAFgcgLQgcgKgSgXQgRgVgGgYQgOAFgPAAQgfAAgZgNQgagOgPgaQgLgTgEgVQgcAGgcgKQgegKgTgYQgSgVgFgcQgCgKAAgNQABghAUgcQATgcAfgLQAcgLAfAGQAfAGAXAUQAVAUAJAfIAEAPQAKgCALAAQAdAAAZAOQAXAOAPAYQAKAQAEARIAKgDQAcgGAeAKQAbAJATAWQAKAKAGANQAZgEAaAIQAdAIAUAWQARASAHAYQALgDALAAQAgABAcARQAcASAMAdQAHAPACARQAdgDAbAOQAdAOAQAaQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_41 = new cjs.Graphics().p("AESE2QgegDgagTQgZgUgLgdQgEgMgCgNQgMABgOgDQgbgEgVgQQgVgQgMgZIgFgOIgCAAQgdAFgdgKQgbgLgTgWQgIgKgFgKIAAAAQgdAFgcgLQgdgKgSgXQgRgVgGgYQgNAFgQAAQgeAAgagNQgZgOgQgaQgLgTgDgVQgcAGgdgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAfIADAPQAKgCALAAQAdAAAZAOQAYAOAOAYQAKAQAEARIAKgDQAdgGAdAKQAcAJATAWQAJAKAHANQAZgEAZAIQAdAIAUAWQARASAHAYQALgDAMAAQAfABAcARIAHAEIABgHQAGgdAVgYQAVgXAdgJQAdgIAfAIQAfAIAUAWQAVAWAGAfQAGAfgKAcQgLAdgZATQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAPQgWALgYAAIgNgBg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AECE2QgfgDgZgTQgagUgKgdQgFgMgCgNQgMABgNgDQgbgEgVgQQgVgQgMgZIgGgOIgCAAQgdAFgbgKQgdgLgTgWQgHgKgGgKIAAAAQgdAFgcgLQgcgKgTgXQgRgVgFgYQgOAFgPAAQgfAAgZgNQgagOgPgaQgMgTgDgVQgcAGgcgKQgegKgTgYQgSgVgFgcQgCgKAAgNQABghAUgcQATgcAfgLQAcgLAfAGQAfAGAWAUQAWAUAJAfIAEAPQAKgCAKAAQAeAAAZAOQAXAOAPAYQAKAQAEARIAKgDQAcgGAdAKQAdAJATAWQAJAKAGANQAZgEAaAIQAdAIAUAWQAQASAIAYQALgDALAAQAgABAcARIAGAEIACgHQAFgdAVgYQAUgVAagJQgHgGgHgHQgUgYgFghQgFghANgcQAMgaAYgRQAYgRAcgDQAcgEAbAMQAbALARAXQARAWAEAdQAEAdgKAaQgKAagXATQgPANgSAGIALAKQAUAWAHAfQAGAfgLAcQgKAdgZATQgSAOgVAGIAGAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_43 = new cjs.Graphics().p("ADvGEQgegDgagTQgZgUgLgdQgFgNgBgMQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgCAAQgcAFgdgKQgcgLgTgWQgIgKgFgKIAAAAQgdAFgcgLQgdgKgSgXQgRgVgGgZQgOAFgPAAQgeABgagOQgZgOgQgaQgLgTgEgUQgcAGgcgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAfIADAPQAKgCALAAQAdAAAZAOQAYAOAOAYQAKAQAEARIAKgDQAdgGAdAKQAcAJAUAWQAJAKAGANQAYgEAaAHQAdAIAUAWQARASAHAYQALgDAMAAQAfABAcASIAHAEIABgHQAGgeAVgYQATgVAagJQgHgFgGgHQgVgYgFghQgEghANgcQAMgaAYgRQASgOAWgFIgMgJQgVgSgJgbQgKgcAFgbQAEgYAOgUQAOgUAVgMQAUgMAZgCQAZgCAWAIQAWAIASARQARASAJAWQAIAXgCAYQgDAZgMAVQgMAVgVAOQgSAMgTAEQAPAKALAPQARAWAEAdQAEAdgKAaQgKAagXASQgQANgSAGIALAKQAVAWAGAgQAGAfgKAcQgLAdgZATQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_44 = new cjs.Graphics().p("ADkHaQgegDgagTQgZgUgLgdQgFgMgBgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgCABQgcAEgdgKQgcgLgTgWQgIgJgFgLIAAAAQgdAFgcgLQgdgKgSgXQgRgVgGgYQgOAEgPAAQgeABgagOQgZgOgQgaQgLgSgEgVQgbAFgdgKQgegKgTgXQgRgWgGgbQgCgKAAgNQABggAUgdQAUgcAegKQAcgLAfAFQAfAGAXAUQAWAUAJAfIADAPQAKgBALgBQAdABAZAOQAYANAOAYQAKAPAEARIAKgDQAdgGAdAKQAcAKAUAVQAJALAGANQAYgFAaAIQAdAIAUAWQARASAHAYQALgDAMABQAfAAAcASIAHAFIABgIQAGgeAVgYQATgVAagJQgHgGgGgHQgVgYgFghQgEggANgcQAMgaAYgRQASgOAWgEIgMgJQgVgTgJgbQgKgcAFgbQAEgYAOgUQAOgUAUgMQgXgVgGgfQgDgLAAgTIADgWQALgsAmgYQAWgNAbgCQAbgCAYAKQAYALARAUQARAVAGAZQAGAZgGAaQgHAagRATQgMAOgQAJIABAAQARASAJAWQAIAXgCAZQgDAYgMAVQgMAVgVAOQgSAMgTAFQAPAKALAOQARAWAEAdQAEAdgKAZQgKAbgXASQgQANgSAGIALAKQAVAWAGAgQAGAfgKAcQgLAdgZATQgSAPgUAFIAFAIQAQAaAAAhQAAAfgQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_45 = new cjs.Graphics().p("ADkIwQgegDgagTQgZgUgLgdQgFgMgBgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgCAAQgcAFgdgKQgcgLgTgWQgIgJgFgLIAAAAQgdAFgcgLQgdgKgSgXQgRgVgGgYQgOAEgPAAQgeABgagOQgZgOgQgaQgLgSgEgVQgbAFgdgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgbQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAeIADAPQAKgCALAAQAdAAAZAOQAYAOAOAYQAKAQAEARIAKgDQAdgGAdAKQAcAJAUAWQAJALAGAMQAYgEAaAIQAdAIAUAWQARASAHAYQALgDAMAAQAfABAcASIAHAFIABgIQAGgeAVgYQATgVAagJQgHgGgGgHQgVgYgFghQgEghANgcQAMgaAYgRQASgNAWgEIgMgKQgVgSgJgbQgKgcAFgbQAEgYAOgUQAOgUAUgMQgXgWgGgeQgDgMAAgSIADgWQAFgXANgRQgOgEgMgHQgagPgPgbQgOgbABgeQABgNACgKQAGgYAQgTQAVgYAfgKQAggKAfAJQAfAJAVAZQAWAZAEAgQAEAfgOAfQgFAKgGAJIAOAEQAYAKARAVQARAUAGAZQAGAagGAaQgHAagRATQgMAOgQAJIABAAQARASAJAWQAIAXgCAYQgDAZgMAVQgMAVgVAOQgSAMgTAEQAPAJALAPQARAWAEAdQAEAdgKAaQgKAagXATQgQANgSAGIALAKQAVAWAGAgQAGAfgKAcQgLAdgZATQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_46 = new cjs.Graphics().p("ADkJ5QgegDgagTQgZgUgLgdQgFgMgBgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgCAAQgcAFgdgKQgcgLgTgWQgIgKgFgKIAAAAQgdAFgcgLQgdgKgSgXQgRgVgGgZQgOAFgPAAQgeABgagOQgZgOgQgaQgLgTgEgVQgbAGgdgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAfIADAPQAKgCALAAQAdAAAZAOQAYAOAOAYQAKAQAEARIAKgDQAdgGAdAKQAcAJAUAWQAJAKAGANQAYgEAaAIQAdAIAUAWQARASAHAYQALgDAMAAQAfABAcASIAHAEIABgHQAGgeAVgYQATgVAagJQgHgGgGgHQgVgYgFghQgEghANgcQAMgaAYgRQASgOAWgFIgMgJQgVgSgJgbQgKgbAFgbQAEgYAOgUQAOgUAUgMQgXgWgGgeQgDgMAAgSIADgWQAFgXANgRQgOgEgMgHQgagPgPgbQgOgbABgeQABgNACgKIADgJQgagDgWgPQgcgSgNgdQgLgYACgbQACggAUgbQAUgaAegLQAegLAgAHQAhAIAWAXQAWAXAGAiQAFAdgJAaQAJABAKADQAfAJAVAZQAWAZAEAgQAEAfgOAfQgFAKgGAIIAOAFQAYAKARAVQARAUAGAZQAGAagGAaQgHAagRATQgMAOgQAJIABAAQARASAJAWQAIAXgCAYQgDAYgMAVQgMAVgVAOQgSAMgTAEQAPAKALAPQARAWAEAdQAEAdgKAaQgKAagXATQgQANgSAGIALAKQAVAWAGAgQAGAfgKAcQgLAdgZATQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_47 = new cjs.Graphics().p("ADkKiQgegDgagUQgZgTgLgdQgFgNgBgNQgNABgNgCQgbgFgVgQQgVgQgMgYIgFgPIgCABQgcAFgdgLQgcgKgTgXQgIgJgFgLIAAAAQgdAFgcgKQgdgLgSgXQgRgUgGgZQgOAEgPABQgeABgagOQgZgOgQgaQgLgTgEgVQgbAFgdgKQgegKgTgXQgRgWgGgcQgCgKAAgNQABggAUgcQAUgcAegLQAcgLAfAGQAfAFAXAVQAWAUAJAeIADAPQAKgBALAAQAdAAAZAOQAYANAOAYQAKAQAEARIAKgCQAdgGAdAJQAcAKAUAVQAJALAGANQAYgFAaAIQAdAJAUAVQARASAHAYQALgCAMAAQAfAAAcASIAHAFIABgIQAGgeAVgXQATgWAagJQgHgGgGgHQgVgXgFghQgEghANgdQAMgaAYgRQASgNAWgFIgMgJQgVgTgJgbQgKgbAFgbQAEgXAOgVQAOgTAUgMQgXgWgGgfQgDgLAAgTIADgWQAFgWANgSQgOgDgMgIQgagPgPgbQgOgbABgdQABgOACgKIADgJQgagCgWgPQgcgSgNgeQgEgJgCgJIgQADQgeACgbgOQgcgOgPgZQgOgVgDgaQgBgaAIgYQAKgcAYgTQAYgTAdgEQAdgEAdALQAcAMARAYQANARAFAWQAYgFAZAGQAhAIAWAXQAWAXAGAhQAFAdgJAbQAJABAKACQAfAJAVAaQAWAZAEAfQAEAggOAeQgFAKgGAJIAOAFQAYAKARAUQARAVAGAZQAGAZgGAaQgHAagRAUQgMANgQAJIABABQARARAJAWQAIAXgCAYQgDAZgMAVQgMAUgVAOQgSANgTAEQAPAKALAOQARAWAEAdQAEAegKAaQgKAagXATQgQAMgSAHIALAKQAVAWAGAfQAGAfgKAdQgLAcgZAUQgSAOgUAFIAFAJQAQAaAAAgQAAAggQAaQgQAagdAOQgXALgYAAIgMAAg");
	var mask_10_graphics_48 = new cjs.Graphics().p("ADkLaQgegDgagUQgZgTgLgdQgFgNgBgNQgNABgNgCQgbgFgVgQQgVgQgMgYIgFgPIgCABQgcAFgdgLQgcgKgTgXQgIgJgFgLIAAAAQgdAFgcgKQgdgLgSgXQgRgUgGgZQgOAEgPABQgeABgagOQgZgOgQgaQgLgTgEgVQgbAFgdgKQgegKgTgXQgRgWgGgcQgCgKAAgNQABggAUgcQAUgcAegLQAcgLAfAGQAfAFAXAVQAWAUAJAeIADAPQAKgBALAAQAdAAAZAOQAYANAOAYQAKAQAEARIAKgCQAdgGAdAJQAcAKAUAVQAJALAGANQAYgFAaAIQAdAJAUAVQARASAHAYQALgCAMAAQAfAAAcASIAHAFIABgIQAGgeAVgXQATgWAagJQgHgGgGgHQgVgXgFghQgEghANgdQAMgaAYgRQASgNAWgFIgMgJQgVgTgJgbQgKgbAFgcQAEgXAOgUQAOgTAUgMQgXgWgGgfQgDgLAAgTIADgWQAFgWANgSQgOgDgMgIQgagPgPgbQgOgbABgdQABgOACgKIADgJQgagCgWgPQgcgSgNgeQgEgJgCgJIgQADQgeACgbgOQgcgOgPgZQgOgVgDgaQAAgLAAgJQgNAFgOABQgaACgZgKQgZgLgRgUQgPgRgGgWQgHgWADgWQACgYANgVQANgVAUgNQAUgNAYgEQAYgEAXAHQAWAHASAQQATAQAKAVQALAYgCAbIAAADQALgEALgBQAdgEAdALQAcAMARAYQANARAFAWQAYgFAZAGQAhAIAWAXQAWAXAGAhQAFAdgJAbQAJABAKACQAfAJAVAaQAWAZAEAfQAEAggOAeQgFAKgGAJIAOAFQAYAKARAUQARAVAGAZQAGAZgGAaQgHAagRAUQgMANgQAJIABABQARAQAJAWQAIAXgCAZQgDAZgMAVQgMAUgVAOQgSANgTAEQAPAKALAOQARAWAEAdQAEAegKAaQgKAagXATQgQAMgSAHIALAKQAVAWAGAfQAGAfgKAdQgLAcgZAUQgSAOgUAFIAFAJQAQAaAAAgQAAAggQAaQgQAagdAOQgXALgYAAIgMAAg");
	var mask_10_graphics_49 = new cjs.Graphics().p("ADkL1QgegDgagUQgZgTgLgdQgFgNgBgMQgNAAgNgCQgbgFgVgQQgVgQgMgYIgFgOIgCAAQgcAFgdgLQgcgKgTgXQgIgJgFgLIAAAAQgdAFgcgKQgdgLgSgXQgRgUgGgZQgOAEgPABQgeABgagOQgZgOgQgaQgLgTgEgVQgbAFgdgKQgegKgTgXQgRgWgGgcQgCgKAAgNQABggAUgcQAUgcAegLQAcgLAfAGQAfAFAXAVQAWAUAJAeIADAQQAKgCALAAQAdAAAZAOQAYANAOAYQAKAQAEASIAKgDQAdgGAdAJQAcAKAUAVQAJALAGANQAYgFAaAIQAdAJAUAVQARASAHAYQALgCAMAAQAfAAAcASIAHAFIABgIQAGgeAVgXQATgWAagJQgHgFgGgIQgVgXgFghQgEghANgdQAMgaAYgRQASgNAWgFIgMgJQgVgTgJgbQgKgbAFgcQAEgXAOgVQAOgTAUgLQgXgWgGgfQgDgLAAgTIADgWQAFgWANgRQgOgEgMgIQgagPgPgbQgOgbABgdQABgOACgKIADgJQgagCgWgPQgcgSgNgeQgEgIgCgJIgQACQgeACgbgOQgcgOgPgZQgOgVgDgaQAAgKAAgKQgNAFgOABQgaACgZgKQgZgLgRgUQgLgNgGgPQgYAMgcAAQgggBgagQQgbgRgNgeQgJgRgBgXQgBgRAEgPQAIggAZgXQAXgUAfgGQAggFAcALQAcALATAaQAIALAFALQAQgIASgDQAYgEAXAHQAWAHASAQQATAQAKAVQALAYgCAbIAAADQALgEALgBQAdgEAdALQAcAMARAYQANARAFAWQAYgFAZAGQAhAIAWAXQAWAXAGAhQAFAdgJAbQAJABAKACQAfAJAVAaQAWAZAEAfQAEAggOAeQgFAKgGAJIAOAFQAYAKARAUQARAVAGAZQAGAZgGAaQgHAagRAUQgMANgQAJIABAAQARARAJAWQAIAXgCAZQgDAZgMAVQgMAUgVAOQgSANgTAEQAPAKALAOQARAWAEAdQAEAegKAaQgKAagXATQgQAMgSAHIALAKQAVAWAGAfQAGAfgKAdQgLAcgZAUQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAOQgXAMgYAAIgMgBg");
	var mask_10_graphics_50 = new cjs.Graphics().p("ADkMBQgegDgagTQgZgUgLgdQgFgMgBgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgCAAQgcAFgdgKQgcgLgTgWQgIgJgFgLIAAAAQgdAFgcgLQgdgKgSgXQgRgVgGgYQgOAEgPAAQgeABgagOQgZgOgQgaQgLgSgEgVQgbAFgdgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAfIADAPQAKgCALAAQAdAAAZAOQAYAOAOAYQAKAQAEARIAKgDQAdgGAdAKQAcAJAUAWQAJALAGAMQAYgEAaAIQAdAIAUAWQARASAHAYQALgDAMAAQAfABAcASIAHAFIABgIQAGgeAVgYQATgVAagJQgHgGgGgHQgVgYgFghQgEghANgcQAMgaAYgRQASgOAWgEIgMgKQgVgSgJgbQgKgcAFgbQAEgYAOgUQAOgUAUgMQgXgUgGgfQgDgMAAgSIADgWQAFgXANgRQgOgEgMgHQgagPgPgbQgOgbABgeQABgNACgKIADgJQgagDgWgPQgcgSgNgdQgEgJgCgJIgQACQgeACgbgOQgcgOgPgYQgOgVgDgbQAAgKAAgKQgNAFgOABQgaADgZgLQgZgKgRgVQgLgMgGgPQgYAMgcgBQggAAgagRQgVgNgMgUQgIAGgJAFQgYAPgeAAQgeAAgZgPQgUgMgOgTQgOgUgFgXQgCgOAAgKQABgcAPgaQAQgZAZgOQAZgOAeABQAdAAAZAPQAWANAOAXQAWgTAegFQAggGAcALQAcAMATAZQAIALAFAMQAQgIASgDQAYgEAXAGQAWAHASAQQATAQAKAWQALAYgCAbIAAADQALgEALgCQAdgEAdAMQAcAMARAXQANASAFAWQAYgFAZAFQAhAIAWAXQAWAXAGAiQAFAdgJAaQAJABAKADQAfAJAVAZQAWAZAEAgQAEAfgOAfQgFAKgGAJIAOAEQAYAKARAVQARAUAGAZQAGAagGAaQgHAagRASQgMAOgQAJIABAAQARASAJAWQAIAXgCAYQgDAZgMAVQgMAVgVAOQgSAMgTAFQAPAKALAOQARAWAEAdQAEAdgKAaQgKAagXATQgQANgSAGIALAKQAVAWAGAgQAGAfgKAcQgLAdgZATQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_51 = new cjs.Graphics().p("AEnMBQgegDgagTQgZgUgLgdQgFgMgBgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgCAAQgdAFgdgKQgbgLgTgWQgIgJgFgLIAAAAQgdAFgcgLQgdgKgSgXQgRgVgGgYQgOAEgPAAQgeABgagOQgZgOgQgaQgLgSgEgVQgcAFgcgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAfIADAPQAKgCALAAQAdAAAZAOQAYAOAOAYQAKAQAEARIAKgDQAdgGAdAKQAbAJAUAWQAJALAGAMQAZgEAaAIQAdAIAUAWQARASAHAYQALgDAMAAQAfABAcASIAHAFIABgIQAGgeAVgYQATgVAagJQgHgGgGgHQgVgYgFghQgEghANgcQAMgaAYgRQASgOAWgEIgMgKQgVgSgJgbQgKgcAFgbQAEgYAOgUQAOgUAUgMQgXgUgGgfQgDgMAAgSIADgWQAFgXANgRQgOgEgMgHQgagPgPgbQgOgbABgeQABgNACgKIADgJQgagDgWgPQgcgSgNgdQgEgJgCgJIgQACQgeACgbgOQgcgOgPgYQgOgVgDgbQgBgKABgKQgOAFgOABQgaADgYgLQgZgKgRgVQgLgMgGgPQgYAMgcgBQggAAgagRQgVgNgMgUQgIAGgJAFQgYAPgeAAQgeAAgZgPQgNgHgKgLQgMATgTANQgUAPgZAEQggAGgfgOQgfgPgRgbQgIgNgDgMQgHgWACgXQADgXALgUQALgUATgNQATgOAWgFQAagGAbAHQAXAHAUAQIAGAGQAQgZAZgOQAZgOAeABQAdAAAZAPQAWANAOAXQAWgTAegFQAggGAcALQAcAMATAZQAIALAFAMQAQgIARgDQAYgEAXAGQAXAHASAQQATAQAKAWQALAYgCAbIAAADQAKgEAMgCQAdgEAdAMQAcAMARAXQANASAFAWQAYgFAZAFQAhAIAWAXQAWAXAGAiQAFAdgJAaQAJABAKADQAfAJAVAZQAWAZAEAgQAEAfgOAfQgFAKgGAJIAOAEQAYAKARAVQARAUAGAZQAGAagGAaQgHAagRASQgMAOgQAJIABAAQARASAJAWQAIAXgCAYQgDAZgMAVQgMAVgVAOQgSAMgTAFQAPAKALAOQARAWAEAdQAEAdgKAaQgKAagXATQgQANgSAGIALAKQAVAWAGAgQAGAfgKAcQgLAdgZATQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_52 = new cjs.Graphics().p("AFoMBQgegDgagTQgZgUgLgdQgEgMgCgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgCAAQgdAFgdgKQgcgLgTgWQgIgJgFgLIAAAAQgdAFgbgLQgdgKgSgXQgRgVgGgYQgNAEgQAAQgeABgagOQgZgOgQgaQgLgSgEgVQgbAFgdgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAfIADAPQAKgCALAAQAdAAAZAOQAYAOAOAYQAKAQAEARIAKgDQAcgGAdAKQAcAJAUAWQAJALAGAMQAZgEAaAIQAdAIAUAWQARASAHAYQALgDAMAAQAfABAcASIAHAFIABgIQAGgeAVgYQATgVAagJQgHgGgGgHQgVgYgFghQgEghANgcQAMgaAYgRQASgOAWgEIgMgKQgVgSgJgbQgKgcAFgbQAEgYAOgUQAOgUAUgMQgXgUgGgfQgDgMAAgSIADgWQAFgXANgRQgOgEgMgHQgagPgPgbQgOgbABgeQABgNACgKIADgJQgZgDgXgPQgcgSgNgdQgEgJgCgJIgQACQgeACgbgOQgcgOgPgYQgOgVgDgbQgBgKABgKQgOAFgOABQgaADgZgLQgZgKgRgVQgLgMgFgPQgYAMgcgBQggAAgagRQgVgNgMgUQgIAGgJAFQgYAPgeAAQgeAAgZgPQgNgHgKgLQgMATgTANQgUAPgZAEQgbAFgbgKQgLASgRANQgZATgeADQgfADgcgOQgdgOgQgZQgHgMgEgLQgHgTABgTIACgUQAHgeAVgXQAWgXAdgIQAegIAeAJIAFACQALgTASgNQATgOAWgFQAagGAbAHQAXAHAUAQIAGAGQAQgZAZgOQAZgOAeABQAdAAAZAPQAWANAOAXQAXgTAdgFQAggGAcALQAbAMATAZQAIALAFAMQAQgIASgDQAYgEAXAGQAXAHASAQQATAQAKAWQALAYgCAbIAAADQALgEALgCQAdgEAdAMQAcAMARAXQANASAFAWQAYgFAZAFQAhAIAWAXQAWAXAGAiQAFAdgJAaQAJABAKADQAfAJAVAZQAWAZAEAgQAEAfgOAfQgFAKgGAJIAOAEQAYAKARAVQARAUAGAZQAGAagGAaQgHAagRASQgMAOgQAJIABAAQARASAJAWQAIAXgCAYQgDAZgMAVQgMAVgVAOQgSAMgTAFQAPAKALAOQARAWAEAdQAEAdgKAaQgKAagXATQgQANgSAGIALAKQAVAWAGAgQAGAfgKAcQgLAdgZATQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_53 = new cjs.Graphics().p("AGtMBQgegDgagTQgZgUgLgdQgFgMgBgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgCAAQgdAFgdgKQgcgLgTgWQgIgJgFgLIAAAAQgdAFgcgLQgdgKgRgXQgRgVgGgYQgOAEgPAAQgeABgagOQgZgOgQgaQgLgSgEgVQgbAFgdgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAfIADAPQAKgCALAAQAdAAAZAOQAXAOAOAYQAKAQAEARIAKgDQAdgGAdAKQAcAJAUAWQAJALAGAMQAZgEAaAIQAdAIAUAWQARASAHAYQALgDAMAAQAfABAcASIAHAFIABgIQAGgeAVgYQATgVAagJQgHgGgGgHQgVgYgFghQgEghANgcQAMgaAYgRQASgOAWgEIgMgKQgVgSgJgbQgKgcAFgbQAEgYAOgUQAOgUAUgMQgXgUgGgfQgDgMAAgSIADgWQAFgXANgRQgOgEgMgHQgagPgPgbQgOgbABgeQABgNACgKIADgJQgagDgWgPQgcgSgNgdQgEgJgCgJIgQACQgeACgbgOQgcgOgPgYQgOgVgDgbQgBgKABgKQgOAFgOABQgaADgZgLQgZgKgRgVQgLgMgGgPQgYAMgcgBQgfAAgagRQgVgNgMgUQgIAGgJAFQgYAPgeAAQgeAAgZgPQgNgHgKgLQgMATgTANQgUAPgZAEQgbAFgbgKQgLASgRANQgZATgeADQgZADgXgJIgHAQQgPAZgbAPQgcAPgdgBQgdgBgagRQgagRgNgaQgGgMgCgJQgCgIgBgQQAAgTADgNQACgJAGgMQANgaAagRQAagRAdgBQAVAAAUAHQAIgTAOgQQAWgXAdgIQAegIAeAJIAFACQAKgTATgNQATgOAWgFQAagGAbAHQAXAHAUAQIAGAGQAQgZAZgOQAZgOAeABQAdAAAZAPQAWANAOAXQAWgTAegFQAfgGAcALQAcAMATAZQAIALAFAMQAQgIASgDQAYgEAXAGQAXAHASAQQATAQAKAWQALAYgCAbIAAADQALgEALgCQAdgEAdAMQAcAMARAXQANASAFAWQAYgFAZAFQAhAIAWAXQAWAXAGAiQAFAdgJAaQAJABAKADQAfAJAVAZQAWAZAEAgQAEAfgOAfQgFAKgGAJIAOAEQAYAKARAVQARAUAGAZQAGAagGAaQgHAagRASQgMAOgQAJIABAAQARASAJAWQAIAXgCAYQgDAZgMAVQgMAVgVAOQgSAMgTAFQAPAKALAOQARAWAEAdQAEAdgKAaQgKAagXATQgQANgSAGIALAKQAVAWAGAgQAGAfgKAcQgLAdgZATQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_54 = new cjs.Graphics().p("AHXMBQgegDgagTQgZgUgLgdQgEgMgCgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgFgOIgCAAQgdAFgdgKQgcgLgTgWQgIgJgFgLIAAAAQgdAFgcgLQgdgKgSgXQgRgVgGgYQgNAEgPAAQgeABgagOQgZgOgQgaQgLgSgEgVQgbAFgdgKQgegKgTgYQgRgVgGgcQgCgKAAgNQABghAUgcQAUgcAegLQAcgLAfAGQAfAGAXAUQAWAUAJAfIADAPQAKgCALAAQAcAAAZAOQAYAOAOAYQAKAQAEARIAKgDQAdgGAdAKQAcAJAUAWQAJALAGAMQAZgEAaAIQAdAIAUAWQARASAHAYQALgDAMAAQAfABAcASIAHAFIABgIQAGgeAVgYQATgVAagJQgHgGgGgHQgVgYgFghQgEghANgcQAMgaAYgRQASgOAWgEIgMgKQgVgSgJgbQgKgcAFgbQAEgYAOgUQAOgUAUgMQgXgUgGgfQgDgMAAgSIADgWQAFgXANgRQgOgEgMgHQgagPgPgbQgOgbABgeQABgNACgKIADgJQgZgDgXgPQgcgSgNgdQgEgJgCgJIgQACQgeACgbgOQgcgOgPgYQgOgVgDgbQgBgKABgKQgOAFgOABQgaADgZgLQgZgKgRgVQgLgMgGgPQgYAMgcgBQggAAgZgRQgVgNgMgUQgIAGgJAFQgYAPgeAAQgeAAgZgPQgNgHgKgLQgMATgTANQgUAPgZAEQgbAFgbgKQgLASgRANQgZATgeADQgZADgXgJIgHAQQgPAZgbAPQgOAHgNAEQgBAKgCAKQgHAhgXAWQgSASgZAIQgZAIgZgEQgZgDgVgQQgWgPgMgWQgMgWgBgbQgBgaALgXQANgdAdgSQAQgJAQgFQABgOACgLQACgJAGgMQANgaAagRQAagRAdgBQAVAAAUAHQAIgTAOgQQAWgXAdgIQAegIAeAJIAFACQALgTASgNQATgOAWgFQAagGAbAHQAXAHAUAQIAGAGQAQgZAZgOQAZgOAeABQAdAAAZAPQAWANAOAXQAWgTAdgFQAggGAcALQAcAMATAZQAIALAFAMQAQgIASgDQAYgEAXAGQAXAHASAQQATAQAKAWQALAYgCAbIAAADQALgEALgCQAdgEAdAMQAcAMARAXQANASAFAWQAYgFAZAFQAhAIAWAXQAWAXAGAiQAFAdgJAaQAJABAKADQAfAJAVAZQAWAZAEAgQAEAfgOAfQgFAKgGAJIAOAEQAYAKARAVQARAUAGAZQAGAagGAaQgHAagRASQgMAOgQAJIABAAQARASAJAWQAIAXgCAYQgDAZgMAVQgMAVgVAOQgSAMgTAFQAPAKALAOQARAWAEAdQAEAdgKAaQgKAagXATQgQANgSAGIALAKQAVAWAGAgQAGAfgKAcQgLAdgZATQgSAOgUAGIAFAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");
	var mask_10_graphics_55 = new cjs.Graphics().p("AIMMBQgfgDgZgTQgagUgKgdQgFgMgBgNQgNABgNgDQgbgEgVgQQgVgQgMgZIgGgOIgCAAQgdAFgcgKQgdgLgTgWQgHgJgFgLIgBAAQgdAFgcgLQgcgKgTgXQgRgVgFgYQgOAEgPAAQgfABgYgOQgagOgPgaQgMgSgDgVQgcAFgcgKQgegKgTgYQgSgVgFgcQgCgKAAgNQABghAUgcQATgcAfgLQAcgLAfAGQAfAGAWAUQAVAUAJAfIAEAPQAKgCAKAAQAeAAAZAOQAXAOAPAYQAKAQAEARIAKgDQAcgGAdAKQAdAJATAWQAKALAGAMQAZgEAaAIQAdAIAUAWQARASAHAYQALgDALAAQAgABAcASIAHAFIABgIQAFgeAVgYQAUgVAagJQgHgGgHgHQgUgYgFghQgFghANgcQAMgaAYgRQATgOAWgEIgNgKQgUgSgKgbQgKgcAFgbQAEgYAPgUQAOgUATgMQgWgUgHgfQgDgMAAgSIADgWQAGgXANgRQgOgEgNgHQgZgPgPgbQgPgbABgeQABgNADgKIADgJQgagDgXgPQgcgSgNgdQgDgJgDgJIgQACQgdACgbgOQgcgOgQgYQgOgVgCgbQgBgKABgKQgOAFgPABQgaADgZgLQgZgKgRgVQgKgMgHgPQgXAMgdgBQggAAgagRQgUgNgNgUQgHAGgIAFQgZAPgeAAQgdAAgZgPQgNgHgLgLQgLATgTANQgVAPgYAEQgcAFgagKQgLASgSANQgZATgeADQgYADgXgJIgIAQQgPAZgbAPQgNAHgOAEQAAAKgCAKQgHAhgXAWQgSASgZAIQgRAFgQABQgGAVgPASQgTAYgbAKQgcALgegGQgfgFgWgTQgWgUgKgdQgJgdAGgdQAGgaASgWQATgWAagJQASgHATAAQADgIADgJQAOgdAcgSQAQgJARgFQAAgOADgLQACgJAGgMQANgaAagRQAZgRAegBQAVAAAUAHQAHgTAPgQQAWgXAdgIQAdgIAfAJIAEACQALgTASgNQATgOAWgFQAagGAbAHQAYAHATAQIAHAGQAPgZAZgOQAZgOAeABQAeAAAYAPQAWANAOAXQAWgTAegFQAfgGAcALQAdAMATAZQAIALAFAMQAQgIASgDQAYgEAXAGQAWAHATAQQATAQAJAWQALAYgBAbIAAADQAKgEAMgCQAdgEAcAMQAdAMARAXQANASAFAWQAYgFAZAFQAhAIAWAXQAVAXAGAiQAGAdgKAaQAKABAJADQAfAJAWAZQAWAZAEAgQAEAfgOAfQgFAKgGAJIANAEQAYAKASAVQARAUAGAZQAFAagGAaQgGAagRASQgMAOgQAJIAAAAQASASAIAWQAIAXgCAYQgCAZgMAVQgNAVgUAOQgSAMgUAFQAPAKALAOQARAWAEAdQAEAdgKAaQgKAagXATQgPANgSAGIALAKQAUAWAHAgQAGAfgLAcQgKAdgZATQgSAOgVAGIAGAIQAQAaAAAgQAAAggQAaQgQAagdAPQgXALgYAAIgMgBg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_10_graphics_35,x:254.5705,y:179.4934}).wait(1).to({graphics:mask_10_graphics_36,x:260.9875,y:184.0475}).wait(1).to({graphics:mask_10_graphics_37,x:267.9911,y:188.0998}).wait(1).to({graphics:mask_10_graphics_38,x:273.8613,y:191.0248}).wait(1).to({graphics:mask_10_graphics_39,x:280.1714,y:194.7867}).wait(1).to({graphics:mask_10_graphics_40,x:286,y:199.6291}).wait(1).to({graphics:mask_10_graphics_41,x:288.9591,y:199.6291}).wait(1).to({graphics:mask_10_graphics_42,x:290.6321,y:199.6291}).wait(1).to({graphics:mask_10_graphics_43,x:292.495,y:191.84}).wait(1).to({graphics:mask_10_graphics_44,x:293.5815,y:183.2002}).wait(1).to({graphics:mask_10_graphics_45,x:293.5815,y:174.6147}).wait(1).to({graphics:mask_10_graphics_46,x:293.5815,y:167.333}).wait(1).to({graphics:mask_10_graphics_47,x:293.5815,y:163.2834}).wait(1).to({graphics:mask_10_graphics_48,x:293.5815,y:157.6838}).wait(1).to({graphics:mask_10_graphics_49,x:293.5815,y:154.9683}).wait(1).to({graphics:mask_10_graphics_50,x:293.5815,y:153.7067}).wait(1).to({graphics:mask_10_graphics_51,x:286.8986,y:153.7067}).wait(1).to({graphics:mask_10_graphics_52,x:280.3753,y:153.7067}).wait(1).to({graphics:mask_10_graphics_53,x:273.4815,y:153.7067}).wait(1).to({graphics:mask_10_graphics_54,x:269.2772,y:153.7067}).wait(1).to({graphics:mask_10_graphics_55,x:264.0154,y:153.7067}).wait(110));

	// lady02
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,82.95,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(35).to({_off:false},0).wait(130));

	// pen
	this.instance_19 = new lib.手握筆();
	this.instance_19.setTransform(302.6,390.15,1,1,0,0,0,162.8,96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:286.75,y:369.15},0).wait(1).to({x:278.05,y:351.1},0).wait(1).to({x:273.85,y:334.75},0).wait(1).to({y:316.7},0).wait(1).to({x:277.15,y:297.8},0).wait(1).to({x:290.15,y:284.4},0).wait(1).to({x:300.65,y:274.35},0).wait(1).to({x:314.9,y:268.05},0).wait(1).to({x:334.65,y:263.85},0).wait(1).to({x:352.25,y:268.5},0).wait(1).to({x:368.6,y:273.1},0).wait(1).to({x:379.9,y:281.05},0).wait(1).to({x:390.4,y:292.4},0).wait(1).to({x:402.95,y:303.7},0).wait(1).to({x:422.25,y:331.8},0).wait(1).to({x:432.75,y:347.3},0).wait(1).to({x:444.1,y:360.7},0).wait(1).to({x:454.55,y:373.4},0).wait(1).to({x:460,y:388.5},0).wait(1).to({x:471.3,y:400.65},0).wait(1).to({x:482.65,y:413.25},0).wait(1).to({x:491.5,y:426.25},0).wait(1).to({x:504.1,y:436.75},0).wait(1).to({x:515.85,y:446.85},0).wait(1).to({x:528.85,y:458.2},0).wait(1).to({x:542.3,y:469.95},0).wait(1).to({x:560.75,y:477.95},0).wait(1).to({x:576.7,y:472.1},0).wait(1).to({x:580.45,y:456.6},0).wait(1).to({x:575,y:445.2},0).wait(1).to({x:567.45,y:430.1},0).wait(1).to({x:558.2,y:419},0).wait(1).to({x:546.45,y:406.85},0).wait(1).to({x:538.9,y:392.6},0).to({_off:true},1).wait(130));

	// 圖層_14 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AgFBtQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgZQAGgbASgWQATgXAagJQAagKAbAEQAdAEAWARQAXARALAaQAMAbgDAaQgDAcgQAYQgRAYgZAMQgWALgZAAIgGAAg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AA3C0QgdgBgXgPQgMgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgQgKgaQgKgaADgbQACgXAMgUQAMgUATgOQATgNAYgEQAXgFAWAFQAXAFASAOQATAPALAUQANAYAAAeQAAARgFAQQAQgDAQADQAdAEAWARQAXAQALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgWAMgaAAIgGgBg");
	var mask_11_graphics_2 = new cjs.Graphics().p("ABHELQgdgBgYgPQgMgIgJgKQgRgTgIgaQgHgZAFgaIADgNQgXAEgXgHQgYgGgSgQQgUgRgLgaQgKgaADgbQADgWAMgUQAGgLAJgIQgMgGgLgJQgTgQgKgWQgLgYABgaQABgdAQgaQARgaAagNQAbgNAeACQAfACAYARQAUAOANAXQANAYAAAZQABAagLAYQgIARgMAMQAKAFAIAGQATAPALAUQAOAYgBAdQAAARgFAQQAQgDARADQAdAEAWARQAWARAMAaQALAbgDAbQgCAcgRAYQgQAYgZAMQgWALgaAAIgGAAg");
	var mask_11_graphics_3 = new cjs.Graphics().p("ABcFjQgdgBgYgPQgMgIgKgKQgRgTgHgaQgHgZAFgaIADgNQgXAEgXgHQgYgGgSgQQgUgRgLgaQgKgaADgbQADgXAMgUQAGgLAJgJQgMgGgLgIQgTgPgKgWQgLgYABgaQABgdAQgaIALgOIgHgDQgcgOgRgZQgZgmAJgsQAGgeAWgXQAVgXAdgIQAdgIAfAJQAeAJAVAWQATAWAGAfQAGAfgLAcQgGATgNAQQALAEAKAIQAVAOANAXQANAYAAAZQABAagLAYQgIAQgLAMQAJAFAJAGQASAPALAUQAOAYgBAeQAAARgFAQQAQgDARADQAdAEAWARQAWARAMAaQALAbgDAbQgCAcgQAYQgRAYgZAMQgWALgaAAIgGAAg");
	var mask_11_graphics_4 = new cjs.Graphics().p("ABgG+QgdgCgYgPQgMgIgJgKQgSgSgHgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgKgaQgLgaADgaQADgXAMgUQAGgLAJgJQgMgGgLgJQgTgQgKgVQgLgZABgZQABgdAQgaIALgOIgGgDQgdgNgRgZQgZgnAJgsQAHgdAVgXQAHgIAIgGQgNgHgKgKQgRgSgIgaQgIgaAEgaQAGgcAUgYQATgXAcgJQAcgKAeAHQAeAGAVAUQAWAUAIAdQAJAdgHAdQgFAcgWAWIgNAMQANAIALALQATAXAGAfQAGAfgLAcQgHATgMAPQAKAFALAHQAVAPANAXQANAXABAZQAAAagLAYQgIAQgLANQAJAEAJAHQASAOAMAUQANAZgBAdQAAASgEAPQAQgCAQACQAdAEAWARQAWARAMAbQALAagCAcQgDAcgQAXQgRAYgZANQgWALgaAAIgGAAg");
	var mask_11_graphics_5 = new cjs.Graphics().p("ABgITQgdgCgYgPQgMgIgJgKQgSgSgHgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgKgaQgLgaADgaQADgXAMgUQAGgLAJgJQgMgGgLgJQgTgQgKgVQgLgZABgZQABgeAQgaIALgOIgGgDQgdgNgRgYQgZgnAJgsQAHgdAVgXQAHgIAIgGQgNgHgKgKQgRgSgIgaQgIgaAEgaQAGgcAUgYQAQgSAUgKQgHgJgFgLQgOgbABgbQACgfASgbQASgaAcgNQAcgMAgAFQAgAFAWAUQAYAUAJAeQAKAfgIAeQgJAggaAXQgLAKgOAGQAOARAGAWQAJAdgHAdQgFAcgWAWIgNAMQANAIALALQATAXAGAfQAGAfgLAcQgHATgMAOQAKAFALAHQAVAPANAXQANAXABAaQAAAagLAYQgIAQgLANQAJAEAJAHQASAOAMAUQANAZgBAdQAAASgEAPQAQgCAQACQAdAEAWARQAWARAMAbQALAagCAcQgDAcgQAXQgRAYgZANQgWALgaAAIgGAAg");
	var mask_11_graphics_6 = new cjs.Graphics().p("ABgJOQgdgBgYgPQgMgIgJgKQgSgTgHgaQgHgZAFgaIADgNQgXAEgXgHQgYgGgSgQQgUgRgKgaQgLgaADgbQADgXAMgUQAGgLAJgIQgMgGgLgJQgTgQgKgWQgLgYABgaQABgdAQgaIALgOIgGgDQgdgOgRgZQgZgmAJgrQAHgeAVgXQAHgHAIgGQgNgHgKgKQgRgTgIgaQgIgZAEgaQAGgdAUgXQAQgTAUgJQgHgJgFgLQgOgbABgcQACgeASgbQASgbAcgMQANgGANgCQgBgQADgPQAFgdAUgXQAUgXAcgJQAagJAeAGQAeAGAVAUQAWATAJAdQAJAdgHAdQgHAcgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgLALgOAGQAOARAGAVQAJAegHAcQgFAdgWAWIgNALQANAIALAMQATAWAGAfQAGAegLAcQgHAUgMAPQAKAEALAIQAVAOANAXQANAYABAZQAAAagLAYQgIARgLAMQAJAFAJAGQASAPAMAUQANAYgBAeQAAARgEAQQAQgDAQADQAdAEAWARQAWARAMAaQALAbgCAbQgDAcgQAYQgRAYgZAMQgWALgaAAIgGAAg");
	var mask_11_graphics_7 = new cjs.Graphics().p("ABGKNQgdgCgYgPQgMgIgJgKQgRgSgIgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgLgaQgKgaADgaQADgXAMgUQAGgLAJgJQgMgGgLgJQgTgQgKgVQgLgZABgZQABgeAQgaIALgOIgHgDQgcgNgRgZQgZgnAJgsQAGgdAWgWQAHgIAHgFQgMgIgKgKQgSgSgHgaQgIgaAEgaQAGgcATgYQAQgSAVgKQgHgJgGgLQgNgbABgbQABgfATgbQASgaAcgNQANgFANgCQgCgQADgQQAGgcAUgXQAUgXAbgKQAagIAZAFQgCgTAEgVQAHggAZgZQAagYAhgFQAhgFAfAQQAgAQAQAdQAQAdgEAkQgDAjgWAZQgWAZgjAJQgWAFgVgDQADAVgFAUQgHAdgUAWQgVAWgcAIIgNADQACAUgFATQgJAggZAXQgMAKgOAGQAOARAHAWQAJAdgHAdQgHAcgVAWIgNAMQANAIALALQAUAWAGAfQAGAfgLAcQgHATgNAPQALAFALAHQAUAPANAXQANAXAAAaQABAagLAYQgIAQgMANQAKAEAIAHQATAOALAUQAOAZgBAdQAAASgFAPQAQgCARACQAdAEAWARQAWARAMAbQALAagDAcQgCAcgRAXQgQAYgZANQgWALgaAAIgGAAg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AgPKdQgdgBgYgPQgMgIgKgKQgRgTgIgaQgHgZAFgaIADgNQgXAEgXgHQgYgGgSgQQgUgRgLgaQgKgaADgbQADgXAMgUQAGgKAIgJQgMgGgKgJQgTgQgKgWQgLgYABgaQABgdAQgaIALgOIgHgDQgcgOgRgZQgZgmAJgsQAGgeAWgWQAGgHAIgGQgMgHgKgKQgSgTgHgaQgIgZAEgaQAGgdATgXQAQgTAVgJQgHgJgGgLQgNgbABgcQABgeATgbQASgbAcgMQAMgGAOgCQgCgPADgQQAGgdAUgXQAUgXAbgJQAagIAaAEQgDgTAFgUQAHghAZgYQAagYAggFQAhgFAfAQQAOAHALAJQAGgLAIgKQAXgdAkgJQAbgGAcAHQAcAIAUAUQAUATAIAcQAIAcgGAcQgHAbgTAVQgUAWgaAJQgbAIgcgFQgdgFgVgSIgEgDQgGANgJALQgWAZgjAJQgWAGgWgDQAEAUgFAVQgHAcgTAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgNALgNAGQAOARAHAVQAJAegHAcQgHAdgVAWIgOALQAOAIALAMQAUAVAGAfQAGAfgLAcQgHAUgOAPQAMAEALAIQAVAOANAXQANAYAAAZQABAagLAYQgIARgMAMQAJAFAJAGQATAPALAUQAOAYgBAeQAAARgFAQQAQgDAQADQAdAEAWARQAWARAMAaQALAbgDAbQgCAcgRAYQgQAYgZAMQgXAMgYAAIgGgBg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AhhK3QgdgCgYgPQgMgIgKgKQgRgSgIgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgLgaQgKgaADgaQADgXAMgUQAGgLAJgJQgMgGgLgJQgTgQgKgVQgLgZABgZQABgeAQgaIALgOIgHgDQgcgNgRgZQgZgnAJgsQAGgdAWgXQAHgIAHgFQgMgHgKgKQgSgSgHgaQgIgaAEgaQAGgcATgYQAQgSAVgKQgHgJgGgLQgNgbABgbQABgfATgbQASgaAcgNQANgFANgCQgCgQADgQQAGgcAUgXQAUgXAbgKQAagIAaAFQgCgTAEgVQAHggAZgZQAagYAhgFQAhgFAeAQQAOAHALAKQAGgLAIgLQAXgdAkgIQAbgHAcAIQASAFAPAKIACgHQAMgaAZgRQAYgRAdgDQAdgCAbANQAbAMAQAYQARAXADAeQACAegMAaQgKAWgTAQQgUAQgYAGQgYAGgYgFQgWgFgSgLQgHASgOAPQgUAVgaAJQgbAJgcgFQgdgGgVgSIgDgCQgGANgKALQgWAZgiAJQgWAFgVgDQADAVgFAUQgHAdgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgMAKgOAGQAOARAHAWQAJAdgHAdQgHAcgVAWIgNALQANAIALALQAUAXAGAfQAGAfgLAcQgHATgNAPQALAFALAHQAVAPANAXQANAXAAAaQABAagLAYQgIAQgMANQAKAEAIAHQATAOALAUQAOAZgBAdQAAASgFAPQAQgCARACQAdAEAWARQAWARALAbQALAagDAcQgCAcgQAXQgQAYgZANQgWALgaAAIgGAAg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AirK3QgdgCgXgPQgNgIgJgKQgSgSgHgaQgIgaAFgZIAEgNQgXADgYgGQgYgHgSgQQgUgRgKgaQgKgaADgaQACgXAMgUQAHgLAIgJQgMgGgLgJQgTgQgKgVQgKgZAAgZQABgeARgaIALgOIgHgDQgdgNgRgZQgZgnAKgsQAGgdAVgXQAHgIAIgFQgMgHgKgKQgSgSgIgaQgIgaAFgaQAFgcAUgYQAQgSAVgKQgIgJgFgLQgOgbACgbQABgfASgbQASgaAcgNQANgFAOgCQgCgQADgQQAFgcAUgXQAUgXAcgKQAZgIAbAFQgDgTAEgVQAHggAagZQAZgYAhgFQAhgFAgAQQAOAHALAKQAFgLAIgLQAYgdAjgIQAbgHAcAIQARAFAPAKIADgHQAMgaAYgRQAZgRAcgDQAdgCAbANQAbAMARAYIACACQATgMAXgDQAegDAcANQAdANARAZQAUAegBAiQgBAigVAdQgOATgWAMQgWAMgYABQgZABgXgJQgXgKgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgLQgHASgOAPQgTAVgbAJQgaAJgdgFQgcgGgVgSIgDgCQgGANgKALQgWAZgiAJQgXAFgVgDQADAVgEAUQgHAdgVAWQgVAWgcAIIgNADQACAUgFATQgIAggbAXQgMAKgNAGQAOARAGAWQAJAdgHAdQgGAcgWAWIgNALQAOAIAKALQAUAXAGAfQAGAfgKAcQgHATgOAPQAMAFAKAHQAVAPANAXQANAXABAaQABAagMAYQgHAQgMANQAJAEAJAHQATAOALAUQANAZAAAdQAAASgFAPQAQgCAQACQAdAEAWARQAXARALAbQAMAagDAcQgDAcgQAXQgRAYgZANQgWALgaAAIgGAAg");
	var mask_11_graphics_11 = new cjs.Graphics().p("Aj7K3QgdgCgXgPQgNgIgJgKQgSgSgHgaQgIgaAFgZIAEgNQgXADgYgGQgYgHgSgQQgUgRgKgaQgKgaADgaQACgXAMgUQAHgLAIgJQgMgGgLgJQgTgQgKgVQgKgZAAgZQABgeARgaIAKgOIgGgDQgdgNgRgZQgZgnAKgsQAGgdAVgXQAHgIAIgFQgMgHgKgKQgSgSgIgaQgIgaAFgaQAFgcAUgYQAQgSAVgKQgIgJgFgLQgOgbACgbQABgfASgbQASgaAcgNQANgFANgCQgBgQADgQQAFgcAUgXQAUgXAcgKQAZgIAbAFQgDgTAEgVQAHggAagZQAZgYAhgFQAhgFAgAQQAOAHALAKQAFgLAIgLQAYgdAkgIQAbgHAbAIQARAFAPAKIADgHQAMgaAYgRQAZgRAcgDQAdgCAbANQAbAMARAYIABACQAUgMAXgDQAegDAcANQAdANARAZQAGAJAEAKIANgIQAegOAjAGQAiAGAYAXQAYAXAHAjQAGAigNAeQgNAfgeASQgdATgigCQglgBgegaQgUgRgJgWIgHAEQgWAMgYABQgZABgXgJQgXgKgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgLQgHASgOAPQgTAVgbAJQgZAJgdgFQgcgGgWgSIgDgCQgGANgKALQgWAZgiAJQgXAFgVgDQADAVgEAUQgHAdgVAWQgVAWgcAIIgNADQACAUgFATQgIAggbAXQgMAKgNAGQANARAHAWQAJAdgHAdQgGAcgWAWIgNALQAOAIAKALQAUAXAGAfQAGAfgKAcQgHATgOAPQAMAFAKAHQAVAPANAXQANAXABAaQABAagMAYQgHAQgMANQAJAEAJAHQATAOALAUQANAZAAAdQAAASgFAPQAQgCAQACQAdAEAWARQAXARALAbQAMAagDAcQgDAcgQAXQgRAYgZANQgWALgaAAIgGAAg");
	var mask_11_graphics_12 = new cjs.Graphics().p("Ak5K3QgdgCgYgPQgMgIgKgKQgRgSgIgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgLgaQgKgaADgaQADgXAMgUQAGgLAIgJQgMgGgKgJQgTgQgKgVQgLgZABgZQABgeAQgaIALgOIgHgDQgcgNgRgZQgZgnAJgsQAGgdAWgXQAHgIAHgFQgMgHgKgKQgSgSgHgaQgIgaAEgaQAGgcATgYQAQgSAVgKQgHgJgGgLQgNgbABgbQABgfATgbQASgaAcgNQAMgFAOgCQgCgQADgQQAGgcAUgXQAUgXAbgKQAagIAaAFQgDgTAFgVQAHggAZgZQAagYAhgFQAhgFAfAQQAOAHALAKQAGgLAIgLQAXgdAkgIQAbgHAcAIQASAFAOAKIADgHQAMgaAYgRQAYgRAdgDQAdgCAbANQAbAMAQAYIACACQAUgMAWgDQAegDAdANQAcANARAZQAGAJAEAKIAOgIQAegOAiAGQAjAGAXAXQAXAXAIAhQAKgCAKAAQAZAAAWALQAWALAPAUQAQAUAFAXQAFAWgFAXQgEAWgMATQgRAZgcANQgcANgegDQgXgCgWgNQgVgNgNgUQgMgRgEgVQgLACgMgBQgmgBgdgaQgUgRgJgWIgIAEQgWAMgYABQgYABgXgJQgXgKgQgSIgLgNQgNAIgQAEQgYAGgYgFQgWgFgSgLQgHASgNAPQgUAVgaAJQgbAJgcgFQgdgGgVgSIgEgCQgFANgKALQgWAZgjAJQgWAFgWgDQAEAVgFAUQgHAdgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgMAKgOAGQAOARAHAWQAJAdgHAdQgHAcgVAWIgOALQAOAIALALQAUAXAGAfQAGAfgLAcQgHATgOAPQAMAFALAHQAVAPANAXQANAXAAAaQABAagLAYQgIAQgMANQAKAEAIAHQATAOALAUQAOAZgBAdQAAASgFAPQAQgCARACQAdAEAWARQAWARAMAbQALAagDAcQgCAcgRAXQgQAYgZANQgXALgZAAIgGAAg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AmAK3QgdgCgYgPQgMgIgKgKQgRgSgIgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgLgaQgKgaADgaQADgXAMgUQAGgLAIgJQgMgGgKgJQgTgQgKgVQgLgZABgZQABgeAQgaIALgOIgHgDQgcgNgRgZQgZgnAJgsQAGgdAWgXQAGgIAIgFQgMgHgKgKQgSgSgHgaQgIgaAEgaQAGgcATgYQAQgSAVgKQgIgJgFgLQgNgbABgbQABgfATgbQASgaAcgNQAMgFAOgCQgCgQADgQQAGgcAUgXQAUgXAbgKQAZgIAbAFQgDgTAFgVQAHggAZgZQAagYAhgFQAhgFAfAQQAOAHALAKQAFgLAJgLQAXgdAkgIQAbgHAcAIQASAFAOAKIADgHQAMgaAZgRQAYgRAdgDQAcgCAbANQAbAMAQAYIACACQATgMAXgDQAegDAdANQAcANARAZQAGAJAEAKIAOgIQAegOAiAGQAjAGAXAXQAXAXAIAhQAJgCALAAQAZAAAWALQAWALAPAUQAQAUAFAXQADAOgBAPQAigMAlAOQAcAKATAYQAUAYAEAdQAEAdgMAcQgLAdgYARQgXASgfADQgfAEgbgNQgagMgSgZQgRgagCgdIgBgMQgVAHgXgCQgXgCgWgNQgVgNgNgUQgMgRgEgVQgMACgLgBQgmgBgdgaQgUgRgJgWIgIAEQgWAMgYABQgYABgXgJQgXgKgQgSIgLgNQgOAIgPAEQgYAGgXgFQgXgFgRgLQgIASgNAPQgUAVgaAJQgbAJgcgFQgdgGgVgSIgEgCQgGANgJALQgWAZgjAJQgXAFgVgDQAEAVgFAUQgHAdgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgNAKgNAGQAOARAHAWQAJAdgHAdQgHAcgVAWIgOALQAOAIALALQAUAXAGAfQAGAfgLAcQgHATgOAPQAMAFALAHQAVAPANAXQANAXAAAaQABAagLAYQgIAQgMANQAJAEAJAHQATAOALAUQAOAZgBAdQAAASgFAPQAQgCARACQAdAEAWARQAWARAMAbQALAagDAcQgCAcgRAXQgQAYgZANQgXALgZAAIgGAAg");
	var mask_11_graphics_14 = new cjs.Graphics().p("AmxK3QgdgCgXgPQgNgIgJgKQgSgSgHgaQgIgaAFgZIAEgNQgXADgYgGQgYgHgSgQQgUgRgKgaQgKgaADgaQACgXAMgUQAHgLAIgJQgMgGgLgJQgTgQgKgVQgKgZAAgZQABgeARgaIALgOIgHgDQgdgNgRgZQgZgnAKgsQAGgdAVgXQAHgIAIgFQgMgHgKgKQgSgSgIgaQgIgaAFgaQAFgcAUgYQAQgSAVgKQgIgJgFgLQgOgbACgbQABgfASgbQASgaAcgNQANgFAOgCQgCgQADgQQAFgcAUgXQAUgXAcgKQAZgIAbAFQgDgTAEgVQAHggAagZQAZgYAhgFQAhgFAgAQQAOAHALAKQAFgLAIgLQAYgdAkgIQAbgHAcAIQASAFAOAKIADgHQAMgaAYgRQAZgRAcgDQAdgCAaANQAbAMARAYIACACQATgMAXgDQAegDAcANQAdANARAZQAGAJAEAKIANgIQAegOAjAGQAiAGAYAXQAXAXAHAhQAKgCAKAAQAaAAAVALQAWALAQAUQAPAUAFAXQAEAOgBAPQAigMAlAOQAbAKAUAYQATAYAEAdQACAKgBAKQASACAQAIQAcANARAbQARAbABAfQAAAegRAcQgQAbgcAOQgbAOgggDQgggDgZgTQgfgZgJgmQgDgOABgOQgRgCgQgIQgbgMgRgZQgSgagCgdIAAgMQgWAHgWgCQgYgCgVgNQgVgNgOgUQgLgRgFgVQgLACgMgBQglgBgegaQgUgRgJgWIgHAEQgWAMgYABQgZABgXgJQgXgKgQgSIgKgNQgOAIgOAEQgYAGgZgFQgWgFgSgLQgHASgOAPQgTAVgbAJQgaAJgdgFQgcgGgWgSIgDgCQgGANgKALQgWAZgiAJQgXAFgVgDQADAVgEAUQgHAdgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMAKgNAGQAOARAGAWQAJAdgHAdQgGAcgWAWIgNALQAOAIAKALQAUAXAGAfQAGAfgKAcQgHATgOAPQAMAFAKAHQAVAPANAXQANAXABAaQABAagMAYQgHAQgMANQAJAEAJAHQATAOALAUQANAZAAAdQAAASgFAPQAQgCAQACQAdAEAWARQAXARALAbQAMAagDAcQgDAcgQAXQgRAYgZANQgWALgaAAIgGAAg");
	var mask_11_graphics_15 = new cjs.Graphics().p("AoTK3QgdgCgYgPQgMgIgKgKQgRgSgIgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgLgaQgKgaADgaQADgXAMgUQAGgLAIgJQgMgGgKgJQgTgQgKgVQgLgZABgZQABgeAQgaIALgOIgHgDQgcgNgRgZQgZgnAJgsQAGgdAWgXQAGgIAIgFQgMgHgKgKQgSgSgHgaQgIgaAEgaQAGgcATgYQAQgSAVgKQgIgJgFgLQgNgbABgbQABgfATgbQASgaAcgNQAMgFAOgCQgCgQADgQQAGgcAUgXQAUgXAbgKQAZgIAbAFQgDgTAFgVQAHggAZgZQAagYAhgFQAhgFAfAQQAOAHALAKQAFgLAJgLQAXgdAkgIQAbgHAcAIQASAFAOAKIADgHQAMgaAZgRQAYgRAdgDQAdgCAbANQAbAMAQAYIACACQATgMAXgDQAdgDAdANQAcANARAZQAGAJAEAKIAOgIQAegOAiAGQAjAGAXAXQAXAXAIAhQAJgCALAAQAZAAAWALQAWALAPAUQAQAUAFAXQADAOgBAPQAigMAlAOQAcAKATAYQAUAYAEAdQABAKAAAKQARACARAIQAbANASAbQARAbAAAfIAAANQAaAHAWAVQAVAVAIAdQAHAcgIAdQgDAJgEAJIAGgBQAbgDAZAJQAmAPATAiQAUAjgJAoQgFAXgOAUQgPAUgVALQgUAMgZABQgYACgXgJQgWgIgRgSQgRgSgIgWQgHgSABgUQAAgYALgWQgbAFgagIQgWgIgSgQQgRgPgJgWQgKgWABgaIAAgGQgVgGgQgNQgggZgIgmQgEgOABgOQgRgCgQgIQgagMgSgZQgRgagCgdIgBgMQgVAHgXgCQgXgCgWgNQgVgNgNgUQgMgRgEgVQgMACgLgBQgmgBgdgaQgUgRgJgWIgIAEQgWAMgYABQgXABgXgJQgXgKgQgSIgLgNQgOAIgPAEQgYAGgYgFQgXgFgRgLQgIASgNAPQgUAVgaAJQgbAJgcgFQgdgGgVgSIgEgCQgGANgJALQgWAZgjAJQgXAFgVgDQAEAVgFAUQgHAdgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgNAKgNAGQAOARAHAWQAJAdgHAdQgHAcgVAWIgOALQAOAIALALQAUAXAGAfQAGAfgLAcQgHATgOAPQAMAFALAHQAVAPANAXQANAXAAAaQABAagLAYQgIAQgMANQAJAEAJAHQATAOALAUQAOAZgBAdQAAASgFAPQAQgCARACQAdAEAWARQAWARAMAbQALAagDAcQgCAcgRAXQgQAYgZANQgXALgZAAIgGAAg");
	var mask_11_graphics_16 = new cjs.Graphics().p("ApBK3QgdgCgYgPQgMgIgKgKQgRgSgIgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgLgaQgKgaADgaQADgXAMgUQAGgLAIgJQgMgGgKgJQgTgQgKgVQgLgZABgZQABgeAQgaIALgOIgHgDQgcgNgRgZQgZgnAJgsQAGgdAWgXQAHgIAHgFQgMgHgKgKQgSgSgHgaQgIgaAEgaQAGgcATgYQAQgSAVgKQgHgJgGgLQgNgbABgbQABgfATgbQASgaAcgNQAMgFAOgCQgCgQADgQQAGgcAUgXQAUgXAbgKQAagIAaAFQgDgTAFgVQAHggAZgZQAagYAhgFQAhgFAfAQQAOAHALAKQAGgLAIgLQAXgdAkgIQAbgHAcAIQASAFAOAKIADgHQAMgaAZgRQAYgRAdgDQAdgCAbANQAbAMAQAYIACACQATgMAXgDQAegDAcANQAcANARAZQAGAJAEAKIAOgIQAegOAiAGQAjAGAXAXQAXAXAIAhQAJgCALAAQAZAAAWALQAWALAPAUQAQAUAFAXQADAOgBAPQAjgMAkAOQAcAKATAYQAUAYAEAdQABAKAAAKQARACARAIQAbANASAbQARAbAAAfIAAANQAbAHAVAVQAVAVAIAdQAHAcgIAdQgDAJgEAJIAGgBQAbgDAZAJQAmAPATAiQAUAjgJAoQgCAKgEAJIARADQAfAIAVAVQAVAWAHAfQAIAegKAdQgJAdgYAUQgZAUgdAFQgeAFgdgNQgegMgRgZQgagkAHgtQACgMAEgMQgPgBgPgGQgWgIgRgSQgRgSgIgWQgHgSABgUQABgYAKgWQgbAFgagIQgWgIgSgQQgRgPgJgWQgKgWABgaIAAgGQgUgGgRgNQgggZgIgmQgDgOAAgOQgRgCgQgIQgagMgSgZQgRgagCgdIgBgMQgVAHgXgCQgXgCgWgNQgVgNgNgUQgMgRgEgVQgMACgLgBQgmgBgdgaQgUgRgJgWIgIAEQgVAMgYABQgYABgXgJQgXgKgQgSIgLgNQgOAIgPAEQgYAGgYgFQgWgFgSgLQgIASgNAPQgUAVgaAJQgbAJgcgFQgdgGgVgSIgEgCQgGANgJALQgWAZgjAJQgWAFgWgDQAEAVgFAUQgHAdgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgMAKgOAGQAOARAHAWQAJAdgHAdQgHAcgVAWIgOALQAOAIALALQAUAXAGAfQAGAfgLAcQgHATgOAPQAMAFALAHQAVAPANAXQANAXAAAaQABAagLAYQgIAQgMANQAKAEAIAHQATAOALAUQAOAZgBAdQAAASgFAPQAQgCARACQAdAEAWARQAWARAMAbQALAagDAcQgCAcgRAXQgQAYgZANQgXALgZAAIgGAAg");
	var mask_11_graphics_17 = new cjs.Graphics().p("Ap0K3QgdgCgXgPQgNgIgJgKQgSgSgHgaQgIgaAFgZIAEgNQgXADgYgGQgYgHgSgQQgUgRgKgaQgKgaADgaQACgXAMgUQAHgLAIgJQgMgGgLgJQgTgQgKgVQgKgZAAgZQABgeARgaIAKgOIgGgDQgdgNgRgZQgZgnAKgsQAGgdAVgXQAHgIAIgFQgMgHgKgKQgSgSgIgaQgIgaAFgaQAFgcAUgYQAQgSAVgKQgIgJgFgLQgOgbACgbQABgfASgbQASgaAcgNQANgFANgCQgBgQADgQQAFgcAUgXQAUgXAcgKQAZgIAbAFQgDgTAEgVQAHggAagZQAZgYAhgFQAhgFAgAQQAOAHALAKQAFgLAIgLQAYgdAkgIQAbgHAcAIQARAFAPAKIADgHQAMgaAYgRQAZgRAcgDQAdgCAbANQAbAMARAYIABACQAUgMAXgDQAegDAcANQAdANAQAZQAGAJAEAKIANgIQAegOAjAGQAiAGAYAXQAXAXAHAhQAKgCAKAAQAaAAAVALQAWALAQAUQAPAUAFAXQADAOAAAPQAigMAlAOQAbAKAUAYQATAYAEAdQACAKgBAKQASACAQAIQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAVAHAdQAHAcgIAdQgCAJgEAJIAGgBQAagDAZAJQAmAPAUAiQATAjgIAoQgCAKgEAJIARADQAeAIAWAVQAVAWAHAfQAFAVgDAUQATACASAHQAVAKAQARQAQASAHAWQAHAWgDAXQgCAYgMAUQgMAUgTANQgTAOgXAFQgaAFgbgIQgbgIgTgTQgTgTgIgaQgIgZAEgYQgSgBgRgIQgdgMgSgZQgagkAHgtQACgMAFgMQgQgBgOgGQgWgIgRgSQgRgSgIgWQgHgSABgUQAAgYALgWQgcAFgZgIQgXgIgRgQQgSgPgJgWQgKgWABgaIABgGQgVgGgRgNQgfgZgJgmQgDgOABgOQgRgCgQgIQgbgMgRgZQgSgagCgdIAAgMQgWAHgWgCQgYgCgVgNQgVgNgOgUQgLgRgFgVQgLACgMgBQglgBgegaQgTgRgJgWIgHAEQgWAMgYABQgZABgXgJQgXgKgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgLQgHASgOAPQgTAVgbAJQgaAJgdgFQgcgGgWgSIgDgCQgGANgKALQgWAZgiAJQgXAFgVgDQADAVgEAUQgHAdgVAWQgVAWgcAIIgNADQACAUgFATQgIAggbAXQgMAKgNAGQANARAHAWQAJAdgHAdQgGAcgWAWIgNALQAOAIAKALQAUAXAGAfQAGAfgKAcQgHATgOAPQAMAFAKAHQAVAPANAXQANAXABAaQABAagMAYQgHAQgMANQAJAEAJAHQATAOALAUQANAZAAAdQAAASgFAPQAQgCAQACQAdAEAWARQAXARALAbQAMAagDAcQgDAcgQAXQgRAYgZANQgWALgaAAIgGAAg");
	var mask_11_graphics_18 = new cjs.Graphics().p("AqqK3QgdgCgYgPQgMgIgKgKQgRgSgIgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgLgaQgKgaADgaQADgXAMgUQAGgLAIgJQgMgGgKgJQgTgQgKgVQgLgZABgZQABgeAQgaIALgOIgHgDQgcgNgRgZQgZgnAJgsQAGgdAWgXQAHgIAHgFQgMgHgKgKQgSgSgHgaQgIgaAEgaQAGgcATgYQAQgSAVgKQgHgJgGgLQgNgbABgbQABgfATgbQASgaAcgNQAMgFAOgCQgCgQADgQQAGgcAUgXQAUgXAbgKQAagIAaAFQgDgTAFgVQAHggAZgZQAagYAhgFQAhgFAfAQQAOAHALAKQAGgLAIgLQAXgdAkgIQAbgHAcAIQASAFAOAKIADgHQAMgaAZgRQAYgRAdgDQAdgCAbANQAbAMAQAYIACACQATgMAXgDQAegDAdANQAcANARAZQAGAJAEAKIAOgIQAdgOAiAGQAjAGAXAXQAXAXAIAhQAJgCALAAQAZAAAWALQAWALAPAUQAQAUAFAXQADAOgBAPQAjgMAkAOQAcAKATAYQAUAYAEAdQABAKAAAKQARACARAIQAbANASAbQARAbAAAfIAAANQAbAHAVAVQAVAVAIAdQAHAcgIAdQgDAJgEAJIAGgBQAbgDAZAJQAmAPATAiQAUAjgJAoQgCAKgEAJIARADQAfAIAVAVQAVAWAHAfQAFAVgDAUQAUACASAHQAVAKAPARQAQASAHAWQAHAWgCAXQgBALgDAJQASAAATAGQAZAIASARQATASAIAZQAJAYgDAZQgDAZgPAWQgOAWgWANQgZAOgdAAQgeABgZgOQgZgOgPgaQgPgagBgcQAAgQAEgQIABgCQgSABgRgGQgbgIgTgTQgTgTgJgaQgHgZADgYQgRgBgRgIQgegMgRgZQgagkAHgtQACgMAEgMQgPgBgPgGQgWgIgRgSQgRgSgIgWQgHgSABgUQABgYAKgWQgbAFgagIQgWgIgSgQQgRgPgJgWQgKgWABgaIAAgGQgUgGgRgNQgggZgIgmQgDgOAAgOQgRgCgQgIQgagMgSgZQgRgagCgdIgBgMQgVAHgXgCQgXgCgWgNQgVgNgNgUQgMgRgEgVQgMACgLgBQglgBgdgaQgUgRgJgWIgIAEQgWAMgYABQgYABgXgJQgXgKgQgSIgLgNQgOAIgPAEQgYAGgYgFQgWgFgSgLQgIASgNAPQgUAVgaAJQgbAJgcgFQgdgGgVgSIgEgCQgGANgJALQgWAZgjAJQgWAFgWgDQAEAVgFAUQgHAdgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgMAKgOAGQAOARAHAWQAJAdgHAdQgHAcgVAWIgOALQAOAIALALQAUAXAGAfQAGAfgLAcQgHATgOAPQAMAFALAHQAVAPANAXQANAXAAAaQABAagLAYQgIAQgMANQAKAEAIAHQATAOALAUQAOAZgBAdQAAASgFAPQAQgCARACQAdAEAWARQAWARAMAbQALAagDAcQgCAcgRAXQgQAYgZANQgXALgZAAIgGAAg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AOMLYQglgCgfgZQghgegDgsQgDgfAPgcQgLgDgKgGQgZgOgPgaQgPgagBgcQAAgQAEgQIABgCQgSABgRgGQgbgIgTgTQgTgTgJgaQgHgZADgYQgRgBgRgIQgegMgRgZQgagkAHgtQACgMAEgMQgPgBgPgGQgWgIgRgSQgRgSgIgWQgHgSABgUQABgYAKgVQgbAEgagHQgWgIgSgQQgRgQgJgWQgKgWABgaIAAgGQgUgGgRgNQgggZgIgmQgDgOAAgOQgRgCgQgIQgagMgSgZQgRgagCgdIgBgMQgVAHgXgCQgXgCgWgNQgVgNgNgUQgMgRgEgVQgKACgMgBQgmgBgdgaQgUgRgJgWIgIAEQgWAMgYABQgYABgXgJQgXgKgQgSIgLgNQgNAIgQAEQgYAGgYgFQgWgFgSgLQgHASgOAPQgUAVgaAJQgbAJgcgFQgdgGgVgSIgEgCQgGANgJALQgWAZgjAJQgWAFgWgDQAEAVgFAUQgHAdgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgMAKgOAGQAOARAHAWQAJAdgHAdQgHAcgVAWIgOAMQAOAIALALQAUAWAGAfQAGAfgLAcQgHATgOAPQAMAFALAHQAVAPANAXQANAXAAAaQABAagLAYQgIAQgMANQAKAEAIAHQATAOALAUQAOAZgBAdQAAASgFAPQAQgCARACQAdAEAWARQAWARAMAbQALAagDAcQgCAcgRAXQgQAYgZANQgZAMgdgBQgdgCgYgPQgMgIgKgKQgRgSgIgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgLgaQgKgaADgaQADgXAMgUQAGgLAIgJQgMgGgKgJQgTgQgKgVQgLgZABgZQABgeAQgaIALgOIgHgDQgcgNgRgZQgZgnAJgsQAGgdAWgWQAHgIAHgFQgMgHgKgLQgSgSgHgaQgIgaAEgaQAGgcATgYQAQgSAVgKQgHgJgGgLQgNgbABgbQABgfATgbQASgaAcgNQAMgFAOgCQgCgQADgQQAGgcAUgXQAUgXAbgKQAagIAaAFQgDgTAFgVQAHggAZgZQAagYAhgFQAhgFAfAQQAOAHALAKQAGgLAIgLQAXgdAkgIQAbgHAcAIQASAFAOAKIADgHQAMgaAZgRQAYgRAdgDQAdgCAbANQAbAMAQAYIACACQATgMAXgDQAegDAdANQAcANARAZQAGAJAEAKIAOgIQAegOAhAGQAjAGAXAXQAXAXAIAhQAJgCALAAQAZAAAWALQAWALAPAUQAQAUAFAXQADAOgBAPQAjgMAkAOQAcAKATAYQAUAYAEAdQABAKAAAKQASACAQAIQAbANASAbQARAbAAAfIAAANQAbAHAVAVQAVAVAIAdQAHAcgIAdQgDAJgEAJIAGgBQAbgDAZAJQAmAPATAjQAUAigJAoQgCAKgEAJIARADQAfAIAVAVQAVAWAHAfQAFAVgDAUQAUACASAHQAVAKAPARQAQASAHAWQAHAWgCAXQgBALgDAJQATAAASAGQAZAIASARQATASAIAZQAJAYgDAZQgDAUgJASQAZAIASASQAYAXAHAiQAHAigNAfQgNAegeATQgcARgeAAIgFAAg");
	var mask_11_graphics_20 = new cjs.Graphics().p("AOiMFQgcgNgRgaQgJgPgFgQQgEgQABgPIAAgCQgMACgNgBQglgBgegaQgigegDgsQgCgeAPgdQgLgDgKgGQgZgOgQgaQgPgZAAgdQgBgPAFgQIAAgCQgRAAgSgFQgbgIgTgTQgTgTgIgaQgIgZAEgYQgRgCgSgHQgdgMgSgZQgaglAHgtQACgMAFgLQgPgCgPgFQgWgJgRgSQgRgRgIgXQgHgSABgTQAAgYALgWQgcAGgZgJQgXgHgRgQQgSgRgJgVQgKgXABgaIABgGQgVgGgRgNQgfgYgJgmQgDgPABgOQgRgCgQgHQgbgNgRgZQgSgZgCgdIAAgMQgWAHgWgDQgYgCgUgNQgVgMgOgUQgLgRgFgWQgLACgMAAQglgCgegZQgUgSgJgWIgHAEQgWAMgYABQgZABgXgJQgXgJgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAPQgTAWgbAJQgaAIgdgFQgcgFgWgSIgDgDQgGANgKALQgWAZgiAJQgXAGgVgDQADAUgEAVQgHAcgVAWQgVAWgcAIIgNADQACAUgFATQgIAggbAXQgMALgNAGQAOARAGAVQAJAegHAcQgGAdgWAWIgNALQAOAIAKAMQAUAWAGAfQAGAegKAcQgHAUgOAPQAMAEAKAIQAVAOANAXQANAYABAZQABAagMAYQgHARgMAMQAJAFAJAGQATAPALAUQANAYAAAeQAAARgFAQQAQgDAQADQAdAEAWARQAXARALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgZANgdgCQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgRgKgaQgKgaADgbQACgXAMgUQAHgLAIgIQgMgGgLgJQgTgQgKgWQgKgYAAgaQABgdARgaIALgOIgHgDQgdgOgRgZQgZgmAKgrQAGgeAVgXQAHgHAIgGQgMgHgKgKQgSgTgIgaQgIgZAFgaQAFgdAUgXQAQgTAVgJQgIgJgFgLQgOgbACgcQABgeASgbQASgbAcgMQANgGAOgCQgCgQADgPQAFgdAUgXQAUgXAcgJQAZgIAbAEQgDgTAEgUQAHghAagYQAZgYAhgFQAhgFAgAQQAOAHALAJQAFgLAIgKQAYgdAkgJQAbgGAcAHQARAFAPAKIADgGQAMgaAYgRQAZgSAcgCQAdgCAbAMQAbANARAXIABADQAUgMAXgDQAegEAcANQAdAOARAYQAGAKAEAJIANgHQAegOAjAGQAiAGAYAXQAWAWAHAhQAKgBAKAAQAaAAAVALQAWALAQATQAPAUAFAYQAEAOgBAPQAigMAlANQAbAKAUAYQATAYAEAdQACALgBAKQASACAQAHQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAWAHAcQAHAdgIAdQgCAJgEAIIAGgBQAagDAZAJQAmAPAUAjQATAkgIAmQgCAKgEAKIARADQAeAHAWAWQAVAWAHAeQAFAVgDAVQATABASAIQAVAJAQASQAQARAHAWQAHAWgDAYQgBAKgDAKQATgBATAGQAZAIASASQASARAJAZQAIAYgDAaQgCAUgKASQAZAHATASQAYAXAHAjQACANAAANQAYgEAaAHQAeAJAVAWQAUAWAGAgQAGAfgLAcQgLAcgZAUQgZATgeADIgMAAQgYAAgXgLg");
	var mask_11_graphics_21 = new cjs.Graphics().p("APPNPQgcgNgSgcQgRgcAAgfQAAgTAFgQQgPgDgQgHQgcgOgRgZQgJgQgFgPQgEgRABgOIAAgDQgMACgNAAQglgCgegZQgigegDgsQgCgfAPgcQgLgEgKgFQgZgOgQgaQgPgaAAgcQgBgQAFgQIAAgCQgRAAgSgFQgbgIgTgTQgTgTgIgaQgIgZAEgYQgSgCgRgHQgdgMgSgZQgagkAHgtQACgNAFgLQgQgBgOgGQgWgIgRgRQgRgSgIgWQgHgSABgUQAAgYALgWQgcAFgZgIQgXgIgRgQQgSgQgJgWQgKgWABgaIABgHQgVgFgRgNQgfgZgJgmQgDgOABgPQgRgCgQgHQgbgMgRgZQgSgagCgdIAAgMQgWAHgVgCQgYgCgVgNQgVgNgOgUQgLgRgFgVQgLACgMgBQglgBgegaQgUgRgJgXIgHAFQgWAMgYABQgZABgXgJQgXgKgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAQQgTAVgbAJQgaAJgdgFQgcgGgWgSIgDgDQgGANgKAMQgWAZgiAJQgXAFgVgDQADAVgEAUQgHAdgVAWQgVAWgcAIIgNADQACATgFAUQgIAggbAXQgMAKgNAGQANARAHAWQAJAdgHAdQgGAcgWAWIgNAMQAOAIAKALQAUAXAGAfQAGAfgKAcQgHATgOAOQAMAFAKAHQAVAPANAXQANAXABAaQABAagMAYQgHAQgMANQAJAEAJAHQATAOALAUQANAZAAAdQAAASgFAPQAQgCAQACQAdAEAWARQAXARALAbQAMAagDAcQgDAcgQAXQgRAYgZANQgZAMgdgBQgdgCgXgPQgNgIgJgKQgSgSgHgaQgIgaAFgZIAEgNQgXADgYgGQgYgHgSgQQgUgRgKgaQgKgaADgaQACgXAMgUQAHgLAIgJQgMgGgLgJQgTgQgKgVQgKgZAAgZQABgeARgaIAKgOIgGgDQgdgNgRgYQgZgnAKgsQAGgdAVgXQAHgIAIgGQgMgHgKgKQgSgSgIgaQgIgaAFgaQAFgcAUgYQAQgSAVgKQgIgJgFgLQgOgbACgbQABgfASgbQASgaAcgNQANgGANgCQgBgPADgQQAFgcAUgXQAUgXAcgKQAZgIAbAFQgDgUAEgUQAHggAagZQAZgYAhgFQAhgFAgAQQAOAHALAJQAFgLAIgKQAYgdAkgIQAbgHAcAIQARAFAPAJIADgGQAMgaAYgRQAZgRAcgDQAdgCAbANQAbAMARAYIABACQAUgMAXgDQAegDAcANQAdANARAZQAGAJAEAKIANgIQAegOAjAGQAiAGAYAXQAXAWAHAhQAKgBAJAAQAaAAAVALQAWALAQAUQAPAUAFAXQADAOAAAPQAigMAlAOQAbAKAUAYQATAYAEAdQACAKgBAKQASACAQAIQAcANARAbQARAbABAfIgBAMQAbAIAVAVQAWAVAHAdQAHAcgIAdQgCAJgEAJIAGgBQAagDAZAJQAmAPAUAjQATAjgIAoQgCAKgEAJIARADQAeAIAWAVQAVAVAHAfQAFAVgDAUQATABASAIQAVAKAQARQAQASAHAWQAHAWgDAXQgBAKgDAKQATAAATAGQAZAIASARQASASAJAZQAIAYgDAZQgCAUgKASQAZAIATASQAYAXAHAiQACANAAANQAYgEAaAHQAeAJAVAXQAUAWAGAfQAFAdgJAaIAGABQAeAGAYAXQAXAWAIAeQAHAegKAfQgKAfgYATQgXAUggAEIgRABQgXAAgVgJg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AQSODQgdgLgTgXQgOgTgGgYIgDgRQgdADgZgMQgdgNgRgcQgSgcAAgfQAAgTAGgQQgQgCgPgIQgdgOgQgZQgKgQgEgPQgEgRAAgOIAAgDQgMADgMgBQglgCgfgZQghgegDgsQgDgfAPgcQgLgDgKgGQgZgOgPgaQgPgagBgcQAAgQAEgQIABgCQgSABgRgGQgbgIgTgTQgTgTgJgaQgHgZADgYQgRgBgRgIQgegMgRgZQgagkAHgsQACgMAEgMQgPgBgPgGQgWgIgRgSQgRgSgIgWQgHgSABgUQAAgYALgWQgbAFgagIQgWgIgSgQQgRgQgJgWQgKgWABgaIAAgGQgUgGgRgNQgggZgIgmQgEgOABgOQgRgCgQgIQgagMgRgZQgRgagCgdIgBgMQgVAHgXgCQgXgCgWgNQgVgNgNgUQgMgRgEgVQgMACgLgBQgmgBgdgaQgUgRgJgWIgIAEQgWAMgYABQgYABgXgJQgXgKgQgSIgLgNQgOAJgPADQgYAGgYgFQgXgEgRgMQgIASgNAPQgUAVgaAJQgbAJgcgFQgdgGgVgSIgEgCQgGANgJALQgWAZgjAJQgXAGgVgEQAEAVgFAUQgHAdgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgNAKgNAGQAOARAHAWQAJAdgHAdQgHAcgVAWIgOAMQAOAIALALQAUAXAGAfQAGAfgLAcQgHATgOAPQAMAFALAHQAVAPANAWQANAXAAAaQABAagLAYQgIAQgMANQAJAFAJAGQATAOALAUQAOAZgBAdQAAASgFAPQAQgCARACQAdAEAWARQAWARAMAbQALAagDAcQgCAcgRAXQgQAYgZANQgZAMgdgBQgdgCgYgPQgMgIgKgKQgRgSgIgaQgHgaAFgZIADgNQgXADgXgGQgYgHgSgQQgUgRgLgaQgKgaADgaQADgXAMgUQAGgLAIgJQgMgGgKgJQgTgQgKgVQgLgZABgZQABgeAQgZIALgOIgHgDQgcgNgRgZQgZgnAJgsQAGgdAWgXQAGgHAIgGQgMgHgKgLQgSgSgHgaQgIgaAEgaQAGgcATgYQAQgSAVgKQgIgJgFgLQgNgbABgbQABgfATgbQASgaAcgNQAMgFAOgCQgCgQADgQQAGgcAUgXQAUgXAbgKQAZgIAbAFQgDgTAFgVQAHggAZgZQAagYAhgFQAhgFAfAQQAOAHALAKQAFgLAJgLQAXgdAkgIQAbgHAcAIQASAFAOAKIADgHQAMgaAZgRQAYgRAdgDQAdgCAbANQAbAMAQAYIACACQATgLAXgEQAegDAdANQAcANARAZQAGAJAEAKIAOgIQAegOAiAGQAjAGAXAXQAXAXAIAhQAJgCALAAQAZAAAWALQAVALAPAUQAQAUAFAXQADAPgBAOQAigLAlANQAcAKATAYQAUAYAEAdQABAKAAAKQARACARAIQAbANASAbQARAbAAAfIAAANQAaAHAWAVQAVAVAIAdQAHAcgIAdQgDAKgEAIIAGgBQAbgDAZAJQAmAPATAjQAUAjgJAoQgCAKgEAJIARADQAfAIAVAVQAVAWAHAfQAFAUgDAUQAUACASAHQAVAKAPARQAQASAHAWQAHAWgCAXQgCALgCAJQASAAATAGQAZAIASARQATASAIAZQAJAYgDAZQgDAUgJASQAZAIASASQAYAXAHAiQADAOgBANQAZgFAaAHQAeAJAUAXQAVAWAFAfQAGAdgJAaIAFABQAfAGAXAXQAYAWAHAeIADASQARgBATAFQAeAIAVAVQAUAVAIAeQAHAfgJAcQgJAcgXAVQgYAVgdAFQgKACgJAAQgUAAgTgIg");
	var mask_11_graphics_23 = new cjs.Graphics().p("ARoPFQgYgBgWgLQgWgKgPgTQgPgSgGgYQgEgRABgRQgPgBgPgGQgdgLgSgXQgPgTgGgYIgDgRQgdADgZgMQgcgNgSgcQgRgcAAgfQAAgTAFgQQgQgDgPgHQgcgOgRgZQgJgQgFgPQgEgRABgOIAAgDQgMACgNAAQglgCgegZQgigegDgsQgCgfAPgcQgLgDgKgGQgZgOgQgaQgPgaAAgcQgBgQAFgQIAAgCQgRABgSgGQgbgIgTgTQgTgTgIgaQgIgZAEgYQgSgBgRgIQgdgMgSgZQgagjAHgtQACgMAFgMQgQgBgOgGQgWgIgRgSQgRgSgIgWQgHgSABgUQAAgYALgWQgcAFgZgIQgXgIgRgQQgSgQgJgWQgKgWABgaIABgGQgVgGgRgNQgfgZgJgmQgDgOABgOQgSgCgOgIQgbgMgRgZQgSgagCgdIAAgMQgWAHgWgCQgYgCgVgNQgVgNgOgUQgLgRgFgVQgLACgMgBQglgBgegaQgUgRgJgWIgHAEQgWAMgYABQgZABgXgJQgXgKgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgLQgHASgOAPQgTAVgbAJQgaAJgdgFQgcgGgWgSIgDgCQgGANgKALQgWAZgiAJQgXAFgVgDQADAVgEAUQgHAdgVAWQgVAWgcAIIgNADQACAUgFATQgIAggbAXQgMAKgNAGQANARAHAWQAJAdgHAdQgGAcgWAWIgNAMQANAIALALQAUAXAGAfQAGAfgKAcQgIATgNAPQALAFALAHQAVAPANAXQANAXABAaQABAZgMAYQgHAQgMANQAJAEAJAHQATAOALAUQANAZAAAdQAAASgFAPQAQgCAQACQAdAEAWARQAXARALAbQAMAagDAcQgDAcgQAXQgRAYgZANQgZAMgdgBQgdgCgXgPQgNgIgJgKQgSgSgHgaQgIgaAFgZIAEgNQgXADgYgGQgYgHgSgQQgUgRgKgaQgKgaADgaQACgXAMgUQAGgLAJgJQgMgGgLgJQgTgQgKgVQgKgZAAgYQABgeARgaIAKgOIgGgDQgdgNgRgZQgZgnAKgsQAGgdAVgXQAHgHAIgGQgNgHgJgLQgSgSgIgaQgIgaAFgaQAFgcAUgYQAQgSAVgKQgIgJgFgLQgOgbACgbQABgfASgbQASgaAcgNQANgFANgCQgBgQADgQQAFgcAUgXQAUgXAcgKQAZgIAbAFQgDgTAEgVQAHggAagZQAZgYAhgFQAhgFAgAQQAOAHALAKQAFgLAIgLQAYgdAkgIQAbgHAcAIQARAFAPAKIADgHQAMgaAYgRQAZgRAcgDQAdgCAbANQAbAMARAYIABACQAUgMAXgDQAegDAcANQAdANARAZQAGAJAEAKIANgIQAegOAjAGQAiAGAYAXQAXAXAHAhQAKgCAKAAQAaAAAVALQAWALAQAUQAPAUAEAXQADAOAAAPQAigMAlAOQAbAKAUAYQATAYAEAdQABAKAAAKQASACAQAIQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAVAHAdQAHAcgIAdQgDAJgDAJIAGgBQAagDAZAJQAmAPAUAjQATAjgIAoQgDAKgDAJIARADQAeAIAWAVQAVAWAHAfQAFAVgDAUQATACASAHQAVAKAQAQQAQASAHAWQAHAWgDAXQgBALgDAJQATAAATAGQAZAIASARQASASAJAZQAIAYgDAZQgCAUgKASQAZAIATASQAYAXAHAiQACAOAAANQAYgFAaAHQAeAJAVAXQAUAWAGAfQAFAdgJAaIAGABQAeAGAYAXQAXAWAIAeIADASQARgBASAFQAfAIAUAVQAVAVAHAeQAEARgBAQIAAAAQAcACAXAPQAWAOAOAYQAOAYAAAbQACArgeAhQgQASgWAKQgUAJgWAAIgEAAg");
	var mask_11_graphics_24 = new cjs.Graphics().p("ASHP4QgegJgUgXQgdghACgrIgPAAQgYAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgSgYQgPgSgGgYIgCgSQgdADgagMQgcgNgSgcQgRgbAAggQAAgSAFgRQgPgCgQgIQgcgNgRgaQgJgPgFgQQgEgQABgPIAAgDQgMADgNgBQglgBgegaQgigegDgsQgCgeAPgdQgLgDgKgGQgZgOgQgaQgPgZAAgdQgBgPAFgQIABgDQgSABgSgFQgbgIgTgTQgTgTgIgaQgIgZAEgZQgRgBgSgHQgdgLgSgZQgaglAHgtQACgMAFgMQgPgBgPgFQgWgJgRgSQgRgRgIgXQgHgSABgUQAAgYALgWQgbAGgagJQgXgHgRgQQgSgRgJgVQgKgXABgaIABgGQgVgGgRgNQgegYgJgmQgDgPABgOQgRgCgQgHQgbgNgRgZQgSgZgCgdIAAgNQgWAIgWgDQgYgCgVgNQgVgMgOgUQgLgSgFgVQgLACgMAAQglgCgegZQgUgSgJgWIgHAEQgWAMgYABQgZABgXgJQgXgJgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAPQgTAWgbAJQgaAIgdgFQgcgFgWgSIgDgDQgGANgKALQgWAZgiAJQgXAGgVgEQADAVgEAVQgHAcgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMALgNAGQAOARAGAVQAJAegHAcQgGAdgWAWIgNALQAOAIAKAMQAUAWAGAfQAGAfgKAcQgHAUgOAPQAMAEAKAIQAVAOANAXQANAYABAZQABAagMAYQgHAQgMAMQAJAFAJAGQATAPALAUQANAYAAAeQAAARgFAQQAQgDAQADQAdAEAWARQAXARALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgZANgdgCQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgRgKgaQgKgaADgbQACgXAMgUQAHgLAIgJQgMgGgLgIQgTgQgKgVQgKgYAAgaQABgdARgaIALgOIgHgDQgdgOgRgZQgZgmAKgsQAGgeAVgXQAHgHAIgGQgMgHgKgKQgSgTgIgaQgIgZAFgaQAFgdAUgXQAQgTAVgKQgIgJgFgKQgOgbACgcQABgeASgbQASgbAcgMQANgGAOgCQgCgQADgPQAFgdAUgXQAUgXAcgJQAZgIAbAEQgDgTAEgUQAHghAagYQAZgYAhgFQAhgFAgAQQAOAHALAJQAFgLAIgKQAYgdAkgJQAbgGAcAHQASAFAOAKIADgGQAMgaAYgRQAZgSAcgCQAdgCAbAMQAbANARAXIACADQATgMAXgDQAegEAcANQAdAOARAYQAGAKAEAJIANgHQAegOAjAGQAiAGAYAXQAXAWAHAhQAKgBAKAAQAaAAAVALQAWALAQATQAPAUAFAYQAEAOgBAOQAigLAkANQAbAKAUAYQATAYAEAdQACAKgBALQASACAQAHQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAWAHAcQAHAdgIAdQgCAJgEAIIAGgBQAagDAZAJQAmAPAUAjQATAkgIAnQgCAKgEAKIARADQAeAHAWAWQAVAWAHAeQAFAVgDAUQATACASAIQAVAJAQASQAQARAHAWQAHAVgDAYQgBAKgDAKQATgBATAGQAZAIASASQASARAJAZQAIAYgDAaQgCAUgKASQAaAHASASQAYAXAHAjQACANAAANQAYgEAaAHQAeAJAVAWQAUAWAGAgQAFAdgJAaIAGABQAeAGAYAWQAXAXAIAeIADASQARgBASAEQAfAIAUAVQAVAWAHAeQAEARgBAQIAAAAQAcACAXAOQAWAPAOAYQAOAYAAAbIAAAHQANgBAOACQAfAEAYATQAXATAKAeQALAegHAeQgHAdgVAXQgXAXgdAHQgMAEgNAAQgRAAgRgGg");
	var mask_11_graphics_25 = new cjs.Graphics().p("AS+QzQgcgOgQgYQgOgVgCgaQgCgVAEgTIgJADQgdAIgegKQgfgJgUgXQgdghACgrIgPAAQgXAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgTgYQgOgSgGgYIgDgSQgdADgZgMQgdgNgRgcQgSgbAAggQAAgSAGgRQgQgCgPgIQgdgNgQgaQgKgPgEgQQgEgQAAgPIAAgDQgMADgMgBQglgBgfgaQghgegDgsQgCgeAOgdQgLgDgKgGQgZgOgPgaQgPgZgBgdQAAgPAEgQIABgDQgRABgSgFQgbgIgTgTQgTgTgJgZQgHgZAEgZQgSgBgRgHQgegMgRgZQgaglAHgtQACgMAFgMQgQgBgPgFQgWgJgRgSQgRgRgIgXQgHgSABgUQABgYALgWQgcAFgagIQgWgHgSgQQgQgRgJgVQgKgXABgaIAAgGQgUgGgRgNQgggYgIgmQgDgPABgOQgSgCgQgHQgagNgSgZQgRgZgCgdIAAgNQgWAHgXgCQgXgCgWgNQgVgMgNgUQgMgSgEgVQgLACgMAAQgmgCgdgZQgUgSgJgWIgIAEQgWAMgYABQgYABgXgJQgXgJgQgSIgKgNQgOAIgQAEQgYAGgYgFQgWgFgSgMQgHASgOAPQgUAWgaAJQgbAIgcgFQgdgFgVgSIgDgDQgGANgKALQgWAZgjAJQgWAGgVgEQADAVgFAVQgHAcgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgMAKgOAHQAOAQAHAWQAJAegHAcQgHAdgVAWIgNALQANAIALAMQAUAWAGAfQAGAfgLAcQgHATgNAQQALAEALAIQAVAOANAXQANAYAAAZQABAagLAYQgIARgMAMQAKAFAIAGQATAPALAUQAOAXgBAeQAAARgFAQQAQgDARADQAdAEAWARQAWARAMAaQALAbgDAbQgCAcgRAYQgQAYgZAMQgZANgdgCQgdgBgYgPQgMgIgKgKQgRgTgIgaQgHgZAFgaIADgNQgXAEgXgHQgYgGgSgQQgUgRgLgaQgKgaADgbQADgXAMgTQAGgLAJgJQgMgGgLgIQgTgQgKgWQgLgYABgaQABgdAQgaIALgOIgHgDQgcgOgRgZQgZgmAJgsQAGgeAWgXQAHgHAHgGQgMgHgKgKQgSgTgHgaQgIgZAEgaQAGgdATgXQAQgTAVgKQgHgJgGgKQgNgbABgcQABgeATgbQASgbAcgMQANgGANgCQgCgQADgPQAGgdAUgXQAUgXAbgJQAagIAaAEQgCgTAEgUQAHghAZgYQAagYAhgFQAhgFAfAQQAOAHALAJQAGgLAIgKQAXgdAkgJQAbgGAcAHQASAFAPAKIACgGQAMgaAZgRQAYgSAdgCQAdgCAbAMQAbANAQAXIACADQAUgMAWgDQAegEAdANQAcAOARAYQAHAJAEAKIANgHQAegOAiAGQAjAGAXAXQAYAWAHAhQAKgCAKABQAZAAAWALQAWALAPATQAQAUAFAYQADAOgBAOQAjgLAkANQAcAKATAYQATAYAEAdQABAKAAALQASACAQAHQAbANASAbQARAbAAAfIAAANQAbAHAVAVQAVAWAIAcQAHAdgIAdQgDAJgEAIIAGgBQAbgDAZAJQAmAPATAjQAUAkgJAnQgCAKgEAKIARADQAfAHAVAWQAVAWAHAeQAGAVgDAUQATACASAIQAVAJAPASQAQARAHAWQAHAWgCAYQgBAKgDAKQATgBASAFQAZAIASASQATARAIAZQAJAYgDAaQgCAUgKASQAZAHASASQAYAXAHAjQADANgBANQAZgEAaAHQAeAJAUAWQAVAWAFAgQAGAdgJAaIAFABQAfAGAXAWQAYAXAHAeIADASQASgBASAEQAeAIAVAVQAUAWAIAeQAEARgBAQIAAAAQAcACAWAOQAXAPANAYQAOAYABAbIAAAHQANgBAOACQAfAEAXATQAYATAKAeQAKAegGAeIgBACQAKgDAKgCQAdgEAcALQAdAMASAXQARAYAEAeQAEAfgMAbQgMAagZASQgaASgdACIgJABQgYAAgYgMg");
	var mask_11_graphics_26 = new cjs.Graphics().p("AU8RvQgwgCgggjQgPgSgHgWQgFgQAAgQQgUAKgVACQgeACgbgNQgcgOgQgZQgOgVgDgaQgCgUAFgTIgKADQgdAHgegJQgegJgUgXQgdghACgsIgPABQgYgBgWgLQgWgKgPgTQgPgSgGgYQgDgRAAgRQgOgBgQgGQgdgLgSgXQgPgTgGgYIgCgRQgdADgagMQgcgNgSgcQgRgcAAgfQAAgTAFgQQgPgDgQgHQgcgOgRgZQgJgQgFgPQgEgRABgOIAAgDQgMACgNAAQglgCgegZQgigegDgsQgCgfAPgcQgLgDgKgGQgZgOgQgaQgPgaAAgcQgBgQAFgQIABgCQgSABgSgGQgbgIgTgSQgTgTgIgaQgHgZADgYQgRgBgSgIQgdgMgSgZQgagkAHgtQADgMAEgMQgPgBgPgGQgWgIgRgSQgRgSgIgWQgHgSABgUQAAgYALgWQgaAFgagIQgXgIgRgQQgSgQgJgWQgKgWABgaIABgGQgVgGgRgNQgfgZgJgmQgDgOABgOQgRgCgQgIQgbgMgRgZQgSgagCgdIAAgMQgVAHgXgCQgYgCgVgNQgVgNgOgUQgLgRgFgVQgLACgMgBQglgBgegaQgTgRgKgWIgHAEQgWAMgYABQgZABgXgJQgXgKgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgEgSgMQgHASgOAPQgTAVgbAJQgaAJgdgFQgcgGgWgSIgDgCQgGANgKALQgWAZgiAJQgXAFgVgDQAEAVgFAUQgHAdgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMAKgNAGQAOARAGAWQAJAdgHAdQgGAcgWAWIgNAMQAOAIAKALQAUAXAGAfQAGAfgKAcQgHATgOAPQAMAFAKAHQAVAPANAXQANAXABAaQABAagMAYQgHAQgMANQAJAFAJAGQATAOALAUQANAZAAAcQAAASgFAPQAQgCAQACQAdAEAWARQAXARALAbQAMAagDAcQgDAcgQAXQgRAYgZANQgZAMgdgBQgdgCgXgPQgNgIgJgKQgSgSgHgaQgIgaAFgZIAEgNQgXADgYgGQgYgHgSgQQgUgRgKgaQgKgaADgZQACgXAMgUQAHgLAIgJQgMgGgLgJQgTgQgKgVQgKgZAAgZQABgeARgaIALgOIgHgDQgdgNgRgZQgZgnAKgsQAGgdAVgXQAHgHAIgGQgMgHgKgLQgSgSgIgaQgIgaAFgaQAFgcAUgYQAQgSAVgKQgIgJgFgLQgOgbACgbQABgfASgbQASgaAcgNQANgFAOgCQgCgQADgQQAFgcAUgXQAUgXAcgKQAZgIAbAFQgDgTAEgVQAHggAagZQAZgYAhgFQAhgFAgAQQAOAHALAKQAFgLAIgLQAYgdAkgIQAbgHAcAIQASAFAOAKIADgHQAMgaAYgRQAZgRAcgDQAdgCAbANQAbAMARAYIACACQATgMAXgDQAegDAcANQAdANARAZQAGAJAEAKIANgIQAegOAjAGQAiAGAYAXQAXAXAHAhQAKgCAKAAQAaAAAVALQAWALAQAUQAPAUAFAXQAEAOgBAPQAigMAlAOQAbAKAUAYQATAYAEAdQACAKgBAKQASACAQAIQAcANAQAbQARAbABAfIgBANQAbAHAVAVQAWAVAHAdQAHAcgIAdQgCAKgEAIIAGgBQAagDAZAJQAmAPAUAjQATAjgIAoQgCAKgEAJIARADQAeAIAWAVQAVAWAHAfQAFAVgDAUQAUACARAHQAVAKAQARQAQASAHAWQAHAWgDAXQgBALgDAJQATAAATAGQAZAIASARQASASAJAYQAIAYgDAZQgCAUgKASQAaAIASASQAYAXAHAiQADAOgBANQAZgFAZAHQAeAJAVAXQAUAWAGAfQAGAdgKAaIAGABQAeAGAYAXQAXAWAIAeIADASQARgBASAFQAfAIAUAVQAVAVAHAeQAEARgBAQIAAAAQAcACAXAPQAWAOAOAYQAOAYAAAbIAAAIQAOgCANACQAfAFAYATQAXATAKAeQALAegHAdIAAADQAJgEAKgBQAdgFAdAMQAcALASAYQASAXAEAfIABALQAJgEAJgDQAfgKAhALQAgAKAVAZQATAZAEAgQADAggOAcQgNAcgcARQgbARgeAAIgCAAg");
	var mask_11_graphics_27 = new cjs.Graphics().p("AVxSJQgYgIgRgQQgRgRgJgXIgFgQIgIAGQgcARgfgBQgwgBgggkQgPgRgHgWQgFgQAAgRQgUALgVABQgeADgbgOQgcgOgQgYQgOgVgDgaQgCgVAFgTIgKADQgdAIgegKQgegJgUgXQgdghACgrIgPAAQgYAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgSgYQgPgSgGgYIgCgSQgdADgagMQgcgNgSgcQgRgbAAggQAAgTAFgQQgPgCgQgIQgcgNgRgaQgJgPgFgQQgEgQABgPIAAgDQgMADgNgBQglgBgegaQgigegDgsQgCgeAPgdQgLgDgKgGQgZgOgQgaQgPgZAAgdQgBgPAFgPIABgDQgSABgSgFQgbgIgTgTQgTgTgIgaQgIgaAEgYQgRgBgSgHQgdgMgSgZQgaglAHgtQACgMAFgMQgPgBgOgFQgWgJgRgSQgRgRgIgXQgHgSABgUQAAgYALgWQgbAFgagIQgXgHgRgQQgSgRgJgVQgKgXABgaIABgGQgVgGgRgNQgfgYgJgmQgDgPABgOQgRgCgQgHQgbgNgRgZQgSgZgCgdIAAgNQgWAHgWgCQgYgCgVgNQgVgMgOgUQgLgSgFgVQgLACgMAAQglgCgegZQgUgSgJgWIgHAEQgWAMgYABQgZABgXgJQgXgJgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAPQgTAWgbAJQgaAIgdgFQgcgFgWgSIgDgDQgGANgKALQgWAZgiAJQgXAGgVgEQADAVgEAVQgHAcgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMAKgNAHQAOAQAGAWQAJAegHAcQgGAdgWAWIgNALQAOAIAKAMQAUAWAGAfQAGAfgKAcQgHATgOAQQAMAEAKAIQAVAOANAXQANAYABAZQABAagMAYQgHAQgMANQAJAFAJAGQATAPALAUQANAYAAAeQAAARgFAPQAQgDAQADQAdAEAWARQAXARALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgZANgdgCQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgRgKgaQgKgZADgbQACgXAMgUQAHgLAIgJQgMgGgLgIQgTgQgKgWQgKgYAAgaQABgdARgaIALgOIgHgDQgdgOgRgZQgZgmAKgsQAGgeAVgXQAHgHAIgGQgMgHgKgKQgSgTgIgaQgIgZAFgaQAFgdAUgXQAQgTAVgKQgIgJgFgKQgOgbACgcQABgeASgbQASgbAcgMQANgGAOgCQgCgQADgPQAFgdAUgXQAUgXAcgJQAZgJAbAFQgDgTAEgUQAHghAagYQAZgYAhgFQAhgFAgAQQAOAGALAKQAFgLAIgKQAYgdAkgJQAbgGAcAHQASAFAOAKIADgGQAMgaAYgRQAZgSAcgCQAdgCAbAMQAbANARAXIACADQATgMAXgDQAegEAcANQAdAOARAYQAGAJAEAKIANgHQAegOAjAGQAiAGAYAXQAXAWAHAhQAKgCAKABQAaAAAVALQAWALAQATQAPAUAFAYQAEAOgBAOQAigLAlANQAbAKAUAYQATAYAEAdQACAKgBALQASABAQAIQAcANARAbQARAbABAfIgBANQAbAHAVAVQAVAWAHAcQAHAdgIAdQgCAJgEAIIAGgBQAagDAZAJQAmAPAUAjQATAkgIAnQgCAKgEAKIARADQAeAHAWAWQAVAWAHAeQAFAVgDAUQATACASAIQAVAJAQASQAQARAHAWQAHAWgDAYQgBAKgDAKQATgBATAGQAZAIASASQASARAJAZQAIAXgDAaQgCAUgKASQAaAHASASQAYAXAHAjQACANAAANQAYgFAaAIQAeAJAVAWQAUAWAGAgQAFAcgJAbIAGABQAeAGAYAWQAXAXAIAeIADASQARgBASAEQAfAIAUAVQAVAWAHAeQAEAQgBARIAAAAQAcACAXAOQAWAPAOAYQAOAYAAAbIAAAHQANgBAOACQAfAEAYATQAXATAKAeQALAegHAeIAAACQAJgDAKgCQAdgEAdALQAcAMASAXQASAYAEAeIABAMQAJgFAJgDQAfgJAhAKQAgALAVAZQAQATAFAZQANgJAPgGQAegLAgAIQAhAIAWAXQAVAWAGAgQAHAfgLAcQgLAdgZAUQgZATgeADIgMABQgSAAgRgGg");
	var mask_11_graphics_28 = new cjs.Graphics().p("AUhSJQgXgIgRgQQgRgRgJgXIgFgQIgJAGQgbARgggBQgwgBgfgkQgPgRgIgWQgFgQAAgRQgTALgWABQgdADgcgOQgcgOgQgYQgOgVgCgaQgDgVAFgTIgJADQgdAIgegKQgfgJgUgXQgdghACgrIgPAAQgXAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgTgYQgOgSgGgYIgDgSQgdADgZgMQgdgNgRgcQgSgbAAggQAAgTAGgQQgQgCgPgIQgdgNgQgaQgKgPgEgQQgEgQAAgPIAAgDQgMADgMgBQglgBgfgaQghgegDgsQgDgeAPgdQgLgDgKgGQgZgOgPgaQgPgZgBgdQAAgPAEgPIABgDQgSABgRgFQgbgIgTgTQgTgTgJgaQgHgaADgYQgRgBgRgHQgdgMgRgZQgaglAHgtQACgMAEgMQgPgBgPgFQgWgJgRgSQgRgRgIgXQgHgSABgUQABgYAKgWQgbAFgagIQgWgHgSgQQgRgRgJgVQgKgXABgaIAAgGQgUgGgRgNQgggYgIgmQgDgPAAgOQgRgCgQgHQgagNgSgZQgRgZgCgdIgBgNQgVAHgXgCQgXgCgWgNQgVgMgNgUQgMgSgEgVQgLACgMAAQgmgCgdgZQgUgSgJgWIgIAEQgWAMgYABQgYABgXgJQgXgJgQgSIgLgNQgNAIgQAEQgYAGgYgFQgWgFgSgMQgHASgOAPQgUAWgaAJQgbAIgcgFQgdgFgVgSIgEgDQgGANgJALQgWAZgjAJQgWAGgWgEQAEAVgFAVQgHAcgUAWQgVAWgcAIIgNADQACAUgFATQgJAggaAXQgMAKgOAHQAOAQAHAWQAJAegHAcQgHAdgVAWIgOALQAOAIALAMQAUAWAGAfQAGAfgLAcQgHATgOAQQAMAEALAIQAVAOANAXQANAYAAAZQABAagLAYQgIAQgMANQAKAFAIAGQATAPALAUQAOAYgBAeQAAARgFAPQAQgDARADQAdAEAWARQAWARAMAaQALAbgDAbQgCAcgRAYQgQAYgZAMQgZANgdgCQgdgBgYgPQgMgIgKgKQgRgTgIgaQgHgZAFgaIADgNQgXAEgXgHQgYgGgSgQQgUgRgLgaQgKgZADgbQADgXAMgUQAGgLAIgJQgMgGgKgIQgTgQgKgWQgLgYABgaQABgdAQgaIALgOIgHgDQgcgOgRgZQgZgmAJgsQAGgeAWgXQAHgHAHgGQgMgHgKgKQgSgTgHgaQgIgZAEgaQAGgdATgXQAQgTAVgKQgHgJgGgKQgNgbABgcQABgeATgbQASgbAcgMQAMgGAOgCQgCgQADgPQAGgdAUgXQAUgXAbgJQAagJAaAFQgDgTAFgUQAHghAZgYQAagYAhgFQAhgFAfAQQAOAGALAKQAGgLAIgKQAXgdAkgJQAbgGAcAHQASAFAOAKIADgGQAMgaAZgRQAYgSAdgCQAdgCAbAMQAbANAQAXIACADQAUgMAWgDQAegEAdANQAcAOARAYQAGAJAEAKIAOgHQAegOAiAGQAjAGAXAXQAXAWAIAhQAKgCAKABQAZAAAWALQAWALAPATQAQAUAFAYQADAOgBAOQAjgLAkANQAcAKATAYQAUAYAEAdQABAKAAALQASABAQAIQAbANASAbQARAbAAAfIAAANQAbAHAVAVQAVAWAIAcQAHAdgIAdQgDAJgEAIIAGgBQAbgDAZAJQAlAPATAjQAUAkgJAnQgCAKgEAKIARADQAfAHAVAWQAVAWAHAeQAFAVgDAUQAUACASAIQAVAJAPASQAQARAHAWQAHAWgCAYQgBAKgDAKQATgBASAGQAZAIASASQATARAIAZQAJAXgDAaQgDAUgJASQAZAHASASQAYAXAHAjQADANgBANQAZgFAaAIQAeAJAUAWQAVAWAFAgQAGAcgJAbIAFABQAfAGAXAWQAYAXAHAeIADASQASgBASAEQAeAIAVAVQAUAWAIAeQAEAQgCARIABAAQAcACAWAOQAXAPANAYQAOAYABAbIAAAHQANgBAOACQAfAEAXATQAYATAKAeQAKAegGAeIgBACQAKgDAKgCQAdgEAcALQAdAMASAXQARAYAEAeIABAMQAJgFAKgDQAfgJAgAKQAhALAUAZQAQATAFAZQANgJAPgGQAegLAhAIQAVAFAQAMQAMgWAVgPQAXgRAcgDQAcgEAbAMQAbALASAWQARAXAEAdQAEAdgKAaQgKAbgWASQgXATgcAFQgbAFgcgKQgPgFgMgJQgLAUgSAPQgaATgeADIgMABQgRAAgSgGg");
	var mask_11_graphics_29 = new cjs.Graphics().p("AUGSJQgYgIgRgQQgRgRgJgXIgFgQIgIAGQgcARgfgBQgwgBgggkQgPgRgHgWQgFgQAAgRQgUALgVABQgeADgbgOQgcgOgQgYQgOgVgDgaQgCgVAFgTIgKADQgdAIgegKQgegJgUgXQgdghACgrIgPAAQgYAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgSgYQgPgSgGgYIgCgSQgdADgagMQgcgNgSgcQgRgbAAggQAAgTAFgQQgPgCgQgIQgcgNgRgaQgJgPgFgQQgEgQABgPIAAgDQgMADgNgBQglgBgegaQgigegDgsQgCgeAPgdQgLgDgKgGQgZgOgQgaQgPgZAAgdQgBgPAFgPIABgDQgSABgSgFQgbgIgTgTQgTgTgIgaQgIgaAEgYQgQgBgSgHQgdgMgSgZQgaglAHgtQACgMAFgMQgPgBgPgFQgWgJgRgSQgRgRgIgXQgHgSABgUQAAgYALgWQgbAFgagIQgXgHgRgQQgSgRgJgVQgKgXABgaIABgGQgVgGgRgNQgfgYgJgmQgDgPABgOQgRgCgQgHQgbgNgRgZQgSgZgCgdIAAgNQgWAHgWgCQgYgCgVgNQgVgMgOgUQgLgSgFgVQgLACgMAAQglgCgegZQgTgSgKgWIgHAEQgWAMgYABQgZABgXgJQgXgJgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAPQgTAWgbAJQgaAIgdgFQgcgFgWgSIgDgDQgGANgKALQgWAZgiAJQgXAGgVgEQADAVgEAVQgHAcgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMAKgNAHQAOAQAGAWQAJAegHAcQgGAdgWAWIgNALQAOAIAKAMQAUAWAGAfQAGAfgKAcQgHATgOAQQAMAEAKAIQAVAOANAXQANAYABAZQABAagMAYQgHAQgMANQAJAFAJAGQATAPALAUQANAYAAAeQAAARgFAPQAQgDAQADQAdAEAWARQAXARALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgZANgdgCQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgRgKgaQgKgZADgbQACgXAMgUQAHgLAIgJQgMgGgLgIQgTgQgKgWQgKgYAAgaQABgdARgaIALgOIgHgDQgdgOgRgZQgZgmAKgsQAGgeAVgXQAHgHAIgGQgMgHgKgKQgSgTgIgaQgIgZAFgaQAFgdAUgXQAQgTAVgKQgIgJgFgKQgOgbACgcQABgeASgbQASgbAcgMQANgGAOgCQgCgQADgPQAFgdAUgXQAUgXAcgJQAZgJAbAFQgDgTAEgUQAHghAagYQAZgYAhgFQAhgFAgAQQAOAGALAKQAFgLAIgKQAYgdAkgJQAbgGAcAHQASAFAOAKIADgGQAMgaAYgRQAZgSAcgCQAdgCAbAMQAbANARAXIACADQATgMAXgDQAegEAcANQAdAOARAYQAGAJAEAKIANgHQAegOAjAGQAiAGAYAXQAXAWAHAhQAKgCAKABQAaAAAVALQAWALAQATQAPAUAFAYQAEAOgBAOQAigLAlANQAbAKAUAYQATAYAEAdQACAKgBALQASABAQAIQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAWAHAcQAHAdgIAdQgCAJgEAIIAGgBQAagDAZAJQAlAPAUAjQATAkgIAnQgCAKgEAKIARADQAeAHAWAWQAVAWAHAeQAFAVgDAUQATACASAIQAVAJAQASQAQARAHAWQAHAWgDAYQgBAKgDAKQATgBATAGQAZAIASASQASARAJAZQAIAXgDAaQgCAUgKASQAaAHASASQAYAXAHAjQACANAAANQAYgFAaAIQAeAJAVAWQAUAWAGAgQAFAcgJAbIAGABQAeAGAYAWQAXAXAIAeIADASQARgBASAEQAfAIAUAVQAVAWAHAeQAEAQgBARIAAAAQAcACAXAOQAWAPAOAYQAOAYAAAbIAAAHQANgBAOACQAfAEAYATQAXATAKAeQALAegHAeIAAACQAJgDAKgCQAdgEAdALQAcAMASAXQASAYAEAeIABAMQAJgFAJgDQAfgJAhAKQAgALAVAZQAQATAFAZQANgJAPgGQAegLAgAIQAWAFAQAMQALgWAVgPQAJgHAKgEIgBgCQgJgVABgXQAAgXAJgVQAOgeAfgSQAegSAhACQAiADAbAWQAbAXAJAgQAHAWgEAYQgDAYgNAUQgNAUgUANIgNAGQAGAOACAPQAEAdgKAaQgKAbgXASQgXATgbAFQgcAFgcgKQgOgFgMgJQgLAUgTAPQgZATgeADIgMABQgSAAgRgGg");
	var mask_11_graphics_30 = new cjs.Graphics().p("AUGSJQgYgIgRgQQgRgRgJgXIgFgQIgIAGQgcARgfgBQgwgBgggkQgPgRgHgWQgFgQAAgRQgUALgVABQgeADgbgOQgcgOgQgYQgOgVgDgaQgCgVAFgTIgKADQgdAIgegKQgegJgUgXQgdghACgrIgPAAQgYAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgSgYQgPgSgGgYIgCgSQgdADgagMQgcgNgSgcQgRgbAAggQAAgTAFgQQgPgCgQgIQgcgNgRgaQgJgPgFgQQgEgQABgPIAAgDQgMADgNgBQglgBgegaQgigegDgsQgCgeAPgdQgLgDgKgGQgZgOgQgaQgPgZAAgdQgBgPAFgPIABgDQgSABgSgFQgbgIgTgTQgTgTgIgaQgIgaAEgYQgQgBgSgHQgdgMgSgZQgaglAHgtQACgMAFgMQgPgBgPgFQgWgJgRgSQgRgRgIgXQgHgSABgUQAAgYALgWQgbAFgagIQgXgHgRgQQgSgRgJgVQgKgXABgaIABgGQgVgGgRgNQgfgYgJgmQgDgPABgOQgRgCgQgHQgbgNgRgZQgSgZgCgdIAAgNQgWAHgWgCQgYgCgVgNQgVgMgOgUQgLgSgFgVQgLACgMAAQglgCgegZQgTgSgKgWIgHAEQgWAMgYABQgZABgXgJQgXgJgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAPQgTAWgbAJQgaAIgdgFQgcgFgWgSIgDgDQgGANgKALQgWAZgiAJQgXAGgVgEQADAVgEAVQgHAcgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMAKgNAHQAOAQAGAWQAJAegHAcQgGAdgWAWIgNALQAOAIAKAMQAUAWAGAfQAGAfgKAcQgHATgOAQQAMAEAKAIQAVAOANAXQANAYABAZQABAagMAYQgHAQgMANQAJAFAJAGQATAPALAUQANAYAAAeQAAARgFAPQAQgDAQADQAdAEAWARQAXARALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgZANgdgCQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgRgKgaQgKgZADgbQACgXAMgUQAHgLAIgJQgMgGgLgIQgTgQgKgWQgKgYAAgaQABgdARgaIALgOIgHgDQgdgOgRgZQgZgmAKgsQAGgeAVgXQAHgHAIgGQgMgHgKgKQgSgTgIgaQgIgZAFgaQAFgdAUgXQAQgTAVgKQgIgJgFgKQgOgbACgcQABgeASgbQASgbAcgMQANgGAOgCQgCgQADgPQAFgdAUgXQAUgXAcgJQAZgJAbAFQgDgTAEgUQAHghAagYQAZgYAhgFQAhgFAgAQQAOAGALAKQAFgLAIgKQAYgdAkgJQAbgGAcAHQASAFAOAKIADgGQAMgaAYgRQAZgSAcgCQAdgCAbAMQAbANARAXIACADQATgMAXgDQAegEAcANQAdAOARAYQAGAJAEAKIANgHQAegOAjAGQAiAGAYAXQAXAWAHAhQAKgCAKABQAaAAAVALQAWALAQATQAPAUAFAYQAEAOgBAOQAigLAlANQAbAKAUAYQATAYAEAdQACAKgBALQASABAQAIQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAWAHAcQAHAdgIAdQgCAJgEAIIAGgBQAagDAZAJQAlAPAUAjQATAkgIAnQgCAKgEAKIARADQAeAHAWAWQAVAWAHAeQAFAVgDAUQATACASAIQAVAJAQASQAQARAHAWQAHAWgDAYQgBAKgDAKQATgBATAGQAZAIASASQASARAJAZQAIAXgDAaQgCAUgKASQAaAHASASQAYAXAHAjQACANAAANQAYgFAaAIQAeAJAVAWQAUAWAGAgQAFAcgJAbIAGABQAeAGAYAWQAXAXAIAeIADASQARgBASAEQAfAIAUAVQAVAWAHAeQAEAQgBARIAAAAQAcACAXAOQAWAPAOAYQAOAYAAAbIAAAHQANgBAOACQAfAEAYATQAXATAKAeQALAegHAeIAAACQAJgDAKgCQAdgEAdALQAcAMASAXQASAYAEAeIABAMQAJgFAJgDQAfgJAhAKQAgALAVAZQAQATAFAZQANgJAPgGQAegLAgAIQAWAFAQAMQALgWAVgPQAJgHAKgEIgBgCQgJgVABgXQAAgVAHgSQgYgIgRgSQghghABguQAAgYALgWQALgXATgPQATgPAYgGQAYgGAXAFQAXAFAUAPQAUAPAMAVQAMAXAAAbQABAWgIAUQARAGAQANQAbAXAJAgQAHAWgEAYQgDAYgNAUQgNAUgUANIgNAGQAGAOACAPQAEAdgKAaQgKAbgXASQgXATgbAFQgcAFgcgKQgOgFgMgJQgLAUgTAPQgZATgeADIgMABQgSAAgRgGg");
	var mask_11_graphics_31 = new cjs.Graphics().p("AUGSJQgYgIgRgQQgRgRgJgXIgFgQIgIAGQgcARgfgBQgwgBgggkQgPgRgHgWQgFgQAAgRQgUALgVABQgeADgbgOQgcgOgQgYQgOgVgDgaQgCgVAFgTIgKADQgdAIgegKQgegJgUgXQgdghACgrIgPAAQgYAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgSgYQgPgSgGgYIgCgSQgdADgagMQgcgNgSgcQgRgbAAggQAAgTAFgQQgPgCgQgIQgcgNgRgaQgJgPgFgQQgEgQABgPIAAgDQgMADgNgBQglgBgegaQgigegDgsQgCgeAPgdQgLgDgKgGQgZgOgQgaQgPgZAAgdQgBgPAFgPIABgDQgSABgSgFQgbgIgTgTQgTgTgIgaQgIgaAEgYQgQgBgSgHQgdgMgSgZQgaglAHgtQACgMAFgMQgPgBgPgFQgWgJgRgSQgRgRgIgXQgHgSABgUQAAgYALgWQgbAFgagIQgXgHgRgQQgSgRgJgVQgKgXABgaIABgGQgVgGgRgNQgfgYgJgmQgDgPABgOQgRgCgQgHQgbgNgRgZQgSgZgCgdIAAgNQgWAHgWgCQgYgCgVgNQgVgMgOgUQgLgSgFgVQgLACgMAAQglgCgegZQgTgSgKgWIgHAEQgWAMgYABQgZABgXgJQgXgJgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAPQgTAWgbAJQgaAIgdgFQgcgFgWgSIgDgDQgGANgKALQgWAZgiAJQgXAGgVgEQADAVgEAVQgHAcgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMAKgNAHQAOAQAGAWQAJAegHAcQgGAdgWAWIgNALQAOAIAKAMQAUAWAGAfQAGAfgKAcQgHATgOAQQAMAEAKAIQAVAOANAXQANAYABAZQABAagMAYQgHAQgMANQAJAFAJAGQATAPALAUQANAYAAAeQAAARgFAPQAQgDAQADQAdAEAWARQAXARALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgZANgdgCQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgRgKgaQgKgZADgbQACgXAMgUQAHgLAIgJQgMgGgLgIQgTgQgKgWQgKgYAAgaQABgdARgaIALgOIgHgDQgdgOgRgZQgZgmAKgsQAGgeAVgXQAHgHAIgGQgMgHgKgKQgSgTgIgaQgIgZAFgaQAFgdAUgXQAQgTAVgKQgIgJgFgKQgOgbACgcQABgeASgbQASgbAcgMQANgGAOgCQgCgQADgPQAFgdAUgXQAUgXAcgJQAZgJAbAFQgDgTAEgUQAHghAagYQAZgYAhgFQAhgFAgAQQAOAGALAKQAFgLAIgKQAYgdAkgJQAbgGAcAHQASAFAOAKIADgGQAMgaAYgRQAZgSAcgCQAdgCAbAMQAbANARAXIACADQATgMAXgDQAegEAcANQAdAOARAYQAGAJAEAKIANgHQAegOAjAGQAiAGAYAXQAXAWAHAhQAKgCAKABQAaAAAVALQAWALAQATQAPAUAFAYQAEAOgBAOQAigLAlANQAbAKAUAYQATAYAEAdQACAKgBALQASABAQAIQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAWAHAcQAHAdgIAdQgCAJgEAIIAGgBQAagDAZAJQAlAPAUAjQATAkgIAnQgCAKgEAKIARADQAeAHAWAWQAVAWAHAeQAFAVgDAUQATACASAIQAVAJAQASQAQARAHAWQAHAWgDAYQgBAKgDAKQATgBATAGQAZAIASASQASARAJAZQAIAXgDAaQgCAUgKASQAaAHASASQAYAXAHAjQACANAAANQAYgFAaAIQAeAJAVAWQAUAWAGAgQAFAcgJAbIAGABQAeAGAYAWQAXAXAIAeIADASQARgBASAEQAfAIAUAVQAVAWAHAeQAEAQgBARIAAAAQAcACAXAOQAWAPAOAYQAOAYAAAbIAAAHQANgBAOACQAfAEAYATQAXATAKAeQALAegHAeIAAACQAJgDAKgCQAdgEAdALQAcAMASAXQASAYAEAeIABAMQAJgFAJgDQAfgJAhAKQAgALAVAZQAQATAFAZQANgJAPgGQAegLAgAIQAWAFAQAMQALgWAVgPQAJgHAKgEIgBgCQgJgVABgXQAAgVAHgSQgYgIgRgSQghghABguQAAgOAEgNIgFgBQgbgMgRgWQgPgTgFgVQgDgMAAgNQAAgPABgIQACgPAJgQQANgZAZgQQAYgQAcgBQAcgCAbANQAaAMAQAYQAQAXADAdQACAUgFATQAOAFANAKQAUAPAMAVQAMAXAAAbQABAWgIAUQARAGAQANQAbAXAJAgQAHAWgEAYQgDAYgNAUQgNAUgUANIgNAGQAGAOACAPQAEAdgKAaQgKAbgXASQgXATgbAFQgcAFgcgKQgOgFgMgJQgLAUgTAPQgZATgeADIgMABQgSAAgRgGg");
	var mask_11_graphics_32 = new cjs.Graphics().p("AUGSJQgYgIgRgQQgRgRgJgXIgFgQIgIAGQgcARgfgBQgwgBgggkQgPgRgHgWQgFgQAAgRQgUALgVABQgeADgbgOQgcgOgQgYQgOgVgDgaQgCgVAFgTIgKADQgdAIgegKQgegJgUgXQgdghACgrIgPAAQgYAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgSgYQgPgSgGgYIgCgSQgdADgagMQgcgNgSgcQgRgbAAggQAAgTAFgQQgPgCgQgIQgcgNgRgaQgJgPgFgQQgEgQABgPIAAgDQgMADgNgBQglgBgegaQgigegDgsQgCgeAPgdQgLgDgKgGQgZgOgQgaQgPgZAAgdQgBgPAFgPIABgDQgSABgSgFQgbgIgTgTQgTgTgIgaQgIgaAEgYQgQgBgSgHQgdgMgSgZQgaglAHgtQACgMAFgMQgPgBgPgFQgWgJgRgSQgRgRgIgXQgHgSABgUQAAgYALgWQgbAFgagIQgXgHgRgQQgSgRgJgVQgKgXABgaIABgGQgVgGgRgNQgfgYgJgmQgDgPABgOQgRgCgQgHQgbgNgRgZQgSgZgCgdIAAgNQgWAHgWgCQgYgCgVgNQgVgMgOgUQgLgSgFgVQgLACgMAAQglgCgegZQgTgSgKgWIgHAEQgWAMgYABQgZABgXgJQgXgJgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAPQgTAWgbAJQgaAIgdgFQgcgFgWgSIgDgDQgGANgKALQgWAZgiAJQgXAGgVgEQADAVgEAVQgHAcgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMAKgNAHQAOAQAGAWQAJAegHAcQgGAdgWAWIgNALQAOAIAKAMQAUAWAGAfQAGAfgKAcQgHATgOAQQAMAEAKAIQAVAOANAXQANAYABAZQABAagMAYQgHAQgMANQAJAFAJAGQATAPALAUQANAYAAAeQAAARgFAPQAQgDAQADQAdAEAWARQAXARALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgZANgdgCQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgRgKgaQgKgZADgbQACgXAMgUQAHgLAIgJQgMgGgLgIQgTgQgKgWQgKgYAAgaQABgdARgaIALgOIgHgDQgdgOgRgZQgZgmAKgsQAGgeAVgXQAHgHAIgGQgMgHgKgKQgSgTgIgaQgIgZAFgaQAFgdAUgXQAQgTAVgKQgIgJgFgKQgOgbACgcQABgeASgbQASgbAcgMQANgGAOgCQgCgQADgPQAFgdAUgXQAUgXAcgJQAZgJAbAFQgDgTAEgUQAHghAagYQAZgYAhgFQAhgFAgAQQAOAGALAKQAFgLAIgKQAYgdAkgJQAbgGAcAHQASAFAOAKIADgGQAMgaAYgRQAZgSAcgCQAdgCAbAMQAbANARAXIACADQATgMAXgDQAegEAcANQAdAOARAYQAGAJAEAKIANgHQAegOAjAGQAiAGAYAXQAXAWAHAhQAKgCAKABQAaAAAVALQAWALAQATQAPAUAFAYQAEAOgBAOQAigLAlANQAbAKAUAYQATAYAEAdQACAKgBALQASABAQAIQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAWAHAcQAHAdgIAdQgCAJgEAIIAGgBQAagDAZAJQAlAPAUAjQATAkgIAnQgCAKgEAKIARADQAeAHAWAWQAVAWAHAeQAFAVgDAUQATACASAIQAVAJAQASQAQARAHAWQAHAWgDAYQgBAKgDAKQATgBATAGQAZAIASASQASARAJAZQAIAXgDAaQgCAUgKASQAaAHASASQAYAXAHAjQACANAAANQAYgFAaAIQAeAJAVAWQAUAWAGAgQAFAcgJAbIAGABQAeAGAYAWQAXAXAIAeIADASQARgBASAEQAfAIAUAVQAVAWAHAeQAEAQgBARIAAAAQAcACAXAOQAWAPAOAYQAOAYAAAbIAAAHQANgBAOACQAfAEAYATQAXATAKAeQALAegHAeIAAACQAJgDAKgCQAdgEAdALQAcAMASAXQASAYAEAeIABAMQAJgFAJgDQAfgJAhAKQAgALAVAZQAQATAFAZQANgJAPgGQAegLAgAIQAWAFAQAMQALgWAVgPQAJgHAKgEIgBgCQgJgVABgXQAAgVAHgSQgYgIgRgSQghghABguQAAgOAEgNIgFgBQgbgMgRgWQgPgTgFgVQgDgMAAgNQAAgPABgIQgaABgZgLQgegOgRgbQgSgdABgiQABgmAageQAZgdAmgHQAbgFAbAJQAcAKASAUQATAUAHAcQAGAYgEAXQAbgCAaANQAaAMAQAYQAQAXADAdQACAUgFATQAOAFANAKQAUAPAMAVQAMAXAAAbQABAWgIAUQARAGAQANQAbAXAJAgQAHAWgEAYQgDAYgNAUQgNAUgUANIgNAGQAGAOACAPQAEAdgKAaQgKAbgXASQgXATgbAFQgcAFgcgKQgOgFgMgJQgLAUgTAPQgZATgeADIgMABQgSAAgRgGg");
	var mask_11_graphics_33 = new cjs.Graphics().p("AUGSJQgYgIgRgQQgRgRgJgXIgFgQIgIAGQgcARgfgBQgwgBgggkQgPgRgHgWQgFgQAAgRQgUALgVABQgeADgbgOQgcgOgQgYQgOgVgDgaQgCgVAFgTIgKADQgdAIgegKQgegJgUgXQgdghACgrIgPAAQgYAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgSgYQgPgSgGgYIgCgSQgdADgagMQgcgNgSgcQgRgbAAggQAAgTAFgQQgPgCgQgIQgcgNgRgaQgJgPgFgQQgEgQABgPIAAgDQgMADgNgBQglgBgegaQgigegDgsQgCgeAPgdQgLgDgKgGQgZgOgQgaQgPgZAAgdQgBgPAFgPIABgDQgSABgSgFQgbgIgTgTQgTgTgIgaQgIgaAEgYQgQgBgSgHQgdgMgSgZQgaglAHgtQACgMAFgMQgPgBgPgFQgWgJgRgSQgRgRgIgXQgHgSABgUQAAgYALgWQgbAFgagIQgXgHgRgQQgSgRgJgVQgKgXABgaIABgGQgVgGgRgNQgfgYgJgmQgDgPABgOQgRgCgQgHQgbgNgRgZQgSgZgCgdIAAgNQgWAHgWgCQgYgCgVgNQgVgMgOgUQgLgSgFgVQgLACgMAAQglgCgegZQgTgSgKgWIgHAEQgWAMgYABQgZABgXgJQgXgJgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAPQgTAWgbAJQgaAIgdgFQgcgFgWgSIgDgDQgGANgKALQgWAZgiAJQgXAGgVgEQADAVgEAVQgHAcgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMAKgNAHQAOAQAGAWQAJAegHAcQgGAdgWAWIgNALQAOAIAKAMQAUAWAGAfQAGAfgKAcQgHATgOAQQAMAEAKAIQAVAOANAXQANAYABAZQABAagMAYQgHAQgMANQAJAFAJAGQATAPALAUQANAYAAAeQAAARgFAPQAQgDAQADQAdAEAWARQAXARALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgZANgdgCQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgRgKgaQgKgZADgbQACgXAMgUQAHgLAIgJQgMgGgLgIQgTgQgKgWQgKgYAAgaQABgdARgaIALgOIgHgDQgdgOgRgZQgZgmAKgsQAGgeAVgXQAHgHAIgGQgMgHgKgKQgSgTgIgaQgIgZAFgaQAFgdAUgXQAQgTAVgKQgIgJgFgKQgOgbACgcQABgeASgbQASgbAcgMQANgGAOgCQgCgQADgPQAFgdAUgXQAUgXAcgJQAZgJAbAFQgDgTAEgUQAHghAagYQAZgYAhgFQAhgFAgAQQAOAGALAKQAFgLAIgKQAYgdAkgJQAbgGAcAHQASAFAOAKIADgGQAMgaAYgRQAZgSAcgCQAdgCAbAMQAbANARAXIACADQATgMAXgDQAegEAcANQAdAOARAYQAGAJAEAKIANgHQAegOAjAGQAiAGAYAXQAXAWAHAhQAKgCAKABQAaAAAVALQAWALAQATQAPAUAFAYQAEAOgBAOQAigLAlANQAbAKAUAYQATAYAEAdQACAKgBALQASABAQAIQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAWAHAcQAHAdgIAdQgCAJgEAIIAGgBQAagDAZAJQAlAPAUAjQATAkgIAnQgCAKgEAKIARADQAeAHAWAWQAVAWAHAeQAFAVgDAUQATACASAIQAVAJAQASQAQARAHAWQAHAWgDAYQgBAKgDAKQATgBATAGQAZAIASASQASARAJAZQAIAXgDAaQgCAUgKASQAaAHASASQAYAXAHAjQACANAAANQAYgFAaAIQAeAJAVAWQAUAWAGAgQAFAcgJAbIAGABQAeAGAYAWQAXAXAIAeIADASQARgBASAEQAfAIAUAVQAVAWAHAeQAEAQgBARIAAAAQAcACAXAOQAWAPAOAYQAOAYAAAbIAAAHQANgBAOACQAfAEAYATQAXATAKAeQALAegHAeIAAACQAJgDAKgCQAdgEAdALQAcAMASAXQASAYAEAeIABAMQAJgFAJgDQAfgJAhAKQAgALAVAZQAQATAFAZQANgJAPgGQAegLAgAIQAWAFAQAMQALgWAVgPQAJgHAKgEIgBgCQgJgVABgXQAAgVAHgSQgYgIgRgSQghghABguQAAgOAEgNIgFgBQgbgMgRgWQgPgTgFgVQgDgMAAgNQAAgPABgIQgaABgZgLQgegOgRgbQgSgdABgiQAAgPAFgNIgKgDQgegKgTgXQgPgRgGgXQgHgXADgXQAEgdAUgYQAUgZAcgKQAcgKAfAHQAfAGAWAUQAWAVAIAeQAJAegIAcIgBADIAJADQAcAKASAUQATAUAHAcQAGAYgEAXQAbgCAaANQAaAMAQAYQAQAXADAdQACAUgFATQAOAFANAKQAUAPAMAVQAMAXAAAbQABAWgIAUQARAGAQANQAbAXAJAgQAHAWgEAYQgDAYgNAUQgNAUgUANIgNAGQAGAOACAPQAEAdgKAaQgKAbgXASQgXATgbAFQgcAFgcgKQgOgFgMgJQgLAUgTAPQgZATgeADIgMABQgSAAgRgGg");
	var mask_11_graphics_34 = new cjs.Graphics().p("AUGSJQgYgIgRgQQgRgRgJgXIgFgQIgIAGQgcARgfgBQgwgBgggkQgPgRgHgWQgFgQAAgRQgUALgVABQgeADgbgOQgcgOgQgYQgOgVgDgaQgCgVAFgTIgKADQgdAIgegKQgegJgUgXQgdghACgrIgPAAQgYAAgWgLQgWgLgPgTQgPgSgGgYQgEgRABgQQgPgCgPgFQgdgLgSgYQgPgSgGgYIgCgSQgdADgagMQgcgNgSgcQgRgbAAggQAAgTAFgQQgPgCgQgIQgcgNgRgaQgJgPgFgQQgEgQABgPIAAgDQgMADgNgBQglgBgegaQgigegDgsQgCgeAPgdQgLgDgKgGQgZgOgQgaQgPgZAAgdQgBgPAFgPIABgDQgSABgSgFQgbgIgTgTQgTgTgIgaQgIgaAEgYQgQgBgSgHQgdgMgSgZQgaglAHgtQACgMAFgMQgPgBgPgFQgWgJgRgSQgRgRgIgXQgHgSABgUQAAgYALgWQgbAFgagIQgXgHgRgQQgSgRgJgVQgKgXABgaIABgGQgVgGgRgNQgfgYgJgmQgDgPABgOQgRgCgQgHQgbgNgRgZQgSgZgCgdIAAgNQgWAHgWgCQgYgCgVgNQgVgMgOgUQgLgSgFgVQgLACgMAAQglgCgegZQgTgSgKgWIgHAEQgWAMgYABQgZABgXgJQgXgJgQgSIgKgNQgOAIgPAEQgYAGgZgFQgWgFgSgMQgHASgOAPQgTAWgbAJQgaAIgdgFQgcgFgWgSIgDgDQgGANgKALQgWAZgiAJQgXAGgVgEQADAVgEAVQgHAcgVAWQgVAWgcAIIgNADQADAUgGATQgIAggbAXQgMAKgNAHQAOAQAGAWQAJAegHAcQgGAdgWAWIgNALQAOAIAKAMQAUAWAGAfQAGAfgKAcQgHATgOAQQAMAEAKAIQAVAOANAXQANAYABAZQABAagMAYQgHAQgMANQAJAFAJAGQATAPALAUQANAYAAAeQAAARgFAPQAQgDAQADQAdAEAWARQAXARALAaQAMAbgDAbQgDAcgQAYQgRAYgZAMQgZANgdgCQgdgBgXgPQgNgIgJgKQgSgTgHgaQgIgZAFgaIAEgNQgXAEgYgHQgYgGgSgQQgUgRgKgaQgKgZADgbQACgXAMgUQAHgLAIgJQgMgGgLgIQgTgQgKgWQgKgYAAgaQABgdARgaIALgOIgHgDQgdgOgRgZQgZgmAKgsQAGgeAVgXQAHgHAIgGQgMgHgKgKQgSgTgIgaQgIgZAFgaQAFgdAUgXQAQgTAVgKQgIgJgFgKQgOgbACgcQABgeASgbQASgbAcgMQANgGAOgCQgCgQADgPQAFgdAUgXQAUgXAcgJQAZgJAbAFQgDgTAEgUQAHghAagYQAZgYAhgFQAhgFAgAQQAOAGALAKQAFgLAIgKQAYgdAkgJQAbgGAcAHQASAFAOAKIADgGQAMgaAYgRQAZgSAcgCQAdgCAbAMQAbANARAXIACADQATgMAXgDQAegEAcANQAdAOARAYQAGAJAEAKIANgHQAegOAjAGQAiAGAYAXQAXAWAHAhQAKgCAKABQAaAAAVALQAWALAQATQAPAUAFAYQAEAOgBAOQAigLAlANQAbAKAUAYQATAYAEAdQACAKgBALQASABAQAIQAcANARAbQARAbABAfIgBANQAbAHAVAVQAWAWAHAcQAHAdgIAdQgCAJgEAIIAGgBQAagDAZAJQAlAPAUAjQATAkgIAnQgCAKgEAKIARADQAeAHAWAWQAVAWAHAeQAFAVgDAUQATACASAIQAVAJAQASQAQARAHAWQAHAWgDAYQgBAKgDAKQATgBATAGQAZAIASASQASARAJAZQAIAXgDAaQgCAUgKASQAaAHASASQAYAXAHAjQACANAAANQAYgFAaAIQAeAJAVAWQAUAWAGAgQAFAcgJAbIAGABQAeAGAYAWQAXAXAIAeIADASQARgBASAEQAfAIAUAVQAVAWAHAeQAEAQgBARIAAAAQAcACAXAOQAWAPAOAYQAOAYAAAbIAAAHQANgBAOACQAfAEAYATQAXATAKAeQALAegHAeIAAACQAJgDAKgCQAdgEAdALQAcAMASAXQASAYAEAeIABAMQAJgFAJgDQAfgJAhAKQAgALAVAZQAQATAFAZQANgJAPgGQAegLAgAIQAWAFAQAMQALgWAVgPQAJgHAKgEIgBgCQgJgVABgXQAAgVAHgSQgYgIgRgSQghghABguQAAgOAEgNIgFgBQgbgMgRgWQgPgTgFgVQgDgMAAgNQAAgPABgIQgaABgZgLQgegOgRgbQgSgdABgiQAAgPAFgNIgKgDQgegKgTgXQgPgRgGgXQgHgXADgXQACgJACgIQgSgBgSgGQgcgJgSgVQgTgWgGgbQgGgcAHgZQADgLAHgNQANgZAZgPQAYgPAcgCQAcgBAaANQAaAMAQAXQAQAWADAdQADAYgHAVQALAAALADQAfAGAWAUQAWAVAIAeQAJAegIAcIgBADIAJADQAcAKASAUQATAUAHAcQAGAYgEAXQAbgCAaANQAaAMAQAYQAQAXADAdQACAUgFATQAOAFANAKQAUAPAMAVQAMAXAAAbQABAWgIAUQARAGAQANQAbAXAJAgQAHAWgEAYQgDAYgNAUQgNAUgUANIgNAGQAGAOACAPQAEAdgKAaQgKAbgXASQgXATgbAFQgcAFgcgKQgOgFgMgJQgLAUgTAPQgZATgeADIgMABQgSAAgRgGg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:96.456,y:216.0259}).wait(1).to({graphics:mask_11_graphics_1,x:86.7964,y:208.908}).wait(1).to({graphics:mask_11_graphics_2,x:85.2049,y:200.2197}).wait(1).to({graphics:mask_11_graphics_3,x:83.1002,y:191.4448}).wait(1).to({graphics:mask_11_graphics_4,x:82.7,y:182.376}).wait(1).to({graphics:mask_11_graphics_5,x:82.7,y:173.8866}).wait(1).to({graphics:mask_11_graphics_6,x:82.7,y:167.9217}).wait(1).to({graphics:mask_11_graphics_7,x:85.309,y:161.6735}).wait(1).to({graphics:mask_11_graphics_8,x:93.9397,y:160.0071}).wait(1).to({graphics:mask_11_graphics_9,x:102.1156,y:157.4692}).wait(1).to({graphics:mask_11_graphics_10,x:109.4714,y:157.4692}).wait(1).to({graphics:mask_11_graphics_11,x:117.4773,y:157.4692}).wait(1).to({graphics:mask_11_graphics_12,x:123.7256,y:157.4692}).wait(1).to({graphics:mask_11_graphics_13,x:130.8456,y:157.4692}).wait(1).to({graphics:mask_11_graphics_14,x:135.6697,y:157.4692}).wait(1).to({graphics:mask_11_graphics_15,x:145.548,y:157.4692}).wait(1).to({graphics:mask_11_graphics_16,x:150.1344,y:157.4692}).wait(1).to({graphics:mask_11_graphics_17,x:155.1769,y:157.4692}).wait(1).to({graphics:mask_11_graphics_18,x:160.6331,y:157.4692}).wait(1).to({graphics:mask_11_graphics_19,x:163.8273,y:160.7668}).wait(1).to({graphics:mask_11_graphics_20,x:170.2749,y:166.4212}).wait(1).to({graphics:mask_11_graphics_21,x:174.6797,y:173.5941}).wait(1).to({graphics:mask_11_graphics_22,x:180.5471,y:178.6529}).wait(1).to({graphics:mask_11_graphics_23,x:185.5976,y:184.4658}).wait(1).to({graphics:mask_11_graphics_24,x:191.6683,y:190.1266}).wait(1).to({graphics:mask_11_graphics_25,x:198.8085,y:196.6307}).wait(1).to({graphics:mask_11_graphics_26,x:206.754,y:201.4619}).wait(1).to({graphics:mask_11_graphics_27,x:215.3683,y:204.6425}).wait(1).to({graphics:mask_11_graphics_28,x:223.3261,y:204.6425}).wait(1).to({graphics:mask_11_graphics_29,x:226.0667,y:204.6425}).wait(1).to({graphics:mask_11_graphics_30,x:226.0667,y:204.6425}).wait(1).to({graphics:mask_11_graphics_31,x:226.0667,y:204.6425}).wait(1).to({graphics:mask_11_graphics_32,x:226.0667,y:204.6425}).wait(1).to({graphics:mask_11_graphics_33,x:226.0667,y:204.6425}).wait(1).to({graphics:mask_11_graphics_34,x:226.0667,y:204.6425}).wait(131));

	// lady01
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,94.25,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(165));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,134,1180.6000000000001,839);
// library properties:
lib.properties = {
	id: '60DA81100517CA4E8ABB00633C9026A6',
	width: 474,
	height: 506,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/手繪lady_atlas_1.png", id:"手繪lady_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['60DA81100517CA4E8ABB00633C9026A6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;