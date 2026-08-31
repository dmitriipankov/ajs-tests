export default function healthIndication(personage) {
  let indication = 'wounded';
  if (personage.health > 50) {
    indication = 'healthy';
  } else if (personage.health < 15) {
    indication = 'critical';
  }
  return indication;
}
