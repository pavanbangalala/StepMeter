import {StyleSheet, Text, View, processColor} from 'react-native';
import React from 'react';

import {LineChart} from 'react-native-charts-wrapper';
const DayChart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        <LineChart
          style={styles.chart}
          chartDescription={{text: ''}}
          legend={{
            enabled: false,
          }}
          drawBorders={false}
          drawGridBackground={false}
          touchEnabled={false}
          dragEnabled={false}
          scaleEnabled={false}
          scaleXEnabled={false}
          scaleYEnabled={false}
          pinchZoom={false}
          xAxis={{
            position: 'BOTTOM',
            textColor: processColor('#ffffffCC'),
            textSize: 16,
          }}
          data={{
            dataSets: [
              {
                label: '',
                values: [
                  {x: 0, y: 1000},
                  {x: 4, y: 2000},
                  {x: 6, y: 3000},
                  {x: 8, y: 4000},
                  {x: 10, y: 5000},
                  {x: 12, y: 6000},
                  {x: 14, y: 7000},
                  {x: 16, y: 8000},
                  {x: 18, y: 9000},
                ],
                config: {
                  circleColor: processColor('white'),
                  lineWidth: 2,
                  circleRadius: 4,
                  color: processColor('white'),
                  drawValues: false,
                  drawFilled: true,
                  fillGradient: {
                    colors: [
                      processColor('#ffffff60'),
                      processColor('#ffffff60'),
                    ],
                    positions: [0, 0.5],
                    angle: 90,
                    orientation: 'TOP_BOTTOM',
                  },
                  fillAlpha: 1000,
                },
              },
            ],
          }}
        />
      </View>
    </View>
  );
};

export default DayChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 24,
  },
  graphContainer: {
    flex: 1,
  },
  chart: {
    flex: 1,
  },
});
