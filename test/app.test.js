console.log("Starting Unit Test...");

// Simple test
const expected = 2 + 2;
const actual = 4;

if (expected === actual) {
  console.log("✅ Unit Test Passed");
  process.exit(0); // Success
} else {
  console.log("❌ Unit Test Failed");
  process.exit(1); // Failure
}
