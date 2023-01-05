var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = RefractiveIndex","category":"page"},{"location":"#RefractiveIndex","page":"Home","title":"RefractiveIndex","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [RefractiveIndex]","category":"page"},{"location":"#RefractiveIndex.RefractiveMaterial-Tuple{Any, Any, Any}","page":"Home","title":"RefractiveIndex.RefractiveMaterial","text":"RefractiveMaterial(shelf, book, page)\n\nLoad the refractive index data for the material corresponding to the specified shelf, book, and page within the refractiveindex.info database. The data can be queried by calling the returned RefractiveMaterial object at a given wavelength. In the case of database entries with multiple types of dispersion data (e.g. both  raw dispersion data and dispersion formula coefficients), a vector of RefractiveMaterials is returned for each data type.\n\nExamples\n\njulia> MgLiTaO3 = RefractiveMaterial(\"other\", \"Mg-LiTaO3\", \"Moutzouris-o\")\n\"Mg-LiTaO3 (Moutzouris et al. 2011: n(o) 0.450-1.551 µm; 8 mol.% Mg)\"\n\njulia> MgLiTaO3(0.45) # default unit is microns\n2.2373000025056826\n\njulia> using Unitful\n\njulia> MgLiTaO3(450u\"nm\") # auto-conversion from generic Unitful.jl length units\n2.2373000025056826\n\njulia> MgLiTaO3(450e-9, \"m\") # strings can be used to specify units (parsing is cached)\n2.2373000025056826\n\njulia> Hikari_F1 = RefractiveMaterial(\"glass\", \"HIKARI-F\", \"F1\")\n2-element Vector{RefractiveMaterial}:\n HIKARI-F (F1) - Polynomial\n HIKARI-F (F1) - TabulatedK\n\n\n\n\n\n","category":"method"},{"location":"#RefractiveIndex.RefractiveMaterial-Tuple{String}","page":"Home","title":"RefractiveIndex.RefractiveMaterial","text":"RefractiveMaterial(url::String)\n\nExtracts the shelf, book, and page from a refractiveindex.info URL and loads the corresponding data from the local database (does not require an active internet connection). \n\nwarning: Warning\nThe refractiveindex.info website is regularly updated and may contain materials not yet available in the local copy of the database, which is updated on a roughly annual basis. Future versions of this package may allow these new entries to be automatically downloaded on demand.\n\nExamples\n\njulia> Ar = RefractiveMaterial(\"https://refractiveindex.info/?shelf=main&book=Ar&page=Peck-15C\")\n\"Ar (Peck and Fisher 1964: n 0.47-2.06 µm; 15 °C)\"\n\njulia> describe(Ar)\nName: Ar (Peck and Fisher 1964: n 0.47–2.06 µm; 15 °C)\nReference: E. R. Peck and D. J. Fisher. Dispersion of argon, <a href=\"https://doi.org/10.1364/JOSA.54.001362\"><i>J. Opt. Soc. Am.</i> <b>54</b>, 1362-1364 (1964)</a>\nComments: 15 °C, 760 torr (101.325 kPa)\nDispersion Formula: Gases\nWavelength Range: (0.4679, 2.0587)\nSpecifications: Dict{Symbol, Any}(:temperature => \"15 °C\", :wavelength_vacuum => true, :pressure => \"101325 Pa\", :n_absolute => true)\n\n\n\n\n\n","category":"method"},{"location":"#RefractiveIndex.dispersion-Tuple{RefractiveMaterial, Float64}","page":"Home","title":"RefractiveIndex.dispersion","text":"dispersion(m::RefractiveMaterial, λ::Float64)\n\nReturns the refractive index of the material m at the wavelength λ (in microns). An error is thrown if the material does not have refractive index data.\n\n\n\n\n\n","category":"method"},{"location":"#RefractiveIndex.extinction-Union{Tuple{T}, Tuple{RefractiveMaterial{T}, Float64}} where T<:Union{RefractiveIndex.TabulatedK, RefractiveIndex.TabulatedNK}","page":"Home","title":"RefractiveIndex.extinction","text":"extinction(m::RefractiveMaterial, λ::Float64)\n\nReturns the extinction coefficient of the material m at the wavelength λ (in microns). An error is thrown if the material does not have extinction data.\n\n\n\n\n\n","category":"method"},{"location":"#RefractiveIndex.showmetadata-Tuple{RefractiveMaterial}","page":"Home","title":"RefractiveIndex.showmetadata","text":"showmetadata(rm::RefractiveMaterial)\n\nPrints the metadata for the material rm to the terminal.\n\nExamples\n\njulia> Ar = RefractiveMaterial(\"main\", \"Ar\", \"Peck-15C\")\nAr (Peck and Fisher 1964: n 0.47–2.06 µm; 15 °C) - Gases\n\njulia> showmetadata(Ar)\nName: Ar (Peck and Fisher 1964: n 0.47–2.06 µm; 15 °C)\nReference: E. R. Peck and D. J. Fisher. Dispersion of argon, <a href=\"https://doi.org/10.1364/JOSA.54.001362\"><i>J. Opt. Soc. Am.</i> <b>54</b>, 1362-1364 (1964)</a>\nComments: 15 °C, 760 torr (101.325 kPa)\nDispersion Formula: Gases\nWavelength Range: (0.4679, 2.0587)\nSpecifications: Dict{Symbol, Any}(:temperature => \"15 °C\", :wavelength_vacuum => true, :pressure => \"101325 Pa\", :n_absolute => true)\n\n\n\n\n\n","category":"method"},{"location":"#RefractiveIndex.specifications-Tuple{RefractiveMaterial}","page":"Home","title":"RefractiveIndex.specifications","text":"specifications(rm::RefractiveMaterial)\n\nReturns a Dict containing the measurement specifications for the material rm.\n\nExamples\n\n```julia-repl julia> using Unitful\n\njulia> specs = specifications(Ar) Dict{Symbol, Any} with 4 entries:   :temperature       => \"15 °C\"   :wavelengthvacuum => true   :pressure          => \"101325 Pa\"   :nabsolute        => true\n\njulia> T, P = [uparse(replace(specs[s], ' ' => '*')) for s in (:temperature, :pressure)] 2-element Vector{Quantity{Int64}}:      15 °C  101325 Pa  ```\n\n\n\n\n\n","category":"method"}]
}
