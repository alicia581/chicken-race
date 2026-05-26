import { useState, useEffect, useRef, useCallback } from "react";

/* ===== CHICKEN DATA ===== */
const CHICKENS = [
  { id: 1, name: "Kopral", color: "#e74c3c", rarity: "Common", power: 52, desc: "Tapi tangguh di lintasan", emoji: "🐓" },
  { id: 2, name: "Sersan", color: "#e67e22", rarity: "Common", power: 61, desc: "Penjaga gawang", emoji: "🐔" },
  { id: 3, name: "Letnan", color: "#27ae60", rarity: "Rare", power: 74, desc: "Cepat & lincah", emoji: "🐤" },
  { id: 4, name: "Kapten", color: "#3498db", rarity: "Rare", power: 81, desc: "Strategis", emoji: "🦅" },
  { id: 5, name: "Jenderal", color: "#9b59b6", rarity: "Epic", power: 90, desc: "Tak terkalahkan", emoji: "🦅" },
  { id: 6, name: "Panglima", color: "#f1c40f", rarity: "Legendary", power: 99, desc: "Raja lintasan", emoji: "🔥" },
];