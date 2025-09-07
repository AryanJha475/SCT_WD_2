/* Background */
body {
  margin: 0;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
}

/* Container */
.container {
  text-align: center;
}

/* Heading */
h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0px 4px 10px rgba(0,0,0,0.4);
  animation: fadeInDown 1s ease-in-out;
}

/* Stopwatch Box */
.stopwatch {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 10px 25px rgba(0,0,0,0.3);
  animation: fadeInUp 1s ease-in-out;
}

/* Timer Display */
.time {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 0px 0px 10px cyan;
  animation: pulse 1.5s infinite alternate;
}

/* Buttons */
.buttons button {
  padding: 12px 25px;
  margin: 8px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.3);
}

.start { background: #28a745; color: white; }
.pause { background: #ffc107; color: black; }
.reset { background: #dc3545; color: white; }
.lap   { background: #17a2b8; color: white; }

.buttons button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

/* Laps Section */
.laps {
  margin-top: 20px;
  max-height: 200px;
  overflow-y: auto;
  text-align: left;
  font-size: 1rem;
  background: rgba(0,0,0,0.2);
  padding: 15px;
  border-radius: 10px;
  box-shadow: inset 0px 4px 10px rgba(0,0,0,0.3);
}

.laps p {
  margin: 5px 0;
  padding: 8px;
  border-radius: 5px;
  background: rgba(255,255,255,0.1);
  animation: fadeIn 0.5s ease-in-out;
}

/* Animations */
@keyframes pulse {
  from { text-shadow: 0px 0px 10px cyan; }
  to   { text-shadow: 0px 0px 20px cyan; }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
