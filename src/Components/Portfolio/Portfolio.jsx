// import React from 'react';
// import Spline from '@splinetool/react-spline';
import '../Portfolio/Portfolio.css';
import { useEffect, useRef } from 'react';
// import Matter, { use } from 'matter-js';

const Portfolio = () => {
    const sceneRef = useRef(null);
//     useEffect(() => {
//     const Engine = Matter.Engine,
//         Render = Matter.Render,
//         Runner = Matter.Runner,
//         Body = Matter.Body,
//         Composite = Matter.Composite,
//         Composites = Matter.Composites,
//         Constraint = Matter.Constraint,
//         MouseConstraint = Matter.MouseConstraint,
//         Mouse = Matter.Mouse,
//         Bodies = Matter.Bodies;

//     // create engine
//     const engine = Engine.create(),
//         world = engine.world;

//     // create renderer
//     const render = Render.create({
//         element: document.body,
//         engine: engine,
//         options: {
//             width: 800,
//             height: 600,
//             showAngleIndicator: true,
//             showCollisions: true,
//             showVelocity: true
//         }
//     });

//     Render.run(render);

//     // create runner
//     const runner = Runner.create();
//     Runner.run(runner, engine);

//     // add bodies
//     const group = Body.nextGroup(true);
        
//     const ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function(x, y) {
//         return Bodies.rectangle(x, y, 50, 20, { collisionFilter: { group: group } });
//     });
    
//     Composites.chain(ropeA, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
//     Composite.add(ropeA, Constraint.create({ 
//         bodyB: ropeA.bodies[0],
//         pointB: { x: -25, y: 0 },
//         pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
//         stiffness: 0.5
//     }));
    
//     // group = Body.nextGroup(true);
    
//     const ropeB = Composites.stack(200, 50, 8, 1, 10, 10, function(x, y) {
//         return Bodies.rectangle(x, y, 50, 20, { collisionFilter: { group: group } });
//     });
    
//     Composites.chain(ropeB, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
//     Composite.add(ropeB, Constraint.create({ 
//         bodyB: ropeB.bodies[0],
//         pointB: { x: -25, y: 0 },
//         pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
//         stiffness: 0.5
//     }));
    
//     // group = Body.nextGroup(true);

//     const ropeC = Composites.stack(300, 50, 8, 1, 10, 10, function(x, y) {
//         return Bodies.rectangle(x, y, 50, 20, { collisionFilter: { group: group } });
//     });
    
//     Composites.chain(ropeC, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
//     Composite.add(ropeC, Constraint.create({ 
//         bodyB: ropeC.bodies[0],
//         pointB: { x: -25, y: 0 },
//         pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
//         stiffness: 0.5
//     }));
    
//     Composite.add(world, [
//         ropeA,
//         ropeB,
//         ropeC,
//         Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
//     ]);

//     // add mouse constrol
//     const mouse = Mouse.create(render.canvas),
//         mouseConstraint = MouseConstraint.create(engine, {
//             mouse: mouse,
//             constraint: {
//                 stiffness: 0.2,
//                 render: {
//                     visible: false
//                 }
//             }
//         });

//     Composite.add(world, mouseConstraint);

//     // keep the mouse in sync with rendering
//     render.mouse = mouse;

//     // fit the render viewport to the scene
//     Render.lookAt(render, {
//         min: { x: 0, y: 0 },
//         max: { x: 700, y: 600 }
//     });

//     // constext for MatterTools.Demo
//     return {
//         engine: engine,
//         runner: runner,
//         render: render,
//         canvas: render.canvas,
//         stop: function() {
//             Matter.Render.stop(render);
//             Matter.Runner.stop(runner);
//         }
//     };
// }, []);

return (
    <div className="grid grid-cols-2 gap-4 h-screen">
        <div className="relative space-y-6 p-16 flex flex-col justify-start items-start">
            <div className="absolute bg-black top-16 left-16 w-0 h-0.5 horizontal-line1"></div> 
            <div className="absolute bg-black top-16 left-12 h-0 w-0.5 vertical-line1"></div>

            <h1 className="text-base md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold animate-slideFadeInL" style={{ color: 'green', textShadow: '1px 1px 2px #000000' }}>Portfolio Page</h1>

            <div className="w-full flex flex-col space-y-4">
                <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-md h-3/5 flex items-center justify-center"></div>
                <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-md h-3/5 flex items-center justify-center"></div>
                <div className="bg-white p-8 md:p-16 lg:p-20 rounded-lg shadow-md h-3/5 flex items-center justify-center"></div>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center p-16 lg:flex-grow">
            {/* will contain svg of languages/technologies */}
        </div>
    </div>
);
};

export default Portfolio;