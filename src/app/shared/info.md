Do create a feature module named SharedModule in a shared folder; for example, app/shared/shared.module.ts defines SharedModule.

Do declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.

Do declare all components, directives, and pipes in the SharedModule.

Do export all symbols from the SharedModule that other feature modules need to use.

When working on large applications, the Angular team suggest us to consider lazy loading of our modules. This decreases the bundle size of our application and therefore the initial build-time, and this is where the SharedModule truly shines.

The SharedModule allows us to organize and streamline our code. The shared module shouldn’t have any dependency to the rest of the application, and should therefore not rely on any other module. It should contain all the reusable modules, lazy loaded feature modules required to operate. You should add commonly used directives, pipes and components here. Many third-party libraries are available as NgModules such as Material Design, and exposing them through the SharedModule might be a good idea.

We can easily publish and share these components between applications.
