import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

const tradingData = [
  { month: 'Jan', profit: 1200, loss: 400 },
  { month: 'Feb', profit: 1900, loss: 600 },
  { month: 'Mar', profit: 2400, loss: 800 },
  { month: 'Apr', profit: 2800, loss: 1000 },
  { month: 'May', profit: 3100, loss: 1200 },
  { month: 'Jun', profit: 3800, loss: 1400 },
];

const winRateData = [
  { name: 'Win', value: 78, color: '#10b981' },
  { name: 'Loss', value: 22, color: '#ef4444' },
];

export function ProfitLossChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={tradingData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          contentStyle={{ backgroundColor: '#1e293b', border: 'none' }}
          labelStyle={{ color: '#fff' }}
        />
        <Legend />
        <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} />
        <Line type="monotone" dataKey="loss" stroke="#ef4444" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function WinRatePie() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={winRateData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          label
        >
          {winRateData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}