'use strict';

/**
 * Migration: 20240220101416_cmnkrtxueyviexb
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fafdunzmsl', function(table) {
    table.bigInteger('lsyiluyfrj');
    table.timestamp('qpcyxqjeoo');
    table.float('zdjjyorimf');
    table.boolean('qyhiglbwhm');
    table.bigInteger('olzizcvltp');
  });
  await knex.schema.alterTable('djsavlzgqf', function(table) {
    table.timestamp('lvvqeqcrug');
    table.boolean('lzkxhzmakk');
    table.boolean('mkwhwkzwgi');
    table.boolean('ozoktbjrms');
    table.json('hcrwzhtbyc');
    table.bigInteger('luclkoamcy');
    table.timestamp('rsotelqzbh');
    table.float('boelynizpv');
  });
  await knex.schema.alterTable('hbaahgrobn', function(table) {
    table.text('wrtocyrllv');
    table.string('mgoqsjbenc');
    table.float('brenwumlhg');
  });
  await knex.schema.alterTable('rilhvsvsjt', function(table) {
    table.timestamp('dvjpkafclt');
    table.float('grkfrratfl');
    table.timestamp('dpatmadrii');
    table.json('ezidgouvwb');
    table.string('gbhttfvhnu');
    table.integer('oxmiazqmnh');
    table.integer('oqnkmwhopj');
  });
  await knex.schema.alterTable('qrltmemehu', function(table) {
    table.integer('nsmqsxmkan');
    table.boolean('vomuogxjos');
    table.json('wriuqyzuhr');
    table.float('aqpexxoltd');
  });
  await knex.schema.alterTable('cmcwveclnf', function(table) {
    table.json('jaegwjgxeb');
    table.float('pycztawpwt');
    table.bigInteger('xdsgeofhhd');
    table.bigInteger('ixvykzxsbp');
    table.float('cgitewdwit');
    table.json('oicvjmhmhh');
    table.timestamp('rbxmrtuhnn');
    table.float('byqdarzfhx');
    table.float('zpsebkndmh');
    table.bigInteger('elynztgmiy');
  });
  await knex.schema.alterTable('mijbwbjyny', function(table) {
    table.string('oyvmxafvza');
    table.integer('rtvusnrlik');
    table.bigInteger('hrzsaoyjyu');
    table.json('ljfoarbwvi');
    table.string('caaknwugac');
    table.float('xtoqbsdpkv');
    table.boolean('wwfswcomuc');
    table.bigInteger('aojvrsysmd');
    table.bigInteger('qrwcimsnre');
  });
  await knex.schema.alterTable('myaubygafe', function(table) {
    table.timestamp('hjfdsltoae');
    table.timestamp('ovbqjqxjpf');
    table.integer('mtbcstxoqj');
    table.string('qatrybkzoz');
  });
  await knex.schema.alterTable('eerexxidit', function(table) {
    table.timestamp('jjsgauurjv');
    table.timestamp('fwcrzifvcq');
    table.integer('yzezsmyynq');
    table.float('ecbwaignib');
    table.float('jdchctmfmv');
    table.boolean('szfeusfuyd');
  });
  await knex.schema.alterTable('gejgudholw', function(table) {
    table.integer('paknvnstmk');
    table.boolean('hixqwuosav');
    table.timestamp('syonefkrav');
    table.timestamp('drppzmcllc');
  });
  await knex.schema.alterTable('aeuqozxnnl', function(table) {
    table.timestamp('nfhrtmheiy');
    table.timestamp('caozpncxhw');
    table.float('znhphaawtr');
    table.float('povcehkjib');
    table.json('jccnqoahrt');
    table.string('rgvtcsqfdo');
    table.boolean('kksjexwkqz');
    table.string('zqyqmecfwo');
    table.string('lnlusctnax');
    table.float('ovwzjvrqkg');
  });
  await knex.schema.alterTable('xdogztvmpu', function(table) {
    table.timestamp('nnltoidbne');
    table.json('upslmqpojy');
    table.boolean('puabjoapuu');
    table.integer('gzzugecqwb');
    table.boolean('rdwacizkbt');
    table.float('yzuwvdpvvz');
    table.string('mqxxfkfdxz');
  });
  await knex.schema.alterTable('qaxntjuuwu', function(table) {
    table.timestamp('xvhvithwlm');
    table.text('vemdhclgij');
    table.json('ufrjplprwd');
    table.bigInteger('hlyyjhirmm');
    table.bigInteger('otymrtvfmz');
    table.json('wcgfawwkbx');
    table.bigInteger('turjnuqmzp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};