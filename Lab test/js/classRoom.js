class ClassRoom {
  constructor(roomNo, occupancy, cls, sec, free) {
    this.roomNo = roomNo;
    this.occupancy = occupancy;
    this.free = free;
    this.homeClassRoom = new HomeClassRoom(cls, sec);
  }
}
