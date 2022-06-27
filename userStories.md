# EPIC

As a user I want to be able to place pip the mover on 5x5 grid and move him around the grid

- As a user I need to place pip on the grid facing a direction

  > Ensure the user is able to:
  >
  > Place pip on the grid by giving x, y and cardinal directions.
  >
  > e.g. PLACE 0,0,WEST

  ***

  > Pip cannot be placed off the grid

- As a user i need to be able to move pip around the grid

  > Ensure the user is able to:
  > Move pip forward by issuing the MOVE command.
  > Rotate pip 90 degrees using the LEFT and RIGHT commands.
  >
  > e.g. MOVE, LEFT, LEFT, MOVE

  ***

  > Pip cannot move off the grid
  > Commands that would move pip off the grid are ignored with further commands still executing

- As a user i want the program to report the position and direction pip is facing

  > Ask the program to report the X, Y position and cardinal direction of Pip
  >
  > e.g. REPORT: X:0 , Y:1, WEST
