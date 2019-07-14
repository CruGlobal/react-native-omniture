require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'RNOmniture'
  s.version        = package['version']
  s.summary        = package['description'] || 'Unknown'
  s.author         = package['author'] || 'Unknown'
  s.license        = package['license'] || 'Unknown'
  s.homepage       = package['homepage'] || 'Unknown'
  s.source         = { :git => 'https://github.com/CruGlobal/react-native-omniture.git', :tag => 'master'}
  s.source_files = 'ios/*.{h,m}'
  s.ios.deployment_target = '7.0'
  s.tvos.deployment_target = '9.0'

  s.dependency 'React'
end
