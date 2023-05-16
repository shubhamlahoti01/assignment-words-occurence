import React, { useState } from 'react';
import MyChart from './MyChart';

const App = () => {
  const [histogramData, setHistogramData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const fetchMe = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://www.terriblytinytales.com/test.txt'
      );
      const text = await response.text();

      // const words = text.split(/\s+/); // split on whitespace

      const words = text.match(/\w+/g);
      const counts = {};

      for (let word of words) {
        counts[word] = (counts[word] || 0) + 1;
      }

      // Convert the counts object to an array of objects with word and count properties
      const wordCounts = Object.entries(counts).map(([word, count]) => ({
        word,
        count,
      }));
      setHistogramData(wordCounts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const exportData = () => {
    const csvContent = 'data:text/csv;charset=utf-8,';
    const csvData = histogramData
      .map((data) => `${data.word},${data.count}`)
      .join('\n');
    const encodedUri = encodeURI(csvContent + csvData);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'histogram_data.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <button onClick={fetchMe} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
      {histogramData.length > 0 && (
        <div>
          <button onClick={exportData}>Export</button>
          <h2>Histogram</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {histogramData.length > 0 &&
                  histogramData.map((data, i) => (
                    <tr key={i}>
                      <td>{data.word}</td>
                      <td>{data.count}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div>
            <MyChart histogramData={histogramData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
