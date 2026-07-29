function field(id, value) { return `${id}${String(value.length).padStart(2, "0")}${value}`; }

export function crc16(payload) {
  let crc = 0xffff;
  for (let index = 0; index < payload.length; index += 1) {
    crc ^= payload.charCodeAt(index) << 8;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

export function buildPix({ key, name, city, amount, txid }) {
  const merchantAccount = field("00", "BR.GOV.BCB.PIX") + field("01", key);
  const base = field("00", "01") + field("26", merchantAccount) + field("52", "0000") + field("53", "986") + field("54", Number(amount).toFixed(2)) + field("58", "BR") + field("59", name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().slice(0, 25)) + field("60", city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().slice(0, 15)) + field("62", field("05", txid.slice(0, 25))) + "6304";
  return base + crc16(base);
}
