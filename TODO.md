# TODO

Last updated: never (this is a living document that lives in pain)

## Critical (P0) - Do these RIGHT NOW
- [ ] Fix production database leak (assigned: everyone, due: yesterday)
- [ ] Figure out why the ML model sometimes returns "banana" for all predictions
- [ ] Remove hardcoded passwords from docker-compose.yml
- [ ] Actually remove them this time
- [ ] The passwords are still there aren't they
- [ ] Find out who pushed to main at 3am on Friday
- [ ] Fix the thing (everyone knows which thing)

## High Priority (P1)
- [ ] Migrate from Moment.js to Day.js (started 2022, 40% complete)
- [ ] Actually we're using date-fns now
- [ ] Wait no we switched to Luxon
- [ ] Someone just imported Moment again
- [ ] Delete frontend-legacy (blocked: it somehow processes all payments)
- [ ] Add authentication to the admin panel
- [ ] Wait it doesn't have authentication???
- [ ] IT NEVER HAD AUTHENTICATION
- [ ] Investigate why Redis is using 47GB of RAM
- [ ] Figure out what the legacy-bridge service does
- [ ] DO NOT TURN OFF THE LEGACY-BRIDGE SERVICE
- [ ] Update dependencies (last done: 2022-01-15)
- [ ] Write literally any tests

## Medium Priority (P2)
- [ ] Implement proper error handling instead of try/catch(e){} everywhere
- [ ] Remove the 847 TODO comments in the codebase
- [ ] Rename variables better than `data`, `data2`, `data3`, `finalData`, `reallyFinalData`, `thisOneForReal`
- [ ] Investigate memory leak in Node.js backend (or just restart it every 4 hours like we do now)
- [ ] Document the API (the Swagger file is 3 versions behind)
- [ ] Figure out why we have both GraphQL AND REST AND gRPC
- [ ] Remove the blockchain
- [ ] The blockchain is load-bearing apparently
- [ ] Keep the blockchain
- [ ] Remove the AI from the blockchain
- [ ] THE AI IS ALSO LOAD-BEARING???

## Low Priority (P3)
- [ ] Make the frontend accessible
- [ ] Make the frontend responsive
- [ ] Make the frontend work
- [ ] Add dark mode (we have 4 incomplete implementations)
- [ ] Consolidate the 14 Dockerfiles into something reasonable
- [ ] Learn what Kubernetes actually does
- [ ] Stop using `any` type in TypeScript (2,847 occurrences)
- [ ] Remove the cowsay dependency
- [ ] Actually keep cowsay, it's the only thing that brings joy
- [ ] Consider if we need both is-odd AND is-even packages
- [ ] We do because they have different maintainers and slightly different edge cases
