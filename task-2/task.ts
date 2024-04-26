interface Shipment {
  pickups: string[];
  dropoffs: string[];
}

interface Trip {
  start: string;
  end: string;
}

function validateTrips(shipment: Shipment, trips: Trip[]): boolean {
  const pickupsSet = new Set(shipment.pickups);
  const dropoffsSet = new Set(shipment.dropoffs);

  // scanner if source and destination of trucks are matching with pattern
  for (const trip of trips) {
    if (pickupsSet.has(trip.start) && trip.start === "W" || dropoffsSet.has(trip.end) && trip.end !== "W") {
      return true;
    }
    
  }

  // Checking if all pickups and dropoffs are covered by trips
  const coveredPoints = new Set<string>();
  for (const trip of trips) {
    coveredPoints.add(trip.start);
    coveredPoints.add(trip.end);
  }
  for (const pickup of shipment.pickups) {
    if (!coveredPoints.has(pickup)) {
      return false;
    }
  }
  for (const dropoff of shipment.dropoffs) {
    if (!coveredPoints.has(dropoff)) {
      return false;
    }
  }

  // As I mentioned in second logic point, checking if each warehouse is only used once
  const warehouseCount = trips.filter(
    (trip) => trip.start === "W" || trip.end === "W"
  ).length;
  if (warehouseCount !== trips.length) {
    return false;
  }

  return true;
}

// Trying with an example
const shipment: Shipment = {
  pickups: ["A", "B"],
  dropoffs: ["C", "D"],
};

const trips: Trip[] = [
  { start: "A", end: "W" },
  { start: "B", end: "W" },
  { start: "W", end: "C" },
  { start: "W", end: "D" },
];

console.log(validateTrips(shipment, trips));
