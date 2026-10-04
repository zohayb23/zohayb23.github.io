// Removes the background from a portrait using Apple's Vision subject-lifting
// and crops the result to the subject's bounds.
// Usage: swift scripts/cutout.swift <input> <output.png>
import AppKit
import CoreImage
import Vision

let args = CommandLine.arguments
guard args.count == 3 else {
    print("usage: cutout <input> <output.png>")
    exit(1)
}

let inputURL = URL(fileURLWithPath: args[1])
let outputURL = URL(fileURLWithPath: args[2])

guard let ciImage = CIImage(contentsOf: inputURL) else {
    print("could not read \(inputURL.path)")
    exit(1)
}

let request = VNGenerateForegroundInstanceMaskRequest()
let handler = VNImageRequestHandler(ciImage: ciImage)
try handler.perform([request])

guard let result = request.results?.first else {
    print("no subject found")
    exit(1)
}

let maskedBuffer = try result.generateMaskedImage(
    ofInstances: result.allInstances,
    from: handler,
    croppedToInstancesExtent: true
)

let output = CIImage(cvPixelBuffer: maskedBuffer)
let context = CIContext()
guard let colorSpace = CGColorSpace(name: CGColorSpace.sRGB) else { exit(1) }
try context.writePNGRepresentation(of: output, to: outputURL, format: .RGBA8, colorSpace: colorSpace)
print("wrote \(outputURL.path)")
