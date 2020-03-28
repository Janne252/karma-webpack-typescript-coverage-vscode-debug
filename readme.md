# Karma, Jasmine, Webpack, TypeScript, Coverage, VS Code Debug

This is a sample project that allows:
 - Running TypeScript-based unit tests
 - Measuring code coverage
 - Using breakpoints in VS Code to debug
   - The two experimental launch config options of [vscode-chrome-debug](https://github.com/microsoft/vscode-chrome-debug),
   `breakOnLoad` and `breakOnLoadStrategy`, (see https://github.com/microsoft/vscode-chrome-debug#other-optional-launch-config-fields) appear to allow pausing on a breakpoint on the first run of the tests. Obviously works better if you start the debugging process first and then start the unit tests. The default timeout is 30 seconds, which may not be enough if you're doing a "cold start", meaning that you haven't ran the unit tests in a while.
   - Clicking the "Restart" action of the floating debugging panel will re-trigger execution of the unit tests, similar to saving a file that is referenced in one of the loaded unit test files


## Caveats
 - Code coverage may cause problems with breakpoint mappings (e.g. setting a breakpoint on line 3 might actually pause the execution on like 2)
    - Use `npm run debug` when intending to debug the unit tets. 
    - Use `npm run test` when intending to generally execute the unit tests and measure code coverage
       - You may still set breakpoints and try debugging the unit tests but the experience may be degraded as explained above
