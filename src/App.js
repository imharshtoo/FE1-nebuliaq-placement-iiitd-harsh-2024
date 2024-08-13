import React from 'react';
import ServiceMetricsTable from './ServiceMetricsTable';

const data = [
  {
    service: "order-platform",
    client: {
      requests: 767,
      rate: "0.85 req/s",
      p75: "26.97 ms",
      p90: "1.37 s",
      p99: "1.45 s",
      error: "0.40%"
    },
    server: {
      requests: 769,
      rate: "0.85 req/s",
      p75: "25.87 ms",
      p90: "1.37 s",
      p99: "1.45 s",
      error: "8.38%"
    }
  },
  {
    service: "payment-gateway",
    client: {
      requests: 450,
      rate: "1.25 req/s",
      p75: "15.23 ms",
      p90: "1.02 s",
      p99: "1.10 s",
      error: "0.25%"
    },
    server: {
      requests: 455,
      rate: "1.20 req/s",
      p75: "14.97 ms",
      p90: "0.95 s",
      p99: "1.05 s",
      error: "5.20%"
    }
  },
  {
    service: "inventory-management",
    client: {
      requests: 600,
      rate: "0.95 req/s",
      p75: "20.11 ms",
      p90: "1.20 s",
      p99: "1.30 s",
      error: "0.60%"
    },
    server: {
      requests: 610,
      rate: "0.93 req/s",
      p75: "19.85 ms",
      p90: "1.10 s",
      p99: "1.25 s",
      error: "6.75%"
    }
  },
  {
    service: "user-authentication",
    client: {
      requests: 820,
      rate: "1.05 req/s",
      p75: "18.30 ms",
      p90: "1.15 s",
      p99: "1.22 s",
      error: "0.30%"
    },
    server: {
      requests: 825,
      rate: "1.08 req/s",
      p75: "17.90 ms",
      p90: "1.10 s",
      p99: "1.20 s",
      error: "4.80%"
    }
  },
  {
    service: "notification-service",
    client: {
      requests: 700,
      rate: "0.75 req/s",
      p75: "22.50 ms",
      p90: "1.35 s",
      p99: "1.40 s",
      error: "0.55%"
    },
    server: {
      requests: 705,
      rate: "0.72 req/s",
      p75: "21.90 ms",
      p90: "1.25 s",
      p99: "1.35 s",
      error: "7.50%"
    }
  },
  {
    service: "analytics-dashboard",
    client: {
      requests: 530,
      rate: "0.95 req/s",
      p75: "27.10 ms",
      p90: "1.45 s",
      p99: "1.55 s",
      error: "0.70%"
    },
    server: {
      requests: 535,
      rate: "0.90 req/s",
      p75: "26.70 ms",
      p90: "1.35 s",
      p99: "1.50 s",
      error: "5.90%"
    }
  },
  {
    service: "customer-support",
    client: {
      requests: 490,
      rate: "0.80 req/s",
      p75: "24.00 ms",
      p90: "1.40 s",
      p99: "1.48 s",
      error: "0.65%"
    },
    server: {
      requests: 495,
      rate: "0.78 req/s",
      p75: "23.50 ms",
      p90: "1.30 s",
      p99: "1.45 s",
      error: "6.20%"
    }
  }
];


function App() {
  return (
    <div className="App">
      <ServiceMetricsTable data={data} />
    </div>
  );
}

export default App;
