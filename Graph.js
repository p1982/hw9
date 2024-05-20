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

    // Adds a new edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    // Performs depth-first search (DFS) starting from a vertex
    dfs(startingNode) {
        let visited = {};
        this.DFSUtil(startingNode, visited);
    }

    // Helper method for DFS
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(vert);

        let neighbors = this.adjacencyList.get(vert);
        for (let i in neighbors) {
            let neighbor = neighbors[i];
            if (!visited[neighbor]) {
                this.DFSUtil(neighbor, visited);
            }
        }
    }

    // Performs breadth-first search (BFS) starting from a vertex
    bfs(startingNode) {
        let visited = {};
        let queue = [];

        visited[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            let vertex = queue.shift();
            console.log(vertex);

            let neighbors = this.adjacencyList.get(vertex);
            for (let i in neighbors) {
                let neighbor = neighbors[i];
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Graph usage demonstration
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.dfs('A'); // A B C
graph.bfs('A'); // A B C

// Graph

// Purpose: A data structure consisting of vertices connected by edges.
// Methods:
// addVertex(vertex): Adds a new vertex to the graph.
// addEdge(vertex1, vertex2, weight): Adds a new edge with a weight between two vertices.
// dfs(startingNode): Performs depth-first search starting from a vertex.
// bfs(startingNode): Performs breadth-first search starting from a vertex.
// dijkstra(startNode): Finds the shortest path using Dijkstra's algorithm.
// bfs(startNode, endNode): Finds the shortest path using BFS.
