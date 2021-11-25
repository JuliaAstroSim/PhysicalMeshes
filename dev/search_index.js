var documenterSearchIndex = {"docs":
[{"location":"manual/Line/#Line","page":"Line","title":"Line","text":"","category":"section"},{"location":"manual/Line/#D-Line","page":"Line","title":"2D Line","text":"","category":"section"},{"location":"manual/Line/","page":"Line","title":"Line","text":"using PhysicalMeshes, Unitful, UnitfulAstro # hide\n\nline = Line2D(PVector2D(), PVector2D(1.0, 0.0))\nlen(line)\nmidpoint(line)\nline + PVector(1.0,1.0)\nline * 2","category":"page"},{"location":"manual/Line/#D-Space-Line","page":"Line","title":"3D Space Line","text":"","category":"section"},{"location":"manual/Line/","page":"Line","title":"Line","text":"line = Line(PVector(u\"m\"), PVector(1.0, 0.0, 0.0, u\"m\"))\nlen(line)\nmidpoint(line)\nline + PVector(1.0,2.0,3.0,u\"m\")\nline * 3","category":"page"},{"location":"lib/Methods/#Methods","page":"Methods","title":"Methods","text":"","category":"section"},{"location":"lib/Methods/#Index","page":"Methods","title":"Index","text":"","category":"section"},{"location":"lib/Methods/","page":"Methods","title":"Methods","text":"Pages = [\"Methods.md\"]","category":"page"},{"location":"lib/Methods/#Basic-geometry","page":"Methods","title":"Basic geometry","text":"","category":"section"},{"location":"lib/Methods/","page":"Methods","title":"Methods","text":"len\nPhysicalMeshes.area\nPhysicalMeshes.volume\nPhysicalMeshes.center\ncentroid\nmidpoint\norient\norientation\ncircumcenter","category":"page"},{"location":"lib/Methods/#PhysicalMeshes.len","page":"Methods","title":"PhysicalMeshes.len","text":"len(line::AbstractLine)\n\nLength of line\n\n\n\n\n\nlen(t::AbstractTriangle)\n\nCircumference of the triangle\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#PhysicalParticles.area","page":"Methods","title":"PhysicalParticles.area","text":"area(c::AbstractCube2D)\n\nSigned area of 2D cube\n\n\n\n\n\narea(t::AbstractTriangle2D)\narea(t::AbstractTriangle3D)\n\nUnsigned area of triangle\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#PhysicalParticles.volume","page":"Methods","title":"PhysicalParticles.volume","text":"volume(c::AbstractCube3D)\n\nSigned volume of 3D cube\n\n\n\n\n\nvolume(t::AbstractTetrahedron)\n\nUnsigned volume of tetrahedron\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#PhysicalMeshes.center","page":"Methods","title":"PhysicalMeshes.center","text":"center(line::AbstractLine) = centroid(line)\n\nAverage position of line vertices.\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#PhysicalMeshes.centroid","page":"Methods","title":"PhysicalMeshes.centroid","text":"centroid(line::AbstractLine)\n\nAverage position of line vertices.\n\n\n\n\n\ncentroid(t::AbstractTriangle)\n\nAveraged position center of triangle\n\n\n\n\n\ncentroid(t::AbstractTetrahedron)\n\nAveraged position center of the tetrahedron\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#PhysicalMeshes.midpoint","page":"Methods","title":"PhysicalMeshes.midpoint","text":"midpoint(line::AbstractLine) = centroid(line)\n\nAverage position of line vertices.\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#PhysicalMeshes.orient","page":"Methods","title":"PhysicalMeshes.orient","text":"function orient(a::AbstractPoint2D, b::AbstractPoint2D, c::AbstractPoint2D)\n\nComputes the orient.\nThe result is also a rough approximation of twice the signed area.\n\n\n\n\n\nfunction orient(a::AbstractPoint3D, b::AbstractPoint3D, c::AbstractPoint3D)\n\nComputes the orient.\nThe result is also a rough approximation of twice the signed area.\n\n\n\n\n\nfunction orient(a::AbstractPoint3D, b::AbstractPoint3D, c::AbstractPoint3D, d::AbstractPoint3D)\n\nComputes the orient.\nThe result is also a rough approximation of six times the signed volume.\n\n\n\n\n\norient(t::AbstractTriangle)\n\nOrientation vector of triangle (return a PVector). See also orientation\n\n\n\n\n\norient(t::AbstractTetrahedron)\n\nReturn a positive number if positively oriented. Return a negative number if negatively oriented. Return zero if not oriented (indicating the tetrahedron has zero volume)\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#PhysicalMeshes.orientation","page":"Methods","title":"PhysicalMeshes.orientation","text":"orientation(t::AbstractTriangle2D)\n\nOrientation of triangle. Return a trait (NegativelyOriented, PositivelyOriented, or UnOriented)\n\n\n\n\n\norientation(t::AbstractTetrahedron)\n\nOrientation of tetrahedron. Return a trait (NegativelyOriented, PositivelyOriented, or UnOriented)\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#PhysicalMeshes.circumcenter","page":"Methods","title":"PhysicalMeshes.circumcenter","text":"circumcenter(t::AbstractTriangle)\n\nReturn the circumcenter of triangle (as a PVector or PVector2D)\n\n\n\n\n\ncircumcenter(t::AbstractTetrahedron)\n\nReturn the circumsphere center of tetrahedron\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#Predicates","page":"Methods","title":"Predicates","text":"","category":"section"},{"location":"lib/Methods/","page":"Methods","title":"Methods","text":"incircle\ninsphere","category":"page"},{"location":"lib/Methods/#PhysicalMeshes.incircle","page":"Methods","title":"PhysicalMeshes.incircle","text":"incircle(t::AbstractTriangle2D, p::AbstractPoint2D)\n\nTest whether a point locates inside the circumcircle of triangle. Return a trait (Interior, Exterior, or OnEdge)\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#PhysicalMeshes.insphere","page":"Methods","title":"PhysicalMeshes.insphere","text":"insphere(t::AbstractTetrahedron, p::AbstractPoint3D)\n\nTest whether a point locates inside the circumsphere center of tetrahedron. Return a trait (Interior, Exterior, or OnEdge)\n\n\n\n\n\n","category":"function"},{"location":"lib/Methods/#Mesh","page":"Methods","title":"Mesh","text":"","category":"section"},{"location":"lib/Methods/","page":"Methods","title":"Methods","text":"particle2mesh\nassignmesh\nmesh2particle\nassignparticle","category":"page"},{"location":"manual/Triangle/#Triangle","page":"Triangle","title":"Triangle","text":"","category":"section"},{"location":"manual/Triangle/#Triangle-2D","page":"Triangle","title":"Triangle 2D","text":"","category":"section"},{"location":"manual/Triangle/","page":"Triangle","title":"Triangle","text":"using PhysicalMeshes, Unitful, UnitfulAstro # hide\n\nt = Triangle2D(PVector2D(4.0, 3.0), PVector2D(4.0, 0.0), PVector2D(0.0, 3.0))\norientation(t)\nlen(t)\nPhysicalMeshes.area(t)\ncentroid(t)\ncircumcenter(t)\nincircle(t, PVector2D(3.0, 2.0))\nincircle(t, PVector2D())\nincircle(t, PVector2D(6.0, 0.0))","category":"page"},{"location":"manual/Triangle/#Triangle-3D","page":"Triangle","title":"Triangle 3D","text":"","category":"section"},{"location":"manual/Triangle/","page":"Triangle","title":"Triangle","text":"t = Triangle(PVector(0.0, 0.0, 0.0, u\"m\"), PVector(3.0, 4.0, 0.0, u\"m\"), PVector(3.0, 4.0, 12.0, u\"m\"))\nlen(t)\nPhysicalMeshes.area(t)\ncentroid(t)\ncircumcenter(t)","category":"page"},{"location":"manual/Cube/#Cube","page":"Cube","title":"Cube","text":"","category":"section"},{"location":"manual/Cube/#D-Cube","page":"Cube","title":"2D Cube","text":"","category":"section"},{"location":"manual/Cube/","page":"Cube","title":"Cube","text":"using PhysicalMeshes, Unitful, UnitfulAstro # hide\n\nc = Cube(PVector2D(1.0, 1.0), PVector2D())\nPhysicalMeshes.area(c)","category":"page"},{"location":"manual/Cube/#D-Cube-2","page":"Cube","title":"3D Cube","text":"","category":"section"},{"location":"manual/Cube/","page":"Cube","title":"Cube","text":"c = Cube(PVector(1.0, 1.0, 1.0, u\"m\"), PVector(u\"m\"))\nPhysicalMeshes.volume(c)","category":"page"},{"location":"manual/guide/#Guide","page":"Guide","title":"Guide","text":"","category":"section"},{"location":"manual/guide/#Basic-Usage","page":"Guide","title":"Basic Usage","text":"","category":"section"},{"location":"manual/guide/","page":"Guide","title":"Guide","text":"See seperated documentations.","category":"page"},{"location":"manual/guide/#Visualization","page":"Guide","title":"Visualization","text":"","category":"section"},{"location":"manual/guide/","page":"Guide","title":"Guide","text":"See AstroPlot.jl","category":"page"},{"location":"manual/MeshCartesianStatic/#Static-Cartesian-Mesh","page":"Static Cartesian Mesh","title":"Static Cartesian Mesh","text":"","category":"section"},{"location":"manual/MeshCartesianStatic/","page":"Static Cartesian Mesh","title":"Static Cartesian Mesh","text":"using PhysicalMeshes, Unitful, UnitfulAstro # hide\n\n# generate data\npos = [\n    PVector(-1.0, -1.0, -1.0),\n    PVector(-1.0, +1.0, -1.0),\n    PVector(+1.0, -1.0, -1.0),\n    PVector(+1.0, +1.0, -1.0),\n    PVector(-1.0, -1.0, +1.0),\n    PVector(-1.0, +1.0, +1.0),\n    PVector(+1.0, -1.0, +1.0),\n    PVector(+1.0, +1.0, +1.0),\n];\ndataArray = [Ball() for i in 1:8];\nassign_particles(dataArray, :Pos, pos)\nassign_particles(dataArray, :Mass, 1.0)\n\n# construct mesh\nm = MeshCartesianStatic(dataArray)\n\nm.rho\n\n# Check mass assignment\nsum(m.rho) * m.config.Δ[1]^3 ≈ 8.0","category":"page"},{"location":"#PhysicalMeshes.jl","page":"Home","title":"PhysicalMeshes.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Tools to construct distributed unitful meshes","category":"page"},{"location":"#Package-Features","page":"Home","title":"Package Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Unitful\nDistributed\nUser-friendly interface","category":"page"},{"location":"#Manual-Outline","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"manual/guide.md\",\n]","category":"page"},{"location":"manual/Tetrahedron/#Tetrahedron","page":"Tetrahedron","title":"Tetrahedron","text":"","category":"section"},{"location":"manual/Tetrahedron/","page":"Tetrahedron","title":"Tetrahedron","text":"using PhysicalMeshes, Unitful, UnitfulAstro # hide\nt = Tetrahedron(\n    PVector(1.0, 0.0, 1.0),\n    PVector(1.0, 1.0, 0.0),\n    PVector(0.0, 1.0, 1.0),\n    PVector(1.0, 1.0, 1.0)\n)\ncentroid(t)\ncircumcenter(t)\ninsphere(t, PVector(0.5, 0.5, 0.5))\ninsphere(t, PVector())\ninsphere(t, PVector(2.0, 0.0, 0.0))\nPhysicalMeshes.volume(t)\norientation(t)","category":"page"}]
}
