

function Reports() {
  const reports = [
    { id: 1, name: "Monthly Revenue Report", date: "2026-11-01", status: "Completed" },
    { id: 2, name: "Users Activity Report", date: "2026-11-10", status: "Completed" },
    { id: 3, name: "Sales Performance Report", date: "2026-11-15", status: "Pending" },
    { id: 4, name: "Products Report", date: "2026-11-20", status: "Completed" }
  ];

  function exportCSV() {
    const headers = ["ID", "Report Name", "Date", "Status"];

    const rows = reports.map((report) => [
      report.id,
      report.name,
      report.date,
      report.status
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(","))
    ].join("\n");

    const blob = new Blob(
      ["\uFEFF" + csvContent],
      { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "reports.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="reports-page">
      <h1>Reports</h1>
      <p>View and manage your business reports.</p>

      <button onClick={exportCSV}>
        Export CSV
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Report Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.name}</td>
              <td>{report.date}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
