# EPIC

As a user I want to be able to place beefy the robot on 5x5 grid and move him around the grid

- As a user I need to place beefy on the grid facing a direction

  > Ensure the user is able to:
  >
  > Place beefy on the grid by giving x, y and cardinal directions.
  >
  > e.g. PLACE 0,0,WEST

  ***

  > Beefy cannot be placed off the grid

- As a user i need to be able to move beefy around the grid

  > Ensure the user is able to:
  > Move beefy forward by issuing the MOVE command.
  > Rotate beefy 90 degrees using the LEFT and RIGHT commands.
  >
  > e.g. MOVE, LEFT, LEFT, MOVE

  ***

  > Beefy cannot move off the grid
  > Commands that would move beefy off the grid are ignored with further commands still executing

- As a user i want the program to report the position and direction beefy is facing

  > Ask the program to report the X, Y position and cardinal direction of Beefy
  >
  > e.g. REPORT: X:0 , Y:1, WEST
