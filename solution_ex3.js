let portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
let portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
let portPowersKw = [250, 150, 60, 250, 60, 150];

let indexS01 = portIds.indexOf('S01');
if (indexS01 !== -1) {
  portStatuses[indexS01] = 'CHARGING';
}

let indexS03 = portIds.indexOf('S03');
if (indexS03 !== -1) {
  portStatuses[indexS03] = 'AVAILABLE';
}

let availableCount = 0;
let maxPower = 0;
let bestPortId = '';

for (let i = 0; i < portIds.length; i++) {
  if (portStatuses[i] === 'AVAILABLE') {
    availableCount++;
    if (portPowersKw[i] > maxPower) {
      maxPower = portPowersKw[i];
      bestPortId = portIds[i];
    }
  }
}

console.log('DANH SACH TRU SAC SAU CAP NHAT');
for (let i = 0; i < portIds.length; i++) {
  console.log(`Trụ ${portIds[i]}: ${portStatuses[i]} - ${portPowersKw[i]} kW`);
}

console.log('THONG KE TRU KHA DUNG');
console.log(`Số lượng trụ sẵn sàng: ${availableCount}`);
console.log(`Trụ sẵn sàng có công suất cao nhất: ${bestPortId} (${maxPower} kW)`);