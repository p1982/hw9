class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(element, priority) {
        const node = { element, priority };
        let added = false;
        for (let i = 0; i < this.collection.length; i++) {
            if (node.priority < this.collection[i].priority) {
                this.collection.splice(i, 1, node);
                added = true;
                break;
            }
        }
        if (!added) {
            this.collection.push(node);
        }
    }

    dequeue() {
        return this.collection.shift();
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Adds a new vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Adds a new edge with a weight between two vertices
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList.get(vertex1).push({ node: vertex2, weight: weight });
        this.adjacencyList.get(vertex2).push({ node: vertex1, weight: weight });
    }

    // Dijkstra's Algorithm to find the shortest path
    dijkstra(startNode) {
        let distances = {};
        let visited = {};
        let pq = new PriorityQueue();

        distances[startNode] = 0;
        pq.enqueue(startNode, 0);

        this.adjacencyList.forEach((_, vertex) => {
            if (vertex !== startNode) {
                distances[vertex] = Infinity;
            }
            visited[vertex] = false;
        });

        while (!pq.isEmpty()) {
            let minNode = pq.dequeue();
            let currNode = minNode.element;

            this.adjacencyList.get(currNode).forEach(neighbor => {
                let edgeWeight = neighbor.weight;
                let neighborNode = neighbor.node;

                if (!visited[neighborNode]) {
                    let newDist = distances[currNode] + edgeWeight;

                    if (newDist < distances[neighborNode]) {
                        distances[neighborNode] = newDist;
                        pq.enqueue(neighborNode, newDist);
                    }
                }
            });

            visited[currNode] = true;
        }

        return distances;
    }

    // Breadth-First Search to find the shortest path
    bfs(startNode, endNode) {
        let visited = {};
        let queue = [];
        let distances = {};
        let predecessors = {};

        this.adjacencyList.forEach((_, vertex) => {
            visited[vertex] = false;
            distances[vertex] = Infinity;
            predecessors[vertex] = null;
        });

        visited[startNode] = true;
        distances[startNode] = 0;
        queue.push(startNode);

        while (queue.length > 0) {
            let vertex = queue.shift();

            this.adjacencyList.get(vertex).forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    visited[neighbor.node] = true;
                    distances[neighbor.node] = distances[vertex] + 1;
                    predecessors[neighbor.node] = vertex;
                    queue.push(neighbor.node);

                    if (neighbor.node === endNode) {
                        queue = [];
                    }
                }
            });
        }

        return {
            distance: distances[endNode],
            path: this.getPath(predecessors, startNode, endNode)
        };
    }

    // Helper method to get the path from predecessors
    getPath(predecessors, startNode, endNode) {
        let path = [];
        for (let at = endNode; at !== null; at = predecessors[at]) {
            path.push(at);
        }
        path.reverse();

        if (path[0] === startNode) {
            return path;
        } else {
            return [];
        }
    }
}

// Graph Algorithms demonstration
let graphAlgo = new Graph();
graphAlgo.addVertex('A');
graphAlgo.addVertex('B');
graphAlgo.addVertex('C');
graphAlgo.addVertex('D');
graphAlgo.addEdge('A', 'B', 1);
graphAlgo.addEdge('A', 'C', 4);
graphAlgo.addEdge('B', 'C', 2);
graphAlgo.addEdge('C', 'D', 1);
console.log(graphAlgo.dijkstra('A')); // { A: 0, B: 1, C: 3, D: 4 }
console.log(graphAlgo.bfs('A', 'D')); // { distance: 2, path: [ 'A', 'B', 'C', 'D' ] }

// The PriorityQueue class is used to manage a collection of elements where each element has a priority. 
//The element with the highest priority (lowest priority value) is dequeued first.

// Methods:
// enqueue(element, priority): Adds an element to the priority queue with the specified priority.
// dequeue(): Removes and returns the element with the highest priority (lowest priority value) from the queue.
// isEmpty(): Checks if the priority queue is empty.
// Graph Implementation Using PriorityQueue
// The Graph class represents a graph using an adjacency list and includes methods for Dijkstra's algorithm and BFS.