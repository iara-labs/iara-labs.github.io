export const codeExamples = {
  nodejs: {
    detectFaces: `import { RekognitionClient, DetectFacesCommand } from "@aws-sdk/client-rekognition";
import { readFileSync } from "fs";

const client = new RekognitionClient({
region: "sa-east-1",
endpoint: "https://api.iara.ai",
credentials: {
accessKeyId: process.env.IARA_ACCESS_KEY,
secretAccessKey: process.env.IARA_SECRET_KEY,
},
});

const imageBytes = readFileSync("./photo.jpg");

const command = new DetectFacesCommand({
Image: { Bytes: imageBytes },
Attributes: ["ALL"],
});

const response = await client.send(command);
console.log(response.FaceDetails);`,
    detectText: `import { RekognitionClient, DetectTextCommand } from "@aws-sdk/client-rekognition";

const command = new DetectTextCommand({
Image: { Bytes: imageBytes },
});

const response = await client.send(command);
response.TextDetections.forEach((text) => {
console.log(\`\${text.Type}: \${text.DetectedText} (confidence: \${text.Confidence})\`);
});`,
    textract: `import { TextractClient, DetectDocumentTextCommand } from "@aws-sdk/client-textract";

const textractClient = new TextractClient({
region: "sa-east-1",
endpoint: "https://api.iara.ai",
credentials: {
accessKeyId: process.env.IARA_ACCESS_KEY,
secretAccessKey: process.env.IARA_SECRET_KEY,
},
});

const command = new DetectDocumentTextCommand({
Document: { Bytes: documentBytes },
});

const response = await textractClient.send(command);
console.log(response.Blocks);`,
  },
  python: {
    detectFaces: `import boto3
import base64

# Configurar cliente
client = boto3.client(
    'rekognition',
    region_name='sa-east-1',
    endpoint_url='https://api.iara.ai',
    aws_access_key_id=os.getenv('IARA_ACCESS_KEY'),
    aws_secret_access_key=os.getenv('IARA_SECRET_KEY')
)

# Ler imagem
with open('photo.jpg', 'rb') as image_file:
    image_bytes = image_file.read()

# Detectar faces
response = client.detect_faces(
    Image={'Bytes': image_bytes},
    Attributes=['ALL']
)

print(response['FaceDetails'])`,
    detectText: `# Detectar texto
response = client.detect_text(
    Image={'Bytes': image_bytes}
)

for text in response['TextDetections']:
    print(f"{text['Type']}: {text['DetectedText']} (confidence: {text['Confidence']})")`,
    textract: `# Textract
textract_client = boto3.client(
    'textract',
    region_name='sa-east-1',
    endpoint_url='https://api.iara.ai',
    aws_access_key_id=os.getenv('IARA_ACCESS_KEY'),
    aws_secret_access_key=os.getenv('IARA_SECRET_KEY')
)

response = textract_client.detect_document_text(
    Document={'Bytes': document_bytes}
)

print(response['Blocks'])`,
  },
  curl: {
    detectFaces: `curl -X POST https://api.iara.ai/rekognition/DetectFaces \\
  -H "Content-Type: application/x-amz-json-1.1" \\
  -H "X-Amz-Target: RekognitionService.DetectFaces" \\
  -H "Authorization: AWS4-HMAC-SHA256 Credential=..." \\
  -d '{
    "Image": {
      "Bytes": "<base64-encoded-image>"
    },
    "Attributes": ["ALL"]
  }'`,
    detectText: `curl -X POST https://api.iara.ai/rekognition/DetectText \\
  -H "Content-Type: application/x-amz-json-1.1" \\
  -H "X-Amz-Target: RekognitionService.DetectText" \\
  -H "Authorization: AWS4-HMAC-SHA256 Credential=..." \\
  -d '{
    "Image": {
      "Bytes": "<base64-encoded-image>"
    }
  }'`,
    textract: `curl -X POST https://api.iara.ai/textract/DetectDocumentText \\
  -H "Content-Type: application/x-amz-json-1.1" \\
  -H "X-Amz-Target: Textract.DetectDocumentText" \\
  -H "Authorization: AWS4-HMAC-SHA256 Credential=..." \\
  -d '{
    "Document": {
      "Bytes": "<base64-encoded-document>"
    }
  }'`,
  },
  go: {
    detectFaces: `package main

import (
    "context"
    "fmt"
    "os"
    
    "github.com/aws/aws-sdk-go-v2/config"
    "github.com/aws/aws-sdk-go-v2/service/rekognition"
    "github.com/aws/aws-sdk-go-v2/service/rekognition/types"
)

func main() {
    cfg, err := config.LoadDefaultConfig(context.TODO(),
        config.WithRegion("sa-east-1"),
        config.WithEndpointResolverWithOptions(aws.EndpointResolverWithOptionsFunc(
            func(service, region string, options ...interface{}) (aws.Endpoint, error) {
                return aws.Endpoint{URL: "https://api.iara.ai"}, nil
            })),
    )
    if err != nil {
        panic(err)
    }

    client := rekognition.NewFromConfig(cfg)
    
    imageBytes, err := os.ReadFile("photo.jpg")
    if err != nil {
        panic(err)
    }

    input := &rekognition.DetectFacesInput{
        Image: &types.Image{Bytes: imageBytes},
        Attributes: []types.Attribute{types.AttributeAll},
    }

    result, err := client.DetectFaces(context.TODO(), input)
    if err != nil {
        panic(err)
    }

    fmt.Printf("%+v\\n", result.FaceDetails)
}`,
    detectText: `input := &rekognition.DetectTextInput{
    Image: &types.Image{Bytes: imageBytes},
}

result, err := client.DetectText(context.TODO(), input)
if err != nil {
    panic(err)
}

for _, text := range result.TextDetections {
    fmt.Printf("%s: %s (confidence: %.2f)\\n", 
        text.Type, *text.DetectedText, *text.Confidence)
}`,
    textract: `// Textract
textractClient := textract.NewFromConfig(cfg)

input := &textract.DetectDocumentTextInput{
    Document: &types.Document{Bytes: documentBytes},
}

result, err := textractClient.DetectDocumentText(context.TODO(), input)
if err != nil {
    panic(err)
}

fmt.Printf("%+v\\n", result.Blocks)`,
  },
  php: {
    detectFaces: `<?php
require 'vendor/autoload.php';

use Aws\\Rekognition\\RekognitionClient;
use Aws\\Exception\\AwsException;

$client = new RekognitionClient([
    'version' => 'latest',
    'region'  => 'sa-east-1',
    'endpoint' => 'https://api.iara.ai',
    'credentials' => [
        'key'    => $_ENV['IARA_ACCESS_KEY'],
        'secret' => $_ENV['IARA_SECRET_KEY'],
    ],
]);

$imageBytes = file_get_contents('photo.jpg');

$result = $client->detectFaces([
    'Image' => ['Bytes' => $imageBytes],
    'Attributes' => ['ALL'],
]);

print_r($result['FaceDetails']);`,
    detectText: `// Detectar texto
$result = $client->detectText([
    'Image' => ['Bytes' => $imageBytes],
]);

foreach ($result['TextDetections'] as $text) {
    echo $text['Type'] . ': ' . $text['DetectedText'] . 
         ' (confidence: ' . $text['Confidence'] . ')' . PHP_EOL;
}`,
    textract: `// Textract
$textractClient = new Aws\\Textract\\TextractClient([
    'version' => 'latest',
    'region'  => 'sa-east-1',
    'endpoint' => 'https://api.iara.ai',
    'credentials' => [
        'key'    => $_ENV['IARA_ACCESS_KEY'],
        'secret' => $_ENV['IARA_SECRET_KEY'],
    ],
]);

$result = $textractClient->detectDocumentText([
    'Document' => ['Bytes' => $documentBytes],
]);

print_r($result['Blocks']);`,
  },
  ruby: {
    detectFaces: `require 'aws-sdk-rekognition'

client = Aws::Rekognition::Client.new(
  region: 'sa-east-1',
  endpoint: 'https://api.iara.ai',
  access_key_id: ENV['IARA_ACCESS_KEY'],
  secret_access_key: ENV['IARA_SECRET_KEY']
)

image_bytes = File.read('photo.jpg')

result = client.detect_faces({
  image: { bytes: image_bytes },
  attributes: ['ALL']
})

puts result.face_details`,
    detectText: `# Detectar texto
result = client.detect_text({
  image: { bytes: image_bytes }
})

result.text_detections.each do |text|
  puts "#{text.type}: #{text.detected_text} (confidence: #{text.confidence})"
end`,
    textract: `# Textract
textract_client = Aws::Textract::Client.new(
  region: 'sa-east-1',
  endpoint: 'https://api.iara.ai',
  access_key_id: ENV['IARA_ACCESS_KEY'],
  secret_access_key: ENV['IARA_SECRET_KEY']
)

result = textract_client.detect_document_text({
  document: { bytes: document_bytes }
})

puts result.blocks`,
  },
  rust: {
    detectFaces: `use aws_sdk_rekognition::{Client, Config};
use aws_config::meta::region::RegionProviderChain;
use std::fs;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let region_provider = RegionProviderChain::default_provider()
        .or_else("sa-east-1");
    
    let config = Config::builder()
        .region(region_provider)
        .endpoint_url("https://api.iara.ai")
        .build();
    
    let client = Client::from_conf(config);
    
    let image_bytes = fs::read("photo.jpg")?;
    
    let response = client
        .detect_faces()
        .image(aws_sdk_rekognition::types::Image::builder()
            .bytes(image_bytes)
            .build())
        .attributes(aws_sdk_rekognition::types::Attribute::All)
        .send()
        .await?;
    
    println!("{:?}", response.face_details);
    Ok(())
}`,
    detectText: `// Detectar texto
let response = client
    .detect_text()
    .image(aws_sdk_rekognition::types::Image::builder()
        .bytes(image_bytes)
        .build())
    .send()
    .await?;

for text in response.text_detections.unwrap_or_default() {
    println!("{}: {} (confidence: {})", 
        text.r#type.unwrap_or_default(),
        text.detected_text.unwrap_or_default(),
        text.confidence.unwrap_or(0.0)
    );
}`,
    textract: `// Textract
use aws_sdk_textract::Client as TextractClient;

let textract_client = TextractClient::from_conf(config);

let response = textract_client
    .detect_document_text()
    .document(aws_sdk_textract::types::Document::builder()
        .bytes(document_bytes)
        .build())
    .send()
    .await?;

println!("{:?}", response.blocks);`,
  },
  java: {
    detectFaces: `import software.amazon.awssdk.services.rekognition.RekognitionClient;
import software.amazon.awssdk.services.rekognition.model.*;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import java.nio.file.Files;
import java.nio.file.Paths;

public class DetectFaces {
    public static void main(String[] args) throws Exception {
        RekognitionClient client = RekognitionClient.builder()
            .region(Region.SA_EAST_1)
            .endpointOverride(URI.create("https://api.iara.ai"))
            .credentialsProvider(StaticCredentialsProvider.create(
                AwsBasicCredentials.create(
                    System.getenv("IARA_ACCESS_KEY"),
                    System.getenv("IARA_SECRET_KEY")
                )
            ))
            .build();

        byte[] imageBytes = Files.readAllBytes(Paths.get("photo.jpg"));

        DetectFacesRequest request = DetectFacesRequest.builder()
            .image(Image.builder().bytes(SdkBytes.fromByteArray(imageBytes)).build())
            .attributes(Attribute.ALL)
            .build();

        DetectFacesResponse response = client.detectFaces(request);
        System.out.println(response.faceDetails());
    }
}`,
    detectText: `// Detectar texto
DetectTextRequest request = DetectTextRequest.builder()
    .image(Image.builder().bytes(SdkBytes.fromByteArray(imageBytes)).build())
    .build();

DetectTextResponse response = client.detectText(request);
response.textDetections().forEach(text -> {
    System.out.println(text.type() + ": " + text.detectedText() + 
                      " (confidence: " + text.confidence() + ")");
});`,
    textract: `// Textract
import software.amazon.awssdk.services.textract.TextractClient;

TextractClient textractClient = TextractClient.builder()
    .region(Region.SA_EAST_1)
    .endpointOverride(URI.create("https://api.iara.ai"))
    .credentialsProvider(StaticCredentialsProvider.create(
        AwsBasicCredentials.create(
            System.getenv("IARA_ACCESS_KEY"),
            System.getenv("IARA_SECRET_KEY")
        )
    ))
    .build();

DetectDocumentTextRequest request = DetectDocumentTextRequest.builder()
    .document(Document.builder().bytes(SdkBytes.fromByteArray(documentBytes)).build())
    .build();

DetectDocumentTextResponse response = textractClient.detectDocumentText(request);
System.out.println(response.blocks());`,
  },
  dotnet: {
    detectFaces: `using Amazon.Rekognition;
using Amazon.Rekognition.Model;
using Amazon;
using System.IO;

var client = new AmazonRekognitionClient(
    Environment.GetEnvironmentVariable("IARA_ACCESS_KEY"),
    Environment.GetEnvironmentVariable("IARA_SECRET_KEY"),
    new AmazonRekognitionConfig
    {
        RegionEndpoint = RegionEndpoint.SAEast1,
        ServiceURL = "https://api.iara.ai"
    }
);

var imageBytes = await File.ReadAllBytesAsync("photo.jpg");

var request = new DetectFacesRequest
{
    Image = new Image { Bytes = new MemoryStream(imageBytes) },
    Attributes = new List<string> { "ALL" }
};

var response = await client.DetectFacesAsync(request);
Console.WriteLine(string.Join(", ", response.FaceDetails));`,
    detectText: `// Detectar texto
var request = new DetectTextRequest
{
    Image = new Image { Bytes = new MemoryStream(imageBytes) }
};

var response = await client.DetectTextAsync(request);
foreach (var text in response.TextDetections)
{
    Console.WriteLine($"{text.Type}: {text.DetectedText} (confidence: {text.Confidence})");
}`,
    textract: `// Textract
using Amazon.Textract;

var textractClient = new AmazonTextractClient(
    Environment.GetEnvironmentVariable("IARA_ACCESS_KEY"),
    Environment.GetEnvironmentVariable("IARA_SECRET_KEY"),
    new AmazonTextractConfig
    {
        RegionEndpoint = RegionEndpoint.SAEast1,
        ServiceURL = "https://api.iara.ai"
    }
);

var request = new DetectDocumentTextRequest
{
    Document = new Document { Bytes = new MemoryStream(documentBytes) }
};

var response = await textractClient.DetectDocumentTextAsync(request);
Console.WriteLine(string.Join(", ", response.Blocks));`,
  },
};

export const languageLabels = {
  nodejs: "Node.js",
  python: "Python",
  php: "PHP",
  ruby: "Ruby",
  go: "Go",
  rust: "Rust",
  java: "Java",
  dotnet: ".NET",
  curl: "cURL",
};
