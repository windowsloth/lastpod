class Block {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

class Quadtree {
  constructor(bounds, n) {
    this.bounds = bounds;
    this.capacity = n;
    this.points = [];
    this.subdivided = false;
    this.northwest;
    this.northeast;
    this.southwest;
    this.southeast;
  }

  insert(pin) {
    let point = pin.pos;
    if (!this.checkbounds(point)) {
      return;
    }
    if (this.points.length < this.capacity && !this.subdivided) {
      this.points.push(pin);
    } else if (this.subdivided) {
      this.northwest.insert(pin);
      this.northeast.insert(pin);
      this.southwest.insert(pin);
      this.southeast.insert(pin);
    } else {
      this.subdivide();
      this.northwest.insert(pin);
      this.northeast.insert(pin);
      this.southwest.insert(pin);
      this.southeast.insert(pin);
    }
  }

  checkbounds(point) {
    if (
      point[0] * s > this.bounds.x &&
      point[0] * s < this.bounds.x + this.bounds.w &&
      point[1] * s > this.bounds.y &&
      point[1] * s < this.bounds.y + this.bounds.h
    ) {
      return true;
    }
  }

  subdivide() {
    let subw = this.bounds.w / 2;
    let subh = this.bounds.h / 2;
    let nw = new Block(this.bounds.x, this.bounds.y, subw, subh);
    this.northwest = new Quadtree(nw, 4);
    let ne = new Block(this.bounds.x + subw, this.bounds.y, subw, subh);
    this.northeast = new Quadtree(ne, 4);
    let sw = new Block(this.bounds.x, this.bounds.y + subh, subw, subh);
    this.southwest = new Quadtree(sw, 4);
    let se = new Block(this.bounds.x + subw, this.bounds.y + subh, subw, subh);
    this.southeast = new Quadtree(se, 4);
    this.subdivided = true;

    for (let point of this.points) {
      this.northwest.insert(point);
      this.northeast.insert(point);
      this.southwest.insert(point);
      this.southeast.insert(point);
    }
    this.points.splice(0, this.points.length);
  }
}
