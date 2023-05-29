# Challenge Title
<!-- Description of the challenge -->
Stack and Queue
## Whiteboard Process
<!-- Embedded whiteboard image -->
There was no white board for this challegen
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach was to understand that the node has to be defined and from there you you have to traverse through the stack or queue.


## Solution
<!-- Show how to run your code, and examples of it in action -->

Code for some of the applied methods

```
 pop() {
    // assgin the removed value intentionally to nothing
    let removedValue = null;
    if (this.top) {
      // if there is a top we're going to reassign it to the place holder variable which is currently nothing
      removedValue = this.top.value;
      // moving the top value
      this.top = this.top.next;
    }
    return removedValue;
 }

**This code is in reference to linked list zip**
