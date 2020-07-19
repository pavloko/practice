import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const DEFAULT_FIELD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [field, setField] = useState(DEFAULT_FIELD)
  const [moveCount, setMoveCount] = useState(0)

  function handlePress(rowIndex, cellIndex) {
    if (!winner) {
      const newField = field.map(row => row.slice())
      if (newField[rowIndex][cellIndex] === null) {
        newField[rowIndex][cellIndex] = moveCount % 2 === 0 ? 'X' : '0'
        setMoveCount(moveCount + 1)
        setField(newField)
      }
    }
  }

  const winner = determineWinner(field)

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>
        It's {moveCount % 2 === 0 ? 'X' : '0'} turn
      </Text>
      <Text>The winner is {winner}</Text>
      <View>
        {field.map((row, rowIndex) => (
          <Row
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            isGameOver={Boolean(winner)}
            isLastRow={rowIndex === field.length - 1}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  )
}

function Row({ row, rowIndex, isGameOver, isLastRow, onPress }) {
  return (
    <View style={styles.row}>
      {row.map((cell, cellIndex) => (
        <View
          key={cellIndex}
          style={[
            styles.cell,
            isLastRow && styles.lastRow,
            cellIndex === row.length - 1 && styles.lastCell,
          ]}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'stretch',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => onPress(rowIndex, cellIndex)}
            disabled={isGameOver}
          >
            <Text style={styles.boldText}>{cell}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 60,
    height: 60,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastRow: {
    borderBottomWidth: 1,
  },
  lastCell: {
    borderRightWidth: 1,
  },
  boldText: {
    fontWeight: '800',
  },
})

function determineWinner(field) {
  if ((field[0][0] === field[0][1]) === field[0][2]) {
    return field[0][0]
  } else if (field[1][0] === field[1][1] && field[1][1] === field[1][2]) {
    return field[1][0]
  } else if (field[2][0] === field[2][1] && field[2][1] === field[2][2]) {
    return field[2][0]
  } else if (field[0][0] === field[1][0] && field[1][0] === field[2][0]) {
    return field[0][0]
  } else if (field[0][1] === field[1][1] && field[1][1] === field[2][1]) {
    return field[0][0]
  } else if (field[0][2] === field[1][2] && field[1][2] === field[2][2]) {
    return field[0][2]
  } else if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {
    return field[0][0]
  } else if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {
    return field[0][2]
  }
  return null
}
