(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.canvas1 = function() {
	this.initialize();

	// 开始按钮
	this.start = new lib.start();
	this.start.setTransform(945.3,517.3);

	// 信封
	this.xinfeng = new lib.xinfeng();
	this.xinfeng.setTransform(962.8,421.6);

	// 文字
	this.textSprite = new lib.textSprite();
	this.textSprite.setTransform(960,540);

	// 鞭炮和烟花
	this.run = new lib.run();
	this.run.setTransform(1047.1,456.8,1,1,0,0,0,-0.7,-47.5);

	// 背景
	this.instance = new lib.bg();

	this.addChild(this.instance,this.run,this.textSprite,this.xinfeng,this.start);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,79);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,20);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,943,663);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,993,271);


(lib.xf1 = function() {
	this.initialize();

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhgqgFCMBO/haIMByWBkNMhO/BaIg");
	mask.setTransform(296.7,-135.3);

	// 图层 1
	this.instance = new lib.button();
	this.instance.setTransform(-471.4,-331.4);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-471.4,-331.4,943,663);


(lib.xf = function() {
	this.initialize();

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhgqgFCMBO/haIMByWBkNMhO/BaIg");
	mask.setTransform(-283.6,363.5);

	// 图层 1
	this.instance = new lib.button();
	this.instance.setTransform(-471.4,-331.4);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-471.4,-331.4,943,663);


(lib.text_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text();
	this.instance.setTransform(-496.4,-135.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-496.4,-135.4,993,271);


(lib.start = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.008)").s().p("A3FT3MAAAgntMAuLAAAMAAAAntg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147.8,-127.1,295.8,254.4);


(lib.shape24 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgRBbIgHgCIABgCIAKAAIgBAFgAAdBIIgCgBIAJgCIABACIgDAJgAA6BGIADgCIAFAJIAAABgAhQBMIgCgCIAFgCIADgBIADAEIgJABgABRAiIALgFIgHAJgAhZgLIgCgBIAAgFIADgBIABABIACACIAAAFIABADgABUgOIACAAIAAAFIgIABgAhZgsIAAgHIABAAIAHAGIgIAEgAA7g8IACgCIgBACgABDhCIgBAAIADgDIABAEgAhFhFIAGgCIABABIgBAAIAAAFgAgmhZIADgBIAFAHIABADIgDABIgDACgAARhXIACgEIAFAFIACACIgBABg");
	this.shape.setTransform(1.7,-1.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AgCgBIgRgMIATAIIATgRIgNAUIAOALIgTgIIgQAWg");
	this.shape_1.setTransform(1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgHgCIgkgdIArASQAQgLAagZIgDADIgDAGIgMAQIgKARIAeAcQgbgMgOgGIgeAnIgCADIgCABIgBABIABgBIgDAEgAgCgDIgMAXIAQgUIATAHIgOgMIANgUIgUARIgTgIg");
	this.shape_2.setTransform(0.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#FE4B4B","#9E0101"],[0,0.38,1],234.9,219.4,245.5,219.4).s().p("AgKAAQgagcgmgcIBSAjIBAg0IgkBBQASAXAVAUQgggPgcgJIg1A/gAAAgCIgZA0IADgEIACgBIACgDIAegnQAOAGAbAMIgegcIAKgRIAMgQIAEgGIgBAAIADgDQgaAZgRALIgqgSg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-10.5,18.5,18.6);


(lib.shape23 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgDBoIADgCIAAgBIABADIgDABgABABaIADgBIABAAIADACIgGAAgAAdBRIAAgBIAGgBIAAABIgCAGgAhcA+IgBgBIAAgEIACAAIACACIAAADIAAACgABTA5IABAAIABAEIgGABgAgKA4IgFgBIABgBIAGgBIgBAEgAgoA0IgBgBIAAgEIABAAIABAAIABABIAAAEIABABgAAPAgIAAAAIAGgCIAAACIgCAFgAAjAeIACAAIADAGgABxAeIACAAIAAAEIgFABgAg/ASIgBAAIgBAAIADgBIACgBIACACgABYADIACgBIADAFIABACIgCAAIgCABgAAyAIIAHgEIgEAGgABdgSIACgBIADAEIABACIgCAAIgCACgAhygMIADgCIABAAIADADIgGAAgAg8gWIgCAAIAAgEIACAAIAAAAIACACIAAADIAAACgAA3ghIACAAIAAAEIgFABgAg9gsIAAgEIABABIAFADIgGACgAAjg2IACgBIgBACgAhWg4IAAgFIABABIAFAEIgGACgAApg6IgBAAIACgCIABADgAgwg8IAEgBIAAAAIAAABIAAACgAgbhIIACgBIADAEIABACIgCABIgCABgAAIhHIABgDIAEADIABABIgBABgABUhPIACAAIAAAEIgFABgAAQhnIACgBIADAFIABABIgCABIgCABgAgihiIAAgEIABABIAFADIgGACg");
	this.shape.setTransform(1.2,-0.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgOAUIgGAAQALgOAHgCQAEgDAHADIATAGIgQgRIACgCIAOAMIAQAXIgYgNQgMgHgGADQgOAGgJAWgAAXggIAEgCIAEgCIgEAGIgMAIIgCABIgCABIgHACgAgrghIAbALIgKACg");
	this.shape_1.setTransform(1.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AghANQAZgIgfgTQAKAGAHACIABAAIAKgCQAHgJABgJIAAgHIABADQADAYAIACIAHgCIACgBIACgBIAMgIIAIgGIgVAZIgCACIAQATIgTgGQgHgDgGADQgFACgLAOQACgVgUAAg");
	this.shape_2.setTransform(1,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#FE4B4B","#9E0101"],[0,0.38,1],234.4,221.1,245,221.1).s().p("Ag6AWQArgOg1giQARAKAMACIAQANIAAAAQgHgCgKgGQAfATgZAIQAUAAgCAVIAFAAIgGARIAAABQgEgjglAAgAASAIIAUgZIgIAGIAFgGQASgKAQgOQgqApgBAHQgBAHAHAIgAgEgZIAAgDIgBAHQAAAJgIAJIgagLQAgAFABgtIAAgCIAAACQAMA2AVgNIgTANQgIgBgEgYg");
	this.shape_3.setTransform(1.2,-1.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.3,-10.9,23.2,21);


(lib.shape22 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAbBfIgBgBIAHgBIABABIgDAHgAgQBFIgEgBIABgBIAHgBIgCAEgAgvBAIgBgBIAAgEIACAAIAAAAIABACIAAADIABACgAANArIgCAAIAGgBIABABIgCAGgAAmAwIgEgGIABgBIAEAHgAhJAcIADgBIACgBIACADIgGAAgABaANIACgBIADAFIACACIgDAAIgCACgAAxARIAHgEIgDAHgAhFgOIgCAAIAAgEIACAAIABAAIACACIAAADIAAACgAA3gaIABAAIAAAEIgFABgAhGglIAAgFIABABIAGADIgHADgAAigwIABgBIgBABgAhggzIAAgEIABAAIAFAEIgGADgAAog1IgCAAIADgBIABACgAg3g2IAEgBIAAAAIAAAAIAAADgAghhEIABgBIAEAFIABACIgCABIgDABgAAFhDIABgDIADAEIABABIAAABgAgphfIAAgFIACABIAEADIgGADg");
	this.shape.setTransform(2.4,-0.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AgKAcIAAgBIAAAAIACgMQgGgHgTACQAWgGgQgOQARAJADgBQAHAAAAgIIAAgTQADAYAagRQgQASACAIIACABIARACIgOAEIgDABIgGABIAQAMIgagHIgJAJIgDADIABgCgAAPgHIAAAAIAAgBg");
	this.shape_1.setTransform(1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgQAXIgCAFIAAgBIAAAAIACgEIAFgBIgDANIAAAAQAAgKgCgCgAAOATIACAAIAAACgAALALQACgCAGABIgGACgAgigMQAUAKACgHQAGAHADABIABgCQgCAHgGAAIgYgQgAAjgiIgBABIgEAEIgEADg");
	this.shape_2.setTransform(1.4,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#FE4B4B","#9E0101"],[0,0.38,1],233.9,219.8,244.5,219.8).s().p("AgPAWIACgFQACACAAAKIAAAAQgDAFAGgFIAJgKIAaAIIgQgMIAGgCIADACIAAgCIAOgFIgSgCIAHgDQgGAAgCACQgCgHAQgSQgKAEAJgPIABAAIAAgCIAEgCIAEgEIACgBIADgDIAKgJIgdA3QAOAJAagUQgVAUgWADQAGAGAfAMQgqAAgOgIQgIAOgUAOQALgPABgQgAgPAUIgvgIQA0gHgpgiQALAHAJAEIAYASQgEAAgQgIQAQAOgWAGQATgDAGAHIgFABIgBADgAAOgGIABAAIAAAAg");
	this.shape_3.setTransform(1,-0.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-10.5,19.4,20.3);


(lib.shape21 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgQBSIgFgCIAAgBIAJgBIgBAFgAAZBAIgBAAIAIgCIABACIgDAIgAA0A+IADAAIAEAIIAAAAgAhIBEIgBgBIAEgCIACgBIADAEIgIAAgABIAfIAKgFIgGAJgABLgMIACAAIAAAEIgHACgAhPgJIgCgBIAAgFIACAAIAAAAIADACIAAAEIAAADgAhQgoIAAgGIABABIAGAFIgHADgAA0g2IACgBIAAABgAA8g7IgBAAIACgCIACADgAg+g9IAFgCIABABIgBAEgAgihPIADgBIAEAGIABADIgDAAIgCACgAAPhOIACgEIAEAFIACACIgBABg");
	this.shape.setTransform(1.3,-1.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgOAUIgGAAQALgOAHgCQAEgDAHADIATAGIgQgRIACgCIAOAMIAQAXIgYgNQgMgHgGADQgOAGgJAWgAAXggIAEgCIAEgCIgEAGIgMAIIgCABIgCABIgHACgAgrghIAbALIgKACg");
	this.shape_1.setTransform(1.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AghANQAZgIgfgTQAKAGAHACIABAAIAKgCQAHgJABgJIAAgHIABADQADAYAIACIAHgCIACgBIACgBIAMgIIAIgGIgVAZIgCACIAQATIgTgGQgHgDgGADQgFACgLAOQACgVgUAAg");
	this.shape_2.setTransform(1,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#FE4B4B","#9E0101"],[0,0.38,1],234.4,221.1,245,221.1).s().p("Ag6AWQArgOg1giQARAKAMACIAQANIAAAAQgHgCgKgGQAfATgZAIQAUAAgCAVIAFAAIgGARIAAABQgEgjglAAgAASAIIAUgZIgIAGIAFgGQASgKAQgOQgqApgBAHQgBAHAHAIgAgEgZIAAgDIgBAHQAAAJgIAJIgagLQAgAFABgtIAAgCIAAACQAMA2AVgNIgTANQgIgBgEgYg");
	this.shape_3.setTransform(1.2,-1.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-9.5,16.6,16.7);


(lib.shape20 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgRBbIgHgCIABgCIAKAAIgBAFgAAdBIIgCgBIAJgCIABACIgDAJgAA6BGIADgCIAFAJIAAABgAhQBMIgCgCIAFgCIADgBIADAEIgJABgABRAiIALgFIgHAJgAhZgLIgCgBIAAgFIADgBIABABIACACIAAAFIABADgABUgOIACAAIAAAFIgIABgAhZgsIAAgHIABAAIAHAGIgIAEgAA7g8IACgCIgBACgABDhCIgBAAIADgDIABAEgAhFhFIAGgCIABABIgBAAIAAAFgAgmhZIADgBIAFAHIABADIgDABIgDACgAARhXIACgEIAFAFIACACIgBABg");
	this.shape.setTransform(1.7,-1.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFCC00").ss(1,1,1,3,true).p("ABIhJIgkBBQASAXAVAUQgggOgcgJIg1A+IAchKQgagcgmgdIBSAkg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#FE4B4B","#9E0101"],[0,0.38,1],234.9,219.4,245.5,219.4).s().p("AgKAAQgagcgmgcIBSAjIBAg0IgkBBQASAXAVAUQgggPgcgJIg1A/gAAAgCIgZA0IADgEIACgBIACgDIAegnQAOAGAbAMIgegcIAKgRIAMgQIAEgGIgBAAIADgDQgaAZgRALIgqgSg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AgCgBIgRgMIATAIIATgRIgNAUIAOALIgTgIIgQAWg");
	this.shape_3.setTransform(1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgHgCIgkgdIArASQAQgLAagZIgDADIgDAGIgMAQIgKARIAeAcQgbgMgOgGIgeAnIgCADIgCABIgBABIABgBIgDAEgAgCgDIgMAXIAQgUIATAHIgOgMIANgUIgUARIgTgIg");
	this.shape_4.setTransform(0.9,0);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-10.5,18.5,18.6);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AB0000").s().p("AgWgBQgIgUASgIQAMgBAGAIIABABQghgKAOAgQAMAYANgIQAMgKgHgMIAFAIQAGASgMAGQgFADgFAAQgPAAgOgfgAAAAIQgPgIAPgNIANABIABACIABABQACAHgEAFQgEAGgFAAIgEgBg");
	this.shape.setTransform(184,326.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F0000").s().p("AgUAPQgJgPgCgOQgCgRAHgJQAQgHASAYQgIgJgLACQgRAHAIAVQARAoAWgNQAMgGgGgSQAMAZgIAOQgHADgHAAQgTAAgQgcgAgKAAQgPggAiAKIAGAJIgOgCQgOANAOAJQAJACAEgHQAFgFgDgIIADAEQAHANgLAKQgDABgEAAQgIAAgKgRg");
	this.shape_1.setTransform(183.8,326.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#870101","#B10101","#970000","#5C0101"],[0,0.286,0.635,1],-3.2,-3.7,2,4.8).s().p("AihB6QgTgiAPgXIEZjXQgHAJACAQQACAQAJAPQAVAlAegMIkeDbIgIABQgXAAgRgdg");
	this.shape_2.setTransform(169.4,337.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(152.1,322.5,35,30.6);


(lib.shape17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAaIgCgDIAAgtIACgDIACgCIADACIABADIAAAtIgBADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAg");
	this.shape.setTransform(-0.9,-23.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-26.4,1,5.7);


(lib.shape16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-28.4,-10.1,0.497,0.508);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.4,-10.1,28.4,10.2);


(lib.shape15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-14.1,-39.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-39.3,28,79);


(lib.shape11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFFFF").s().p("ABQH7QAAhHgfigQgmjIgHg8IBtHlQAIAYgSAFIgFAAQgNAAgFgXgAitH+QgSgEAJgcQAkg8A1iaQBEjDAWg1IiUHbQgFAUgMAAIgFgBgAFDGOQgkg9hqh8QiGiZgjgxIFQFuQASASgMAMQgFAFgGAAQgJAAgLgOgAmVFjQgOgOAXgSQA8gjB8hsQCXiCAzgnIltFRQgLALgJAAQgGAAgEgEgAHeC3Qg9gkiag2QjBhDg2gWIHaCUQAYAGgFAQQgDAMgNAAQgGAAgJgDgAoQBmQgEgQAbgGQBIAACggdIECgvInkBtQgHACgGAAQgNAAgDgNgAH1hwQAXgIAFATQAEAQgbAGQhHAAigAeIkDAugAnpiXQgYgGAFgQQAEgSAbAJQA9AkCaA2QDBBCA2AXgAF4lbQASgTAMAMQAOAOgXARQg8Akh8BsQiXCCgyAngAlbl4QgSgSAMgMQAOgNASAWQAjA9BrB8QCFCZAkAxgACYnqQAGgYARAFQASAEgJAcQgkA+g2CZQhEDDgWA0gAhwn0QgIgYASgFQARgEAGAbQAABHAfCiQAmDGAHA8g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.9,-53,106,106.1);


(lib.shape10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhDMYQgXAAADgkQAZhcAHgwIAZi2IgPFHQABAfgVAAIgCAAgAEuK8QgYhdgUguIhDipICWEiQAQAcgTALQgGADgFAAQgOAAgLgYgAnHKNQgTgMAVgdQBEhEAegmIBxiRIixETQgMAUgNAAQgFAAgGgDgAJjHFQhChBgoggIiQhwIESCxQAcAOgKAUQgGAKgKAAQgKAAgQgMgArPFRQgMgUAhgOQBbgYAwgUICphEIkjCVQgMAIgJAAQgLAAgGgLgAL0BYQhbgagygGIi1gZIFHAPQAhAAgCAWQAAAUgcAAIgIAAgAr4gtQghAAACgWQAAgXAkADQBbAaAyAGIC1AZgAKqlTQAcgSAKAVQAMATggAPQhcAYgvAUIipBEgAp6mjQgcgPAMgUQAKgVAeAXQBDBDAnAeICQBwgAGkp6QAQgdAUAMQATAKgVAeQhFBDgdAnIhxCRgAlUqpQgQgcAVgLQAUgMAOAhQAYBdAUAuIBDCpgAAur4QgBghAYACQAWAAgDAkQgaBcgGAxIgZC1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.2,-79.2,158.5,158.6);


(lib.shape9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF00").s().p("AgWGhQgMgEgBgVQgBgQAGhBIAMh5IAHhOQAEgkAFgIQACEmgFAhQgEAMgEAGQgEAEgDAAIgCAAgADJFSQgLgNghg4Ig9hpIgohEQgTgfAAgIQCwDrANAfQAFAMgBAHQAAAHgEABIgFABQgJAAgLgNgAkHFDQgHgKAMgSQAJgOArgwIBRhbIAzg7QAZgbAIgDQiqDwgZAWQgKAIgHACIgEAAQgEAAgCgCgAFpCbQgQgEg8gbIhugwIhIgfQgigPgFgHQEYBYAdARQALAGAEAHQADAGgCAEQgFAGgKAAIgNgCgAmMByQgHgDABgFQAAgMAUgHQAPgHBAgNIB2gaIBNgRIArgGQkWBfgiACgAF5hyIAUACIAGAHQABALgVAJIhPAUIh2AaIhMARIgsAFQEWheAhgDgAl0h/QgLgHgFgGQgDgGACgEQAIgKAUAGQAQAEA8AaIBvAxIBIAfQAhAOAGAIQkZhYgcgRgADuk7QAJgHAIgDIAJACQAHAKgMASQgJAOgrAxIhQBaIg0A8QgZAagIADQCqjwAagWgAjilDQgEgLABgIQgBgGAFgCQAMgEANARQAKANAiA4IA9BpIAoBDQASAfAAAKQiwjsgNgggAAGmKQADgMAFgGQAEgGAFACQALAEABAWQACAQgHBBIgMB4IgHBPQgEAjgEAIQgDknAGggg");
	this.shape.setTransform(0.4,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-41.5,80.8,83.6);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,251,240,0)").s().p("AgEAKIgCiWQgBgOAHABQAIgBAAAOIgCCWQgDCQgDAAQgBAAgDiQg");
	this.shape.setTransform(0,-135.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-150.9,1.6,31);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAIiMIgCCWQgDCQgDAAQgBAAgDiQIgCiWQgBgOAHAAQAIAAAAAOg");
	this.shape.setTransform(0,-135.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,251,240,0)","rgba(255,251,240,0)"],[0,1],-69.8,135.5,69.9,135.5).s().p("AgEAKIgCiWQgBgOAHABQAIgBAAAOIgCCWQgDCQgDAAQgBAAgDiQg");
	this.shape_1.setTransform(0,-135.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-150.9,1.6,31);


(lib.shape4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAOpiIgEKMQgFJ2gFABQgEgBgFp2IgEqMQAAg+ANAAQAOAAAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(249,223,123,0)","#FCE0AD"],[0,1],-69.8,0,69.9,0).s().p("AgJAqIgEqMQAAg+ANAAQAOAAAAA+IgEKMQgGJ2gEABQgEgBgFp2g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,-67.2,2.8,134.7);


(lib.xinfeng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.xf();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-897.8,y:697.2,alpha:0},37).wait(1));

	// 图层 1
	this.instance_1 = new lib.xf1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:786.5,y:-722.1,alpha:0},37).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471.4,-331.4,943,663);


(lib.textSprite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_1();
	this.instance.setTransform(0,0,0.004,0.004);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape20("synched",0);

	this.instance_1 = new lib.shape21("synched",0);

	this.instance_2 = new lib.shape22("synched",0);

	this.instance_3 = new lib.shape23("synched",0);

	this.instance_4 = new lib.shape24("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-10.5,18.5,18.6);


(lib.sprite12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape10("synched",0);
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({startPosition:0,_off:false},0).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:1.21,scaleY:1.21,alpha:0.328},5).to({scaleX:1.33,scaleY:1.33,alpha:0},8).to({_off:true},1).wait(10));

	// Layer 1
	/* Layers with classic tweens must contain only a single symbol instance. */

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10.3,20.2,20.9);


(lib.sprite8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE87F","#FFE87F"],[0,1],-69.8,-96.3,69.9,-96.3).s().p("AgEAKIgCiWQgBgOAHABQAIgBAAAOIgCCWQgDCQgDAAQgBAAgDiQg");
	this.shape.setTransform(0,96.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE87F","#FFE881"],[0,1],-69.8,-92.6,69.9,-92.6).s().p("AgFALIgCipQAAgPAHAAQAIAAAAAPIgCCpQgDCjgDAAQgCAAgDijg");
	this.shape_1.setTransform(0,92.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFE77F","#FFE783"],[0,1],-69.8,-88.9,69.9,-88.9).s().p("AgFAMIgCi8QAAgRAHAAQAIAAAAARIgCC8QgDC2gDAAQgCAAgDi2g");
	this.shape_2.setTransform(0,89);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEE77F","#FFE784"],[0,1],-69.8,-85.2,69.9,-85.2).s().p("AgFAOIgCjQQgBgTAIAAQAIAAAAATIgCDQQgDDIgDAAQgCAAgDjIg");
	this.shape_3.setTransform(0,85.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FEE77E","#FFE786"],[0,1],-69.8,-81.5,69.9,-81.5).s().p("AgFAPIgCjjQgBgVAIAAQAIAAAAAVIgCDjQgDDbgDAAQgCAAgDjbg");
	this.shape_4.setTransform(0,81.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEE67E","#FEE688"],[0,1],-69.8,-77.8,69.9,-77.8).s().p("AgFAQIgDj2QAAgXAIAAQAJAAAAAXIgDD2QgDDugDAAQgCAAgDjug");
	this.shape_5.setTransform(0,77.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FEE67E","#FEE68A"],[0,1],-69.8,-74.1,69.9,-74.1).s().p("AgGARIgCkJQAAgZAIAAQAJAAAAAZIgCEJQgEEBgDAAQgCAAgEkBg");
	this.shape_6.setTransform(0,74.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FDE67E","#FEE68B"],[0,1],-69.8,-70.4,69.9,-70.4).s().p("AgGATIgCkdQAAgbAIAAQAJAAAAAbIgCEdQgEETgDAAQgCAAgEkTg");
	this.shape_7.setTransform(0,70.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FDE57E","#FEE68D"],[0,1],-69.8,-66.6,69.9,-66.6).s().p("AgGAUIgCkwQgBgdAJAAQAJAAAAAdIgCEwQgEEmgDAAQgCAAgEkmg");
	this.shape_8.setTransform(0,66.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FDE57E","#FEE58F"],[0,1],-69.8,-62.9,69.9,-62.9).s().p("AgGAVIgDlDQAAgfAJAAQAKAAAAAfIgDFDQgEE5gDAAQgCAAgEk5g");
	this.shape_9.setTransform(0,63);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FDE57D","#FEE591"],[0,1],-69.8,-59.2,69.9,-59.2).s().p("AgGAWIgDlXQAAggAJAAQAKAAAAAgIgDFXQgEFMgDAAQgCAAgElMg");
	this.shape_10.setTransform(0,59.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FCE47D","#FEE592"],[0,1],-69.8,-55.5,69.9,-55.5).s().p("AgGAYIgDlrQAAgiAJAAQAKAAAAAiIgDFrQgEFegDAAQgDAAgDleg");
	this.shape_11.setTransform(0,55.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FCE47D","#FEE494"],[0,1],-69.8,-51.8,69.9,-51.8).s().p("AgHAZIgCl+QgBgkAKAAQAKAAAAAkIgCF+QgFFwgDABQgDgBgElwg");
	this.shape_12.setTransform(0,51.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FCE47D","#FEE496"],[0,1],-69.8,-48.1,69.9,-48.1).s().p("AgHAaIgCmRQgBgmAKAAQALAAAAAmIgDGRQgEGDgEABQgDgBgEmDg");
	this.shape_13.setTransform(0,48.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FCE37D","#FDE498"],[0,1],-69.8,-44.4,69.9,-44.4).s().p("AgHAbIgDmkQAAgoAKAAQALAAAAAoIgDGkQgEGWgEABQgDgBgEmWg");
	this.shape_14.setTransform(0,44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FCE37D","#FDE39A"],[0,1],-69.8,-40.7,69.9,-40.7).s().p("AgHAdIgDm4QAAgpAKAAQALAAAAApIgDG4QgEGogEAAQgDAAgEmog");
	this.shape_15.setTransform(0,40.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FBE27D","#FDE39B"],[0,1],-69.8,-37,69.9,-37).s().p("AgHAeIgDnLQAAgrAKAAQALAAAAArIgDHLQgEG7gEAAQgDAAgEm7g");
	this.shape_16.setTransform(0,37.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FBE27C","#FDE39D"],[0,1],-69.8,-33.3,69.9,-33.3).s().p("AgHAfIgDneQgBgtALAAQALAAAAAtIgDHeQgEHOgEAAQgDAAgEnOg");
	this.shape_17.setTransform(0,33.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FBE27C","#FDE29F"],[0,1],-69.8,-29.6,69.9,-29.6).s().p("AgIAgIgDnxQAAgvALAAQAMAAAAAvIgDHxQgFHhgEAAQgDAAgFnhg");
	this.shape_18.setTransform(0,29.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FBE17C","#FDE2A1"],[0,1],-69.8,-25.9,69.9,-25.9).s().p("AgIAiIgDoGQAAgwALAAQAMAAAAAwIgDIGQgFHzgEAAQgDAAgFnzg");
	this.shape_19.setTransform(0,26);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FAE17C","#FDE2A2"],[0,1],-69.8,-22.2,69.9,-22.2).s().p("AgIAjIgDoZQAAgyALAAQAMAAAAAyIgDIZQgFIGgEAAQgDAAgFoGg");
	this.shape_20.setTransform(0,22.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FAE17C","#FDE2A4"],[0,1],-69.8,-18.5,69.9,-18.5).s().p("AgIAkIgDosQAAg0ALAAQAMAAAAA0IgDIsQgFIZgEAAQgEAAgEoZg");
	this.shape_21.setTransform(0,18.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FAE07C","#FCE1A6"],[0,1],-69.8,-14.8,69.9,-14.8).s().p("AgIAlIgEo/QAAg2AMAAQANAAAAA2IgEI/QgFIsgEAAQgEAAgEosg");
	this.shape_22.setTransform(0,14.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FAE07B","#FCE1A8"],[0,1],-69.8,-11,69.9,-11).s().p("AgIAnIgEpTQAAg4AMAAQANAAAAA4IgEJTQgFI+gEAAQgEAAgEo+g");
	this.shape_23.setTransform(0,11.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F9E07B","#FCE1A9"],[0,1],-69.8,-7.3,69.9,-7.3).s().p("AgJAoIgDpmQAAg6AMAAQANAAAAA6IgDJmQgGJQgEABQgEgBgFpQg");
	this.shape_24.setTransform(0,7.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F9DF7B","#FCE0AB"],[0,1],-69.8,-3.6,69.9,-3.6).s().p("AgJApIgDp5QAAg8AMAAQANAAAAA8IgDJ5QgGJjgEABQgEgBgFpjg");
	this.shape_25.setTransform(0,3.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAOpiIgEKMQgFJ2gFABQgEgBgFp2IgEqMQAAg+ANAAQAOAAAAA+g");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(249,223,123,0)","#FCE0AD"],[0,1],-69.8,0,69.9,0).s().p("AgJAqIgEqMQAAg+ANAAQAOAAAAA+IgEKMQgGJ2gEABQgEgBgFp2g");

	this.instance = new lib.shape4("synched",0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgMpHQAAg6AMAAQANAAAAA6IgDJvQgGJagEAAQgEAAgFpaIgDpv");
	this.shape_28.setTransform(0,-7.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F9E182","#FCE2B1"],[0,1],-69.8,7.9,69.9,7.9).s().p("AgJAoIgDpvQAAg6AMAAQANAAAAA6IgDJvQgGJagEAAQgEAAgFpag");
	this.shape_29.setTransform(0,-7.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgMorQAAg4AMAAQANAAAAA4IgEJRQgFI9gEABQgEgBgEo9IgEpR");
	this.shape_30.setTransform(0,-15.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FAE289","#FCE3B5"],[0,1],-69.8,15.9,69.9,15.9).s().p("AgIAmIgEpRQAAg4AMAAQANAAAAA4IgEJRQgFI9gEABQgEgBgEo9g");
	this.shape_31.setTransform(0,-15.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgLoPQgBg1AMAAQAMAAAAA1IgDI0QgFIggEAAQgEAAgEogIgDo0");
	this.shape_32.setTransform(0,-23.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FAE490","#FDE5B9"],[0,1],-69.8,23.9,69.9,23.9).s().p("AgIAlIgDo0QgBg1AMAAQAMAAAAA1IgDI0QgFIggEAAQgEAAgEogg");
	this.shape_33.setTransform(0,-23.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgLnzQAAgzALAAQAMAAAAAzIgDIWQgFIDgEABQgDgBgFoDIgDoW");
	this.shape_34.setTransform(0,-31.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FAE697","#FDE6BD"],[0,1],-69.8,31.9,69.9,31.9).s().p("AgIAjIgDoWQAAgzALAAQAMAAAAAzIgDIWQgFIDgEABQgDgBgFoDg");
	this.shape_35.setTransform(0,-31.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgLnYQAAgvALAAQAMAAAAAvIgDH5QgFHngEAAQgDAAgFnnIgDn5");
	this.shape_36.setTransform(0,-39.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FBE79D","#FDE8C1"],[0,1],-69.8,39.8,69.9,39.8).s().p("AgIAhIgDn5QAAgvALAAQAMAAAAAvIgDH5QgFHngEAAQgDAAgFnng");
	this.shape_37.setTransform(0,-39.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgKm8QgBgtALAAQALAAAAAtIgDHbQgEHLgEAAQgDAAgEnLIgDnb");
	this.shape_38.setTransform(0,-47.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#FBE9A4","#FDEAC5"],[0,1],-69.8,47.8,69.9,47.8).s().p("AgHAfIgDnbQgBgtALAAQALAAAAAtIgDHbQgEHLgEAAQgDAAgEnLg");
	this.shape_39.setTransform(0,-47.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgKmgQAAgqAKAAQALAAAAAqIgDG9QgEGugEAAQgDAAgEmuIgDm9");
	this.shape_40.setTransform(0,-55.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FBEBAB","#FDEBC9"],[0,1],-69.8,55.8,69.9,55.8).s().p("AgHAdIgDm9QAAgqAKAAQALAAAAAqIgDG9QgEGugEAAQgDAAgEmug");
	this.shape_41.setTransform(0,-55.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgKmFQAAgnAKAAQALAAAAAnIgDGgQgEGSgEAAQgDAAgEmSIgDmg");
	this.shape_42.setTransform(0,-63.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FCECB2","#FDEDCD"],[0,1],-69.8,63.7,69.9,63.7).s().p("AgHAbIgDmgQAAgnAKAAQALAAAAAnIgDGgQgEGSgEAAQgDAAgEmSg");
	this.shape_43.setTransform(0,-63.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgJlpQgBgkAKAAQAKAAAAAkIgCGCQgFF1gDAAQgDAAgEl1IgCmC");
	this.shape_44.setTransform(0,-71.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FCEEB9","#FEEED0"],[0,1],-69.8,71.7,69.9,71.7).s().p("AgHAZIgCmCQgBgkAKAAQAKAAAAAkIgCGCQgFF1gDAAQgDAAgEl1g");
	this.shape_45.setTransform(0,-71.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgJlNQAAgiAJAAQAKAAAAAiIgDFkQgEFZgDAAQgDAAgDlZIgDlk");
	this.shape_46.setTransform(0,-79.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FDEFC0","#FEF0D4"],[0,1],-69.8,79.7,69.9,79.7).s().p("AgGAXIgDlkQAAgiAJAAQAKAAAAAiIgDFkQgEFZgDAAQgDAAgDlZg");
	this.shape_47.setTransform(0,-79.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgJkyQAAgeAJAAQAKAAAAAeIgDFHQgEE8gDAAQgCAAgEk8IgDlH");
	this.shape_48.setTransform(0,-87.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FDF1C7","#FEF1D8"],[0,1],-69.8,87.6,69.9,87.6).s().p("AgGAVIgDlHQAAgeAJAAQAKAAAAAeIgDFHQgEE8gDAAQgCAAgEk8g");
	this.shape_49.setTransform(0,-87.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgIkWQgBgcAJAAQAJAAAAAcIgCEpQgEEggDAAQgCAAgEkgIgCkp");
	this.shape_50.setTransform(0,-95.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FDF3CE","#FEF3DC"],[0,1],-69.8,95.6,69.9,95.6).s().p("AgGATIgCkpQgBgcAJAAQAJAAAAAcIgCEpQgEEggDAAQgCAAgEkgg");
	this.shape_51.setTransform(0,-95.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgIj6QAAgZAIAAQAJAAAAAZIgCEMQgEECgDAAQgCAAgEkCIgCkM");
	this.shape_52.setTransform(0,-103.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#FEF4D4","#FEF5E0"],[0,1],-69.8,103.6,69.9,103.6).s().p("AgGASIgCkMQAAgZAIAAQAJAAAAAZIgCEMQgEECgDAAQgCAAgEkCg");
	this.shape_53.setTransform(0,-103.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgIjfQAAgWAIAAQAJAAAAAWIgDDvQgDDmgDAAQgCAAgDjmIgDjv");
	this.shape_54.setTransform(0,-111.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#FEF6DB","#FEF6E4"],[0,1],-69.8,111.5,69.9,111.5).s().p("AgFAQIgDjvQAAgWAIAAQAJAAAAAWIgDDvQgDDmgDAAQgCAAgDjmg");
	this.shape_55.setTransform(0,-111.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgHjDQgBgTAIAAQAIAAAAATIgCDRQgDDJgDAAQgCAAgDjJIgCjR");
	this.shape_56.setTransform(0,-119.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#FEF8E2","#FFF8E8"],[0,1],-69.8,119.5,69.9,119.5).s().p("AgFAOIgCjRQgBgTAIAAQAIAAAAATIgCDRQgDDJgDAAQgCAAgDjJg");
	this.shape_57.setTransform(0,-119.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgHinQAAgRAHAAQAIAAAAARIgCCzQgDCtgDAAQgCAAgDitIgCiz");
	this.shape_58.setTransform(0,-127.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#FFF9E9","#FFF9EC"],[0,1],-69.8,127.5,69.9,127.5).s().p("AgFAMIgCizQAAgRAHAAQAIAAAAARIgCCzQgDCtgDAAQgCAAgDitg");
	this.shape_59.setTransform(0,-127.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAIiMIgCCWQgDCQgDAAQgBAAgDiQIgCiWQgBgOAHAAQAIAAAAAOg");
	this.shape_60.setTransform(0,-135.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,251,240,0)","rgba(255,251,240,0)"],[0,1],-69.8,135.5,69.9,135.5).s().p("AgEAKIgCiWQgBgOAHABQAIgBAAAOIgCCWQgDCQgDAAQgBAAgDiQg");
	this.shape_61.setTransform(0,-135.4);

	this.instance_1 = new lib.shape6("synched",0);

	this.instance_2 = new lib.shape7("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-61.5,2.8,173.5);


(lib.sprite26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.sprite25();
	this.instance.setTransform(-0.2,-0.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({scaleX:9.86,scaleY:9.86,rotation:-44.8,x:-3.1,y:8.2},3).to({scaleX:7.52,scaleY:7.52,rotation:-54.7,x:-2.6,y:6.5,alpha:0.672},1).to({scaleX:2.88,scaleY:2.88,rotation:-74.8,x:-2,y:3.7,alpha:0},2).wait(1));

	// Layer 5
	this.fire = new lib.sprite25();
	this.fire.setTransform(-18.9,-101.7,1.458,1.458);

	this.timeline.addTween(cjs.Tween.get(this.fire).to({x:-17.2,y:-34.3},4).wait(1).to({x:-16.8,y:-17.6},0).to({_off:true},3).wait(5));

	// Layer 4
	this.instance_1 = new lib.shape17("synched",0);
	this.instance_1.setTransform(-0.3,-85.3,0.944,0.937,0,-48.9,135.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,scaleY:0.93,skewX:-48.7,skewY:135.6,x:-0.4,y:-68.8},1).to({x:-1,y:-36},2).to({scaleX:0.94,scaleY:0.94,skewX:-48.8,skewY:135.7,x:-1.5,y:-3.2},2).to({scaleX:0.94,scaleY:0.94,skewX:-48.7,skewY:135.6,x:-1.6,y:-3.3,alpha:0.672},1).to({scaleX:0.94,scaleY:0.94,skewX:-48.8,skewY:135.7,x:-1.5,y:-3.2,alpha:0},2).to({_off:true},1).wait(4));

	// Layer 3
	this.instance_2 = new lib.shape16("synched",0);
	this.instance_2.setTransform(10.8,-76.2,0.345,0.342,0,-48.9,135.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.34,scaleY:0.34,skewX:-48.7,skewY:135.6,x:10.5,y:-59.7},1).to({scaleX:0.35,scaleY:0.34,skewX:-48.8,skewY:135.7,x:9.4,y:5.7},4).to({scaleX:0.34,skewX:-48.7,skewY:135.6,x:9.3,alpha:0.672},1).to({scaleY:0.34,x:9.4,alpha:0.34},1).to({scaleX:0.35,scaleY:0.34,skewX:-48.8,skewY:135.7,alpha:0},1).to({_off:true},1).wait(4));

	// Layer 2
	this.instance_3 = new lib.shape16("synched",0);
	this.instance_3.setTransform(-8.6,-93.1,0.345,0.342,0,-48.9,135.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.34,scaleY:0.34,skewX:-48.7,skewY:135.6,x:-8.7,y:-76.6},1).to({scaleX:0.35,scaleY:0.34,skewX:-48.8,skewY:135.7,x:-9.8,y:-11},4).to({scaleX:0.34,skewX:-48.7,skewY:135.6,alpha:0.672},1).to({scaleY:0.34,x:-9.9,y:-10.9,alpha:0.34},1).to({scaleX:0.35,scaleY:0.34,skewX:-48.8,skewY:135.7,x:-9.8,y:-11,alpha:0},1).to({_off:true},1).wait(4));

	// Layer 1
	this.instance_4 = new lib.shape15("synched",0);
	this.instance_4.setTransform(-0.5,-86.1,0.345,0.523,0,-48.9,135.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.34,scaleY:0.52,skewX:-48.7,skewY:135.6,x:-0.6,y:-69.6},1).to({scaleX:0.35,scaleY:0.52,skewX:-48.8,skewY:135.7,x:-1.7,y:-4},4).to({scaleX:0.34,scaleY:0.52,skewX:-48.7,skewY:135.6,x:-1.8,alpha:0.672},1).to({alpha:0.34},1).to({scaleX:0.35,scaleY:0.52,skewX:-48.8,skewY:135.7,x:-1.7,alpha:0},1).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-272.5,52.5,183.5);


(lib.yh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 31
	this.instance = new lib.sprite12();
	this.instance.setTransform(-426.2,-51.5,0.375,0.375);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(148));

	// Layer 28
	this.instance_1 = new lib.sprite12();
	this.instance_1.setTransform(-376.1,-99.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(200));

	// Layer 25
	this.instance_2 = new lib.sprite12();
	this.instance_2.setTransform(-215.2,-68.8,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).wait(160));

	// Layer 23
	this.instance_3 = new lib.sprite8();
	this.instance_3.setTransform(-388.1,86.6,0.749,0.749,0,8.2,-171.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},0).wait(135));

	// Layer 21
	this.instance_4 = new lib.sprite8();
	this.instance_4.setTransform(-297.5,91,1,1,0,5.3,-174.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).wait(135));

	// Layer 19
	this.instance_5 = new lib.sprite8();
	this.instance_5.setTransform(-158.8,99.4,0.749,0.749,0,-7.6,172.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65).to({_off:false},0).wait(135));

	// Layer 17
	this.instance_6 = new lib.sprite8();
	this.instance_6.setTransform(-405,58.5,1,1,0,0.5,-179.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65).to({_off:false},0).wait(135));

	// Layer 15
	this.instance_7 = new lib.sprite8();
	this.instance_7.setTransform(-185.1,60.2,0.999,0.999,0,-8.2,171.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65).to({_off:false},0).wait(135));

	// Layer 13
	this.instance_8 = new lib.sprite8();
	this.instance_8.setTransform(-172.2,64.7,0.999,0.999,0,-15.7,164.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).wait(135));

	// Layer 11
	this.instance_9 = new lib.sprite8();
	this.instance_9.setTransform(-329.6,87.8,0.75,0.75,8.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65).to({_off:false},0).wait(135));

	// Layer 9
	this.instance_10 = new lib.sprite8();
	this.instance_10.setTransform(-308.7,76.1,1,1,1.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(53).to({_off:false},0).wait(147));

	// Layer 7
	this.instance_11 = new lib.sprite8();
	this.instance_11.setTransform(-318.6,103.3,0.75,0.75,-1.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(53).to({_off:false},0).wait(147));

	// Layer 5
	this.instance_12 = new lib.sprite8();
	this.instance_12.setTransform(-138.4,58.1,0.999,0.999,-9.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53).to({_off:false},0).wait(147));

	// Layer 3
	this.instance_13 = new lib.sprite8();
	this.instance_13.setTransform(-357.2,70.8,0.999,0.999,22.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(28).to({_off:false},0).wait(172));

	// Layer 1
	this.instance_14 = new lib.sprite8();
	this.instance_14.setTransform(-376,60.6,0.999,0.999,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.6,-114.4,42.1,283.8);


(lib.bp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		playSound("streamsound6");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(115));

	// Layer 598
	this.instance = new lib.shape17("synched",0);
	this.instance.setTransform(205.2,381.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(120));

	// Layer 597
	this.instance_1 = new lib.shape16("synched",0);
	this.instance_1.setTransform(213.5,395.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(120));

	// Layer 596
	this.instance_2 = new lib.shape16("synched",0);
	this.instance_2.setTransform(195.1,377.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(120));

	// Layer 595
	this.instance_3 = new lib.shape15("synched",0);
	this.instance_3.setTransform(205,380.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},2).wait(120));

	// Layer 594
	this.instance_4 = new lib.shape17("synched",0);
	this.instance_4.setTransform(169.6,378.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},2).wait(120));

	// Layer 593
	this.instance_5 = new lib.shape16("synched",0);
	this.instance_5.setTransform(159.8,391.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},2).wait(120));

	// Layer 592
	this.instance_6 = new lib.shape16("synched",0);
	this.instance_6.setTransform(179.9,376.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},2).wait(120));

	// Layer 591
	this.instance_7 = new lib.shape15("synched",0);
	this.instance_7.setTransform(169.9,377.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},2).wait(120));

	// Layer 590
	this.instance_8 = new lib.shape17("synched",0);
	this.instance_8.setTransform(205.2,367.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},7).wait(115));

	// Layer 589
	this.instance_9 = new lib.shape16("synched",0);
	this.instance_9.setTransform(213.5,381.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},7).wait(115));

	// Layer 588
	this.instance_10 = new lib.shape16("synched",0);
	this.instance_10.setTransform(195.1,363.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},7).wait(115));

	// Layer 587
	this.instance_11 = new lib.shape15("synched",0);
	this.instance_11.setTransform(205,366.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},7).wait(115));

	// Layer 586
	this.instance_12 = new lib.shape17("synched",0);
	this.instance_12.setTransform(169.6,365.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},7).wait(115));

	// Layer 585
	this.instance_13 = new lib.shape16("synched",0);
	this.instance_13.setTransform(159.8,378.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},7).wait(115));

	// Layer 584
	this.instance_14 = new lib.shape16("synched",0);
	this.instance_14.setTransform(179.9,363,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},7).wait(115));

	// Layer 583
	this.instance_15 = new lib.shape15("synched",0);
	this.instance_15.setTransform(169.9,364.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},7).wait(115));

	// Layer 582
	this.instance_16 = new lib.shape17("synched",0);
	this.instance_16.setTransform(204.8,354.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},12).wait(110));

	// Layer 581
	this.instance_17 = new lib.shape16("synched",0);
	this.instance_17.setTransform(213.1,368.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},12).wait(110));

	// Layer 580
	this.instance_18 = new lib.shape16("synched",0);
	this.instance_18.setTransform(194.7,350.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},12).wait(110));

	// Layer 579
	this.instance_19 = new lib.shape15("synched",0);
	this.instance_19.setTransform(204.6,353.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},12).wait(110));

	// Layer 578
	this.instance_20 = new lib.shape17("synched",0);
	this.instance_20.setTransform(169.2,352.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},12).wait(110));

	// Layer 577
	this.instance_21 = new lib.shape16("synched",0);
	this.instance_21.setTransform(159.4,365.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},12).wait(110));

	// Layer 576
	this.instance_22 = new lib.shape16("synched",0);
	this.instance_22.setTransform(179.4,350,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},12).wait(110));

	// Layer 575
	this.instance_23 = new lib.shape15("synched",0);
	this.instance_23.setTransform(169.4,351.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true},12).wait(110));

	// Layer 574
	this.instance_24 = new lib.shape17("synched",0);
	this.instance_24.setTransform(204.8,341.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true},17).wait(105));

	// Layer 573
	this.instance_25 = new lib.shape16("synched",0);
	this.instance_25.setTransform(213.1,355.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({_off:true},17).wait(105));

	// Layer 572
	this.instance_26 = new lib.shape16("synched",0);
	this.instance_26.setTransform(194.7,337.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({_off:true},17).wait(105));

	// Layer 571
	this.instance_27 = new lib.shape15("synched",0);
	this.instance_27.setTransform(204.6,340.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({_off:true},17).wait(105));

	// Layer 570
	this.instance_28 = new lib.shape17("synched",0);
	this.instance_28.setTransform(169.2,338.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({_off:true},17).wait(105));

	// Layer 569
	this.instance_29 = new lib.shape16("synched",0);
	this.instance_29.setTransform(159.4,351.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({_off:true},17).wait(105));

	// Layer 568
	this.instance_30 = new lib.shape16("synched",0);
	this.instance_30.setTransform(179.4,336.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({_off:true},17).wait(105));

	// Layer 567
	this.instance_31 = new lib.shape18("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({_off:true},17).wait(105));

	// Layer 566
	this.instance_32 = new lib.shape17("synched",0);
	this.instance_32.setTransform(203.9,328.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({_off:true},22).wait(100));

	// Layer 565
	this.instance_33 = new lib.shape16("synched",0);
	this.instance_33.setTransform(212.2,342.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({_off:true},22).wait(100));

	// Layer 564
	this.instance_34 = new lib.shape16("synched",0);
	this.instance_34.setTransform(193.8,324.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({_off:true},22).wait(100));

	// Layer 563
	this.instance_35 = new lib.shape15("synched",0);
	this.instance_35.setTransform(203.7,327.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({_off:true},22).wait(100));

	// Layer 562
	this.instance_36 = new lib.shape17("synched",0);
	this.instance_36.setTransform(168.3,326.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({_off:true},22).wait(100));

	// Layer 561
	this.instance_37 = new lib.shape16("synched",0);
	this.instance_37.setTransform(158.5,339.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).to({_off:true},22).wait(100));

	// Layer 560
	this.instance_38 = new lib.shape16("synched",0);
	this.instance_38.setTransform(178.5,324,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({_off:true},22).wait(100));

	// Layer 559
	this.instance_39 = new lib.shape15("synched",0);
	this.instance_39.setTransform(168.5,325.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({_off:true},22).wait(100));

	// Layer 558
	this.instance_40 = new lib.shape17("synched",0);
	this.instance_40.setTransform(203.9,315.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({_off:true},27).wait(95));

	// Layer 557
	this.instance_41 = new lib.shape16("synched",0);
	this.instance_41.setTransform(212.2,329.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({_off:true},27).wait(95));

	// Layer 556
	this.instance_42 = new lib.shape16("synched",0);
	this.instance_42.setTransform(193.8,311.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).to({_off:true},27).wait(95));

	// Layer 555
	this.instance_43 = new lib.shape15("synched",0);
	this.instance_43.setTransform(203.7,314.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({_off:true},27).wait(95));

	// Layer 554
	this.instance_44 = new lib.shape17("synched",0);
	this.instance_44.setTransform(168.3,312.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({_off:true},27).wait(95));

	// Layer 553
	this.instance_45 = new lib.shape16("synched",0);
	this.instance_45.setTransform(158.5,325.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({_off:true},27).wait(95));

	// Layer 552
	this.instance_46 = new lib.shape16("synched",0);
	this.instance_46.setTransform(178.5,310.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({_off:true},27).wait(95));

	// Layer 551
	this.instance_47 = new lib.shape15("synched",0);
	this.instance_47.setTransform(168.5,311.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({_off:true},27).wait(95));

	// Layer 550
	this.instance_48 = new lib.shape17("synched",0);
	this.instance_48.setTransform(205.2,301.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({_off:true},32).wait(90));

	// Layer 549
	this.instance_49 = new lib.shape16("synched",0);
	this.instance_49.setTransform(213.5,315.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({_off:true},32).wait(90));

	// Layer 548
	this.instance_50 = new lib.shape16("synched",0);
	this.instance_50.setTransform(195.1,297.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).to({_off:true},32).wait(90));

	// Layer 547
	this.instance_51 = new lib.shape15("synched",0);
	this.instance_51.setTransform(205,300.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).to({_off:true},32).wait(90));

	// Layer 546
	this.instance_52 = new lib.shape17("synched",0);
	this.instance_52.setTransform(169.6,298.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).to({_off:true},32).wait(90));

	// Layer 545
	this.instance_53 = new lib.shape16("synched",0);
	this.instance_53.setTransform(159.8,311.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).to({_off:true},32).wait(90));

	// Layer 544
	this.instance_54 = new lib.shape16("synched",0);
	this.instance_54.setTransform(179.9,296.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).to({_off:true},32).wait(90));

	// Layer 543
	this.instance_55 = new lib.shape15("synched",0);
	this.instance_55.setTransform(169.9,297.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).to({_off:true},32).wait(90));

	// Layer 542
	this.instance_56 = new lib.shape17("synched",0);
	this.instance_56.setTransform(205.2,287.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_56).to({_off:true},37).wait(85));

	// Layer 541
	this.instance_57 = new lib.shape16("synched",0);
	this.instance_57.setTransform(213.5,301.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_57).to({_off:true},37).wait(85));

	// Layer 540
	this.instance_58 = new lib.shape16("synched",0);
	this.instance_58.setTransform(195.1,283.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).to({_off:true},37).wait(85));

	// Layer 539
	this.instance_59 = new lib.shape15("synched",0);
	this.instance_59.setTransform(205,286.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_59).to({_off:true},37).wait(85));

	// Layer 538
	this.instance_60 = new lib.shape17("synched",0);
	this.instance_60.setTransform(169.6,285.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).to({_off:true},37).wait(85));

	// Layer 537
	this.instance_61 = new lib.shape16("synched",0);
	this.instance_61.setTransform(159.8,298.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).to({_off:true},37).wait(85));

	// Layer 536
	this.instance_62 = new lib.shape16("synched",0);
	this.instance_62.setTransform(179.9,283,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).to({_off:true},37).wait(85));

	// Layer 535
	this.instance_63 = new lib.shape15("synched",0);
	this.instance_63.setTransform(169.9,284.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({_off:true},37).wait(85));

	// Layer 534
	this.instance_64 = new lib.shape17("synched",0);
	this.instance_64.setTransform(204.8,274.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).to({_off:true},37).wait(85));

	// Layer 533
	this.instance_65 = new lib.shape16("synched",0);
	this.instance_65.setTransform(213.1,288.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).to({_off:true},37).wait(85));

	// Layer 532
	this.instance_66 = new lib.shape16("synched",0);
	this.instance_66.setTransform(194.7,270.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).to({_off:true},37).wait(85));

	// Layer 531
	this.instance_67 = new lib.shape15("synched",0);
	this.instance_67.setTransform(204.6,273.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).to({_off:true},37).wait(85));

	// Layer 530
	this.instance_68 = new lib.shape17("synched",0);
	this.instance_68.setTransform(169.2,272.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).to({_off:true},42).wait(80));

	// Layer 529
	this.instance_69 = new lib.shape16("synched",0);
	this.instance_69.setTransform(159.4,285.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_69).to({_off:true},42).wait(80));

	// Layer 528
	this.instance_70 = new lib.shape16("synched",0);
	this.instance_70.setTransform(179.4,270,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_70).to({_off:true},42).wait(80));

	// Layer 527
	this.instance_71 = new lib.shape15("synched",0);
	this.instance_71.setTransform(169.4,271.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_71).to({_off:true},42).wait(80));

	// Layer 526
	this.instance_72 = new lib.shape17("synched",0);
	this.instance_72.setTransform(204.8,261.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_72).to({_off:true},47).wait(75));

	// Layer 525
	this.instance_73 = new lib.shape16("synched",0);
	this.instance_73.setTransform(213.1,275.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_73).to({_off:true},47).wait(75));

	// Layer 524
	this.instance_74 = new lib.shape16("synched",0);
	this.instance_74.setTransform(194.7,257.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_74).to({_off:true},47).wait(75));

	// Layer 523
	this.instance_75 = new lib.shape15("synched",0);
	this.instance_75.setTransform(204.6,260.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_75).to({_off:true},47).wait(75));

	// Layer 522
	this.instance_76 = new lib.shape17("synched",0);
	this.instance_76.setTransform(169.2,258.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_76).to({_off:true},47).wait(75));

	// Layer 521
	this.instance_77 = new lib.shape16("synched",0);
	this.instance_77.setTransform(159.4,271.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_77).to({_off:true},47).wait(75));

	// Layer 520
	this.instance_78 = new lib.shape16("synched",0);
	this.instance_78.setTransform(179.4,256.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_78).to({_off:true},47).wait(75));

	// Layer 519
	this.instance_79 = new lib.shape15("synched",0);
	this.instance_79.setTransform(169.4,257.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_79).to({_off:true},47).wait(75));

	// Layer 518
	this.instance_80 = new lib.shape17("synched",0);
	this.instance_80.setTransform(203.9,248.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_80).to({_off:true},47).wait(75));

	// Layer 517
	this.instance_81 = new lib.shape16("synched",0);
	this.instance_81.setTransform(212.2,262.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_81).to({_off:true},47).wait(75));

	// Layer 516
	this.instance_82 = new lib.shape16("synched",0);
	this.instance_82.setTransform(193.8,244.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_82).to({_off:true},47).wait(75));

	// Layer 515
	this.instance_83 = new lib.shape15("synched",0);
	this.instance_83.setTransform(203.7,247.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_83).to({_off:true},47).wait(75));

	// Layer 514
	this.instance_84 = new lib.shape17("synched",0);
	this.instance_84.setTransform(168.3,246.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_84).to({_off:true},52).wait(70));

	// Layer 513
	this.instance_85 = new lib.shape16("synched",0);
	this.instance_85.setTransform(158.5,259.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_85).to({_off:true},52).wait(70));

	// Layer 512
	this.instance_86 = new lib.shape16("synched",0);
	this.instance_86.setTransform(178.5,244,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_86).to({_off:true},52).wait(70));

	// Layer 511
	this.instance_87 = new lib.shape15("synched",0);
	this.instance_87.setTransform(168.5,245.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_87).to({_off:true},52).wait(70));

	// Layer 510
	this.instance_88 = new lib.shape17("synched",0);
	this.instance_88.setTransform(203.9,235.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_88).to({_off:true},57).wait(65));

	// Layer 509
	this.instance_89 = new lib.shape16("synched",0);
	this.instance_89.setTransform(212.2,249.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_89).to({_off:true},57).wait(65));

	// Layer 508
	this.instance_90 = new lib.shape16("synched",0);
	this.instance_90.setTransform(193.8,231.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_90).to({_off:true},57).wait(65));

	// Layer 507
	this.instance_91 = new lib.shape15("synched",0);
	this.instance_91.setTransform(203.7,234.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_91).to({_off:true},57).wait(65));

	// Layer 506
	this.instance_92 = new lib.shape17("synched",0);
	this.instance_92.setTransform(168.3,232.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_92).to({_off:true},57).wait(65));

	// Layer 505
	this.instance_93 = new lib.shape16("synched",0);
	this.instance_93.setTransform(158.5,245.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_93).to({_off:true},57).wait(65));

	// Layer 504
	this.instance_94 = new lib.shape16("synched",0);
	this.instance_94.setTransform(178.5,230.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_94).to({_off:true},57).wait(65));

	// Layer 503
	this.instance_95 = new lib.shape15("synched",0);
	this.instance_95.setTransform(168.5,231.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_95).to({_off:true},57).wait(65));

	// Layer 502
	this.instance_96 = new lib.shape17("synched",0);
	this.instance_96.setTransform(205.2,220.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_96).to({_off:true},62).wait(60));

	// Layer 501
	this.instance_97 = new lib.shape16("synched",0);
	this.instance_97.setTransform(213.5,234.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_97).to({_off:true},62).wait(60));

	// Layer 500
	this.instance_98 = new lib.shape16("synched",0);
	this.instance_98.setTransform(195.1,216.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_98).to({_off:true},62).wait(60));

	// Layer 499
	this.instance_99 = new lib.shape15("synched",0);
	this.instance_99.setTransform(205,219.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_99).to({_off:true},62).wait(60));

	// Layer 498
	this.instance_100 = new lib.shape17("synched",0);
	this.instance_100.setTransform(169.6,217.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_100).to({_off:true},62).wait(60));

	// Layer 497
	this.instance_101 = new lib.shape16("synched",0);
	this.instance_101.setTransform(159.8,230.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_101).to({_off:true},62).wait(60));

	// Layer 496
	this.instance_102 = new lib.shape16("synched",0);
	this.instance_102.setTransform(179.9,215.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_102).to({_off:true},62).wait(60));

	// Layer 495
	this.instance_103 = new lib.shape15("synched",0);
	this.instance_103.setTransform(169.9,216.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_103).to({_off:true},62).wait(60));

	// Layer 494
	this.instance_104 = new lib.shape17("synched",0);
	this.instance_104.setTransform(205.2,206.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_104).to({_off:true},67).wait(55));

	// Layer 493
	this.instance_105 = new lib.shape16("synched",0);
	this.instance_105.setTransform(213.5,220.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_105).to({_off:true},67).wait(55));

	// Layer 492
	this.instance_106 = new lib.shape16("synched",0);
	this.instance_106.setTransform(195.1,202.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_106).to({_off:true},67).wait(55));

	// Layer 491
	this.instance_107 = new lib.shape15("synched",0);
	this.instance_107.setTransform(205,205.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_107).to({_off:true},67).wait(55));

	// Layer 490
	this.instance_108 = new lib.shape17("synched",0);
	this.instance_108.setTransform(169.6,204.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_108).to({_off:true},67).wait(55));

	// Layer 489
	this.instance_109 = new lib.shape16("synched",0);
	this.instance_109.setTransform(159.8,217.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_109).to({_off:true},67).wait(55));

	// Layer 488
	this.instance_110 = new lib.shape16("synched",0);
	this.instance_110.setTransform(179.9,202,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_110).to({_off:true},67).wait(55));

	// Layer 487
	this.instance_111 = new lib.shape15("synched",0);
	this.instance_111.setTransform(169.9,203.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_111).to({_off:true},67).wait(55));

	// Layer 486
	this.instance_112 = new lib.shape17("synched",0);
	this.instance_112.setTransform(204.8,193.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_112).to({_off:true},72).wait(50));

	// Layer 485
	this.instance_113 = new lib.shape16("synched",0);
	this.instance_113.setTransform(213.1,207.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_113).to({_off:true},72).wait(50));

	// Layer 484
	this.instance_114 = new lib.shape16("synched",0);
	this.instance_114.setTransform(194.7,189.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_114).to({_off:true},72).wait(50));

	// Layer 483
	this.instance_115 = new lib.shape15("synched",0);
	this.instance_115.setTransform(204.6,192.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_115).to({_off:true},72).wait(50));

	// Layer 482
	this.instance_116 = new lib.shape17("synched",0);
	this.instance_116.setTransform(169.2,191.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_116).to({_off:true},72).wait(50));

	// Layer 481
	this.instance_117 = new lib.shape16("synched",0);
	this.instance_117.setTransform(159.4,204.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_117).to({_off:true},72).wait(50));

	// Layer 480
	this.instance_118 = new lib.shape16("synched",0);
	this.instance_118.setTransform(179.4,189,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_118).to({_off:true},72).wait(50));

	// Layer 479
	this.instance_119 = new lib.shape15("synched",0);
	this.instance_119.setTransform(169.4,190.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_119).to({_off:true},72).wait(50));

	// Layer 478
	this.instance_120 = new lib.shape17("synched",0);
	this.instance_120.setTransform(204.8,180.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_120).to({_off:true},77).wait(45));

	// Layer 477
	this.instance_121 = new lib.shape16("synched",0);
	this.instance_121.setTransform(213.1,194.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_121).to({_off:true},77).wait(45));

	// Layer 476
	this.instance_122 = new lib.shape16("synched",0);
	this.instance_122.setTransform(194.7,176.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_122).to({_off:true},77).wait(45));

	// Layer 475
	this.instance_123 = new lib.shape15("synched",0);
	this.instance_123.setTransform(204.6,179.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_123).to({_off:true},77).wait(45));

	// Layer 474
	this.instance_124 = new lib.shape17("synched",0);
	this.instance_124.setTransform(169.2,177.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_124).to({_off:true},77).wait(45));

	// Layer 473
	this.instance_125 = new lib.shape16("synched",0);
	this.instance_125.setTransform(159.4,190.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_125).to({_off:true},77).wait(45));

	// Layer 472
	this.instance_126 = new lib.shape16("synched",0);
	this.instance_126.setTransform(179.4,175.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_126).to({_off:true},77).wait(45));

	// Layer 471
	this.instance_127 = new lib.shape15("synched",0);
	this.instance_127.setTransform(169.4,176.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_127).to({_off:true},77).wait(45));

	// Layer 470
	this.instance_128 = new lib.shape17("synched",0);
	this.instance_128.setTransform(203.9,167.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_128).to({_off:true},82).wait(40));

	// Layer 469
	this.instance_129 = new lib.shape16("synched",0);
	this.instance_129.setTransform(212.2,181.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_129).to({_off:true},82).wait(40));

	// Layer 468
	this.instance_130 = new lib.shape16("synched",0);
	this.instance_130.setTransform(193.8,163.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_130).to({_off:true},82).wait(40));

	// Layer 467
	this.instance_131 = new lib.shape15("synched",0);
	this.instance_131.setTransform(203.7,166.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_131).to({_off:true},82).wait(40));

	// Layer 466
	this.instance_132 = new lib.shape17("synched",0);
	this.instance_132.setTransform(168.3,165.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_132).to({_off:true},82).wait(40));

	// Layer 465
	this.instance_133 = new lib.shape16("synched",0);
	this.instance_133.setTransform(158.5,178.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_133).to({_off:true},82).wait(40));

	// Layer 464
	this.instance_134 = new lib.shape16("synched",0);
	this.instance_134.setTransform(178.5,163,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_134).to({_off:true},82).wait(40));

	// Layer 463
	this.instance_135 = new lib.shape15("synched",0);
	this.instance_135.setTransform(168.5,164.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_135).to({_off:true},82).wait(40));

	// Layer 462
	this.instance_136 = new lib.shape17("synched",0);
	this.instance_136.setTransform(203.9,154.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_136).to({_off:true},87).wait(35));

	// Layer 461
	this.instance_137 = new lib.shape16("synched",0);
	this.instance_137.setTransform(212.2,168.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_137).to({_off:true},87).wait(35));

	// Layer 460
	this.instance_138 = new lib.shape16("synched",0);
	this.instance_138.setTransform(193.8,150.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_138).to({_off:true},87).wait(35));

	// Layer 459
	this.instance_139 = new lib.shape15("synched",0);
	this.instance_139.setTransform(203.7,153.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_139).to({_off:true},87).wait(35));

	// Layer 458
	this.instance_140 = new lib.shape17("synched",0);
	this.instance_140.setTransform(168.3,151.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_140).to({_off:true},87).wait(35));

	// Layer 457
	this.instance_141 = new lib.shape16("synched",0);
	this.instance_141.setTransform(158.5,164.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_141).to({_off:true},87).wait(35));

	// Layer 456
	this.instance_142 = new lib.shape16("synched",0);
	this.instance_142.setTransform(178.5,149.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_142).to({_off:true},87).wait(35));

	// Layer 455
	this.instance_143 = new lib.shape15("synched",0);
	this.instance_143.setTransform(168.5,150.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_143).to({_off:true},87).wait(35));

	// Layer 454
	this.instance_144 = new lib.shape17("synched",0);
	this.instance_144.setTransform(205.2,140.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_144).to({_off:true},87).wait(35));

	// Layer 453
	this.instance_145 = new lib.shape16("synched",0);
	this.instance_145.setTransform(213.5,154.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_145).to({_off:true},87).wait(35));

	// Layer 452
	this.instance_146 = new lib.shape16("synched",0);
	this.instance_146.setTransform(195.1,136.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_146).to({_off:true},87).wait(35));

	// Layer 451
	this.instance_147 = new lib.shape15("synched",0);
	this.instance_147.setTransform(205,139.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_147).to({_off:true},87).wait(35));

	// Layer 450
	this.instance_148 = new lib.shape17("synched",0);
	this.instance_148.setTransform(169.6,137.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_148).to({_off:true},87).wait(35));

	// Layer 449
	this.instance_149 = new lib.shape16("synched",0);
	this.instance_149.setTransform(159.8,150.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_149).to({_off:true},87).wait(35));

	// Layer 448
	this.instance_150 = new lib.shape16("synched",0);
	this.instance_150.setTransform(179.9,135.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_150).to({_off:true},87).wait(35));

	// Layer 447
	this.instance_151 = new lib.shape15("synched",0);
	this.instance_151.setTransform(169.9,136.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_151).to({_off:true},87).wait(35));

	// Layer 446
	this.instance_152 = new lib.shape17("synched",0);
	this.instance_152.setTransform(205.2,126.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_152).to({_off:true},92).wait(30));

	// Layer 445
	this.instance_153 = new lib.shape16("synched",0);
	this.instance_153.setTransform(213.5,140.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_153).to({_off:true},92).wait(30));

	// Layer 444
	this.instance_154 = new lib.shape16("synched",0);
	this.instance_154.setTransform(195.1,122.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_154).to({_off:true},92).wait(30));

	// Layer 443
	this.instance_155 = new lib.shape15("synched",0);
	this.instance_155.setTransform(205,125.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_155).to({_off:true},92).wait(30));

	// Layer 442
	this.instance_156 = new lib.shape17("synched",0);
	this.instance_156.setTransform(169.6,124.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_156).to({_off:true},92).wait(30));

	// Layer 441
	this.instance_157 = new lib.shape16("synched",0);
	this.instance_157.setTransform(159.8,137.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_157).to({_off:true},92).wait(30));

	// Layer 440
	this.instance_158 = new lib.shape16("synched",0);
	this.instance_158.setTransform(179.9,122,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_158).to({_off:true},92).wait(30));

	// Layer 439
	this.instance_159 = new lib.shape15("synched",0);
	this.instance_159.setTransform(169.9,123.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_159).to({_off:true},92).wait(30));

	// Layer 438
	this.instance_160 = new lib.shape17("synched",0);
	this.instance_160.setTransform(204.8,113.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_160).to({_off:true},97).wait(25));

	// Layer 437
	this.instance_161 = new lib.shape16("synched",0);
	this.instance_161.setTransform(213.1,127.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_161).to({_off:true},97).wait(25));

	// Layer 436
	this.instance_162 = new lib.shape16("synched",0);
	this.instance_162.setTransform(194.7,109.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_162).to({_off:true},97).wait(25));

	// Layer 435
	this.instance_163 = new lib.shape15("synched",0);
	this.instance_163.setTransform(204.6,112.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_163).to({_off:true},97).wait(25));

	// Layer 434
	this.instance_164 = new lib.shape17("synched",0);
	this.instance_164.setTransform(169.2,111.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_164).to({_off:true},97).wait(25));

	// Layer 433
	this.instance_165 = new lib.shape16("synched",0);
	this.instance_165.setTransform(159.4,124.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_165).to({_off:true},97).wait(25));

	// Layer 432
	this.instance_166 = new lib.shape16("synched",0);
	this.instance_166.setTransform(179.4,109,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_166).to({_off:true},97).wait(25));

	// Layer 431
	this.instance_167 = new lib.shape15("synched",0);
	this.instance_167.setTransform(169.4,110.4,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_167).to({_off:true},97).wait(25));

	// Layer 430
	this.instance_168 = new lib.shape17("synched",0);
	this.instance_168.setTransform(204.8,100.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_168).to({_off:true},102).wait(20));

	// Layer 429
	this.instance_169 = new lib.shape16("synched",0);
	this.instance_169.setTransform(213.1,114.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_169).to({_off:true},102).wait(20));

	// Layer 428
	this.instance_170 = new lib.shape16("synched",0);
	this.instance_170.setTransform(194.7,96.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_170).to({_off:true},102).wait(20));

	// Layer 427
	this.instance_171 = new lib.shape15("synched",0);
	this.instance_171.setTransform(204.6,99.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_171).to({_off:true},102).wait(20));

	// Layer 426
	this.instance_172 = new lib.shape17("synched",0);
	this.instance_172.setTransform(169.2,97.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_172).to({_off:true},102).wait(20));

	// Layer 425
	this.instance_173 = new lib.shape16("synched",0);
	this.instance_173.setTransform(159.4,110.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_173).to({_off:true},102).wait(20));

	// Layer 424
	this.instance_174 = new lib.shape16("synched",0);
	this.instance_174.setTransform(179.4,95.5,0.352,0.337,0,52.5,58.7);

	this.instance_175 = new lib.sprite26();
	this.instance_175.setTransform(165,157,1,1,0,5,-174.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_174}]}).to({state:[]},102).to({state:[{t:this.instance_175}]},10).to({state:[]},6).wait(4));

	// Layer 423
	this.instance_176 = new lib.shape15("synched",0);
	this.instance_176.setTransform(169.4,96.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_176).to({_off:true},102).wait(20));

	// Layer 422
	this.instance_177 = new lib.shape17("synched",0);
	this.instance_177.setTransform(203.9,87.7,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_177).to({_off:true},107).wait(15));

	// Layer 421
	this.instance_178 = new lib.shape16("synched",0);
	this.instance_178.setTransform(212.2,101.8,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_178).to({_off:true},107).wait(15));

	// Layer 420
	this.instance_179 = new lib.shape16("synched",0);
	this.instance_179.setTransform(193.8,83.9,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_179).to({_off:true},107).wait(15));

	// Layer 419
	this.instance_180 = new lib.shape15("synched",0);
	this.instance_180.setTransform(203.7,86.9,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_180).to({_off:true},107).wait(15));

	// Layer 418
	this.instance_181 = new lib.shape17("synched",0);
	this.instance_181.setTransform(168.3,85.2,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_181).to({_off:true},107).wait(15));

	// Layer 417
	this.instance_182 = new lib.shape16("synched",0);
	this.instance_182.setTransform(158.5,98.4,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_182).to({_off:true},107).wait(15));

	// Layer 416
	this.instance_183 = new lib.shape16("synched",0);
	this.instance_183.setTransform(178.5,83,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_183).to({_off:true},107).wait(15));

	// Layer 415
	this.instance_184 = new lib.shape15("synched",0);
	this.instance_184.setTransform(168.5,84.4,0.352,0.515,0,52.5,58.7);

	this.instance_185 = new lib.sprite26();
	this.instance_185.setTransform(204,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_184}]}).to({state:[]},107).to({state:[{t:this.instance_185}]},5).to({state:[]},6).wait(4));

	// Layer 414
	this.instance_186 = new lib.shape17("synched",0);
	this.instance_186.setTransform(203.9,74.2,0.952,0.936,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_186).to({_off:true},112).wait(10));

	// Layer 413
	this.instance_187 = new lib.shape16("synched",0);
	this.instance_187.setTransform(212.2,88.3,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_187).to({_off:true},112).wait(10));

	// Layer 412
	this.instance_188 = new lib.shape16("synched",0);
	this.instance_188.setTransform(193.8,70.4,0.348,0.342,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_188).to({_off:true},112).wait(10));

	// Layer 411
	this.instance_189 = new lib.shape15("synched",0);
	this.instance_189.setTransform(203.7,73.4,0.348,0.522,0,-45.7,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_189).to({_off:true},112).wait(10));

	// Layer 410
	this.instance_190 = new lib.shape17("synched",0);
	this.instance_190.setTransform(168.3,71.7,0.963,0.923,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_190).to({_off:true},112).wait(10));

	// Layer 409
	this.instance_191 = new lib.shape16("synched",0);
	this.instance_191.setTransform(158.5,84.9,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_191).to({_off:true},112).wait(10));

	// Layer 408
	this.instance_192 = new lib.shape16("synched",0);
	this.instance_192.setTransform(178.5,69.5,0.352,0.337,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_192).to({_off:true},112).wait(10));

	// Layer 407
	this.instance_193 = new lib.shape15("synched",0);
	this.instance_193.setTransform(168.5,70.9,0.352,0.515,0,52.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_193).to({_off:true},112).wait(10));

	// Layer 406
	this.instance_194 = new lib.sprite26();
	this.instance_194.setTransform(164,171,1,1,0,5,-174.9);
	this.instance_194._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_194).wait(107).wait(5).to({_off:false},0).to({_off:true},6).wait(4));

	// Layer 397
	this.instance_195 = new lib.sprite26();
	this.instance_195.setTransform(208,173);
	this.instance_195._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_195).wait(107).to({_off:false},0).wait(4).wait(1).to({x:203,y:171},0).to({_off:true},6).wait(4));

	// Layer 388
	this.instance_196 = new lib.sprite26();
	this.instance_196.setTransform(165,184,1,1,0,5,-174.9);
	this.instance_196._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_196).wait(102).wait(5).to({_off:false},0).to({_off:true},11).wait(4));

	// Layer 379
	this.instance_197 = new lib.sprite26();
	this.instance_197.setTransform(161,186,1,1,0,5,-174.9);
	this.instance_197._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_197).wait(102).to({_off:false},0).to({scaleX:1,scaleY:1},2).to({x:161.1},1).to({scaleX:1,scaleY:1,x:161},1).wait(1).to({skewX:0,skewY:0,x:204,y:184},0).to({_off:true},11).wait(4));

	// Layer 370
	this.instance_198 = new lib.sprite26();
	this.instance_198.setTransform(164,197,1,1,0,5,-174.9);
	this.instance_198._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_198).wait(97).wait(5).to({_off:false},0).to({_off:true},16).wait(4));

	// Layer 361
	this.instance_199 = new lib.sprite26();
	this.instance_199.setTransform(203,197);
	this.instance_199._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_199).wait(97).to({_off:false},0).to({_off:true},21).wait(4));

	// Layer 352
	this.instance_200 = new lib.sprite26();
	this.instance_200.setTransform(164,211,1,1,0,5,-174.9);
	this.instance_200._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_200).wait(92).wait(5).to({_off:false},0).to({_off:true},21).wait(4));

	// Layer 343
	this.instance_201 = new lib.sprite26();
	this.instance_201.setTransform(164,211,1,1,0,5,-174.9);
	this.instance_201._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_201).wait(92).to({_off:false},0).to({scaleX:1,scaleY:1},2).to({x:164.1},1).to({scaleX:1,scaleY:1,x:164},1).wait(1).to({skewX:0,skewY:0,x:203},0).to({_off:true},21).wait(4));

	// Layer 334
	this.instance_202 = new lib.sprite26();
	this.instance_202.setTransform(164,224,1,1,0,5,-174.9);
	this.instance_202._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_202).wait(87).wait(5).to({_off:false},0).to({_off:true},26).wait(4));

	// Layer 325
	this.instance_203 = new lib.sprite26();
	this.instance_203.setTransform(203,224);
	this.instance_203._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_203).wait(87).to({_off:false},0).to({_off:true},31).wait(4));

	// Layer 316
	this.instance_204 = new lib.sprite26();
	this.instance_204.setTransform(164,238,1,1,0,5,-174.9);
	this.instance_204._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_204).wait(87).to({_off:false},0).to({_off:true},31).wait(4));

	// Layer 307
	this.instance_205 = new lib.sprite26();
	this.instance_205.setTransform(203,238);
	this.instance_205._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_205).wait(87).to({_off:false},0).to({_off:true},31).wait(4));

	// Layer 298
	this.instance_206 = new lib.sprite26();
	this.instance_206.setTransform(164,251,1,1,0,5,-174.9);
	this.instance_206._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_206).wait(82).wait(5).to({_off:false},0).to({_off:true},31).wait(4));

	// Layer 289
	this.instance_207 = new lib.sprite26();
	this.instance_207.setTransform(203,249);
	this.instance_207._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_207).wait(77).wait(5).to({_off:false},0).wait(4).wait(1).to({y:253},0).to({_off:true},31).wait(4));

	// Layer 280
	this.instance_208 = new lib.sprite26();
	this.instance_208.setTransform(164,261,1,1,0,5,-174.9);
	this.instance_208._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_208).wait(77).to({_off:false},0).to({scaleX:1,scaleY:1},1).wait(7).to({scaleX:1,scaleY:1},1).wait(1).to({y:263},0).to({_off:true},31).wait(4));

	// Layer 271
	this.instance_209 = new lib.sprite26();
	this.instance_209.setTransform(203,263);
	this.instance_209._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_209).wait(77).to({_off:false},0).wait(9).wait(1).to({y:267},0).to({_off:true},31).wait(4));

	// Layer 262
	this.instance_210 = new lib.sprite26();
	this.instance_210.setTransform(163,275,1,1,0,5,-174.9);
	this.instance_210._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_210).wait(72).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1,y:274.9},1).wait(1).to({x:162.9},0).wait(5).to({x:163},1).to({scaleX:1,scaleY:1,y:275},1).wait(1).to({y:277},0).to({_off:true},31).wait(4));

	// Layer 253
	this.instance_211 = new lib.sprite26();
	this.instance_211.setTransform(163,275,1,1,0,5,-174.9);
	this.instance_211._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_211).wait(72).to({_off:false},0).to({scaleX:1,scaleY:1,y:274.9},1).to({x:162.9},1).to({x:163},1).to({scaleX:1,scaleY:1,y:275},1).wait(1).to({skewX:0,skewY:0,x:202,y:277},0).wait(9).wait(1).to({y:279},0).to({_off:true},31).wait(4));

	// Layer 244
	this.instance_212 = new lib.sprite26();
	this.instance_212.setTransform(164,288,1,1,0,5,-174.9);
	this.instance_212._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_212).wait(67).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1},1).wait(12).to({scaleX:1,scaleY:1},1).wait(1).to({y:290},0).to({_off:true},31).wait(4));

	// Layer 235
	this.instance_213 = new lib.sprite26();
	this.instance_213.setTransform(203,290);
	this.instance_213._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_213).wait(67).to({_off:false},0).wait(19).wait(1).to({y:292},0).to({_off:true},31).wait(4));

	// Layer 226
	this.instance_214 = new lib.sprite26();
	this.instance_214.setTransform(164,302,1,1,0,5,-174.9);
	this.instance_214._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_214).wait(62).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1,x:164.1},1).wait(17).to({scaleX:1,scaleY:1,x:164},1).wait(1).to({y:304},0).to({_off:true},31).wait(4));

	// Layer 217
	this.instance_215 = new lib.sprite26();
	this.instance_215.setTransform(203,304);
	this.instance_215._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_215).wait(62).to({_off:false},0).wait(24).wait(1).to({y:305},0).to({_off:true},31).wait(4));

	// Layer 208
	this.instance_216 = new lib.sprite26();
	this.instance_216.setTransform(163,316,1,1,0,5,-174.9);
	this.instance_216._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_216).wait(57).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1},1).wait(4).to({x:163.1},6).wait(2).to({x:163},3).wait(4).to({scaleX:1,scaleY:1},4).wait(1).to({y:317},0).to({_off:true},31).wait(4));

	// Layer 199
	this.instance_217 = new lib.sprite26();
	this.instance_217.setTransform(163,316,1,1,0,5,-174.9);
	this.instance_217._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_217).wait(57).to({_off:false},0).to({scaleX:1,scaleY:1},2).wait(1).to({scaleX:1,scaleY:1},1).wait(1).to({skewX:0,skewY:0,x:202,y:318},0).wait(24).wait(1).to({y:319},0).to({_off:true},31).wait(4));

	// Layer 190
	this.instance_218 = new lib.sprite26();
	this.instance_218.setTransform(162,331,1,1,0,5,-174.9);
	this.instance_218._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_218).wait(52).wait(5).to({_off:false},0).to({_off:true},61).wait(4));

	// Layer 181
	this.instance_219 = new lib.sprite26();
	this.instance_219.setTransform(201,333);
	this.instance_219._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_219).wait(47).wait(5).to({_off:false},0).to({_off:true},66).wait(4));

	// Layer 172
	this.instance_220 = new lib.sprite26();
	this.instance_220.setTransform(162,344,1,1,0,5,-174.9);
	this.instance_220._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_220).wait(47).to({_off:false},0).to({_off:true},71).wait(4));

	// Layer 163
	this.instance_221 = new lib.sprite26();
	this.instance_221.setTransform(201,346);
	this.instance_221._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_221).wait(42).wait(5).to({_off:false},0).to({_off:true},71).wait(4));

	// Layer 154
	this.instance_222 = new lib.sprite26();
	this.instance_222.setTransform(162,357,1,1,0,5,-174.9);
	this.instance_222._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_222).wait(42).to({_off:false},0).to({_off:true},76).wait(4));

	// Layer 145
	this.instance_223 = new lib.sprite26();
	this.instance_223.setTransform(201,359);
	this.instance_223._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_223).wait(42).to({_off:false},0).to({_off:true},76).wait(4));

	// Layer 136
	this.instance_224 = new lib.sprite26();
	this.instance_224.setTransform(163,370,1,1,0,5,-174.9);
	this.instance_224._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_224).wait(37).wait(5).to({_off:false},0).to({_off:true},76).wait(4));

	// Layer 127
	this.instance_225 = new lib.sprite26();
	this.instance_225.setTransform(202,372);
	this.instance_225._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_225).wait(37).to({_off:false},0).to({_off:true},81).wait(4));

	// Layer 118
	this.instance_226 = new lib.sprite26();
	this.instance_226.setTransform(163,383,1,1,0,5,-174.9);
	this.instance_226._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_226).wait(32).wait(5).to({_off:false},0).to({_off:true},81).wait(4));

	// Layer 109
	this.instance_227 = new lib.sprite26();
	this.instance_227.setTransform(163,383,1,1,0,5,-174.9);
	this.instance_227._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_227).wait(32).to({_off:false},0).to({scaleX:1,scaleY:1,x:162.9},2).to({scaleX:1,scaleY:1,x:163},2).wait(1).to({skewX:0,skewY:0,x:202,y:385},0).to({_off:true},81).wait(4));

	// Layer 100
	this.instance_228 = new lib.sprite26();
	this.instance_228.setTransform(163,397,1,1,0,5,-174.9);
	this.instance_228._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_228).wait(27).wait(5).to({_off:false},0).to({_off:true},86).wait(4));

	// Layer 91
	this.instance_229 = new lib.sprite26();
	this.instance_229.setTransform(163,397,1,1,0,5,-174.9);
	this.instance_229._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_229).wait(22).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1},1).to({y:397.1},1).to({scaleX:1,scaleY:1,y:397},2).wait(1).to({skewX:0,skewY:0,x:202,y:399},0).to({_off:true},86).wait(4));

	// Layer 82
	this.instance_230 = new lib.sprite26();
	this.instance_230.setTransform(162,411,1,1,0,5,-174.9);
	this.instance_230._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_230).wait(22).to({_off:false},0).to({_off:true},96).wait(4));

	// Layer 73
	this.instance_231 = new lib.sprite26();
	this.instance_231.setTransform(201,413);
	this.instance_231._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_231).wait(22).to({_off:false},0).to({_off:true},96).wait(4));

	// Layer 64
	this.instance_232 = new lib.sprite26();
	this.instance_232.setTransform(162,425,1,1,0,5,-174.9);
	this.instance_232._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_232).wait(17).wait(5).to({_off:false},0).to({_off:true},96).wait(4));

	// Layer 55
	this.instance_233 = new lib.sprite26();
	this.instance_233.setTransform(201,427);
	this.instance_233._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_233).wait(12).wait(5).to({_off:false},0).to({_off:true},101).wait(4));

	// Layer 46
	this.instance_234 = new lib.sprite26();
	this.instance_234.setTransform(162,437,1,1,0,5,-174.9);
	this.instance_234._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_234).wait(12).to({_off:false},0).to({_off:true},106).wait(4));

	// Layer 37
	this.instance_235 = new lib.sprite26();
	this.instance_235.setTransform(201,439);
	this.instance_235._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_235).wait(12).to({_off:false},0).to({_off:true},106).wait(4));

	// Layer 28
	this.instance_236 = new lib.sprite26();
	this.instance_236.setTransform(162,450,1,1,0,5,-174.9);
	this.instance_236._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_236).wait(7).wait(5).to({_off:false},0).to({_off:true},106).wait(4));

	// Layer 19
	this.instance_237 = new lib.sprite26();
	this.instance_237.setTransform(162,450,1,1,0,5,-174.9);
	this.instance_237._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_237).wait(2).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1,x:161.9},2).to({scaleX:1,scaleY:1,x:162},2).wait(1).to({skewX:0,skewY:0,x:201,y:452},0).to({_off:true},106).wait(4));

	// Layer 10
	this.instance_238 = new lib.sprite26();
	this.instance_238.setTransform(163,463,1,1,0,5,-174.9);
	this.instance_238._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_238).wait(2).to({_off:false},0).to({_off:true},116).wait(4));

	// Layer 5
	this.fire = new lib.sprite25();
	this.fire.setTransform(197.7,299.2,1.458,1.458);
	this.fire._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fire).wait(1).to({_off:false},0).to({_off:true},1).wait(120));

	// Layer 2
	this.fire_1 = new lib.sprite25();
	this.fire_1.setTransform(184.8,382.5,1.458,1.458);
	this.fire_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fire_1).wait(1).to({_off:false},0).to({_off:true},1).wait(120));

	// Layer 1
	this.instance_239 = new lib.sprite26();
	this.instance_239.setTransform(202,465);
	this.instance_239._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_239).wait(1).wait(1).to({_off:false},0).to({_off:true},116).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.8,54.3,73.1,344.3);


(lib.run = function() {
	this.initialize();

	// 图层 2
	this.bp1 = new lib.bp();
	this.bp1.setTransform(-853,-415.6,2.005,1.869,0,0,0,153.8,50.5);

	// 图层 1
	this.yanhua = new lib.yh();
	this.yanhua.setTransform(-680.1,-316.6,2.599,2.599,0,0,0,-403.8,-111.9);

	this.bp = new lib.bp();
	this.bp.setTransform(554.4,-415.6,2.005,1.869,0,0,0,153.8,50.5);

	this.addChild(this.bp,this.yanhua,this.bp1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-861.1,-408.5,1554.1,822.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;