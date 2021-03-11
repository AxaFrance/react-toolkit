import { getPosition } from '../NavBar/NavBar.helpers';

describe('SetPosition', () => {
  it('key : ArrowRight, Se deplace vers la droite ', () => {
    const newPosition = getPosition(10, 3, 'ArrowRight');
    expect(newPosition).toEqual(4);
  });
  it('key : ArrowLeft, Se deplace vers la gauche ', () => {
    const newPosition = getPosition(10, 3, 'ArrowLeft');
    expect(newPosition).toEqual(2);
  });
  it('key : ArrowRight, Reviens au début quand on est au bout', () => {
    const newPosition = getPosition(10, 9, 'ArrowRight');
    expect(newPosition).toEqual(0);
  });
  it('key : ArrowLeft, Reviens à la fin quand on est au début', () => {
    const newPosition = getPosition(10, 0, 'ArrowLeft');
    expect(newPosition).toEqual(9);
  });
  it('key : ArrowDown, Se déplace vers le bas', () => {
    const newPosition = getPosition(10, 2, 'ArrowDown');
    expect(newPosition).toEqual(3);
  });
  it('key : ArrowUp, Se déplace vers le haut', () => {
    const newPosition = getPosition(10, 2, 'ArrowUp');
    expect(newPosition).toEqual(1);
  });
  it('key : ArrowDown, Reviens à la fin quand on est au début', () => {
    const newPosition = getPosition(10, 9, 'ArrowDown');
    expect(newPosition).toEqual(0);
  });
  it('key : ArrowUp, Reviens à la fin quand on est au début', () => {
    const newPosition = getPosition(10, 0, 'ArrowUp');
    expect(newPosition).toEqual(9);
  });
  it('key : autre, Ne fait rien', () => {
    const newPosition = getPosition(10, 5, 'Alt');
    expect(newPosition).toEqual(5);
  });
});
