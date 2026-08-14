export default function handler(req, res) {
  res.status(200).json({
    message: "Hello from the Apex backend!",
    status: "Backend is working!",
    time: new Date().toISOString()
  });
}