import ClassRoom from './0-classroom';

/**
 * initializeRooms - makes 3 instances of class ClassRoom
 * @returns: an array of 3 ClassRooms
*/
function initializeRooms() {
  const obj1 = new ClassRoom(19);
  const obj2 = new ClassRoom(20);
  const obj3 = new ClassRoom(34);
  return [obj1, obj2, obj3];
}

export default initializeRooms;
