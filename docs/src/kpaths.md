# **k**-space paths

## Default paths

To generate a **k**-path for, say, the space group of diamond (space group 227; a cubic face-centered Bravais lattice), we can call [`irrfbz_path`](@ref), which will return a minimal path in the irreducible Brillouin zone:
```@example kpath
using Brillouin
sgnum = 227
Rs = [[1,0,0], [0,1,0], [0,0,1]] # conventional direct basis
kp = irrfbz_path(sgnum, Rs)
```
The path data is sourced from the [HPKOT paper](http://dx.doi.org/10.1016/j.commatsci.2016.10.015) (or, equivalently, the [SeeK-path](https://github.com/giovannipizzi/seekpath) Python package).

The resulting `KPath` structure initially gives the **k**-point coordinates in the basis of the *primitive* reciprocal basis. To convert to a Cartesian basis, we use [`cartesianize!`](@ref):
```@example kpath
pGs = 2π.*[[-1,1,1], [1,-1,1], [1,1,-1]] # primitive reciprocal basis
cartesianize!(kp, pGs)
```
We can visualize the **k**-path using [PlotlyJS.jl](https://github.com/JuliaPlots/PlotlyJS.jl):
```@example kpath
using PlotlyJS
Pᵏ = plot(kp)
Main.HTMLPlot(Pᵏ) # hide
```

Usually, it'll be more helpful to understand the path's geometry in the context of the associated Brillouin zone. To visualize this, we can plot the combination of a `Cell` (created via [`wignerseitz`](@ref)) and a `KPath`:
```@example kpath
c = wignerseitz(pGs)
Pᶜ⁺ᵏ = plot(c, kp)
Main.HTMLPlot(Pᶜ⁺ᵏ) # hide
```

## Interpolation
Interpolation of a `KPath` structure can be achieved using either [`interpolate(::KPath, ::Integer)`](@ref) or [`splice(::KPath, ::Integer)`](@ref), returning a `KPathInterpolant`.
As an example, `interpolate(kp, N)` returns an interpolation with a *target* of `N` interpolation points, distributed as equidistantly as possible:
```@example kpath
kpi = interpolate(kp, 100)
```
The returned `KPathInterpolant` implements the `AbstractVector` interface, with iterants returning `SVector{D, Float64}` elements.
To get a conventional "flat" vector, we can simply call `collect(kpi)`.

Internally, `KPathInterpolant`includes additional structure and information: namely, the high-symmetry points and associated labels along the path as well as a partitioning into connected vs. disconnected path segments.

## Band structure
The additional structure in `KPathInterpolation`s enable convenient and clear visualization of band structure diagrams in combination with PlotlyJS.

To illustrate this, suppose we are considering a tight-binding problem for an *s*-orbital situated at the 1a Wyckoff position. Such a problem has a single band with dispersion [^1] (assuming a cubic side length ``a = 1``):
```math
\epsilon(\mathbf{k}) =
4\gamma\Bigl(
    \cos \tfrac{1}{2}k_x \cos \tfrac{1}{2}k_y +
    \cos \tfrac{1}{2}k_y \cos \tfrac{1}{2}k_z +
    \cos \tfrac{1}{2}k_z \cos \tfrac{1}{2}k_x
    \Bigr)
```

We can calculate the associated energy band along our earlier **k**-path interpolation `kpi` easily:
```@example kpath
function ϵ(k; γ::Real=1.0)
    4γ * (cos(k[1]/2)*cos(k[2]/2) + cos(k[2]/2)*cos(k[3]/2) + cos(k[3]/2)*cos(k[1]/2))
end
band = ϵ.(kpi)
```

And we can then visualize the associated band via an overloaded PlotlyJS `plot` call:
```@example kpath
P = plot(kpi, [band])
Main.HTMLPlot(P, 525) # hide
```

If we have multiple bands, say ``\epsilon_1(\mathbf{k}) = \epsilon(\mathbf{k})`` and ``\epsilon_2(\mathbf{k}) = 20 - \tfrac{1}{2}\epsilon(\mathbf{k})``, we can easily plot that by collecting the bands in a single vector (or concatenating into a matrix):
```@example kpath
band1 = ϵ.(kpi)
band2 = 20 .- (1/2).*band1
P¹² = plot(kpi, [band1, band2])
Main.HTMLPlot(P¹², 525) # hide
```

```@docs
plot(::KPathInterpolant, ::Any, ::Layout)
```

[^1] See e.g. [http://www.physics.rutgers.edu/~eandrei/chengdu/reading/tight-binding.pdf](http://www.physics.rutgers.edu/~eandrei/chengdu/reading/tight-binding.pdf)