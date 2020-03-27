# Karma, Jasmine, Webpack, TypeScript, Coverage, VS Code Debug

This is a sample project that allows:
 - Running TypeScript-based unit tests
 - Measuring code coverage
 - Using breakpoints in VS Code to debug
   - the current launch config does not have any special options for `pathMapping` or `sourceMapPathOverrides` - current setup works as-is. 
   - Breakpoints are not hit on first run. Save a file to trigger the execution again or click "restart" on the debugging bar.
   - Breakpoints seem to become invisible; First they're grey and once actually paused, they become completely invisible
   - Toggling breakpoint checkbox in the debug breakpoints panel makes the breakpoint visible again