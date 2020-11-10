Each service has a Dockerfile.  The Kubernetes cluster runs locally by pulling these images from docker hub. Therefor when the images are built they need to be tagged and pushed appropriately.

Running the kubernetes cluster locally can be achieved by using something like minikube and the yaml files in the kube directory. 

To build the EKS cluster there are the associated tf files.  When running terraform apply it is important to set with AWS profile is being used. 

Deploying the kubernetes cluster to EKS requires terraform out put to be direted to config
'''
terraform output kubeconfig >.kube/config
terraform output config_map_aws_auth > configmap.yml
'''

### TODO:

* This is still not running on the EKS cluster, more work required on the helm chart. 
* Service B is not redirecting appropriately to service A
