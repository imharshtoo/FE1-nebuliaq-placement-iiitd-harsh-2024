    import React, { useState } from 'react';
    import './ServiceMetricsTable.css';

    const ServiceMetricsTable = ({ data }) => {
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState(null);

    const filteredData = data.filter(service => 
        service.service.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortConfig !== null) {
        const side = sortConfig.side;
        const metric = sortConfig.metric;

        const aValue = a[side][metric];
        const bValue = b[side][metric];

        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (side, metric) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.side === side && sortConfig.metric === metric && sortConfig.direction === 'ascending') {
        direction = 'descending';
        }
        setSortConfig({ side, metric, direction });
    };

    return (
        <div>
        <h1>Filter Data By Name</h1>
        <input
            type="text"
            placeholder="Filter by service name..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        />
        <h2>Click On Top Of Every Column Heading To Sort Them in Ascending Or Descending Order!!!!</h2>
        <table>
            <thead>
            <tr>
                <th>Service</th>
                <th onClick={() => requestSort('client', 'requests')}>Client Requests</th>
                <th onClick={() => requestSort('client', 'rate')}>Client Rate</th>
                <th onClick={() => requestSort('client', 'p75')}>Client p75</th>
                <th onClick={() => requestSort('client', 'p90')}>Client p90</th>
                <th onClick={() => requestSort('client', 'p99')}>Client p99</th>
                <th onClick={() => requestSort('client', 'error')}>Client Error</th>
                <th onClick={() => requestSort('server', 'requests')}>Server Requests</th>
                <th onClick={() => requestSort('server', 'rate')}>Server Rate</th>
                <th onClick={() => requestSort('server', 'p75')}>Server p75</th>
                <th onClick={() => requestSort('server', 'p90')}>Server p90</th>
                <th onClick={() => requestSort('server', 'p99')}>Server p99</th>
                <th onClick={() => requestSort('server', 'error')}>Server Error</th>
            </tr>
            </thead>
            <tbody>
            {sortedData.map((service, index) => (
                <tr key={index}>
                <td>{service.service}</td>
                <td>{service.client.requests}</td>
                <td>{service.client.rate}</td>
                <td>{service.client.p75}</td>
                <td>{service.client.p90}</td>
                <td>{service.client.p99}</td>
                <td>{service.client.error}</td>
                <td>{service.server.requests}</td>
                <td>{service.server.rate}</td>
                <td>{service.server.p75}</td>
                <td>{service.server.p90}</td>
                <td>{service.server.p99}</td>
                <td>{service.server.error}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default ServiceMetricsTable;
