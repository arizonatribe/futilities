import tape from "tape"
import concat from "../src/concat"

tape("\"concat\" can blend two Array-like objects together", t => {
  const hook = [
    "dustin",
    "robin",
    "julia",
    "bob"
  ]
  const sphere = [
    "dustin",
    "samuel",
    "sharon",
    "queen"
  ]
  const jurassicPark = [
    "wayne",
    "sam",
    "samuel",
    "laura"
  ]
  const timeline = [
    "paul",
    "gerard",
    "frances",
    "david"
  ]
  t.deepEqual(
    concat(hook, sphere), [
      "dustin",
      "robin",
      "julia",
      "bob",
      "dustin",
      "samuel",
      "sharon",
      "queen"
    ],
    "concatenates two array-like objects"
  )
  t.deepEqual(
    hook, [
      "dustin",
      "robin",
      "julia",
      "bob"
    ],
    "concat does not mutate the first array"
  )
  t.deepEqual(
    concat(hook, sphere, jurassicPark, timeline), [
      "dustin",
      "robin",
      "julia",
      "bob",
      "dustin",
      "samuel",
      "sharon",
      "queen",
      "wayne",
      "sam",
      "samuel",
      "laura",
      "paul",
      "gerard",
      "frances",
      "david"
    ],
    "concatenates three or more array-like objects"
  )
  t.end()
})
